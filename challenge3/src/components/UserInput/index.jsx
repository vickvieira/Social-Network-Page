import { InputBox } from "./style";

const UserInput = ({ label, icon, valor, onChange, field }) => {
    return (
      <InputBox>
        <div className="input-field">
            <input type="text" placeholder={label} value={valor} onChange={onChange} />
            <img src={icon} />
        </div>
      </InputBox>
    );
}

export default UserInput;
