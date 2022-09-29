import About from '../pages/About';
import Posts from '../pages/Posts';
import Main from '../pages/Main';
import NoMatch from '../pages/NoMatch';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';

export const privateRoutes = [
  { path: '/about', components: About },
  { path: '/posts', components: Posts, exact: true },
  { path: '/posts/:id', components: PostIdPage, exact: true },
  { path: '/', components: Main },
  { path: '*', components: NoMatch }
];

export const publicRoutes = [
  { path: '/login', components: Login },
  { path: '*', components: NoMatch }
];
