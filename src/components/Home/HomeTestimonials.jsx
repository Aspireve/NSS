import "../../styles/home/testimonials.css";
import { useEffect, useState, useRef } from "react";
import ArrowLeft from "../../assets/static_images/arrow-left-solid.svg";
import ArrowRight from "../../assets/static_images/arrow-right-solid.svg";
import nss_chairperson from "../../assets/home/nss_chairperson.png";
import Tanay from "../../assets/home/Tanay.webp";
import Vinita from "../../assets/home/VinitaAgarwal.png"
import Jitesh from "../../assets/home/Jitesh-Dubey.webp";
import Himanshu from "../../assets/home/himanshu singh.png";
import ExCouncil from "../../assets/home/ExCouncil.png";
import { useNavigate } from "react-router-dom";

const testimonial_cards = [
  {
    name: "Mr. Rohit Yadav",
    testament: `JAI HIND ! Just to be clear this is my First Ever Feedback in the journey of NSS, and I am glad to be giving the feedback as a Council. 😌 As we all know we are the so called CORONA BATCH, but our particular Unit from NSS too, is the CORONA UNIT as our seniors too got more offline exposure and our juniors will also surely get all upcoming projects in online mode. (Humse ki kuch khaas lagav tha ishwar ko ). Ab kya hi kar sakte hain yeh sochke poora man lagake projects complete kiye, council ki daant khaaye aur dekhte hi dekhte TCET ka sabse bada aur pyaar ek NSS PARIVAAR ban gaya . Council ne 3 cheezen sikhayi thi - 3 Principles of NSS, DISCIPLINE, PUNTUALITY & RESPECT and following all these principles will eventually make all the volunteers unite which is true. Talking about SE ka journey, I feared and respected our Councils a lot and did all my projects with utmost sincerity because (Council ka daant na khaana pade 😂 ), humare TE sabse best the, who always motivated us and helped us throughout the projects (Jaldi karo Council dekhenge toh chillaienge). Looking at these motivated seniors and also our batchmates bonding very well was one of the best parts jo bahot yaad aaienge. I will always be greatfull to have got the wonderfull oppurtunity of serving as the NSS COUNCIL in my TE, after 3 Stages of Interview (which is the most in any body of TCET ), and after becoming the COUNCIL the way people, especially NSS Volunteers will look at you totally changes. (NSS COUNCIL main hai bhai watt toh hai kaafi izzat hai inki). Apart from this the main motivation was our SE, (SE ke baccho pe sabse zyada dhyaan dena hai NSS ka future wahi honge, unko acche se sab kuch sikhana hai #legacy must go on) from recruiting them to teaching them basic values and legacies of NSS, ek ek kaam ke peeche sabne bahot mehnat aur efforts liye hain. TCET main rehke NSS Recruitment nahi experience kiya toh kya TCETian banoge tum , ekdum Roadiess Feelzz. Major Events jaise Republic Day, Vaccination Drive, Blood Donation Camp, Old Age Home Visit, Awareness in Singh Estate jo NSS ka main chehra aur focus rehte hain woh humne apne UNIT pe ekdum acche sur sabhya tareeke se complete kiya, iss samay samajh aa gaya ki yeh volunteers masti ke saath saath kaam bhi ekdum acche se karte hain, NSS Volunteers ke Discipline aur Puntuality ke charche poore TCET main hain . Having made so many memories and given so much efforts for this unit, it is really painful that this all is finally coming to an end. (As told by our Councils "Yeh ek saal kaise nikal jaiega na pata bhi nahi chalega ek ek moment enjoy karo aur poori mehnat se kaam karo") Will always remember each and every volunteer of our unit, SE aur TE dono ne bahot daant bhi khaayi hai, gusse wala look bhi dekha hai aur saath diya hai poora saal 😂. This journey was really filled with many ups and downs but the ones who always were by my side were my Council Mates "Khushi, Mayank, Om, Chhayank, Praveer, Priyanshu & Vaishnavi". You guys made it seem like a cakewalk for us, people will never know how hectic and complicated it was the way we handled it. As said in NSS "Once a Volunteer, always a Volunteer", we will always be a helping hand for our unit and am excited to see our juniors carry the legacy of NSS throughout their journey. JAI HIND !`,
    image: ExCouncil,
    position: "Ex Council",
    period: "(2020 - 22)",
  },
  {
    name: "Dr. B.K. Mishra",
    testament: `TCET prioritises comprehensive student development, notably through the National Service Scheme (NSS) established in 2005. The NSS UNIT engages undergraduate students voluntarily in diverse social service activities, contributing to national development and socio-economic progress. Emphasising social awareness, dignity of labour, and a sense of responsibility, the program moulds future engineers to identify and address societal challenges. The TCET NSS UNIT, known for its exemplary organisation, conducts weekly projects showcasing commendable punctuality and discipline. I, Dr. B. K. Mishra, after the acknowledgement of the  initiative, express the pride in the volunteers and applauds their efforts to bring forth the Website that showcase the hardwork and volunteering of our determined Unit.`,
    image: nss_chairperson,
    position: "Chairperson",
    period: "(2006 - present)",
  },
  {
    name: "Dr. Vinita Agarwal",
    testament: `This resilient unit never loses hope, imparting a lesson of unity to the entire college. Community upliftment is the priority for each dedicated volunteer, well-acquainted with local issues and always ready to seek and implement solutions. Despite lockdown challenges, they engaged in creative projects like webinars and mask-making. Now, with improved conditions, offline projects bring hope, exposure, and excitement, fostering the continuous growth and development of our trusted volunteers. We're forever proud of them.`,
    image: Vinita,
    position: "Programme Officer",
    period: "(2006 - present)",
  },
  {
    name: "Mr. Tanay Agarwal",
    testament:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
    image: Tanay,
    position: "Council",
    period: "(2022 - present)",
  },
  {
    name: "Mr. Jitesh Dubey",
    testament:
      "JAI HIND ! As a less social person, I often found myself feeling like an outsider among my peers. I tended to gravitate towards solitary activities, preferring to spend my time alone watching movies, learning something new, or simply sitting quietly with my thoughts. Social situations made me uncomfortable, and I often felt like I didn't belong. That's when I decided to step out of my comfort zone and join NSS.Without a question, the best aspect of my experience was the recruitment procedure. I was able get exposure while engaging in a variety of activities by joining NSS, in addition to giving me a chance to give back to society. During the projects, I found myself engaging in teamwork and collaboration, something I had always shied away from. Working with fellow volunteers on community projects became a catalyst for personal growth. I discovered the joy of contributing to something larger than myself. The experience of organizing and Participating in a range of activities, including cleanliness drives, visits to old age homes, blood donations, and The Sojourn Dance, within the NSS has afforded me diverse settings and opportunities. These experiences have contributed to the development of my ability to effectively balance my commitment to serving others with the pursuit of personal fulfillment and enjoyment. One of the most surprising aspects was the support and camaraderie I found among my fellow volunteers. The shared goal of making a positive impact brought us together, and I realized that I wasn't alone in my journey.Being part of NSS has been one of the most significant experiences in my life. I believe everyone should consider dedicating a small portion of their lives to helping others. In doing so, you lose nothing but gain a unique and fulfilling kind of happiness. JAI HIND ! ",
    image: Jitesh,
    position: "Volunteer",
    period: "(2022 - present)",
  },
  {
    name: "Mr. Himanshu Singh",
    testament: `One joins NSS in order to be altruistic and assist those around them, but I can guarantee with certainty that volunteering with this amazing FAMILY will help you become the best version of yourself. NSS is without a doubt our college's most formidable body, as evidenced by our effort and zeal, but don't mistake this strength for a lack of enjoyment. My time as a volunteer has been the most fun I've had in years. From debate competitions to Old age home visits, from blood donations to The ELECTRIC Sojourn Dance, NSS has given me a variety of settings and opportunities to strengthen my ability to balance my need to serve others with my need to have a good time. It is here that I have witnessed my efforts make a significant difference in the lives of the needy, as well as where I have witnessed perfect strangers become best friends. Aise hi nahi hum khudko family ka title dete hai, when I needed it, I had a stronghold of 200 volunteers on my side, which is what every college student hopes for. Even if my official volunteer status has ended (once a volunteer, always a volunteer), my connection to NSS simply grows deeper with time. I will be grateful to my dependable councils and my fellow volunteers forever and always.`,
    image: Himanshu,
    position: "Ex Volunteer",
    period: "(2021 - 2023)",
  },
];

