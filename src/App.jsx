import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Routes/navigation/Navigation';
import { Home } from './Routes/home/Home';
import { Overview } from './Routes/navigation/help/Overview';
import { NewProduct } from './Routes/newProduct/NewProduct';
import { Products } from './Routes/products/Products';
import { LoginRoute } from './Routes/myAccount/Login';
import { RegisterRoute } from './Routes/myAccount/Register';
import { LostPasswordRoute } from './Routes/myAccount/lostPassword';
import { SizeGuide } from './Routes/navigation/help/sizeGuide';
import { Faq } from './Routes/navigation/help/faq';


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
                    <Route path='sizeGuide' element={<SizeGuide />} />
                    <Route path='faq' element={<Faq />} />
                    {/* navigation page  end*/}
                </Route>
            </Routes>
        </>
    );
};

export default App;
