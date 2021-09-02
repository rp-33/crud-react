import React,{Fragment,useState,useEffect} from 'react';
import {
	Container,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Grid,
	CircularProgress,
	TextField
} from '@material-ui/core';
import useStyles from './styles';
import {
	createUser,
	editUser
} from '../../api/user';
import {
	useHistory,
	useLocation
} from "react-router-dom";
import Toast from '../../presentations/Toast';

const Create = ()=>{

	const [loading,setLoading] = useState(false);
	const [inputs,setInputs] = useState({});
	const [toast,setToast] = useState({open:false,text:''});
	const history = useHistory();
	const location = useLocation();
	const classes = useStyles();

	useEffect(()=>{
		setInputs(location.state ? location.state : {});
	},[]);

	const handleCreate = async(event)=>{
		event.preventDefault();
		try
		{
			setLoading(true);
			let {name,lastName,mail,phone,ci} = inputs;
			let {status,data} = await createUser(name,lastName,mail,ci,phone);
			if(status === 201)
			{
				history.push('/');
			}
			else
			{
				setToast({open:true,text:data.error})
			}
		}
		catch(err)
		{
			setToast({open:true,text:'Server error'});
		}
		finally
		{
			setLoading(false)
		}
	}

	const handleEdit = async(event)=>{
		event.preventDefault();
		try
		{
			setLoading(true);
			let {name,lastName,mail,phone,ci} = inputs;
			let {status,data} = await editUser(location.state._id,name,lastName,mail,ci,phone);
			if(status === 201)
			{
				history.push('/');
				setToast({open:true,text:data.message})
			}
			else
			{
				setToast({open:true,text:data.error})
			}
		}
		catch(err)
		{
			setToast({open:true,text:'Server error'});
		}
		finally
		{
			setLoading(false)
		}
	}

	const handleChange = ({target})=>{
		let {name,value} = target;
		setInputs(state => ({...state,[name]:value}));
	} 

	const handleToast = ()=>{
		setToast({open:false,text:''});
	}

	return(
		<Fragment>
			<AppBar position="static">
  				<Toolbar>
    				<Typography variant="h6" className={classes.title}>Example Crud</Typography>
    				<Button variant="contained" onClick = {()=>history.push('/')}>find users</Button>
  				</Toolbar>
			</AppBar>
			<Container maxWidth="xs">
				<form className={classes.form} onSubmit = {location.state ? handleEdit : handleCreate}>
					<Grid container spacing={3}>
						<h3 className={classes.titleForm}>Form user</h3>
						<Grid item xs={12}>
							<TextField
          						label="Name"
          						id="outlined-size-small"
          						variant="outlined"
          						size="small"
          						className={classes.field}
          						required
          						name = "name"
          						value={inputs.name}
          						onChange = {handleChange}
        					/>
        				</Grid>
        				<Grid item xs={12}>
							<TextField
          						label="Last name"
          						id="outlined-size-small"
          						variant="outlined"
          						size="small"
          						className={classes.field}
          						required
          						name = "lastName"
          						value={inputs.lastName}
          						onChange = {handleChange}
        					/>
        				</Grid>
        				<Grid item xs={12}>
							<TextField
          						label="Mail"
          						id="outlined-size-small"
          						variant="outlined"
          						size="small"
          						className={classes.field}
          						required
          						type="email"
          						name = "mail"
          						value={inputs.mail}
          						onChange = {handleChange}
        					/>
        				</Grid>
        				<Grid item xs={12}>
							<TextField
          						label="Phone"
          						id="outlined-size-small"
          						variant="outlined"
          						size="small"
          						className={classes.field}
          						required
          						type="number"
          						name = "phone"
          						value={inputs.phone}
          						onChange = {handleChange}
        					/>
        				</Grid>
        				<Grid item xs={12}>
							<TextField
          						label="Identity card"
          						id="outlined-size-small"
          						variant="outlined"
          						size="small"
          						className={classes.field}
          						required
          						type="number"
          						name = "ci"
          						value={inputs.ci}
          						onChange = {handleChange}
        					/>
        				</Grid>
        				<Grid item xs={12}>
        					<Button className={classes.field} type="submit" variant="contained" color="primary" disabled={loading}>
      							{loading
      							?
      								<CircularProgress size={20} />
      							:
      								<span>Submit</span>
      							}
      						</Button>
        				</Grid>
        			</Grid>
				</form>
			</Container>
			<Toast
				onClose = {handleToast}
				{...toast}
			/>
		</Fragment>
	)
}

export default Create;