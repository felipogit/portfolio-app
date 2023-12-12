import styles from './Select.module.css';
import { Link } from 'react-router-dom';

const Select = () => {
  
  const Repositorys = [
    {
      id: 1,
      name: 'Front_end_blog',
      description: `Esse é um projeto pessoal que eu fiz, onde criei um blog com o objetivo de mostrar e compartilhar qualquer noticia,
      e o projeto foi feito com React onde desenvolvi modais de login, cadastro, modal de editar, onde os dados já vem carregados no modal e o 
      usuario decide onde ele quer editar. Tem a pagina Dshboard para ver os posts criados e o modal de deletar.`,
      tecnologias: 'React, Styled Components, zod, reack hook form que me ajudaram com os formularios entre outras bibliotecas que fazem parte do desenvolvimento',
      link: 'https://github.com/felipogit/Front_end_blog'
    },
    {
      id: 2,
      name: 'Back-end-blog',
      description: ` Essa é a o back end  do blog que eu fiz, onde criei algumas tabelas com algumas relacionamentos, relacionamento 1:N,
      onde um usuario tem varios posts mas um post só pertecem a um usuario. Fiz proteção de rotas com o token jwt, o usuario só pode Publicar, editar e deletar posts 
      se ele estover logado.`,
      tecnologias:'Python e Django Rest Framework',
      link:'https://github.com/felipogit/Api_blog'
    },
    {
      id: 3,
      name: 'FashionStore',
      description: ` Fashion Store é uma aplicação que foi concluída recentemente, foi uma aplicação desenvolvida em grupo. É uma aplicação desenvolvida em
       Typescript, Desenvolvemos uma aplicação incrível que permite aos usuários navegar por produtos renderizados a partir de uma API, adicionar ou remover itens de um carrinho de compras. Além disso,
       implementamos uma rota de login onde o administrador pode fazer login ou cadastrar um novo administrador, obtendo acesso às funções de adicionar, editar ou remover qualquer produto.`,
      tecnologias:'React.ts',
      link:'https://github.com/felipogit/FashionStore'
    },
    {
      id: 4,
      name: 'Hamburger-shop',
      description: `Hamburguer Shop é um site desenvolvido em react onde pela primeira vez fiz contato com api onde pude ter acesso a alguns produtos de uma hamburgueria,
       pude criar algumas funcionalidades como a de adicionar ao carrinho, de remover do carrinho, funcionalidade de receber 
      valores digitados pelo usuário e renderizar na tela o produto desejado. Tive a oportunidade de trabalhar com modal em react e poder manipular ele com o estado.`,
      tecnologias:'React.js',
      link:'https://github.com/felipogit/Hamburger-shop'
    },
    
  ]


  return (
    <div>
    
    <ul className={styles.containerTop}>
        {Repositorys.map((repository) => (
          <li className= {styles.selectCard} key={repository.id}>
            <h3>{repository.name}</h3>
            <p>{repository.description}</p>
            <p>Tecnologias: {repository.tecnologias}</p>
            <Link to={repository.link} >Ver no GitHub</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select