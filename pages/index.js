import "antd/dist/antd.css";
import styles from "../styles/Home.module.css";

import { Input } from "antd";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Personal Information</div>

        <form action="#">
          <div className={styles.field}>
            <Input type="text" required name="t1" />
            <label>First Name</label>
          </div>
          <div className={styles.field}>
            <Input type="text" required name="t2" />
            <label>Last Name</label>
          </div>

          <div className={styles.field}>
            <Input type="text" required name="t3" />
            <label>Age</label>
          </div>
          <div className={styles.field}>
            <Input type="text" required name="t4" />
            <label>Contact No</label>
          </div>
          <div className={styles.content}>
            <div className={styles.field}>
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
