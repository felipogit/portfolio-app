/* eslint-disable react/jsx-no-target-blank */
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Home.module.css";
import photo from "./img/photo6.jpeg";
import { animations } from "../Sobre";
import {
  LinkedinLogo,
  WhatsappLogo,
  GithubLogo,
  Download,
} from "@phosphor-icons/react";
import { Link, Router } from "react-router-dom";
import { motion } from "framer-motion";
import { customEase } from "../Sobre";
import Typewriter from "../../components/Typewriter";

function Home() {
  
  const containerFlexVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.5, // Define o intervalo entre as animações de cada elemento
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  const photoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };


  return (
    <>
      <Header />
      <motion.div
        variants={animations}
        initial="exit"
        animate="animate"
        exit="initial"
        transition={{ duration: 0.25, ease: customEase, stiffness: 300 }}
      >
        <Container key={Router.pathname} mode={"wait"}>
          <aside className={styles.aside}>
            <Link target="_blank" to="https://www.linkedin.com/in/felipe-costa/">
              <LinkedinLogo size={32} />
            </Link>
            <Link
              target="_blank"
              to="https://api.whatsapp.com/send/?phone=5598984720073&text&type=phone_number&app_absent=0"
            >
              <WhatsappLogo size={32} />
            </Link>
            <Link target="_blank" to="https://github.com/felipogit">
              <GithubLogo size={32} />
            </Link>
          </aside>

          <motion.section
            className={styles.container_flex}
            variants={containerFlexVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={itemVariants}>Quem sou</motion.h3>
            <motion.h1 variants={itemVariants}>Felipe Costa</motion.h1>
            <motion.p variants={itemVariants}>
            Apaixonado por tecnologia e programação.
            {" "}
            <Typewriter />.

            </motion.p>
            <button >
              {" "}
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1lW3mgKvzJVOX62orSoc1uf6UdC8NjuK2sVCcBlNbCWY/edit?pli=1"
                download="https://docs.google.com/document/d/1lW3mgKvzJVOX62orSoc1uf6UdC8NjuK2sVCcBlNbCWY/edit?pli=1"
              >
                {" "}
                Currículo
                <Download size={14} />
              </a>
            </button>
          </motion.section>

          <div className={styles.container_flex2}>
            <motion.img
              src={photo}
              alt=""
              variants={photoVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </Container>
      </motion.div>
    </>
  );
}

export default Home;
