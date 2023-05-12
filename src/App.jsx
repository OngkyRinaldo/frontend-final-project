import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Routes/navigation/Navigation';
import { Home } from './Routes/home/Home';
import { Overview } from './Routes/navigation/help/Overview';
import { NewProduct } from './Routes/newProduct/NewProduct';
import { Products } from './Routes/products/Products';
import { LoginRoute } from './Routes/myAccount/Login';
import { RegisterRoute } from './Routes/myAccount/Register';
import { LostPassword } from './Components/MyAccount/lostPassword';
import { LostPasswordRoute } from './Routes/myAccount/lostPassword';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='newestProduct' element={<NewProduct />} />
                    <Route path='login' element={<LoginRoute />} />
                    <Route path='register' element={<RegisterRoute />} />
                    <Route path='lostPassword' element={<LostPasswordRoute />} />

                    {/* help page  start*/}
                    <Route path='overview' element={<Overview />} />
                    {/* navigation page  end*/}
                </Route>
            </Routes>
        </>
    );
};

export default App;
