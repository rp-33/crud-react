import axios from 'axios';
import configuration from '../configuration';

let {api_url} = configuration;

export const getUsers = ()=>{
	return axios({
		method:'get',
		url:`${api_url}/user/get`,
	})
	.then((response) => {return response})
	.catch((err) => {return err.response})
}

export const createUser = (name,lastName,mail,ci,phone)=>{
	return axios({
		method:'post',
		url:`${api_url}/user/create`,
		data : {
			name,
			lastName,
			mail,
			ci,
			phone
		}
	})
	.then((response) => {return response})
	.catch((err) => {return err.response})
}

export const editUser = (_id,name,lastName,mail,ci,phone)=>{
	return axios({
		method:'put',
		url:`${api_url}/user/edit/${_id}`,
		params : {
			name,
			lastName,
			mail,
			ci,
			phone
		}
	})
	.then((response) => {return response})
	.catch((err) => {return err.response})
}



export const deleteUser = (_id)=>{
	return axios({
		method:'delete',
		url:`${api_url}/user/delete`,
		params : {
			_id
		}
	})
	.then((response) => {return response})
	.catch((err) => {return err.response})
}
