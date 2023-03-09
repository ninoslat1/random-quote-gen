import './index.css'
import Quote from './Components/Quote'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

if ('speechSynthesis' in window) {
  toast.info('Text-to-Speech is supported', {
      autoClose: 1000
  })
 }else{
  toast.error('Text-to-Speech isn\'t supported', {
      autoClose: 1000
  })
}

function App() {

  return (
    <div className="App">
      <Quote/>
      <ToastContainer theme="colored" closeOnClick={false} pauseOnHover={false}/>
    </div>
  )
}

export default App
