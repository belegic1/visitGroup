import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import Posts from './components/Posts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link,  } from '@mui/material';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import EditForm from './components/EditPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts/>,
  },
  {
    path: '/create',
    element: <CreatePost />,
  },
  {
    path: '/:id',
    element: <PostDetail />,
  },
  {
    path: '/:id/edit',
    element: <EditForm />,
  },
]);

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Test assigment
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component={Link}
              variant="h2"
              align="center"
              color="text.primary"
              sx={{textDecoration:'none'}}
              gutterBottom
              href="/"
            >
              Assigment
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button  component={Link} href="/create" variant="contained">Create New Post</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <RouterProvider router={router} />
        </Container>
      </main>
    </ThemeProvider>
  );
}
