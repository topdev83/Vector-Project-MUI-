import { Grid } from '@mui/material';
import DownLoadCard from 'sections/cards/DownLoadCard';
import ProductCard from 'sections/cards/ProductCard';

const Projects = () => {
  return (
    <>
      <Grid container rowspacing={{ md: 1, sm: 2 }} columspacing={{ xs: 2, md: 1, sm: 1 }} sx={{ marginTop: '2%' }}>
        <Grid item xs={12} sm={6} md={2.5} sx={{ mt: { xs: 2 }, display: { xs: 'flex' }, justifyContent: { xs: 'center' } }}>
          <DownLoadCard />
        </Grid>
        <Grid item xs={12} sm={6} md={2.5} sx={{ mt: { xs: 2 }, display: { xs: 'flex' }, justifyContent: { xs: 'center' } }}>
          <ProductCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
