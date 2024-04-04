    import React from "react";
    import styles from "./Profile.module.css";
import { getImageUrl } from "../../../utils";

export const Profile = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}> Hi, I'm Prakash Magar</h1>
          <p className={styles.description}>
            I'm a <b>Software Engineer </b>and I build things for web. 
          </p>
          <a href="https://www.linkedin.com/in/prakash-layo-magar-16603a166/" className={styles.contactBtn}>
            Linkedin 
          </a>
        </div>
        <img
          src={getImageUrl("mypic/Mypic.jpg")}
          alt=" image of me"
          className={styles.MyImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };