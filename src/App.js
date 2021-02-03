import React, {useState} from 'react';
import Header from './components/Header';
import CharacterDropdown from './components/CharacterDropdown'
import Category from './components/Category'
import SubCategory from './components/SubCategory'
import Attributes from './components/Attributes'
import TableContainer from './components/TableContainer'
import Footer from './components/Footer'
import './styles/index.css'

function App() {

  let [character, setCharacter]=useState('akuma')
  let [category, setCategory]=useState('')
  let [subCategory, setSubCategory]=useState('')
  let [attribute1, setAttribute1]=useState('')
  let [attribute2, setAttribute2]=useState('')
  

  let selectionObj={
    character:character,
    category:category,
    subCategory:subCategory,
    attribute1:attribute1,
    attribute2:attribute2
  }

  let changeSelectionObj={
    setCharacter:value=>setCharacter(value),
    setCategory:value=>setCategory(value),
    setSubCategory:value=>setSubCategory(value),
    setAttribute1:value=>setAttribute1(value),
    setAttribute2:value=>setAttribute2(value)
  }

  return (
    <div class='main'>
    <Header/>
    <CharacterDropdown selectionObj={selectionObj} changeSelectionObj={changeSelectionObj}/>
    <Category selectionObj={selectionObj} changeSelectionObj={changeSelectionObj}/>
    <SubCategory selectionObj={selectionObj} changeSelectionObj={changeSelectionObj}/>
    <Attributes selectionObj={selectionObj} changeSelectionObj={changeSelectionObj}/>
    {/* <Footer selectionObj={selectionObj}/> */}
    <TableContainer selectionObj={selectionObj}/>
    {/* <Footer selectionObj={selectionObj}/> */}
    </div>
  )
}

export default App;
