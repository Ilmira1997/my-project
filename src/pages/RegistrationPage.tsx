import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AppHeader from '../components/AppHeader/AppHeader';
import FormGroup from '../components/FormGroup/FormGroup';
import AppButton from '../components/AppButton/AppButton';
import '../styles/RegistrationPage.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  user_city: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Обязательное поле!'),
  email: yup.string().email('Неправильный адрес электронной почты!').required('Требуется электронный адрес'),
  password: yup.string().min(6, 'Пароль должен содержать как минимум 6 символов!').required('Требуется пароль'),
  phoneNumber: yup.string().matches(/^[0-9]{10}$/, 'Номер телефона должен содержать ровно 10 цифр!').required('Номер телефона требуется'),
  user_city: yup.string().required('Обязательное поле!'),
});

const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate('/welcome', { state: { userName: data.name } });
  };

  return (
    <div className="registration-container">
      <AppHeader title="Регистрация" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Имя пользователя" error={errors.name?.message}>
          <input {...register('name')} placeholder="Имя" />
        </FormGroup>
        
        <FormGroup label="Email" error={errors.email?.message}>
          <input {...register('email')} placeholder="Email" />
        </FormGroup>
        
        <FormGroup label="Пароль" error={errors.password?.message}>
          <input type="password" {...register('password')} placeholder="Пароль" />
        </FormGroup>
        
        <FormGroup label="Номер телефона" error={errors.phoneNumber?.message}>
          <input {...register('phoneNumber')} placeholder="Номер телефона" />
        </FormGroup>
        
        <FormGroup label="Город" error={errors.user_city?.message}>
          <input {...register('user_city')} placeholder="Город" />
        </FormGroup>
        
        <AppButton type='submit' buttonText="Зарегистрироваться" />
      </form>
    </div>
  );
};

export default RegistrationPage;
