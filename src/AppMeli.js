import React from 'react'
import {ImageGrid} from './ImageGrid'
import {FilterBar} from './FilterBar'
export const AppMeli = ()=>
{   
 
    const [categoria,setCat] = React.useState('Besos'); 
    const sendDataToParent = (index) => { 
        setCat(index);
  };
    return (
    <>
        <FilterBar sendDataToParent={sendDataToParent}/>
        <ImageGrid categoria={categoria}/>
        <hr/>
    </>)
}