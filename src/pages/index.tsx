import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import styles from "@/assets/styles/Home.module.scss";

export default function Home() {
  useDocumentTitle("Dashboard");

  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
  
}
