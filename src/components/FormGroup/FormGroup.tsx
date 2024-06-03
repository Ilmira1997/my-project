import { SCFormGroup } from "./FormGroup.style";


interface IFormGroup {
    type: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    required?: boolean;
  }

  export const FormGroup = ({type,id,name,value,onChange,label,required}:IFormGroup) => {
    return (
        <SCFormGroup className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              required={required}
            />
          </SCFormGroup>
    );
};