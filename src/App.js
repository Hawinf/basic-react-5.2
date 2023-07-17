import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState(false);
  const [age, setAge] = useState('');
  const [name, setName] = useState('')
  

  const handleData = () => {
    setData(!data)
  }

  const handleAge = (param) => {
    const thisYear = new Date().getFullYear();
    const bornYear = parseInt(param);
    const age = thisYear - bornYear
    setAge(age.toString())
  }

  const handleCahngeName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  return (
    <div>
      <h1>App Page</h1>
      <h5>Hallo {data ? 'aktif' : 'tidak aktif'}</h5>
      <button onClick={handleData}>Rubah data</button>

      {
        !!age.length ? age : null
      }
      <button onClick={() => handleAge(name)}>Masukan Umur</button>
      <input placeholder='masukan tahun lahir' onChange={handleCahngeName}/>
      <p>{name}</p>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;