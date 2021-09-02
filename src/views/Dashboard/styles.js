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
  	}
}));

export default useStyles;