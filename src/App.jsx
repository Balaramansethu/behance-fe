import React from 'react'
import { useState } from 'react'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import HomeComponent from './components/HomeComponent/HomeComponent'

const App = () => {
  const [selectedSort, setSelectedSort] = useState('none');

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };
  return (
    <React.Fragment>
      <NavigationComponent onSortChange={handleSortChange}/>
      <HomeComponent sortOption={selectedSort}/>
    </React.Fragment>
  )
}

export default App