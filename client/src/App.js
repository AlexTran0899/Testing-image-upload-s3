import './App.css';
import { useState } from 'react';
import axios from 'axios'


function App() {
  const [file, setfile] = useState(null)
  const [link, setLink] = useState("")
  const change = (e) => {
    setfile(e.target.files[0])
    console.log(file)
  }
  const upload = () => {
    console.log("in the upload")
    const fd = new FormData();
    fd.append('image', file, file.name)
    axios
      .post('http://localhost:5000/api/auth/image-upload', fd)
      .then(res => setLink(res.data.imageURL))
  }



  return (
    <div className="App">
      <input type="file" name="image" onChange={change} />
      <input type="submit" onClick={upload} />
      <h1>{link}</h1>
      <img src={link} />
    </div>
  );
}

export default App;
