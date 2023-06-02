import Select from "react-select";
import { skills } from "../mocks/skills.json";


export default function SelectMultiple({skillSelect}) {

  const handleSelectChange = (selectedOptions) => {
    skillSelect(selectedOptions)
  }


  return (
    <Select
      className="bg-black aa"
      closeMenuOnSelect={false}
      isMulti
      classNames={{
        control: (isFocused) =>
          isFocused ? 'bg-black' : 'bg-black',
      }}
      options={skills}
      onChange={handleSelectChange}
    />
  );
}
