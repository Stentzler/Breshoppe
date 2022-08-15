import {createContext, useState} from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
  const [filterOn, setFilterOn] = useState(false);

  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');

  const filterCategory = category => {
    setCategory(category);
    setFilterOn(true);
  };

  const filterGender = gender => {
    setGender(gender);
    setFilterOn(true);
  };

  const resetFilter = () => {
    setFilterOn(false);
  };

  return (
    <FilterContext.Provider
      value={{
        filterOn,
        gender,
        category,
        filterCategory,
        filterGender,
        resetFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
