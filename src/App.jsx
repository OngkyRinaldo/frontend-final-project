import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Routes/navigation/Navigation';
import { Home } from './Routes/home/Home';
import { Overview } from './Routes/navigation/help/Overview';
import { Products } from './Routes/products/Products';
import { LoginRoute } from './Routes/myAccount/Login';
import { RegisterRoute } from './Routes/myAccount/Register';
import { LostPasswordRoute } from './Routes/myAccount/lostPassword';
import { SizeGuide } from './Routes/navigation/help/sizeGuide';
import { Faq } from './Routes/navigation/help/faq';
import { ProductDetailRoute } from './Routes/products/productDetails';
import { ShippingInfo } from './Routes/navigation/help/shippingInfo';
import { ReturnExchangesInfo } from './Routes/navigation/help/returnExchangesInfo';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='login' element={<LoginRoute />} />
                    <Route path='register' element={<RegisterRoute />} />
                    <Route
                        path='lostPassword'
                        element={<LostPasswordRoute />}
                    />
                    <Route
                        path='productDetails/:id'
                        element={<ProductDetailRoute />}
                    />

                    {/* help page  start*/}
                    <Route path='overview' element={<Overview />} />
                    <Route path='sizeGuide' element={<SizeGuide />} />
                    <Route
                        path='shippingInformation'
                        element={<ShippingInfo />}
                    />
                    <Route
                        path='returnExchange'
                        element={<ReturnExchangesInfo />}
                    />
                    <Route path='faq' element={<Faq />} />
                    {/* navigation page  end*/}
                </Route>
            </Routes>
        </>
    );
};

export default App;
