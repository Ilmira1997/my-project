import React, { useState } from 'react';
import '../styles/Register.css';
import { AppHeader } from '../components/AppHeader/AppHeader';
import { FormGroup } from '../components/FormGroup/FormGroup';
import { AppButton } from '../components/AppButton/AppButton';




const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    userCity: '',
  });

  const userPrivateInfo = [
    {
      type:"text",
      id:"username",
      name:"username",
      value:formData.username,
      label:"Имя пользователя",
      required:true,
    },
    {
      type:"email",
      id:"email",
      name:"email",
      value:formData.email,
      label:"Email",
      required:true,
    },
    {
      type:"password",
      id:"password",
      name:"password",
      value:formData.password,
      label:"Пароль",
      required:true,
    },
    {
      type:"tel",
      id:"phoneNumber",
      name:"phoneNumber",
      value:formData.phoneNumber,
      label:"Номер телефона",
      required:true,
    },
    {
      type:"text",
      id:"userCity",
      name:"userCity",
      value:formData.userCity,
      label:"Город",
      required:true,
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Регистрационные данные:', formData);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
      <AppHeader headerType='h2' headerText='Регистрация'/>
        <form onSubmit={handleSubmit}>

          {
            userPrivateInfo.map((elem) => (
              <FormGroup 
              type={elem.type} 
              id={elem.id} 
              name={elem.name} 
              value={elem.value} 
              onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.');
              } } 
              label={elem.label} 
              required={elem.required}
              />
            ))
          }
           <AppButton buttonText='Зарегистрироваться' buttonType='submit'/>
        </form>
      </div>
    </div>
  );
};

export default Register;
