import Select from "react-select";
import { skills } from "../mocks/skills.json";
import { useRef } from "react";


export default function SelectMultiple({skillSelect}) {
  const reference = useRef(0)

  const handleSelectChange = (selectedOptions) => {
    skillSelect(selectedOptions)
    ++reference.current
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
