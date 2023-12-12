import ScrollReveal from "scrollreveal";
import Header from "../../components/Header";
import CardProfile from "../../components/CardProfile";
import styles from "./Sobre.module.css";
import Accordion from "../../components/Accordion";
import { motion, cubicBezier } from "framer-motion";
import { Router } from "react-router-dom";
import Skills from "../../components/Skills";
import imgReact from "../../assets/img-skills-react.svg";
import imgStyled from "../../assets/styled-components.svg";
import imgVite from "../../assets/img-vite.svg";
import imgPhp from "../../assets/img-php.svg";
import imgSql from "../../assets/img-mysql.svg";
import imgSass from "../../assets/img-sass.svg";
import imgNode from "../../assets/img-node.svg";
import imgJava from "../../assets/img-java.svg";
import imgFigma from "../../assets/Figma-logo.svg";
import Mouse from "../../components/Mouse";
import { useEffect, useRef } from "react";
import nestjs from "../../assets/nestjs-icon.svg";
import python from "../../assets/python.svg";

export const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export const customEase = cubicBezier(0.25, 0.1, 0.25, 1);

const skills = [
  {
    img: nestjs,
    text: "NestJS",
    number: 80,
  },
  {
    img: python,
    text: "Python",
    number: 70,

  },
  {
    img: imgReact,
    text: "React",
    number: 80,
  },
  {
    img: imgStyled,
    text: "Styled - Components",
    number: 80,
  },
  {
    img: imgSql,
    text: "MySql",
    number: 60,
  },

  {
    img: imgNode,
    text: "Node.Js",
    number: 75,
  },
  {
    img: imgFigma,
    text: "Figma",
    number: 64,
  },
  {
    img: imgPhp,
    text: "PHP",
    number: 35,
  },
  {
    img: imgJava,
    text: "Java",
    number: 33,
  },
];

const accordion = [
  {
    id: 1,
    title: "Kenzie Academy Brasil - Cursando",
    date: "2023/01 - 2024/01 (em andamento)",
    job: "Estudante",
    text: `Curso de 2.000 horas de Desenvolvimento Full Stack que abrange tecnologias Front End e Back End além de soft skills necessários para o mercado de trabalho. 
    Entre as linguagens e tecnologias aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React, Redux, Node.Js, Nest.js,TypeScript, Express, Python (Django e Flask) e SQL.`,
    skill1: "Node.js · Blog-app",
    skill2: "React.ts · Fashion-tore",
  },
  {
    id: 2,
    title: "Agente Comunitário de Saude",
    date: "2017/02 - 2023/01",
    job: "Profissional da Saude", 
    text: `Como profissional da saúde, concentro-me em visitas domiciliares personalizadas, educação em saúde, mobilização comunitária e monitoramento epidemiológico. Realizo visitas regulares aos lares, oferecendo orientações personalizadas e identificando necessidades específicas. Além disso, atuo como educador incansável, conduzindo sessões educativas sobre vacinação e prevenção de doenças. Liderei campanhas de conscientização e mobilização comunitária, organizando eventos de saúde e estabelecendo parcerias locais. Contribuo ativamente para o monitoramento epidemiológico, cooperando com as autoridades de saúde.
     Minha abordagem inclui trabalho em equipe, colaboração com autoridades e atendimento ao público durante palestras, visando promover o bem-estar da comunidade.`,
    skill1: "Trabalho em Equipe",
    skill2: "Atendimento ao Publico",
  },
  {
    id: 3,
    title: "Análise Desenvolvimento de Sistemas - Estacio",
    date: "2022/02 - 2024/06 (em andamento)",
    job: "4* Período",
    text: "Ensino Superior, Análise de Sistemas, Atividades e grupos: (4* Período 4/5) Competências: UML (Linguagem de modelagem unificada) · MVC · Java · NetBeans · Banco de dados Oracle · MySQL · PhpMyAdmin · PHP · JavaScript · TDD · BDD · métodos e técnicas engenharia de software.",
    skill1: "Java",
    skill2: "MySql",
  },

];

function Sobre() {
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(skillsContainerRef.current.children, {
      container: skillsContainerRef.current.parentNode,
      origin: "top",
      distance: "-2px",
      interval: 240,
      delay: 200,
      opacity: 0,
      duration: 800,
      easing: "cubic-bezier(0.6, 0.2, 0.1, 30)",
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        sr.reveal(skillsContainerRef.current.children, {
          reset: true, // Redefine as animações
          container: skillsContainerRef.current.parentNode,
          origin: "top",
          distance: "-2px",
          interval: 240,
          delay: 200,
          opacity: 0,
          duration: 800,
          easing: "cubic-bezier(0.6, 0.2, 0.1, 30)",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: customEase, stiffness: 300 }}
      >
        <section
          className={styles.section_02}
          key={Router.pathname}
          mode={"wait"}
        >
          <div className={styles.sobre_container}>
            <div className={styles.sobre_left}>
              <CardProfile />
            </div>
            <div className={styles.sobre_right}>
              <h1>
                Educação & <span>Experiências</span>
              </h1>
              {accordion.map((accordion) => {
                return (
                  <Accordion
                    key={accordion.id}
                    title={accordion.title}
                    date={accordion.date}
                    job={accordion.job}
                    text={accordion.text}
                    skills1={accordion.skill1}
                    skills2={accordion.skill2}
                  />
                );
              })}
              <Mouse />
              <section className={styles.section_02_skills}>
                <h1>
                  {" "}
                  Hard <strong>Skills</strong>
                </h1>
                <div className={styles.skills_flex} ref={skillsContainerRef}>
                  {skills.map((skill, index) => (
                    <Skills
                      key={index}
                      imgs={skill.img}
                      text={skill.text}
                      number={skill.number}
                    />
                  ))}
                </div>
              </section>
              {/* Conteúdo que ficará ao lado direito e poderá rolar */}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Sobre;
