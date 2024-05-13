
import NewLayout from './NavLot'
import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import NewHome from './Nhome'
import MainHome from './mhome'
import ProfilePic from './newPic'
import Resume from './resume'
import Lookup from './lookup'
const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<NewLayout/>} >
        <Route path='home' element={<MainHome/>} />
        <Route path='profile' element={<NewHome/>} />
        <Route path='project' element={<ProfilePic />}/>
        <Route path ='resume' element={<Resume/>}/>
        <Route path='lookup' element={<Lookup/>}/>
    </Route>
))
export default function NewApp(){

    return(
        <>
           <RouterProvider router={router}/>
        </>
    )
}