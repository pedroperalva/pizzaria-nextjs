import styles from "../../styles/home.module.scss";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Link from "next/link";
import { useContext, FormEvent, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const data = {
    email,
    password,
  };

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.mainContainer}>
        <Image src={logo} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" legacyBehavior>
            <a className={styles.cadastration}>
              Não possui uma conta? Cadastre-se
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
