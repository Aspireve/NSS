import React, { useState, useEffect, useRef } from "react";
import "../styles/testimonial/testimonials.css";
import fallback from "../assets/testimonial/Male cartoon.webp";
import LeftQuote from "../assets/static_images/quote-left-solid.svg";
import Map from "../components/HomeMap"
import Testimonialmodal from "../components/TestimonialModal";

export default function Testimonial() {
  const testimonial_cards = [
    {
      name: "Himanshu Singh",
      Testimony:
        "One joins NSS in order to be altruistic and assist those around them, but I can guarantee with certainty that volunteering with this amazing FAMILY will help you become the best version of yourself. NSS is without a doubt our college's most formidable body, as evidenced by our effort and zeal, but don't mistake this strength for a lack of enjoyment. My time as a volunteer has been the most fun I've had in years. From debate competitions to Old age home visits, from blood donations to The ELECTRIC Sojourn Dance, NSS has given me a variety of settings and opportunities to strengthen my ability to balance my need to serve others with my need to have a good time. It is here that I have witnessed my efforts make a significant difference in the lives of the needy, as well as where I have witnessed perfect strangers become best friends. Aise hi nahi hum khudko family ka title dete hai, when I needed it, I had a stronghold of 200 volunteers on my side, which is what every college student hopes for. Even if my official volunteer status has ended (once a volunteer, always a volunteer), my connection to NSS simply grows deeper with time. I will be grateful to my dependable councils and my fellow volunteers forever and always.",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Volunteer",
    },
    {
      name: "Ananya Sajjala",
      Testimony:
        " JAI HIND! Okaaay, so where should I even start, there is so much to say m about NSS but I doubt this feedback would be enough. NSS made me go out of my comfort zone- even before the projects, the recruitment process itself was so different from the others, we N ha S d S t n o o sing, dance, say dialogues, and whatnot. t only gave me an opportunity to contribute to society but also learn how to be confident and deal with people. And how can we forget Sojourn, it will always be one of my favourite memories of NSS. As for the projects, there are too many to go on about, so I’m going to talk about my favourite project which was the ashram visit- it was such a wonderful experience seeing all the elderly laugh and enjoy with us. And as for my NSS family, the sense of unity will always be unmatched, you guys were the best! I would say these two years in NSS were the best I could ask for, I will miss my NSS family for sure and as they say ONCE A VOLUNTEER ALWAYS A VOLUNTEER",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Volunteer",
    },
    {
      name: "Jatin Vishwakarma",
      Testimony:
        "Jai hind ! Pata nhi tha NSS ka pehela feedback yaha dene mila. From the day of recruitment, it was journey of fun and bonding, from being the Harry Potter, dancer, singer for my family everything I loved here. I also remember ki online me ghar me baith ke hume social activities karni padhi jo ki society me jhadu lagana ho ya raat ko baithke skit ki preparation ho ya road par awareness baatna ho sab ne mujhe kuch sikhaya aur banaya hai. Online ke waje se seniors ke saat itna time spend karni nhi Mila par jab mile tho bohot maze kiye humne saat me. Jab hum TE bane hum par responsibility aagayi thi ki hame humare SE ko bhi waise pyaar dena hai jese hume humare senior se mila, par humein kar dikhaya ek saat aakar recruitment ho ya soujourn dance sabme humne macha hai. Mere zindagi ka pehela Camp aur sabse badiya camp, ek thali me khana ho ya ek saat masti karna sab aaj bhi yaad karne me hasi aati hai. Jab join kiya tha NSS me Discipline dekh ke laga tha kab katam hoga ye NSS par aaj sochta hu kyu katam hua ye NSS. This two year was gone too fast, that ki abhi yesa lag rha hai abhi tho join kiye tha humne, par jese rajesh khana ji ne kaha hai babumoshai zindagi badi honi chaiye lambi nhi waise is safar ke 2 sunhere saalo ke raha par bohot saari yaadein batoor ke Jana padh rha hai. From being selfish person to thinking for society in the one-word feedback by me. I am proud to be NSS volunteer as it as given me the chance to contribute for society and for increasing and burning the spirit for serving the society. Once a Volunteer always a volunteer",
      image: fallback,
      year: "2021-23",
      branch: "COMP",
      post: "Volunteer",
    },
    {
      name: "Dhaiwat Mehta",
      Testimony:
        " NSS  whenever I hear this name i just remember my selection day, when everything was boring in online mode and i got this zoom link for nss selections. I went there and it was totally different atmosphere altogether, where we used to get strong, got several tasks to do. And after entering NSS the first thing we all got introduced with was word FAMILY. It was incredible fun ride and most lovely bond ever shared where we all really got along to help needy people, to enjoy with ourselves after project. T T a h l r k o in u g gh ab N o S u S t F w A e M a IL ll Y le b a o r n n d t I D W is A cipline, Punctuality, Values. As I'm NT to go back to some memories of NSS Camp. I Still Remember those days which were so evolving for all of us, most of us got along in those 7 days where we really got to know what exactly NSS is all about. The strictness, fun we had without single time seeking for mobile phones was awesome. It was fully a phone detoxification, we never thought there would be such fun in camp. It was Once in a lifetime moment, which will stay forever with us. It's emotional to write this last feedback when I really grew up from rookie in college to being Senior with NSS . I will end this feedback saying I Really Don't want this journey to end ever, As we say ONCE A VOLUNTEER ALWAYS A VOLUNTEER JAI HIND.",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Volunteer",
    },
    {
      name: "Sparsha Shetty",
      Testimony:
        "Let's start from starting from our selection I was so exicted to be the part of the Nss family..The fun began at the start only the recruitment days While entering in Nss when we were in SE we enter as an individual but afterthat we were made united by our Council and TE volunteers ..From blood donation camp and oldage home to actually Nss 7 days camp it was very daunting for me.. Being a part of Nss not only made me aware of people's problems their experience but it's also gave me to act and confident to fix their problems..I just love the slogan of Who are we ?? Nss while clicking the photos.. 😊 ..Special Thanks to our Council who had put so much efforts to bring people together and create a family.. I loved working on projects and especially the making posters (not good at this but i tried well my best) ..Another best part of our Nss is the Nss dance our cultural event Sojourn  we all gathered everyday before the final performance and we have created a great memories for life ..The only place were i felt equality.. That affection,those million-dollar smiles,the bond with them is something like an asset to me. I know this may sound boring as it is too long .. But,this was the best experience of my life. I have spent my nss journey with best people.. Blessed with the best.. ",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "JVolunteer",
    },
    {
      name: "Pragya Shukla",
      Testimony:
        "Joining NSS has been one of the best decisions I have made in college. Words will not be enough in expressing how these two years passed. From the recruitment to the way NSS rules were taught to us till the last project, it has been a great journey throughout. I am quite struck by the incredible experiences I’ve had, the lessons I've learned, and the relationships I've formed. m Du o r n in th g s S t E h , e w o e ff h l a in d e a pr f o e j w ec p ts rojects initially online, then after a few started. I still remember how I have been late for each project and was scolded for the same. NSS is not just about strictness, everything eventually ends up with fun and amazing memories only. NSS has taught me punctuality and discipline. I never taught I will start working with people who were initially just like any other volunteer to me but have ended up becoming a FAMILY. Our batch was fortunate enough to experience the NSS Camp. This is one of the things which will be unforgettable. Each day brought new experiences that one never had. Not to forget the NSS Dance Rehearsals during sojourn. The amount of fun and Bonds formed during it can match no level. Kudos to the current council as well, they performed a splendid job. The memories created together will always hold a special place in my heart. The bonds formed will only grow stronger. JAI HIND!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Jc",
    },
    {
      name: "Vishal Rawat",
      Testimony:
        "JAI HIND! The reasons why I signed up for becoming an NSS volunteer could probably be put to words, but what I got back from NSS… it's beyond just words - it's a feeling ✨ Well to get started I was very bored. I among many others started my engineering life in dire times where we were more concerned about ourselves than trying to do cool stuff students are supposed to do in colleges according to Bollywood (Student Of The Year is a lie). I wasn't very socially active with what was happening in my online college, but I finally decided to do something about it, right after all bodies in the college closed off their membership forms! It's when I found out about TCET NSS UNIT and what everything looked more appealing to me than the college admissions itself. Without having any idea of what I was signing up for, every twists and turns in my volunteer-ship was filled with surprises and some of the fantastic moments of my life: whether it was the recruitment ( ) or making a difference around my society - online AND offline, participating in various projects which mattered a lot to the people Iwouldn't have met otherwise, the feedbacks, the bonding with fellow volunteers regardless of year and department, and becoming a part of THE NSS FAMILY. From recruitment to being the SE volunteers struggling to turn on our cameras, to attending my first offline project of vaccination drive from becoming the Lazy Buddies to rocking the stage at Sojourn (TWICE) from being the ones who got recruited to becoming to ones who recruited from giving the NSS CAMP's FOMO to attending the 7-day NSS CAMP there are too many words, people, and memories to fit this page, but here are the ones who are responsible for making these two years INCREDIBLE: Bhavik, Vishakha, Ameya, Ashmit, Shantanu and Aashvi for making the first volunteers I ever interacted with worth it and recruiting me into NSS which brought out my spirit of a volunteer. Om, Khushi, Mayank, Priyanshu, Vaishnavi, Chhayank, Praveer and Rohit the eight pair of shoulders who introduced us to various projects and ensuring we had the best memories starting with our offline projects. Kamal, Tanisha, Aryan, Charvi, Maniprakash, Pranali, Sumit and Yash providing us TE volunteers with various opportunities during recruitment and projects as well as bringing us our best memories of all time in the NSS Camp! And lastly to all volunteers without whom this family would have never been complete. I am indebt to you all for making these two years unforgettable JAI HIND!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Volunteer",
    },
    {
      name: "Aryan Patil",
      Testimony:
        "JAI HIND! अनुभव है अनमो ल, पैसों से इसे न तो ल, दुनि या में नहीं को ई ऐसा , जो लगा सक इसका मो ल।✨ NSS has been a tresasure house of experience for me. Matlab bhai jo expect nhi kiya tha wo sab experience karne mila . I think ye NSS ki khasiyat hi hai ki ye bohot hi unexpected hai😉. Matalab ham soch te kuch aur hai par uska outcome kuch aur hi hota hai. Jaise NSS ka koi bhi project boring nhi lagega aapko😌. bhalehi aapko bas ek poster banana ho ya koi survey lenaho. Sare project mai mazza aata hi hai and mereliye tho jaise naye project aata gaye waise naye dost bannae hmari dosti gehri hoti gai and projects ka mazza bhi maaz tho aana hi tha. Do sal sabkeliye kuch na kuch unexpected laya haiand ham aur hmare councils hamesha yehi try karte rehenge ki aur kaise sabko kuch unexpected late rahe. Hmare do salomaise pehla saal tho pura online nikla . Lekin fir bhi naye dost banana mai ye sirf online mile rukawat nhi bani. Online hokar bhi sirf ek screen se bate karke bhi naye dost bansakte hai ye hamne pehle saal mai sikhliya tha. Jaise mujhe aaj bhi yaad hai ki ek yoga ka project tha hmare. Hame kya laga bas ek siminar hoga and bas on kareke baith janan hai. Fir pata chala ki hame bhi yoga karna hai. Ye hamne nhi socha tha. Lekin maza aaya mera ek dost tho yoga karte karte apne hi bed se girgay tha ye dekhkar ham itna hase itna hase ki mujhe tho merea camera bandh karna pada kyu ki haste haste mai khud na mere bed se gir jata. NSS ka council banana ki jab mujhe opportunity mili tho maine wo leli without any second thoughts issmai mere council ka mai dilse shukriya karta hu ki mujhe unhone ye opportunity di and mujhe islayak samjha ki mai ye karpau. Council banne ka experience mereliye both hi eye opening tha. I mean I got to know what actually happens bts . And turst mi ye bohot hi jyada mehnat ka kaam hai. Matlat agar NSS aap sirf ek volunteer ki najro se dekho tho aakp sare projects mai aana hai kaam karna hai waha and ghar chalejana hai which is a challenge in itself no doubt, but begin an council wo project volunteers keliye lana was a like a mission impossible kinda scenario in itself. From permission from clg to the permission from the police official or the MLA or any big person the process is very tiring. Ye mujhe nhi pata tha ki NSS ka bas ek simple sa project jo clg mai karna hai uskee piche bhi itna sara kaam and efforts lagte hai . But as I said NSS is the treasure of experience and unexpectedness. Abhi jyada bol kae mai kisiko emotional nhi karna chahta ya khoud hona chahta hu😎 (chasme ke andar aansu Chup aarha hu). Lekin bas itna kahunga ki NSS ne mujhe bohot sari chize di hai and I will be always in debt of it. As we always say Once a volunteer always a volunteer. JAI HIND !!!!!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Council",
    },
    {
      name: "Kamal Choudhary",
      Testimony:
        "ये पल है आज, कल या दें हों गी , ये पल न हों गे जब, तब बस बा तें हों गी , जिं दगी के पन्नों को पलटो गे जब, तब आंखें नम और मुस्करा हटें हों गी । Shuruaat karte Hain Mere engineering life se pahle kyunki jab first year mein jab college aaya tha to koi bhi college ke committee kis me nhi nhi tha lekin Desh premi hu aur hamesha Desh Ke liye kuch karna chahta hu and society ke liye kuch karna chahta to hamesha vah vision Rakha tha right my junior College se hi NSS Ko dekha hai aur hamesha yah socha tha ki jab bhi main degree college mein hoga to NSS join karunga to vaise hi 2nd year mein aati Jaise hi mujhe opportunity Mili Maine Unit join kiya right from the dangerous recruitment. Recruitment TCET NSS ka bahut alag hota hai main yahan per ye moment yaha ye disclose nhi karuga because “what happens in NSS stays in NSS” hamara 3rd SEM ke projects sab online hi hue hai to online mein kafi Bore hota tha kyunki vah unta interaction nhi tha. online mein lekin Jaise hum ko offline projects ke opportunity mile uss me mene participate kiya i.e. vaccination drive project vo project me us din Mera hamare super senior Council se interaction ho gaya tha aur unhone bahut data tha mujhe kyunki main use din kafi galtiyan ki thi lekin vo ek learning process the because of first project aur interact kaise, behave Karna hai to vah sikhane mein mila tha koi aur unse interaction karne ka bhi mauka Mila aur vese he journey aage badhate rahiye offline project hote gaye… 2 sal ke is journey ka yah tha Mera ek saal ke Safar ka ki kahani ab chalte Hain Safar ke agale bhag me jaha NSS Council banne ke bad ka Safar bahut bahut parishram aur bahut hi mehnat aur bahut hi Garv wala responsibility he. Council ban ne ke bade sab se bada daar jo hota tha ke projects me volunteers kitne aaye ge???... Aur council hone ke saath hum sab ko ye makesure karna pad ta tha he Volunteers Projects ke saath saath masti mazak bhi kare aur aapas me bonding badhaye…Magar NSS ke parivaar ke sabse aache bonding ya friendship NSS ke Special Residential camp me he bane te hai. As councils camp ke preparation was major task for all of us, but hum aathe preparation to volunteers ke dinner ke he chinta karne me he chale gaye, projects bhi kar vane hote hai vo to hum bhul he gaye the…. For me camp ka sabse best project was School teaching and kite making. Camp ke preparation ke liye humne humare Super seniors councils se unka camp ka experience gain kiya tha, jo ke bhot sahi (Thanks to all of them Abhishek, Priyal, Shreyas, Khushi, Kirti, Sunil, Varsha and Viraj). Even humare Senior Councils/humare senior TE jinka Camp he nhi huva lekin app logo ke khuup piche lag ke humare har ek problems ka solution diya. Thanks to your pyaare senior councils Om, Khushi, Mayank, Priyanshu, Chhayank, Vaishnavi, Parveer and Rohit. JESE KUCH SAFAR AKHELE PURE NHI KIYE JAA SAKTE, VO SAFAR SAATH ME PURE KIYE JAATE HAI mere iss safar ke 7 SAATHI Aryan, Tanisha, Charvi, Maniprakash, Pranali, Sumit, Yash. Tum sab ne muje bhot pareshan kiya he lekin muskil wakt me humasha tum sab saath me bhi rahe he ho.. Even Thank you guys for being such a great mates for my NSS journey. Last but not least mere pyaare SE volunteers tum sab ke bina Unit/projects aadhura hai, thode aur JOSH aur Energy ke saath aapne NSS ka aage ka Journey bhi pura karo and legacy ko follow karte rakho Wish you All the best… JAI HIND!!!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Council",
    },
    {
      name: "Tanisha Shaikh",
      Testimony:
        "JAI HIND! O Safarnama Sawaalon ka safarnama ❤…. Toh iss safarname ki shuruwat hoti hai usdin se jab NSS ka orientation tha .. I still remember ek yehi committee ka orientation dekh k man hua tha k join toh karna hi hai chy kuch bhi ho ….aur jab voh recruitment process start hua I was full introvert back then Aur plus online tha sab kuch fir toh samajh jao 🙃 …lekin recruitment process toh jaise taise nikl hi gaya Aur selection bhi hogaya fir aaate online projects me itna kuch krne ko tha nhi tbh ..Aur hum jaise introvert k liye toh online sabse bekar cheez thi …fir aata hai VACCINATION DRIVE mera pehla offline project ohh gawd abhi bhi yaad hai voh din …jab humare councils toh the hi lekin …super senior councils bhi the Aur jab unhone feedback lena start kiya toh sab jabba jabba krne chalu krdiye 😂 ….Kuch bhi kaho KHAUF toh hai ….Chalo ab story me thoda aage badte hain NSS join kiya tha kyuki humesha se hi social work ,selfless service etc krne ka hauk tha lekin ye nahi pata tha k NSS me itna OVERALL DEVELOPMENT hoga k introvert se extrovert ban jaungi ….NSS k teen rules DISCIPLINE,RESPECT AUR PUNCTUALITY ko toh kabhi bhool hi nhi sakte ..our councils made sure k har ek volunteer yeh rules ko follow kare …..Ab baat karte hain word “FAMILY” ki yeh shyd non- NSS walo k liye ek normal word hoga but humare liye yehi word sab kuch hai ….Family ka real meaning kya hota hai yeh NSS se acha aur kahi nahi samjh sakte the hum . Ab aate hain story k climax pe…Council interviews -Tbh meko council toh ban na tha but lag nhi rha tha ban paungi …lekin baki TE ko mujhpe, mujhse zada bharosa tha k bhai Tu toh banegi hi ….woh council interview toh mai kabhi nahi bhool sakta …As it was the “first official interview “ of my life …..ab ussme kya kya hua yeh toh nhi bata sakti 😉…as “What Happens In NSS Stays In NSS”…lekin voh phase bhi worth it that Bhai ….Right from giving interviews to waiting for results voh time bhaisaab Aisa dhak dhak ho re la tha kya hi batao….but Umeed nhi chod di ..n finally ban hi gae Student Leader …..sunkee khushi toh bhaut hui thi …lekin isske saath saath jo responsibilities aa rhi thi uska itna andaza toh nhi tha tbh …voh kehte haina k hathi ke dant khane k kuch Aur ,Aur dikhane k kuch Aur hote hai …iss phrase ka real mtlb council ban ki samajh aya …k hamare ex councils kaise sab handle krte honge kyuki hume as a volunteer toh sab easy peezy hi lagta tha …but ek 2 ghante k project k peeche ki 1 week ki planning ka andaza toh council ban k hi hua ….Council ban na was the best thing that happened to me in TCET for sure 😍…Jitna Council banke seekha hai shyd hi kabhi seekhane milta ….”Mai se hum tak ka safar suhana toh tha”❤ ….HUM 8 ko ek humare councils ne banaya hai no doubt their guidance has been the best thing for us for sure!!!…SOJOURN -isss cheez ka besabri se intezaar kiya tha Aur voh mauka aaya bhi .Right from giving auditions to taking auditions and setting the dance for the whole UNIT bhautttt maza aaya. Sojourn practice k din was one of the best days in this journey …Kabhi socha nahi tha k 100 logo ko dance sikhana padega …n no doubt the outcome was worth it …SE ne toh macha diya tha Aur TE ki toh kya hi baat krni Ab aate hai story ki ending par Aur ending toh emotional hoti hi hai …Mai baat kr rhi “NSS RESIDENTIAL CAMP” ki …Life k best 7 days ..I would say camp hi tha jisme hum aatho ki bonding Aur strong hue …voh volunteers ka dhyan rakhna ,unka khana peena,sona har cheez ka intezaam karna ..kabhi bhi volunteer ko koi issue ho fir raatke 3 kyu na bj rhe ho …unke parents ki tarah unka khayal rakhna, projects krvana ,sab sahi ho rha h k nahi uska dhyan rakhna….in 7 dino me bhauttt kuch seekhne ko mila …Aur yeh camp Successful hua bcoz of our volunteers SE n TE ..Special thanks to TE mates ..As we quoted “RAATEIN BEET JAYENGI BAATEIN YAAD AAYENGI” -sahi toh kaha tha humne 😭 Last but not the least …I would like to say ,This journey has taught me a lot …Dukh toh bhaut ho rha k yeh safar khatam ho rha lekin as we say “Once a volunteer, Always a volunteer “ ..bas is cheez k saath hi aage badungi… n I hope k SE bhi yeh legacy carry forward krega. Is safar k akhiri feedback ko yeh bolke end krna chaungi ki, NSS के सा थ.. कुछ लम्हे…हे कई या दें बतौ र ईना म मि ले, एक सफर पर नि कले और तजुर्बे तमा म मि ले।ले JAI HIND !!!!! ",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Council",
    },
    {
      name: "Charvi Rathod",
      Testimony:
        "Jai Hind! Allow me tell y’all about a roller coaster that I had sat on without thinking twice, the jump I had made blindly and head first. NSS was always a part of the plan, uss plan ka step 1 tha Recruitment. For a shy SE kid, it was a challenge of a lifetime. Anokhe kisse sunne the jis safar ke baare me, woh mehsoos bhi kar liya. But today if I am asked to speak of it, it is definitely a memory I cherish with utmost gratitude. Haste-khelte, ghirte-sambhalte, naye dost banaate-banaate nikal gaya online humara pehla saal. Par picture abhi baaki thi mere dost! TE ke shuruwaat me, interval ke baad, shuru hui ek daud: Council bann ne ki daud. Iraada: haan, plan: nada. Par Geet ne kaha tha “aisa lagg raha tha kuch galat ho raha ho, jaise koi train chhot rahi ho” and I felt that. I was literally the last person to append my name on the list made for interview rounds. Khoon, paseena, upar waale ka saath aur sabki duaaon ke saath bann gayi main Admin Head! Par asli khel toh abhi baaki tha, jiske baare me hum 8 naadan parindon ko koi idea nahi tha. There is nothing our senior council have not helped us with. Definitely can’t not give them an honorary mention. Apne bacchon jaise hi rakha, sab sikhaaya, chillaya, rulaya, par saath nahi chhoda. First project ke pehle ke jitters, major college events me TCET NSS UNIT ko represent karne ka pride, Sojourn me perform karne ki excitement, aur most importantly NSS Residential Camp organize karne ka pressure, shayad hum 8 council members humesha ke liye apne dil me bandh ke chalenge. It was tough par at the end of the day, volunteers ko enjoy karta dekh sab worth it lagne lag gaya. As Kamal says and I quote, “Yehi baatein toh baadme yaad aayengi”. Pranali ka sabko taklu bulana, Tanisha ka chilla chillakar thak jaana, Aryan ka har jagah jaake tiffin khaana, Yash ka har cheez me bacchat karana, Mani ka hamesha mujhe bhajiya pav khaane leke jaana, Kamal ka SOM lab waala drama, Sumit ka daraane ke liye aankh dikhaana aur aakhir SABKA ek saath rehna. It is safe to say ki chaahe kuch yaad rahe na rahe, yeh cheeze hamesha rahengi. As this tremendously beautiful journey approaches it’s end on paper, I am proud to say that I would not have been the person I am today without NSS and everybody who has been a part of this journey with me. I am immensely grateful from the bottom of my very heart. “Once a volunteer, always a volunteer” they said, ab samajh aane lag gaya hai kyu. And in the very end, I would like to thank me, for believing in me. Teehee. So much love and gratitude, now and always. Jai Hind!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Council",
    },
    {
      name: "Maniprakash Shukla",
      Testimony:
        "JAI HIND! Tho chaliye shuru karte hai iss behtarin Safar ko.. Socha na tha ki NSS ke 2 saal mai pehla feedback idhar dunga!! Agar mai batau tho Mera recruitment itna hard nahi tha but maja bohot ayya n jo experience Mila vo shayad he kabhi milega.. Jin logo ko kabhi dekha bhi nahi Jin logo se kabhi Mila bhi nahi vo log ajj mere ek life a hissa baan chuke hai... Yeh hoti hai NSS ki 2 saal ki journey You make bonds with people and never lose them... Agar mai bolu ki NSS he hai jisne mujhe bohot kuch sikhaya tho vo bolna galat nahi hoga. Sojourn ke dance mai ek dum end mai khade hoke dance karne se leke next year he front mai dance karne ka Safar pura kiya hai.. ek year mai volunteer se leke dusre year mai council ka Safar bhi pura kiya hai. Jo level ka confidence ayya hai na life mai by God mujhe kabhi kabhi khud pe bharosa nahi hota hai ki kya yeh wahi Mani hai jisko bohot Ganda walla stage fear tha or jisko 10 logo ke samne bolne mai he halat kharab ho jati thi. But jab maine socha ki chalo abhi kisi body ka tho fissa bannte hai tho sabse pehle maine mere dost n mere senior n NSS ke council jo ki ek he insaan hai Chhakany usse pucha ki kya lu bhai batao jara tho bola ki NSS mai ajja sorted hai mai bola thik n recruitment mai ayya select(Meri selection hogayi hai? ) hua phir tho bhai online meet pe meet hue jaa rahe hai phir jab ek saal khatam hua tho socha ki abb tho council banne ka try karta hu usske liye bhi interviews diye bohot Sara drama hua phir mai baan Gaya Council (Meri selection hogayi hai?) Or haa Council banne ka Mera motto bhi bata deta hu baas yehi likhna tha NSS ki magazine pe ki(I never thought that my first NSS feedback would be here) n vo maine likh Diya hai tho baas abhi Shanti hai 😂. Phir mai mila Kamal baby, Sumit the bhojpuri partner, Aryan and Yash the Og duo, Charvi the Tutu, Tanisha begum and Pranali buddy jo gaane ke lyrics nahi bhulti & mai Mani from Nallasopara jisko hamesha Ghar jaldi Jana rehta hai kyu ki train mai bhid hoti hai bhai . Agar mai bolu tho NSS ka camp tho mai kabhi nahi bhulne walla vo 7 din khoshih bhi karlu tho bhi nahi bhulne walla and i hope Jo bhi NSS volunteers jo yeh padh rahe honge n jo camp gaye honge unka bhi yehi maana hoga. With the last motto of our TCET NSS UNIT ' Once a volunteer, always a volunteer ' ke sath mai apna Feedback yaha he samapt karta hu and Sabhi NSS volunteers ke liye mere taraf se bada walla . JAI HIND!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Council",
    },
    {
      name: "Pranali Shirsat",
      Testimony:
        "JAI HIND! Jab college aaye the toh pehle hee din se online batch hone ki wajah se koi khaas interest tha nahi kisi bhi cheez main lagta tha ki covid main hee engineering ke 4 saal nikal jaayenge aur basss engineering ke maze bas films main dekhne waala cheez reh jaayegi……… First year main bataya gaya the ki next year se clubs wagerah main participate kar paaaoge and sochte ki kaha jaaye tab tak second year aaa gaya and clubscommittees join karne ki last date nikal bhi gayi thi! Ananya ke saath basss decide kar liya ki yaaar abb chaahe joh club yaaa committee ka form circulate hoga basss fill karna hain!! And abbb isse luck kahe yaa kuch aur par ussi din NSS ka registration form aaya tha 3 Din ka recruitment sunke honestly bacckout karne ka mann kiya but College lie ke maze waala bhoot joh sarr pe the usne fil karwa hee diya form ! Recruitment se leke SE volunteer ka safar sabse khoobsurat the jaha ek time tha lagta tha kya log,kya dosti yeh sab toh abbb hone se raha se abbb dekho I have met the best people of my life and that’s all because of NSS.Woh ek saal as a volunteer ne bohot kuch sikhaaya and woh I’m sure hum main se koi nahi bhulega!! Bohot saari cheeze thi joh pehli baar ki thi chaahe who oldage home ka visit ho yaaa phir Traffic Signal pe khade hoke dance! Har ek project humesha khaas raha hain and itne logo se baate aur dosti agar aaj college main hain toh who NSS ki wajah se! Abb baat aati hain as a Council ki itna kuch second year main dekha tha and itna involved the NSS main toh bohot mann karta tha ki yaar Council banke ek baar toh yeh sab manage karna hain! Thanks to the wonderful SE volunteers for understanding and pyaari TE for supporting. Jab hum sab 8 pehli baar ek saath kaam karne lage the tab kisi ko kuch samajh nahi aata tha ki kya kare ek dusre ke saath kaise kaam kare but abbb pata chal gaya hain ki Tutu ki galat format dekhke OCD jaag jaati hain, Tanisha bichaari chilla chillake thakk gayi hain and abbb bohot chid machti hain use!! Mani toh jaisa nahi banna chaahta tha waisa bann gaya hain jispe use bhi vishwas nahi hota!! Yash bichaara finance ka file bana banake thakk gaya hain and Aryan ko basss jaldi ghar jaana hota hain! And finally, Kamla jaisa bolta hain ki “Yahi Toh Game Hain!!” pehle lagta tha ek saal kaise nikalega aur aaj as a Council apna last feedback likh rahi hoon. It’s been a journey of its own and grateful for things to unfold the way did!! Second year Pranali took a wise wise decision to fill that form and thank God she did! Hoping to have this NSS Family as an integral part forever because Once A Volunteer Always A Volunteer!! JAI HIND!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Council",
    },
    {
      name: "Sumit Upadhyay",
      Testimony:
        "JAI HIND! Mai apna feedback iss line se start karunga “JO KABHI NAHI KIYA VO NSS ME KIYA” life k sab se yaadgaar 2 saal. Ab feedback dena hai toh 1st day se start karna padega i.e recruitment ka din 😎 , pata toh kuch tha nahi NSS k bareme chala gaya online meet me time pass k liye online college tha aur karne k liye bhi kuch nahi tha, mujhe laga kuch boring sa recruitment rahega puchege tell me about yourself ye vo but kabhi nahi socha tha NSS ka recruitment kuch aisa hoga matlab sab se alag aur sab se best itne maje kiye aur dost bhi bann gaye, gaya tha time pass k liye but recruitment k baad aisa lag raha tha ki kaash select ho jaau aur ho bhi gaya aur NSS ki journey start hui. Join karte hi hamare TE ne darana chalu kiya councils k samne ache se rehna kuch galti nahi jo bhi bole sunna sab baat aur masti nahi karna, but online tha toh humko bhi bahot masti thi toh councils ne chillaya bhi bahot aur samjhaya and in few weeks sab line pe aagaye. Pehla saal toh aadha online nikal gaya but humlog bahot jada wait kar rahe the offline projects ka kyu ki aisa kuch kabhi nahi kiya tha life me, aur college khulte hi hue bhi offline projects and itne dost bane aur itne maje kiye kya batau, projects k baad extra samosa lena ye koi nahi bhulega but milta nahi tha vo alag baat hai kyu hi SE wale the hum but jo offline projects ka experience tha kabhi nahi bhoolega koi bhi, ye sab karte karte sojourn aagaya aur dance aata nahi tha aur kabhi kiya bhi nahi tha toh dekhne gaya tha practise but councils ne bola tu bhi karega (“Start majboori me kiya tha lenkin fir maja aane laga”) start me dar laga but fir dekha aur bhi gande dancers hai toh maja aane laga. Fir aata hai hamara 3rd year😎, councils k recruitment ka msg aaya toh soch ek try maar leta hu aur laga toh nahi tha banunga but bann gaya. Council banne k baad pata chala ki kitna hard hota hai ye sab manage karna, but hamare councils hamesha help karne k liye the best part is council experience jo sab ne share kiya aur usse bahot kuch seekhne mila. Aur ab aata hai NSS ka sab se best part jo ki 7 din ka camp hai, kisne socha tha ye 7 din life k sabse best moments me se ek hoge, itne maje kisi ne nahi kiye hoge, ye 7 din itna ache the ki ek baar wapis experience karna chahta hu mai, aur camp ki ek line jo koi nahi bhoolega i.e “RAATEIN BEET JATI HAI, YAADEIN YAAD AATI HAI !” ye poore college life ki one of the best memories me se ek hai. Aur hum sojourn ko kaise bhool sakte hai vo bhi 3rd year k matlab ghaghra pehen k jo naache hai sab ladke shyd hi kahi kiya hoga kisi ne once in life time experience hai jo aur kahi nahi milega and council dance isse sabse jada dar tha but ye bhi hogaya thanks to tanisha and pranali jinhone NSS dance me char chand laga diye.NSS join karne k baad bahot kuch sikhne mila aur bahot dost bhi bane aur bahot achi memories bhi. Aur bhi bolna hai lekin ek page ki limit hai so yahi khatam karta hu. Thank you NSS for everything, my journey with NSS has been a fulfilling one, and I am proud to have been a part of such a noble cause. JAI HIND !!!!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Council",
    },
    {
      name: "Yash Satale",
      Testimony:
        "JAI HIND! इस सफर में नीं द ऐसी खो गई, हम न सो ए रा त थक कर सो गई!❤️ NSS ka safar chahe 2 saal ka ho par zindagi bhar yaad rahega. Kaafi log NSS 10 marks ke lia join krte h pr mera case alag tha muze bs mere comfortzone break karke socialize hona tha islia NSS join kia. NSS ne pehechan di kal tak koi nhi janta tha muze aaj har koi janta. NSS ka safar NSS special recruitment se chalu hua jiske baaremien phele koi idea nhi tha exactly kya hota mere case mein recruitment kaafi light gaya may be because mein dekhta serious hu😂.Mera phela offline project vaccination drive se chalu hua tha jo utna acha nhi tha usmein humare super council aye the aur hum unhe jaante nhi the😅. First aur Second year online tha so rarely kuch dost the NSS mein aane ke baad itne dosto baane ki abh count tak yaad nhi. Life mein jo jo nhi kia tha sabh NSS mein aakr kia Dance se lekr ghaghra se lekar CAMP ki planning tak and to be specific iss saal ka Soujourn ka Dance life ka phela dance tha mera. NSS ka phela year toh almost pura online nikalgaya. Second year chalu hote hi Council ka interview dia jo kia haadse jyadha bura gaya tha. Par by god grace mein Council bangaya. Council bante hi phela change was Mein , Muze to Hum, Hume Council baane ke baad phela month was dm hectic as sabh offline open horaha tha aur sabh kaam pile up hone laga tha par dheere dheere sabh normalise hogaya. NSS mein aakar Saath Sitaro ka saath mila Humesha josh mein rhene waale Kamal ka , Humesha chill dude rhene waale Maniii ka , Humesha calm minded rhene waale Patil Boi ka, Humesha Full charge rhene waali Hey Comps! ka (Pranali)❤️ ,Humesha iphone se project ke photos click krne waali Tanisha ka, Humesha helmet lekar aane waale Sumit ka , Humesha Sobo vibes dene waali Charvu ka . Iss safar mein humare 8 ideals ko hum kabhi nhi bhulsakte Om, Khushi, Mayank, Priyanshu, Vaishnavi, Chhayank, Praveer, Rohit . NSS mein aakar actually letters, reports, files kaise banate hai vo sikha. NSS ne bhot saare naye dost, memories, experiences dia jo zindagi bhar kaam ayenge. NSS ne muze introvert se extrovert banadia. NSS ki journey ka sabhse best part hota NSS RESIDENTIAL CAMP jo iss saal hum finally gaye. Normally 75 volunteers jaate hai isbar hum 102 volunteers lekar gaye. Expectations se kaafi jyadha TE se support mila during the Camp. NSS Camp mein NSS FAMILY iss words ka actual meaning pata chala. Iss safar mein kaafi ups and down dikhe pr conclusion was that humesha koi na koi solution miljata tha. Yeh safar asani se kaatgaya kyuki sabh saath the UNITY thi aisi hi unity humesha maintain rahe. Aise hi TCET NSS UNIT desh ke prati apna yogdan dete rahe. Bas conclusion mein yaahi bolna chahunga jo legacy NSS ne itne saalose maintain ki hai vo humesha maintain rahe . JAI HIND !!!",
      image: fallback,
      year: "2021-23",
      branch: "Comp",
      post: "Council",
    },
    {
      name: "Jitesh Dubey",
      Testimony:
        "As an introvert, I always felt like an outsider among my peers. I preferred to spend time alone, watching movies, learning something new, or simply sitting quietly with my thoughts. Social situations made me uncomfortable, and I often felt like I didn't belong. That's when I decided to step out of my comfort zone and join NSS. During the projects, I found myself engaging in teamwork and collaboration, something I had always shied away from. Working with fellow volunteers on community projects became a catalyst for personal growth. I discovered the joy of contributing to something larger than myself. The experience of organizing and Participating in a range of activities, including cleanliness drives, visits to old age homes, blood donations, and The Sojourn Dance, within the NSS has afforded me diverse settings and opportunities. These experiences have contributed to the development of my ability to effectively balance my commitment to serving others with the pursuit of personal fulfillment and enjoyment. One of the most surprising aspects was the support and camaraderie I found among my fellow volunteers. The shared goal of making a positive impact brought us together, and I realized that I wasn't alone in my journey.Being part of NSS has been one of the most significant experiences in my life. I believe everyone should consider dedicating a small portion of their lives to helping others. In doing so, you lose nothing but gain a unique and fulfilling kind of happiness.",
      image: fallback,
      year: "2022-24",
      branch: "Comp",
      post: "Volunteer",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTestimony, setSelectedTestimony] = useState("");

  const handleReadMoreClick = (testimony, image, name, year, post) => {
    console.log("show testimonial");
    setSelectedTestimony(testimony, image, name, year, post);
    setModalVisible(true);
  };

  return (
    <>
      <div className="Testimonial-wrapper">
        <h1>Testimonials</h1>
        <div className="card_wrapper">
          {testimonial_cards.map((testimonial, index) => (
            <div key={index} className={`Testimonail-card`}>
              <div id="creator">
                <div id="image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="details">
                  <h1 className="name">{testimonial.name}</h1>
                  <p>
                    {testimonial.year} {testimonial.branch.toUpperCase()}
                  </p>
                </div>
              </div>
              <div>
                <img src={LeftQuote} alt="left quote" className="leftquote" />
              </div>
              <div id="testimony">
                <p>
                  {testimonial.Testimony.substring(0, 250)}
                  {"... "}
                  <span
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMoreClick(testimonial)}
                  >
                    Read More
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {modalVisible && (
        <Testimonialmodal
          onClose={() => setModalVisible(false)}
          testimony={selectedTestimony.Testimony}
          image={selectedTestimony.image}
          name={selectedTestimony.name}
          year={selectedTestimony.year}
          post={selectedTestimony.post}
        />
      )}
      </div>
      <Map />
    </>
  );
}
