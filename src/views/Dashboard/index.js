import React,{Fragment,useEffect,useState} from 'react';
import {
	Container,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Grid,
	Paper,
	CircularProgress
} from '@material-ui/core';
import useStyles from './styles';
import {
	getUsers,
	deleteUser
} from '../../api/user';
import {useHistory} from "react-router-dom";
import Toast from '../../presentations/Toast';


const Dashboard = ()=>{

	const [users,setUsers] = useState([]);
	const [toast,setToast] = useState({open:false,text:''});
	const history = useHistory();
	const classes = useStyles();


	useEffect(()=>{
		handleFindUser();
	},[]);

	const handleFindUser = async()=>{
		try
		{
			let {status,data} = await getUsers();
			if(status === 200)
			{
				setUsers(data);
			}
			else
			{
				setToast({open:true,text:data.error});
			}
		} 
		catch(err)
		{
			setToast({open:true,text:'Server error'});
		}
	}

	const handleDelete = async(_id)=>{
		try
		{
			setUsers(users.map(item=>(item._id===_id ? {...item,loading:true} : item )));
			let {status,data} = await deleteUser(_id);
			if(status === 201)
			{
				setUsers(users.filter(item=>(item._id !== _id)));
				setToast({open:true,text:data.message});
			}
			else
			{
				setUsers(users.map(item=>(item._id===_id ? {...item,loading:false} : item )));
				setToast({open:true,text:data.error});
			}
		}
		catch(err)
		{
			setToast({open:true,text:'Server error'});
		}
	}

	const handleCreate = ()=>{
		history.push('/create')
	}

	const handleEdit = ({_id,name,lastName,phone,ci,mail})=>{
		history.push(`/edit/${_id}`,{_id,name,lastName,phone,ci,mail});
	}

	const handleToast = ()=>{
		setToast({open:false,text:''});
	}

	return(
		<Fragment>
			<AppBar position="static">
  				<Toolbar>
    				<Typography variant="h6" className={classes.title}>Example Crud</Typography>
    				<Button variant="contained" onClick={()=>handleCreate()}>create user</Button>
  				</Toolbar>
			</AppBar>
			<Container maxWidth="sm">
				{users.map((item,i)=>(
          			<Paper className={classes.paper} key={item._id}>          				
      					<Grid container spacing={3}>
      						<Grid item xs={6}>
      							<span className={classes.bold}>Name : </span>
      							<span>{item.name}</span>
      						</Grid>
      						<Grid item xs={6}>
      							<span className={classes.bold}>Last name : </span>
      							<span>{item.lastName}</span>
      						</Grid>
      					</Grid>
      					<Grid container spacing={3}>
      						<Grid item xs={6}>
      							<span className={classes.bold}>identity : </span>
      							<span>{item.ci}</span>
      						</Grid>
      						<Grid item xs={6}>
      							<span className={classes.bold}>Phone : </span>
      							<span>{item.phone}</span>
      						</Grid>
      					</Grid>
      					<div className={classes.ctnBtn}>
      						<Button variant="contained" color="primary" onClick={()=>handleEdit(item)}>Edit</Button>
      						<Button variant="contained" color="secondary" disabled={item.loading} onClick={()=>handleDelete(item._id)}>
      							{item.loading
      							?
      								<CircularProgress size={20} />
      							:
      								<span>Delete</span>
      							}
      						</Button>
      					</div>
          			</Paper>
          		))}
        	</Container>
        	<Toast
				onClose = {handleToast}
				{...toast}
			/>
		</Fragment>
	)
}

export default Dashboard;