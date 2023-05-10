import React from 'react';
import {
	Typography,
	Grid,
} from '@mui/material';

const Home = () => {
	return (
		<Grid
			container
			spacing={3}
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{
				minHeight: '100vh',
				background: '#000',
			}}
		>
			<Grid item xs={12}>
				<Typography
					variant="h1"
					sx={{
						fontFamily: "sans-serif",
						fontWeight: '800',
						fontSize: '6rem',
						backgroundColor: '#f3ec78',
						background: 'linear-gradient(90deg,#7928CA,#FF0080)',
						backgroundClip: 'text',
						backgroundSize: '100%',
						WebkitTextFillColor: 'transparent',
						mozTextFillColor: 'transparent',
					}}
				>
					Coming Soon...
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Home;