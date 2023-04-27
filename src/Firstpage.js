import Home from './Home';
import About from './About';
import Contact from './Contact';
import Posts from './Posts';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
export default function Firstpage(){
    return (<>
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/posts">All posts</Link></li>
                <li><Link to="/posts/1">item1</Link></li>
                <li><Link to="/posts/2">item2</Link></li>
                <li><Link to="/posts?name=napasdol&surname=kongcharoen">Greeting</Link></li>
            </ul>    
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<Posts/>}/>
        </Routes>
    </BrowserRouter>
    </>);
}