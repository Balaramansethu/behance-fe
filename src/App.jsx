import React, { useState } from "react";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
// import FooterComponent from "./components/FooterComponent/FooterComponent";

const App = () => {
  const [selectedSort, setSelectedSort] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <React.Fragment>
      <NavigationComponent
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
      />
      <HomeComponent sortOption={selectedSort} searchTerm={searchTerm} />
      {/* <FooterComponent/> */}
    </React.Fragment>
  );
};

export default App;
