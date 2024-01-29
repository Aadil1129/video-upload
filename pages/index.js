import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <video controls width="640" height="360">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
