import Form from 'next/form';
import { Button } from '@/components/ui/Button';
import { Input, PhoneInput } from '@/components/ui/Input';
import styles from './RequestForm.module.scss';
import Link from 'next/link';

export const RequestForm = () => {
  const formAction = (formData: FormData) => {
    const name = formData.get('name');

    const phone = formData.get('phone');

    const email = formData.get('email');

    console.log('name', name);
    console.log('phone', phone);
    console.log('email', email);
  };

  return (
    <Form action={formAction} className={styles.form}>
      <div className={styles.inputsContainer}>
        <Input
          id="name"
          label="Ваше имя"
          name="name"
          required
          autoComplete="name"
          minLength={2}
          maxLength={50}
        />
        <PhoneInput
          id="phone"
          label="Телефон"
          name="phone"
          required
          autoComplete="tel"
        />
        <Input
          id="email"
          label="E-mail"
          name="email"
          required
          autoComplete="email"
          type="email"
        />
      </div>
      <p className={styles.disclaimer}>
        Нажимая на кнопку «Отправить», вы ознакомлены и подтверждаете согласие c{' '}
        <Link href="/">политикой обработки персональных данных</Link>
      </p>
      <Button
        type="submit"
        variant="primary"
        size="large"
        label="Отправить"
        className={styles.button}
      />
    </Form>
  );
};
