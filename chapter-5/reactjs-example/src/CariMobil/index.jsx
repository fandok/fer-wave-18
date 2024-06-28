import { useState } from "react";
import Search from "../Search";
import { useNavigate } from "react-router-dom";

const CariMobil = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    category: "",
    minPrice: 0,
    maxPrice: 0,
    isRented: false,
  });

  const handleSearch = () => {
    console.log(formInput);
    navigate("/hasil-pencarian", {
      state: { ...formInput },
    });
  };

  return (
    <Search
      formInput={formInput}
      setFormInput={setFormInput}
      handleSearch={handleSearch}
    />
  );
};

export default CariMobil;
