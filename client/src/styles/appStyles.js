export default theme => ({
	bootstrapFormLabel: {
		fontSize: 18
	},
	bootstrapInput: {
		borderRadius: 4,
		backgroundColor: theme.palette.common.white,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 12px',
		width: '200px',
		transition: theme.transitions.create([
			'border-color',
			'box-shadow',
			'width'
		]),
		'&:focus': {
			duration: theme.transitions.duration.enteringScreen,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
			width: '300px'
		}
	},
	bootstrapRoot: {
		padding: 0,
		'label + &': {
			marginTop: theme.spacing.unit * 3
		}
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		margin: 20
	},
	containerMapWrapper: {
		flex: 2,
		marginLeft: 10
	},
	flex: {
		flex: 1
	},
	infoDataWrapper: {
		flex: 1,
		marginRight: 10
	},
	inputAdornment: {
		marginLeft: '-30px',
		maxHeight: 'none'
	},
	mapContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 20
	},
	root: {
		flexGrow: 1
	}
});
