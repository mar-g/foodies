import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <l1>
              <NavLink href="/meals">Browse Meals</NavLink>
            </l1>
            <l1>
              <NavLink href="/community">Foodies Community</NavLink>
            </l1>
          </ul>
        </nav>
      </header>
    </>
  );
}
