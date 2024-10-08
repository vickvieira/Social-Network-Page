import { InputBox, Input } from "./style";
import { useState } from 'react';

const UserInput = ({ label, icon, value, onChange }) => {
  
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
    setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
      };

    const inputType = label === "Senha" || label === "Confirmar Senha" ? "password" : "text";

    return (
      <InputBox>
        <div className="input-field">
          <Input
            type={inputType}
            placeholder={label}
                className={isFocused ?  'white-placeholder' : ''}
                onFocus={handleFocus}
                onBlur={handleBlur}
            value={value}
            onChange={onChange}
          />
          <i>{icon}</i>
        </div>
      </InputBox>
    );
}

export default UserInput;
