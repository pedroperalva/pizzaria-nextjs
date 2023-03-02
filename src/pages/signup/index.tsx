import styles from "../../../styles/home.module.scss";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro!</title>
      </Head>
      <div className={styles.mainContainer}>
        <Image src={logo} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <h1>Crie sua conta</h1>
          <form>
            <Input placeholder="Digite seu nome" type="text" />
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link href="/" legacyBehavior>
            <a className={styles.cadastration}>
              Já possui uma conta? Faça Login!
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
