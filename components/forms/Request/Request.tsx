import Form from 'next/form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input/Input';
import styles from './Request.module.scss';
import Link from 'next/link';

export const Request = () => {
  const formAction = (formData: FormData) => {
    const name = formData.get('name');

    const phone = formData.get('phone');

    const email = formData.get('name');

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
        />
        <Input
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
        />
      </div>
      <p className={styles.disclaimer}>
        Нажимая на кнопку «Отправить», вы ознакомлены и подтверждаете согласие c{' '}
        <Link href="/privacy-policy" target="_blank">
          политикой обработки персональных данных
        </Link>
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
