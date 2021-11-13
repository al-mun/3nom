import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';
import Speakers from './components/Speakers';
import SubCategory from "./components/SubCategory"

function App() {

  const [speakerData, setSpeakerData] = useState()
  const [category, setCategory] = useState()
  const [subCategory, setSubCategory] = useState()


  useEffect(async()=>{
    const response = await fetch("https://api.itorah.com/api/Speakers/allspeakers")
    const data = await response.json()
    setSpeakerData(data)
    console.log(speakerData)
   },[])

   useEffect(async(speakerData)=>{
    const response = await fetch(`https://api.itorah.com/api/Categories/catfilter?SpeakerID=+”${speakerData.id}`)
    const data = await response.json()
    setCategory(data)
    console.log(category)
  }, [])

   useEffect(async(catgory)=>{
    const response = await fetch(`https://api.itorah.com/api/Categories/subfilter?${catgory.id}=+%E2%80%9Dcategory%20id%20%E2%80%9D+&${speakerData.id}=+%E2%80%9Dspeaker`)
    const data = await response.json()
    setSubCategory(data)
    console.log(subCategory)
  }, [])


  return (
    <div className="App">
      <Speakers speakerData = {speakerData}/>
      <br/>
      <Category category={category}/>
      <br />
      <SubCategory/>
    </div>
  );
}

export default App;
