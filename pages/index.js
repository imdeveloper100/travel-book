import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import Signup from "../components/signup";
import ProfilePage from "../components/profile/profile";
import Navbar from "../components/navbar/navbar";


export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <ProfilePage />
      {/* <Signup /> */}
    </div>
  );
}