function TestimonialCard() {
  const [indexCard, setIndexCard] = useState(2);
  const navigate = useNavigate();
  const displayPrev = () => {
    setIndexCard((prev) => {
      if (prev === 0) return testimonial_cards.length - 1;
      return prev - 1;
    });
  };
  const displayNext = () => {
    //   clearInterval(newInter)
    setIndexCard((prev) => {
      if (prev === testimonial_cards.length - 1) return 0;
      return prev + 1;
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexCard === testimonial_cards.length - 1) setIndexCard(0);
      else setIndexCard(indexCard + 1);
      // })
    }, 10000);
    return () => clearInterval(interval);
  });
  // const newInter = setInterval(displayNext, 5000)
  return (
    <>
      <div className="testimonial-card-container">
        <div
          className="testimonial-card sub-active"
          onClick={() => navigate("../testimonials")}
        >
          <img
            src={
              testimonial_cards[
                indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
              ].image
            }
            alt={`${
              testimonial_cards[
                indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
              ].name
            } Testimonial`}
          />
          <p>
            {testimonial_cards[
              indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
            ].testament.substring(0, 100) + "... Read More"}
          </p>
          <div>
            <h3>
              {
                testimonial_cards[
                  indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
                ].name
              }
            </h3>
            <h5>
              {
                testimonial_cards[
                  indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
                ].position
              }
            </h5>
            <p>
              {
                testimonial_cards[
                  indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
                ].period
              }
            </p>
          </div>
        </div>
        <div
          className="testimonial-card active-card"
          onClick={() => navigate("../testimonials")}
        >
          <img
            src={testimonial_cards[indexCard].image}
            alt={`${testimonial_cards[indexCard].name} Testimonial`}
          />
          <p>
            {testimonial_cards[indexCard].testament.substring(0, 100) +
              "... Read More"}
          </p>
          <div>
            <h3>{testimonial_cards[indexCard].name}</h3>
            <h5>{testimonial_cards[indexCard].position}</h5>
            <p>{testimonial_cards[indexCard].period}</p>
          </div>
        </div>
        <div
          className="testimonial-card sub-active"
          onClick={() => navigate("../testimonials")}
        >
          <img
            src={
              testimonial_cards[
                indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
              ].image
            }
            alt={`${
              testimonial_cards[
                indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
              ].name
            } Testimonial`}
          />
          <p>
            {testimonial_cards[
              indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
            ].testament.substring(0, 100) + "... Read More"}
          </p>
          <div>
            <h3>
              {
                testimonial_cards[
                  indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
                ].name
              }
            </h3>
            <h5>
              {
                testimonial_cards[
                  indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
                ].position
              }
            </h5>
            <p>
              {
                testimonial_cards[
                  indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
                ].period
              }
            </p>
          </div>
        </div>
      </div>
      <div className="testimonial-scroller">
        <img src={ArrowLeft} alt="Left Arrow" onClick={displayPrev} />
        {testimonial_cards.map((test, idx) => (
          <div
            key={idx}
            className={idx === indexCard ? "selected" : ""}
            onClick={() => setIndexCard(idx)}
          ></div>
        ))}
        <img src={ArrowRight} alt="Right Arrow" onClick={displayNext} />
      </div>
    </>
  );
}

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (testimonialsRef.current && sliderRef.current) {
        const rect = testimonialsRef.current.getBoundingClientRect();
        setIsVisible((prev) => rect.top <= window.innerHeight - 200 || prev);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`testimonial ${isVisible ? "appear" : ""}`}
      ref={testimonialsRef}
    >
      <h2 className={isVisible ? "testimonials-header" : ""} ref={sliderRef}>
        Testimonials
      </h2>
      <TestimonialCard />
    </div>
  );
}
