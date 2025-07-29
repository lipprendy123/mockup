import { createBrowserRouter } from 'react-router-dom';
import ProductList from '../components/ProductList';
import DetailProduct from '../components/DetailProduct';
import Products from '../components/Products';
import List from '../mock/List';
import AddList from '../mock/AddList';
import EditList from '../mock/EditList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/products/:id',
    element: <DetailProduct />,
  },
  {
    path: '/mock/list',
    element: <List />,
  },
  {
    path: '/mock/list/add-list',
    element: <AddList />,
  },
  {
    path: '/mock/list/edit/:id',
    element: <EditList />,
  },
]);

export default router;
