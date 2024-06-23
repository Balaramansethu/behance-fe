import React, { useState } from "react";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";

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
    </React.Fragment>
  );
};

export default App;
