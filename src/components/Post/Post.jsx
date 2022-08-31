import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/AnaMickaelly.png"
          />
          <div className={styles.authorInfo}>
            <strong>Ana Mickaelly</strong>
            <span>Developer Web and Mobile</span>
          </div>
        </div>
        <time title="11 de Maio ás  08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 tudo beleza?</p>
        <p>
          acessem o link e confiram meu novo post, É um projeto que fiz essa
          semana.
        </p>
        <p>
          <a href="">👉 Ana.design/figma.com</a>{' '}
        </p>
        <p>
          <a href="">#novoprojeto #figmacreate</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
