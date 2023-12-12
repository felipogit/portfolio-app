/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import styles from "./CardProfile.module.css";
import photo from "./img/photo.jpeg";
import {
  Download,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

function CardProfile() {
  return (
    <section className={styles.card_flex}>
      <div className={styles.card}>
        <div className={styles.card_border_top}></div>
        <div className={styles.img}>
          <img src={photo} alt="" />
        </div>
        <span>Felipe Costa</span>
        <p className={styles.job}>Desenvolvedor Full Stack</p>
        <p>felipeesped0023@gmail.com | Santa Luzia-MA </p>
        <aside className={styles.aside}>
          <Link target="_blank" to="https://www.linkedin.com/in/felipe-costa/">
            <LinkedinLogo size={30} />
          </Link>
          <Link
            target="_blank"
            to="https://api.whatsapp.com/send/?phone=5598984720073&text&type=phone_number&app_absent=0"
          >
            <WhatsappLogo size={30} />
          </Link>
          <Link target="_blank" to="https://github.com/felipogit">
            <GithubLogo size={30} />
          </Link>
        </aside>
        <p>&copy; 2023 Felipe. Todos os Direitos Reservados</p>
        <button>
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
      </div>
    </section>
  );
}

export default CardProfile;
