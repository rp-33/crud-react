import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  	title: {
    	flexGrow: 1,
	},
	paper: {
    	padding: theme.spacing(2),
    	color: theme.palette.text.secondary,
    	marginTop:20
  	},
  	ctnBtn:{
  		display:'flex',
  		justifyContent:'flex-end',
  		'& > *': {
      		margin: theme.spacing(1)
    	},
  	},
  	bold:{
  		fontWeight:'bold'
  	},
  	form:{
  		marginTop:20,
  		display:'flex',
  		justifyContent:'center',
  		alignItems:'center',
  		padding: theme.spacing(4),
  		borderRadius:25,
  		borderWidth:'5px',
  		borderStyle:'solid',
  		borderColor:'#3f51b5'
  	},
  	titleForm:{
  		width:'100%',
  		textAlign:'center'
  	},
  	field:{
  		width:'100%'
  	}
}));

export default useStyles;