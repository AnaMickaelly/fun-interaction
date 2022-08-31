import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1510751007277-36932aac9ebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300
      &q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/AnaMickaelly.png"
        />
        <strong>Ana Mickaelly</strong>
        <span>Developer Web and mobile</span>
      </div>
      <footer>
        <a href="#">
          {' '}
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
