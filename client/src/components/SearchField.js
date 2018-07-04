import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import appStyles from 'styles/appStyles';

const SearchField = ({ classes, input, meta: { error, touched } }) => {
	const helperText = () => {
		if (touched && error) {
			return (
				<FormControl style={{ marginLeft: '8px' }} error>
					<FormHelperText>{error}</FormHelperText>
				</FormControl>
			);
		}
	};
	return (
		<div>
			<TextField
				placeholder="Search by IMO or MMSI"
				id="bootstrap-input"
				InputProps={{
					disableUnderline: true,
					classes: {
						root: classes.bootstrapRoot,
						input: classes.bootstrapInput
					},
					endAdornment: (
						<InputAdornment position="end" className={classes.inputAdornment}>
							<button
								style={{ background: 'none', padding: 0, border: 'none' }}
								type="submit">
								<SearchIcon />
							</button>
						</InputAdornment>
					)
				}}
				InputLabelProps={{
					shrink: true,
					className: classes.bootstrapFormLabel
				}}
				{...input}
			/>
			{helperText()}
		</div>
	);
};

export default withStyles(appStyles, { withTheme: true })(SearchField);
