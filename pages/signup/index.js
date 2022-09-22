import styles from "../../styles/Home.module.css";
import Signup from "../../components/signup";


export default function Home() {
  return (
    <div className={styles.container}>
      <Signup />
    </div>
  );
}
