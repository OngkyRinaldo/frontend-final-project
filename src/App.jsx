import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Routes/navigation/Navigation';
import { Home } from './Routes/home/Home';
import { Overview } from './Routes/navigation/help/Overview';
import { NewProduct } from './Routes/newProduct/NewProduct';
import { Products } from './Routes/products/Products';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='newestProduct' element={<NewProduct />} />

                    {/* help page  start*/}
                    <Route path='overview' element={<Overview />} />
                    {/* help page  end*/}
                </Route>
            </Routes>
        </>
    );
};

export default App;
