import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Routes/navigation/Navigation';
import { Home } from './Routes/home/Home';
import { Overview } from './Routes/navigation/help/Overview';
import { NewProduct } from './Routes/newProduct/NewProduct';
import { Products } from './Routes/products/Products';
import { Register } from './Components/MyAccount/Register';
import { Login } from './Components/MyAccount/Login';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='newestProduct' element={<NewProduct />} />

                    {/* navigation page  start*/}
                    <Route path='login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='overview' element={<Overview />} />
                    {/* navigation page  end*/}
                </Route>
            </Routes>
        </>
    );
};

export default App;
