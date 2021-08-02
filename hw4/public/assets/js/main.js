const body = document.getElementById('body');

let usersData;
let currentPage = 1;
const numOfUsersPerPage = 10;
let checkboxes;
let numOfSelectedCheckboxes = 0;
let deleteBtnArr;
let editBtnArr;
let addedUserId = 0;

const modal = document.getElementById('modal');
const formInputs = document.querySelectorAll('.form-input');
const closeModalBtn = document.getElementById('close-modal-btn');
const companyNameInput = document.getElementById('company-name-input');
const contactNameInput = document.getElementById('contact-name-input');
const addressInput = document.getElementById('address-input');
const cityInput = document.getElementById('city-input');
const countryInput = document.getElementById('country-input');
const submitAddBtn = document.getElementById('submit-add-btn');
const submitEditBtn = document.getElementById('submit-edit-btn');

const tableBody = document.getElementById('table-body');
const selectAllBtn = document.getElementById('select-all');
const deleteSelectedBtn = document.getElementById('delete-selected-btn');
const addBtn = document.getElementById('add-btn');
const searchInputs = document.querySelectorAll('.search-input');
const paginationContainer = document.getElementById('pagination');
let paginationBtnArr;

const dataFetch = async (method = 'GET', url, body) => {
	try {
		const res = await fetch(`/${url}`, {
			method,
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		return res.json();
	} catch (error) {
		return error.response;
	}
}

getUsers();

function renderTable(data, from = 0, to = numOfUsersPerPage, page = 1) {
	tableBody.innerHTML = '';
	pagination.innerHTML = '';
	numOfSelectedCheckboxes = 0;
	toggleDeleteSelectedBtn();

	let requiredNumOfPages = Math.ceil(data.length / numOfUsersPerPage);

	for (let i = 0; i < requiredNumOfPages; i++) {
		pagination.insertAdjacentHTML('beforeend', `
			<li class="pagination-item ${i+1 === page ? 'active' : ''}" data-page=${i+1} data-from=${i * numOfUsersPerPage} data-to=${i * numOfUsersPerPage + numOfUsersPerPage}>${i+1}</li>
		`);
	}

	paginationBtnArr = document.querySelectorAll('.pagination-item');
	paginationBtnArr.forEach(elem => {
		elem.addEventListener('click', e => {
			from = e.target.dataset.from;
			to = e.target.dataset.to;
			currentPage = +e.target.dataset.page;
			renderTable(data, from, to, currentPage);
		});
	});

	for (let value of data.slice(from, to)) {
		tableBody.insertAdjacentHTML('beforeend', `
			<tr>
				<td>
					<input type="checkbox" id="${value.id}" name="${value.company}" class="checkbox single-checkbox">
					<label for="${value.id}"></label>
				</td>
	      <td>${value.company}</td>
	      <td>${value.name}</td>
	      <td>${value.address}</td>
	      <td>${value.city}</td>
	      <td>${value.country}</td>
	      <td class="controlls">
	      	<button class="controll-btn edit-btn" data-id="${value.id}" disabled></button>
	      	<button class="controll-btn delete-btn" data-id="${value.id}" disabled></button>
	      </td>
	    </tr>	
		`);
	}

	searchInputs.forEach(elem => {
		elem.addEventListener('input', search);
	});

	checkboxes = document.querySelectorAll('.table-body .single-checkbox');
	editBtnArr = document.querySelectorAll('.table-body .edit-btn');
	deleteBtnArr = document.querySelectorAll('.delete-btn:not(.delete-all-btn)');

	checkboxes.forEach(elem => {
		elem.addEventListener('change', () => {
			toggleControllsButtons(elem);
			toggleDeleteSelectedBtn();
		});
	});

	deleteSelectedBtn.addEventListener('click', handleDeleteSelected);

	deleteBtnArr.forEach(elem => {
		elem.addEventListener('click', handleDelete);
	});

	editBtnArr.forEach(elem => {
		elem.addEventListener('click', () => {
			openModal();
			setEditModal(elem.dataset.id);
		});
	});

	addBtn.addEventListener('click', () => {
		openModal();
		setAddModal();
	});

	closeModalBtn.addEventListener('click', () => {
		closeModal();
	});

}

function toggleControllsButtons(elem) {
	const controllButtons = document.querySelectorAll(`.controll-btn[data-id="${elem.id}"]`);
	if (elem.checked) {
		controllButtons.forEach(item => item.removeAttribute('disabled'));
		setNumOfSelectedCheckboxes(1);
	} else {
		controllButtons.forEach(item => item.setAttribute('disabled', 'disabled'));
		setNumOfSelectedCheckboxes(-1);
	}
}

function toggleDeleteSelectedBtn() {
	if (numOfSelectedCheckboxes > 1) {
		deleteSelectedBtn.classList.remove('no-display');
	} else {
		deleteSelectedBtn.classList.add('no-display');
	}
}

function setNumOfSelectedCheckboxes(num) {
	numOfSelectedCheckboxes += num;
}

function addUser(body) {
	dataFetch('POST', `users`, body);
	getUsers();
}

function handleDeleteSelected() {
	const selectedUsers = [...checkboxes].filter(item => item.checked);
	const usersId = selectedUsers.map(item => item.id);
	deleteUsers(usersId);
}

function handleDelete() {
	deleteUsers([event.target.dataset.id]);
}

function deleteUsers(usersId) {

	(async function(){
		for await (let id of usersId) {
			console.log(id);
			await dataFetch('DELETE', `users/${id}`);
		}
		console.log('done');
		getUsers();
	})();

	deleteBtnArr.forEach(elem => {
		elem.removeEventListener('click', handleDelete);
	});
	deleteSelectedBtn.removeEventListener('click', handleDeleteSelected);

}

function editUser(id, body) {
	dataFetch('PUT', `users/${id}`, body);
	getUsers();
}

function getUsers() {
	dataFetch('GET', 'users')
		.then(data => usersData = data)
		.then(() => renderTable(usersData));
	return usersData;
}

function getUserById(id) {
	return dataFetch('GET', `users/${id}`);
}

function openModal() {
	clearForm();
	modal.classList.add('open');
	body.classList.add('hidden');
}

function setEditModal(id) {
	submitAddBtn.classList.add('no-display');
	let user;
	getUserById(id)
		.then(data => user = data)
		.then(() => {
			companyNameInput.value = user.company;
			contactNameInput.value = user.name;
			addressInput.value = user.address;
			cityInput.value = user.city;
			countryInput.value = user.country;
		});
	submitEditBtn.dataset.id = id;
	submitEditBtn.addEventListener('click', submitEdit);
}

function submitEdit(event) {
	event.preventDefault();

	if (!isValidForm()) {
		return;
	}

	let body = {
		name: contactNameInput.value,
		company: companyNameInput.value,
		address: addressInput.value,
		city: cityInput.value,
		country: countryInput.value,
	}
	
	editUser(submitEditBtn.dataset.id, body);
	closeModal();
	submitEditBtn.removeEventListener('click', submitEdit);
}

function setAddModal() {
	submitEditBtn.classList.add('no-display');
	submitAddBtn.addEventListener('click', submitAdd);
}

function submitAdd(event) {
	event.preventDefault();

	if (!isValidForm()) {
		return;
	}

	addUser({
		id: ++addedUserId,
		name: contactNameInput.value,
		company: companyNameInput.value,
		address: addressInput.value,
		city: cityInput.value,
		country: countryInput.value,
	});
	closeModal();
	submitAddBtn.removeEventListener('click', submitAdd);
}

function closeModal() {
	modal.classList.remove('open');
	body.classList.remove('hidden');
	submitEditBtn.classList.remove('no-display');
	submitAddBtn.classList.remove('no-display');
	for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].classList.remove('invalid');
	}
}

function clearForm() {
	for (let i = 0; i < formInputs.length; i++) {
		formInputs[i].value = '';
	}
}

function search(event) {
	let text = event.target.value.toLowerCase().trim();
	let searchType = event.target.dataset.search;
	const searchMethods = {
		'company name': getFilteredData(usersData, text),
		'contact name': getFilteredData(usersData, text),
		'address': getFilteredData(usersData, text),
	}
	renderTable(searchMethods[searchType]);
}

function getFilteredData(data, text) {
	return data.filter(item => item.company.toLowerCase().includes(text));
}

function isValidForm() {
	let result = true;
	for (let i = 0; i < formInputs.length; i++) {
		if (!formInputs[i].value.trim()) {
      formInputs[i].classList.add('invalid');
      result = false;
    } else {
    	formInputs[i].classList.remove('invalid');
    }
	}
	return result;
}

