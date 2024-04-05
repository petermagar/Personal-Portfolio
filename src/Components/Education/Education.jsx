import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
    return(
        <section className={styles.container} id="education">
            <h1 className={styles.title}>  Education </h1>
            <div className={styles.content}>
           
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img src={getImageUrl("about/unh.jpg")} alt="UNH Logo" />
            
            <div className={styles.educationItemText}>
              <h3><a
                  href="https://www.newhaven.edu/"
                  target="_blank"
                  rel="UNH official Website"
                > Univeristy of New Haven </a>  </h3>
              <p>
                <h4> West Haven , Connecticut , USA</h4>
                <h5> Sept 2022 - May 2024</h5>
                Masters in Science in Computer Science
              </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={getImageUrl("about/kdu.jpg")} alt="Kdu Logo" />
            <div className={styles.educationItemText}>
              <h3><a
                  href="https://global.kduniv.ac.kr/global/index.php"
                  target="_blank"
                  rel="KDU official Website">  Kyungdong Univeristy </a></h3>
              <p>
                <h4> Gangwondo, South-Korea</h4> 
                <h5> 2017 - 2021</h5>

               Bachelor in Computer Engineering 
              </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={getImageUrl("about/hims.jpg")} alt="Hims logo" />
            <div className={styles.educationItemText}>
              <h3 ><a
                  href="https://www.facebook.com/hims.school/"
                  target="_blank"
                  rel="HIMS fb page"> Himalaya International Model Secondary School (HIMS)</a></h3>
              <p>
               <h4>Jorpati, Kathmandu , Nepal </h4>  
                <h5>2015 to 2016   </h5> 
               Higher Secondary Eduaction in Scinece Stream. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};