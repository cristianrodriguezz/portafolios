import Select from "react-select";
import { skills } from "../mocks/skills.json";

export default function SelectMultiple({ skillSelect }) {
  const handleSelectChange = (selectedOptions) => {
    skillSelect(selectedOptions);
  };

  const {user} = JSON.parse(window.localStorage.getItem('user'))
  const skillsValueDefault = user?.skills

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#1f2937',
      color: 'white'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'lightblue' : 'transparent',
      color: state.isFocused ? 'black' : 'inherit'
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#1f2937', 
      borderColor: '#1f2937'
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#374151'
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white'
    }),
  };

  return (
    <Select
      className="bg-black "
      closeMenuOnSelect={false}
      isMulti
      styles={customStyles}
      defaultValue={skillsValueDefault}
      options={skills}
      onChange={handleSelectChange}
    />
  );
}
