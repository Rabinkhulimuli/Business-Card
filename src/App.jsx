import ProfilePic from './profilePic'
import MainButton from './components'
import './App.css'
export default function App(){
    return(
        <div className="centerme">
              <div className="middle-box" >
                  <ProfilePic/>
                  <MainButton/>
               </div>
        </div>
    )
}
