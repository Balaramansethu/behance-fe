import React from 'react'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
// import FilterComponent from './components/FilterComponent/FilterComponent'
import HomeComponent from './components/HomeComponent/HomeComponent'

const App = () => {
  return (
    <React.Fragment>
      <NavigationComponent/>
      {/* <FilterComponent/> */}
      <HomeComponent/>
    </React.Fragment>
  )
}

export default App