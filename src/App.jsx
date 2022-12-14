import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ana Mickaelly"
            content="lordjadnasdjndgfvd asdkjasdnas asdhasjd banana"
          />
          <Post author="Juan Pablo" content="banana pc sla oque" />
        </main>
      </div>
    </div>
  );
}
