import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/NewPage.module.css";
import { 
  FiStar, FiDroplet, FiSun, FiWind, 
  FiCheck, FiPlus, FiMinus 
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const NewPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    { 
      q: "Is your skincare suitable for sensitive skin?", 
      a: "Yes, every formula undergoes rigorous dermatological testing. We use physiological concentrations of active ingredients to ensure efficacy without irritation." 
    },
    { 
      q: "How does the violet glass packaging work?", 
      a: "It acts as a natural filter that blocks the entire spectrum of visible light, except for ultraviolet and infrared, which preserves the molecular stability of our formulas." 
    },
    { 
      q: "Do you test your products on animals?", 
      a: "Absolutely not. We are a strictly cruelty-free brand. We utilize ethical in-vitro laboratory testing methods to ensure safety." 
    }
  ];

  const reviews = [
    { 
      name: "Anna S.", 
      text: "The best texture I have ever tried. My skin feels incredibly radiant and alive.", 
      img1: "/img/cs.JPG", 
      img2: "/img/dr.JPG" 
    },
    { 
      name: "Marta K.", 
      text: "My skin has finally found its balance after months of stress-induced breakouts.", 
      img1: "/img/ch.JPG", 
      img2: "/img/medik.JPG" 
    }
  ];

  return (
    <>
      <Header />

      <main className={styles.main}>
        
        {/* SECTION 1: UNIFIED PHILOSOPHY BLOCK (Text-Only High Design) */}
        <section className={styles.philosophySection}>
          <div className={styles.container}>
            <div className={styles.philosophyWrapper}>
              {/* Massive background text */}
              <h2 className={styles.hugeWatermark}>PURE</h2>
              
              <div className={styles.philosophyGrid}>
                {/* Left side: Founder Identity */}
                <div className={styles.founderBrief}>
                   <span className={styles.accentLine}></span>
                   <div className={styles.imageCaption}>MARIA DUDIAK</div>
                   <div className={styles.founderRole}>FOUNDER OF INNER</div>
                </div>

                {/* Right side: The Core Message */}
                <div className={styles.philosophyContent}>
                  <p className={styles.mainQuote}>
                    "We don't believe in 10-step routines. We believe in the power of one, 
                    perfectly formulated product that respects your skin's natural rhythm."
                  </p>
                  
                  <div className={styles.manifestoMini}>
                    <p>
                      INNER is built on the refusal of excess. We aren't afraid to be complex 
                      on the inside so that you can look effortless on the outside. True beauty is the absence of excess.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 3. OUR STORY */}
        <section className={styles.storySection}>
          <div className={styles.container}>
            <h2 className={styles.storyTitle}>ABOUT US</h2>
            <p className={styles.storySubtitle}>
              We believe that true beauty begins with care and understanding.
            </p>

            <div className={styles.storyContent}>
              <div className={styles.storyImageWrapper}>
                <img src="/img/story.JPG" alt="Our Laboratory" className={styles.storyImage} />
                <span className={styles.storyImageLabel}>Since 2018</span>
              </div>

              <div className={styles.timelineWrapper}>
                <div className={styles.timelineLine}></div>
                {[
                  {
                    year: "2020 - First Products Launched",
                    text: "The first collection was unveiled: a line of serums designed to nurture skin under urban environmental stress."
                  },
                  {
                    year: "2026 - Scale Production",
                    text: "Our brand has grown into a high-tech production facility with a global team of biochemists and designers."
                  }
                ].map((step, index) => (
                  <div key={index} className={styles.timelineStep}>
                    <div className={styles.timelineCircle}></div>
                    <div className={styles.timelineContent}>
                      <h3>{step.year}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. HERBARIUM */}
        <section className={styles.herbariumSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.label} style={{textAlign: 'center'}}>INGREDIENTS</p>
              <h2 className={styles.storyTitle}>THE HERBARIUM</h2>
            </div>
            
            <div className={styles.herbariumGrid}>
              {[
                { icon: <FiDroplet />, name: "Hyaluronic Acid", desc: "Bio-fermented for deep molecular penetration and hydration." },
                { icon: <FiSun />, name: "Vitamin C", desc: "A stable antioxidant form for maximum cellular protection." },
                { icon: <FiWind />, name: "Edelweiss Extract", desc: "Wild-harvested botanical known for extreme skin resilience." },
                { icon: <FaStar />, name: "Peptides", desc: "Bio-identical chains that signal cellular repair and collagen." }
              ].map((item, i) => (
                <div key={i} className={styles.ingredientCard}>
                  <div className={styles.ingredientIcon}>{item.icon}</div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. REVIEWS */}
        <section className={styles.reviewsSection}>
          <div className={styles.container}>
            <h2 className={styles.storyTitle}>REVIEWS</h2>
            <div className={styles.reviewsGrid}>
              {reviews.map((rev, i) => (
                <div key={i} className={styles.reviewCard}>
                  <div className={styles.reviewImageSwap}>
                    <img src={rev.img1} alt="Customer" className={styles.imgPrimary} />
                    <img src={rev.img2} alt="Product result" className={styles.imgSecondary} />
                  </div>
                  <div className={styles.reviewTextContent}>
                    <div className={styles.stars}>
                     <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p>"{rev.text}"</p>
                    <strong>{rev.name}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PRINCIPLES */}
        <section className={styles.principlesSection}>
          <div className={styles.container}>
            <div className={styles.principlesContent}>
              <div className={styles.principlesText}>
                <h2 className={styles.storyTitle} style={{textAlign: 'left'}}>OUR PRINCIPLES</h2>
                <ul className={styles.principlesList}>
                  <li><FiCheck /> Cold-pressed ingredient preservation</li>
                  <li><FiCheck /> Zero synthetic fragrances or dyes</li>
                  <li><FiCheck /> 100% Recyclable violet biophotonic glass</li>
                  <li><FiCheck /> Cruelty-free laboratory standards</li>
                </ul>
              </div>
              <div className={styles.principlesImage}>
                 <img src="/img/bes.JPG" alt="Lab Detail" style={{borderRadius: '12px'}} />
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <div className={styles.faqTitleBlock}>
                <h2 className={styles.title}>FAQ</h2>
                <p>Common questions about our philosophy and products.</p>
              </div>
              <div className={styles.faqList}>
                {faqData.map((item, index) => (
                  <div 
                    key={index} 
                    className={styles.faqItem}
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <div className={styles.faqHeader}>
                      <h3>{item.q}</h3>
                      {activeFaq === index ? <FiMinus /> : <FiPlus />}
                    </div>
                    <div className={`${styles.faqAnswer} ${activeFaq === index ? styles.activeFaq : ""}`}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p style={{ margin: "0", fontWeight: "700" }}>Honey & Amber Co.</p>
          <div className={styles.footerLinks}>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NewPage;