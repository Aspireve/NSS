import React, { useEffect, useState } from "react";
import "../styles/projects/display.css";
import Book from "../assets/static_images/book-solid.svg";
import Heart from "../assets/static_images/heart-solid.svg";
import HeartPulse from "../assets/static_images/heart-pulse-solid.svg";
import UserGroup from "../assets/static_images/user-group-solid.svg";
import Earth from "../assets/static_images/earth-americas-solid.svg";
import MajorProjectsDisplay from "./ProjectMajorlist";
import MinorProjectsDisplay from "./ProjectMinorlist";
import SearchBar from "./ProjectSearchbar";
import SidebarHeader from "./ProjectSidebaeheader";
import FullImages from "../project_assets/full/index";
import Major_HD from "../assets/projects/index";
import Major_simple from "../assets/projects_reduced/index";

const major_projects = [
  {
    project: "Panch Pran Pledge",
    images: [...Major_HD.PachPran],
    reduced_images: [...Major_simple.PachPran],
    domain: "EDUCATION",
    quote: "A pledge is a promise, and promises shape destinies.",
    main: `The "Panch Pran Pledge" was taken by the TCET NSS Volunteers at Thakur College of Engineering and Technology, Kandivali (E). Our aim was simple: to inspire a strong sense of responsibility and love for our nation and its soil among the volunteers from the TCET NSS UNIT.
    During this project, TCET NSS Volunteers actively participated, showing their dedication to helping the community and taking care of the environment. We went beyond just talking about responsibility; we took actions to live more sustainably. As a thank-you gesture, certificates were given to recognize their efforts.
    This project taught us that positive changes happen when people work together and share the same values. It also helped us understand why it's so important to take care of our environment, especially the soil. TCET NSS Volunteers shared their thoughts and experiences, which was really helpful for everyone involved.
    In the end, the "Panch Pran Pledge" brought everyone closer. It showed that when we all work together, we can make a real impact on taking care of our environment. Despite some challenges, the commitment and excitement of the TCET NSS Volunteers, along with support from the college, give us hope for more positive changes.To uphold and expand this positive influence, ongoing education, and continued volunteer engagement.
    `,
    summary:
      "TCET NSS Volunteers embraced the 'Panch Pran Pledge' at Thakur College, inspiring responsibility and love for our nation. Active participation showcased dedication to community and environmental care, reinforcing that shared values lead to positive changes. The commitment of volunteers and college support fuels hope for more. Ongoing education and engagement aim to sustain this impact.",
  },
  {
    project: "Cardiac Arrest Seminar",
    domain: "EDUCATION",
    images: [...Major_HD.CardiacArrest],
    reduced_images: [...Major_simple.CardiacArrest],
    quote: "In the silence of a heartbeat, the story of survival begins.",
    main: `In the heart of Thakur College of Engineering and Technology, Kandivali, we gathered for the "Cardiac Arrest Seminar". Our aim was straightforward: to help everyone better understand cardiac arrests and heart attacks. This special project provided TCET NSS Volunteers with hands-on experience, letting them practise chest compressions and use an AED on dummy patients—a crash course in providing first-aid for heart-related emergencies.
    The outcomes were meaningful: TCET NSS Volunteers gained practical experience, learning how to perform chest compressions and understanding the differences between a Cardiac Arrest and a Heart Attack. This project not only boosted awareness but also formed a community of individuals ready to help in emergencies.
    As we concluded, a feedback session allowed TCET NSS Volunteers to share their thoughts, helping us continuously learn and improve for future projects. The "Cardiac Arrest Seminar" reflects our commitment to creating a community that knows how to respond in emergencies. We're empowering them to be the first responders, contributing to saving lives through simple yet effective knowledge of CPR and AED use. Join us in making our community resilient and prepared, one heartbeat at a time.
    `,
    summary: `The "Cardiac Arrest Seminar" conducted at Thakur College, aimed to enhance understanding. TCET NSS Volunteers practised chest compressions and AED use, gaining crucial first-aid skills. Beyond awareness, the seminar created a community ready for emergencies. This seminar aided continuous improvement, reflecting our commitment to a resilient community. Empowering them to respond effectively, TCET NSS Volunteers contribute to saving lives through CPR and AED use. Let's build a prepared community one heartbeat at a time.`,
  },
  {
    project: "Nutrition Awareness Webinar",
    domain: "EDUCATION",
    images: [...Major_HD.Nutrition],
    reduced_images: [...Major_simple.Nutrition],
    quote: "Fuel your body, feed your potential.",
    main: `Thakur College of Engineering & Technology in Kandivali hosts an engaging "Webinar on Nutrition" with a professional nutritionist speaker, a significant initiative to promote healthy dietary practices. The primary goal of this webinar is to provide positive food habits for overall well-being among our TCET NSS Volunteers. This webinar serves as a knowledge-sharing platform, where speakers and TCET NSS Volunteers discuss various aspects of nutrition, from understanding macronutrients to decoding food labels. The aim is not only to impart information but also to encourage practical application, fostering a culture of health-conscious decision-making.
    Beyond knowledge, the project seeks to build a communal understanding of the crucial role nutrition plays in our lives. It isn't just about theory; we aim to cultivate an environment where making healthy choices becomes second nature. The "Webinar on Nutrition" reflects our commitment to TCET NSS Volunteers' well-being, aiming for a sustained culture of informed nutritional choices. TCET NSS Volunteers not only gain new insights but also leave with a sense of responsibility to share this knowledge within their circles.
    As we look back on this transformative project, we acknowledge the importance of creating a society where informed nutritional choices are ingrained in daily life. The journey toward a healthier, well-nourished community is ongoing for the collective pursuit of well-being. Nutrition is more than just a topic of discussion but a daily practice—a foundation for a longer and healthier life for everyone.
    `,
    summary: `Thakur College of Engineering & Technology in Kandivali hosts an engaging "Webinar on Nutrition" with a professional nutritionist speaker, a significant initiative to promote healthy dietary practices. The primary goal of this webinar is to provide positive food habits for overall well-being among our TCET NSS Volunteers. This webinar serves as a knowledge-sharing platform, where speakers and TCET NSS Volunteers discuss various aspects of nutrition, from understanding macronutrients to decoding food labels. The aim is not only to impart information but also to encourage practical application, fostering a culture of health-conscious decision-making.`,
  },
  {
    project: "Organ Donation Awareness",
    domain: "EDUCATION",
    images: [...Major_HD.OrganDonation],
    reduced_images: [...Major_simple.OrganDonation],
    quote: "Your organs, their second chance.",
    main: `TCET NSS Volunteers conducted a vibrant Organ Donation Awareness project in our adopted village with the primary motive of enlightening villagers about the crucial significance of organ donation. The goal was to instil in volunteers a deep understanding and appreciation for this noble cause, fostering a sense of responsibility towards community health. Through this initiative, the volunteers aimed to dispel misconceptions and encourage a proactive approach to organ donation, thereby contributing to the well-being of the community.
    The project unfolded successfully, offering volunteers not only the opportunity to enhance their creative skills but also to build confidence in public speaking. Crafting visually appealing posters became a valuable learning experience, allowing volunteers to effectively convey information and awareness within the village. The motive was to empower volunteers with skills that extend beyond theoretical knowledge, providing them with practical tools to communicate important messages to the community.
    Volunteers not only gained insights into the importance of organ donation but also developed a heightened awareness of the broader impact it can have on community health. This project served as a powerful learning platform, illustrating that even small actions, like pledging to donate organs, can collectively make a significant difference. As a result, the organ donation awareness organised by TCET NSS UNIT initiatively stands as a testament to the positive and enriching experiences that can emerge when dedicated volunteers come together to promote health, awareness, and a culture of responsibility within a community
    `,
    summary: `TCET NSS UNIT organised an Organ Donation Awareness campaign which enhanced the skills of the volunteers and dispelled myths surrounding this crucial cause. This impactful initiative, highlighted by informative posters, not only fostered unity but also encouraged proactive organ donation. The positive experience proved beneficial for both volunteers and the community, contributing to lasting awareness about the significance of organ donation. Volunteers not only gained insights into the importance of organ donation but also developed the skill of creating visually appealing posters that effectively convey essential information.`,
  },
  {
    project: "Tree Plantation Drive",
    domain: "ENVIRONMENT",
    images: [...Major_HD.TreePlantaion],
    reduced_images: [...Major_simple.TreePlantaion],
    quote: `Sow the seed of change, secure a greener tomorrow`,
    main: `The TCET NSS UNIT's Tree Plantation Drive is one of their main projects where enthusiastic volunteers actively participate and contribute their part. The volunteers create catchy slogans on Tree Plantation, setting a positive tone for the day. The main focus of the project is to plant over 100+ saplings, demonstrating ongoing dedication to the environment. The volunteers are guided about the proper way to plant trees, gaining valuable skills and fostering teamwork.
    The project sought to educate both participants and the community about the crucial role of trees in environmental sustainability and climate change. Participants gain valuable collaborative experience, understanding the significance of trees in the urban environment. Feedback sessions gauge the volunteers' experiences and the effectiveness of the activity in raising awareness about Tree Plantation. Volunteers consistently provide attentive care to the plants and attention long after the initial planting.
    In essence, the TCET NSS Unit's Tree Plantation Drive is a yearly tradition showcasing the strength of regular collective action for environmental care. This effort doesn't just plant trees; it plants seeds of awareness and responsibility, ensuring a greener and more sustainable future each year.
    `,
    summary: `The TCET NSS Unit conducts an annual Tree Plantation Drive, recognizing trees as crucial and an important element for the environment. This initiative emphasises the importance of trees in maintaining a healthier planet. Volunteers actively participate, contributing to a greener future and fostering a collective commitment to environmental well-being.`,
  },
  {
    project: "Beach Cleanup Drive",
    domain: "ENVIRONMENT",
    images: [...Major_HD.BeachCleanUp],
    reduced_images: [...Major_simple.BeachCleanUp],
    quote: `Leave only footprints not plastic, let the waves of change begin`,
    main: `TCET NSS Unit's “Beach Cleanup Drive” is one of the major projects of the unit. Beaches are like a big playground for people, but they're not just for us. There's a whole secret world in the sand that we can't see—tiny creatures doing important stuff for the ocean.
    The project aims to safeguard beaches and oceans by organising beach clean-up. Volunteers collect plastic, including harmful items, raising awareness about responsible plastic use and promoting a cleaner environment for everyone.
    The project fosters environmental awareness, teamwork, and responsibility among volunteers. They learn hands-on skills like proper tree planting techniques and the importance of reducing plastic use. Engaging with communities, they spread awareness about preserving nature and creating a sustainable future.
    After collecting bags of plastic, they are given to the city cleaners. But it's not just about picking up trash. The volunteers also interacted with people about how to break down plastic, use less of it, and why it's bad for our oceans. We need to be smart about this and take care of our beaches.
    So, here's the deal: if we all pitch in, we can make a difference. Let's be the superheroes our beaches need. It's not just about cleaning up; it's about making sure we don't mess up in the first place. Together, we can keep our beaches happy and our oceans healthy!
    `,
    summary: `TCET NSS Unit's Beach Cleanup Drive is vital for a specific beach, aiming to remove trash and restore its beauty. The project underscores the harm of plastic waste on marine life. Volunteers gather plastic waste, addressing all forms of garbage that directly or indirectly impact nature and the beauty of the beach. Proper disposal and awareness-raising enhance environmental health. Active citizen participation is crucial for a healthier planet.`,
  },
  {
    project: "Swachhta Abhiyan",
    domain: "ENVIRONMENT",
    images: [...Major_HD.Swacchata],
    reduced_images: [...Major_simple.Swacchata],
    quote: `Trash in the bin, let the cleanliness win!"`,
    main: `"Swachhta Abhiyan" is like a special cleanliness drive at Mumbai University. Volunteers from TCET NSS UNIT work hard to clean up different areas in the university and nearby places. But they do more than just clean – they interact with other unit volunteers about why it's important to keep things clean and stay healthy.
    The aim of the volunteers is for everyone to understand why cleanliness is so crucial for our well-being. They don't just sweep and pick up trash; they also have conversations with other volunteers. They explain how being clean is directly connected to our health. Our  goal is not only to make a place look nice but also to make it a healthy and happy place for everyone.
    The TCET NSS Volunteers work with determination, using brooms and bags to make the university and its surroundings neat and healthy. They believe in spreading awareness and responsibility.Through interaction, they want to help everyone see the connection between cleanliness and a better, healthier life.
    The volunteers are not just cleaners; they are also teachers and advocates. The efforts aim to create a change in how this world thinks about cleanliness. The TCET NSS volunteers  want everyone to take pride in keeping their surroundings clean. Through their work in Swachhta Abhiyan, they hope to make a lasting impact on the community, encouraging everyone to value and prioritise cleanliness for a happier future.
    `,
    summary: `"Swachhta Abhiyan," a special Mumbai University initiative, has TCET NSS Volunteers cleaning specific areas in the university and nearby locations. Beyond cleaning, they engage with other volunteers to stress the importance of cleanliness and hygiene. Working diligently, the volunteers aim to create neat and healthy surroundings, fostering a habit of cleanliness for the well-being of all.`,
  },
  {
    project: "Paper Bag Making",
    domain: "ENVIRONMENT",
    images: [...Major_HD.Paperbag],
    reduced_images: [...Major_simple.Paperbag],
    quote: `Paper bag not plastic, a choice so fantastic!
    The first step was to raise awareness. The volunteers worked hard to spread the word among their own group and the people nearby. They wanted everyone to know that using recyclable paper is a smart choice for our planet. By interacting with people and sharing information, they hoped to create a ripple effect of understanding and change.
    As a result, TCET NSS volunteers made 2000+ paper bags showing immense strength of unity and togetherness. The project is a big example of showing that small actions towards a positive motive can lead to big results.
    Volunteers discovered the simplicity of crafting paper bags, realising anyone can easily make them at home for personal use.It's a vision of a cleaner environment and a more prosperous future. The volunteers at TCET NSS UNIT aren't just making bags; they're crafting a path towards a better, greener, and economically sound community. Because sometimes, the simplest choices can lead to the most fantastic outcomes!
    `,
    summary: `The Paper Bag Making Project by TCET NSS UNIT promotes sustainability by emphasising paper over plastic, reducing environmental impact. The volunteers not only learn to make paper bags but also realise the importance of using them over plastic bags. With an annual production of 2000+ bags by the volunteers. The project educates volunteers and the community on using paper bags, encouraging vendors to switch to  paper bags. It aims to raise awareness about the dangers of plastic, fostering a cleaner environment.`,
  },
  {
    project: "Eco Carry Drive : Paper Bag Distribution",
    domain: "ENVIRONMENT",
    images: [...Major_HD.EcoCarryBag],
    reduced_images: [...Major_simple.EcoCarryBag],
    quote: `Hold the earth, in bags of worth.`,
    main: `"Small acts, big impact: Together, we make our world cleaner and greener!" This powerful sentiment captures the essence of the TCET NSS UNIT's Eco-Carry Drive project. While it might seem like a simple effort, the distribution of more than 2000 paper bags that are made by the volunteers themselves, in the community carried a profound message about the harm caused by plastic and the positive change that small actions can bring to our environment.
    The TCET NSS volunteers, forming groups equipped with self-made posters and slogans advocating for the use of paper bags. These visual aids made it easy to explain why choosing paper over plastic is a better choice for our planet. The community response was heartening, people not only accepted the paper bags but also grasped the importance of steering clear of plastic. Some even shared the volunteers' view, recognizing the harm caused by plastic bags and pledging to avoid them.
    Beyond the distribution of bags, the project was a catalyst for community unity and improved communication skills among volunteers. While promoting the use of paper bags, it played a significant role in the ongoing battle against plastic waste. It served as a reminder of the vital task of educating our community about environmental care, especially during a time when collective efforts are crucial for protecting our planet.
    In a world where collaboration is key to safeguarding our environment, the TCET NSS UNIT's Eco-Carry Drive stands as a remarkable example of how ordinary people can come together to create a positive impact. It underscores the idea that when we unite our efforts, we have the ability to make our world cleaner and greener for the benefit of everyone.
    `,
    summary: `The Eco-Carry Drive by TCET NSS UNIT distributes paper bags from their annual paper bag-making project, offering an eco-friendly alternative and raising awareness about the harms of plastic. Volunteers utilise posters and slogans, fostering community unity and communication skills. Beyond bags, it's a collective effort against plastic waste, reminding us that together, we make our world cleaner and greener.`,
  },
  {
    project: "Booster Dose Vaccination Drive",
    domain: "HEALTH",
    images: [...Major_HD.BoosterDose],
    reduced_images: [...Major_simple.BoosterDose],
    quote: `Strength in unity, immunity in boosters.`,
    main: `The TCET NSS Unit was coordinating a comprehensive Booster Dose Vaccination Drive, recognizing the imperative of disseminating information to maximise participation. The initiative began with an extensive awareness campaign, where volunteers visited every class, adhering to COVID Standard Operating Procedures (SOPs). Concurrently, messages were strategically broadcasted across official college groups, ensuring broad visibility and participation. Subsequently, the drive itself unfolded, with NSS Volunteers diligently ensuring its success while strictly adhering to COVID SOPs.
    During the drive, both faculty and students were assigned designated positions, emphasising the mandatory wearing of masks throughout the event. Recognizing the importance of personal health, volunteers were encouraged to avail themselves of the vaccine, particularly the Booster Dose, in alignment with the Government of India's announcement. Remarkably, all eligible volunteers seized this opportunity, contributing to the overall success of the vaccination drive.
    Among the ongoing pandemic and escalating COVID cases, the Government of India's proactive announcement of the Booster Dose aimed at fortifying primary immunity gained from initial vaccinations. The TCET NSS Unit, responsive to this call, organised a Free Booster Dose Vaccination Drive. This initiative transcended individual well-being, representing a collective effort to combat the relentless spread of the COVID virus within the institute. The successful execution of the drive not only enhanced the immunity of participants but also underscored the significance of collective responsibility.Volunteers noted enhanced well-being after receiving the booster, affirming the effectiveness of the drive and its crucial role in mitigating the ongoing impact of the pandemic at the institute.
    `,
    summary: `The TCET NSS Unit orchestrated a comprehensive Booster Dose Vaccination Drive, commencing with an awareness campaign in classes and online platforms, following COVID SOPs. Messages were disseminated across official college groups for maximum reach. The subsequent drive involved meticulous planning by NSS Volunteers, ensuring strict adherence to COVID SOPs, with designated positions and mandatory mask-wearing. In response to the Government of India's booster dose announcement, the unit organised a successful Free Booster Dose Vaccination Drive, contributing to the ongoing battle against the escalating COVID cases.`,
  },
  {
    project: "Raktdaan Se JeevanDaan : Blood Donation Camp",
    domain: "HEALTH",
    images: [...Major_HD.BloodDonation],
    reduced_images: [...Major_simple.BloodDonation],
    quote: `Be bold, donate gold - your life-saving blood, so untold.`,
    main: `The TCET NSS UNIT organises a significant Blood Donation Camp at the Thakur College of Engineering and Technology, Kandivali (E). The project aims to highlight the importance of regular blood donation, emphasising its crucial role in reducing mortality rates and fostering a collective sense of unity, compassion, and social responsibility.
    Enthusiastic volunteers actively participate contributing to the seamless execution of the project. The volunteers handle registration and certification, maintain discipline, and assist doctors during the camp.
    100+ donors generously donate blood, demonstrating the success of the project in encouraging community participation. The learning objectives were met as volunteers are educated about blood donation protocols and learn about the significant impact of their contributions on society's health and well-being. Feedback from volunteers reveal the effectiveness of communication and the importance of active participation.
    A feedback session further enhanced the understanding of volunteers' experiences. The project not only engages the community but also encourages personal responsibility, making a positive and lasting impact on society's well-being. It highlights the significance of collective efforts in contributing to a noble cause and underscore the vital role of the TCET NSS UNIT in community welfare.
    `,
    summary: `The TCET NSS UNIT organised an impactful Blood Donation Camp at Thakur College of Engineering and Technology, Kandivali(E). 100+ donors actively participate in the enthusiastic volunteers in various roles. The project aims to create awareness about regular blood donation, educate on timely access, and foster a sense of unity and social responsibility. Feedback highlights the effective communication and active participation, emphasising the positive impact on society's well-being`,
  },
  {
    project: "Free Medical CheckUp Camp",
    domain: "HEALTH",
    images: [...Major_HD.MedicalCamp],
    reduced_images: [...Major_simple.MedicalCamp],
    quote: `Check your health, boost your wealth.`,
    main: `TCET NSS volunteers actively engaged in disciplined volunteering during the Medical Checkup camp. Various groups were assigned distinct tasks, showcasing the versatility of their roles. Some volunteers guided teachers through the process, ensuring a smooth flow, while others focused on confirming signatures, a crucial aspect of maintaining order. While discipline volunteering is a familiar aspect of TCET NSS events, what set this camp apart was the unique dynamic of exercising discipline among teachers.
    The motive behind this disciplined volunteering was to contribute to the efficiency and organisation of the Medical Checkup camp. By coordinating with teachers, volunteers aimed to create a well-structured environment, ensuring that the camp ran seamlessly. This experience allowed volunteers to understand the importance of discipline not only in managing attendees but also in collaborating with educators, emphasising the role of teamwork in the success of such community-oriented initiatives.
    In this particular volunteering endeavour, TCET NSS volunteers learned that discipline is a multifaceted concept. Beyond maintaining order among attendees, it involves collaborating with other stakeholders, such as teachers, to ensure the event's success. This unique perspective reinforced the idea that discipline extends beyond individual actions and requires coordinated efforts among volunteers and educators alike. The experience served as a valuable lesson in teamwork, adaptability, and the broader impact of disciplined volunteering in community service initiatives.
    `,
    summary: `TCET NSS volunteers took part in disciplined volunteering at a Medical Checkup camp, handling various tasks like guiding teachers about the process and confirming signatures. Unlike usual events, here, discipline extended to coordinating with teachers. The motive was to ensure camp efficiency and organisation. The learning emphasised the importance of teamwork and adaptability in disciplined volunteering, showing that maintaining order involves collaboration beyond managing attendees.
    `,
  },
  {
    project: "Fit India Movement : Fitness Activity",
    domain: "HEALTH",
    images: [...Major_HD.FitInida],
    reduced_images: [...Major_simple.EcoCarryBag],
    quote: `Step up, stay fit - that's the Fit India spirit.`,
    main: `TCET NSS Unit took a proactive step in promoting health and fitness by organising a Fitness Activity aligned with the Fit India movement. The primary motive behind this initiative was to encourage volunteers and the community to embrace a healthier lifestyle. The session commenced with invigorating warm-up exercises, setting the tone for a holistic fitness experience.
    Volunteers actively participated in various yogic exercises like Tadasana and Savasana, focusing on enhancing physical flexibility and strength. An essential aspect of the session was the incorporation of meditation, a practice known to boost mental well-being. This highlighted the importance of not only physical fitness but also the profound impact of exercises on mental health, emphasising a balanced approach to overall well-being.
    As the fitness session drew to a close, volunteers engaged in chill-out exercises designed to promote relaxation. The learning from this initiative extended beyond the physical aspect of fitness. Volunteers gained insights into the interconnectedness of physical and mental health, recognizing the importance of a well-rounded approach to staying healthy. Overall, the fitness activity served as a reminder that incorporating simple exercises, meditation, and relaxation into daily routines can contribute significantly to a healthier and more balanced lifestyle, aligning with the ethos of the Fit India movement`,
    summary: `TCET NSS Unit organised a fitness activity aligning with the Fit India movement. Starting with warm-up exercises, volunteers engaged in various yogic practices. The session incorporated meditation to enhance mental well-being. The fitness activity concluded with chill-out exercises for relaxation. The learning from this initiative is the holistic approach to well-being, combining physical and mental fitness. The simple exercises emphasised the importance of a balanced routine for overall health and vitality.`,
  },
  {
    project: "Mahashivratri- Old Age Home Visit",
    domain: "SOCIETY",
    images: [...Major_HD.MahaShiv],
    reduced_images: [...Major_simple.MahaShiv],
    quote: `Every wrinkle tells a story.`,
    main: `The TCET NSS Unit collaborates with NGOs to organise visits to old age homes, uniting volunteers in a shared mission. Their simple aim is to bring joy to the elderly residents and alleviate feelings of loneliness. Through engaging activities like games, songs, and dance, volunteers create special moments that make the seniors' days brighter.
    These visits represent a modest but impactful effort to uplift the lives of the elderly. Beyond spreading happiness, volunteers gain valuable insights. They witness firsthand the challenging conditions the seniors endure, fostering a realisation of their own privileged lives. This awareness serves as a reminder of gratitude and empathy.
    The impact extends beyond the elderly residents and volunteers. It cultivates personal growth, nurturing a heightened sense of social responsibility. These visits contribute to building a compassionate and interconnected community, where individuals appreciate and care for the well-being of their older members. The ripple effect continues, creating a positive cycle of kindness and understanding. Through these small acts, the TCET NSS Unit and its volunteers are actively shaping a more compassionate and empathetic society, one visit at a time.`,
    summary: `The TCET NSS conducts "Mahashivratri-Old Age Home Visit" annually on the occasion of Mahashivratri for senior citizens. Several volunteers oversee the visit, during which volunteers spend time with the seniors, offering companionship and support.Volunteers visit old age homes to spend time with senior citizens, engaging in activities such as games, music, and dance. This small effort not only brightens the seniors' days but also allows volunteers to learn and understand the challenges these individuals face. It provides a valuable perspective on the less fortunate situations many elderly individuals find themselves in.`,
  },
  {
    project: "Tiranga Rally",
    domain: "SOCIETY",
    images: [...Major_HD.Tiringa],
    reduced_images: [...Major_simple.Tiringa],
    quote: `Tiranga, a symbol of strength, unity, and the spirit of a proud nation.`,
    main: `The Mumbai University hosted an uplifting Tiranga rally in celebration of India's 75th independence anniversary, part of the Azadi ka Amrit Mahotsav. Known as "Har Ghar Tiranga," the campaign encourages everyone to bring the national flag home and proudly hoist it.Starting from the Sports Complex, Kolivery Village-Mumbai University and covering a 2-kilometre route through various points on campus, the rally involved enthusiastic volunteers from each unit. The participants, filled with energy, carried Tirangas and banners, creating a colourful spectacle symbolising unity and pride.
    The event concluded in the evening marking a total success. Participants expressed joy and fulfilment, having celebrated and learned more about the significance of Azadi ka Amrit Mahotsav. This initiative aligns with the principles of Atmanirbhar Bharat, emphasising self-reliance.Azadi Ka Amrit Mahotsav, translated to the "Elixir of energy of independence," is a tribute by the Indian government to those who significantly contributed to the country's progress.
    As India commemorates its 75th year of independence, events like the Tiranga rally serve as vibrant reminders of unity, patriotism, and the journey towards a self-reliant and prosperous nation. The simplicity of hoisting the Tiranga at home becomes a powerful symbol of individual contributions to the collective narrative of a free and thriving India. The enthusiasm and energy displayed by the participants highlight the deep-rooted connection people have with their country, making Azadi ka Amrit Mahotsav a truly memorable and unifying experience.`,
    summary: `The Mumbai University organised a Tiranga rally as part of the Azadi ka Amrit Mahotsav celebration. The "Har Ghar Tiranga" campaign encourages people to bring the Tiranga home and hoist it for India's 75th independence anniversary. The rally, covering 2 kms, featured energetic volunteers with Tirangas and banners. The event concluded successfully in the evening, fostering joy and awareness about Azadi ka Amrit Mahotsav's significance.`,
  },{
    project: "Rakhi Selling Drive",
    domain: "SOCIETY",
    images: [...Major_HD.RakhiSell],
    reduced_images: [...Major_simple.RakhiSell],
    quote: `Bamboo knots, connecting lives in lots.`,
    main: `TCET NSS Unit hosts Rakhi Selling Drive, spotlighting the beauty of cultural celebration and community support. The project extends beyond selling rakhis, it is a call for awareness and a step towards a brighter future for tribal women and underprivileged children. The unique aspect is that these rakhis are handcrafted by the very communities benefiting from the sales, embracing sustainable traditions and local empowerment.
    This initiative aims to emphasise why handcrafted bamboo rakhis that are made by tribal women and underprivileged children hold more significance than factory-made ones.The TCET NSS volunteers sell these rakhis at prices determined by the tribal women themselves. It is a blend of caring for society and the environment. Each rakhi narrates a story, and every sale contributes to the well-being of tribal women and underprivileged children.
    For our volunteers, the Rakhi Sale Drive isn't just about selling 500+ bamboo rakhis, it is a journey of personal growth. It fosters teamwork, responsibility, and heightens awareness of societal needs.
    Ultimately, the Rakhi Sale Drive exemplifies how young individuals can revive traditions, create meaningful impacts, and embody the values of the National Service Scheme (NSS). This project signifies that small steps, when taken together, lead to significant and meaningful changes, aligning with the moto of NSS and contributing to a better society.`,
    summary: `The TCET NSS UNIT organises a Rakhi Selling Drive, showcasing how young people can celebrate their culture and support the marginalised. Beyond selling handcrafted bamboo rakhis made by tribal women, the project aims to raise awareness about their importance and promote sustainability. Volunteers learn valuable lessons about teamwork and responsibility, demonstrating that small steps for a good cause can create meaningful changes in society.`,
  },{
    project: "Selfie With Tiranga",
    domain: "SOCIETY",
    images: [...Major_HD.Selfie],
    reduced_images: [...Major_simple.Selfie],
    quote: `Picture your patriotism, share the love.`,
    main: `TCET NSS UNIT's "Selfie with the Tiranga" initiative is all about spreading love for our country and deepening historical awareness. This online event invites volunteers like you to express your patriotism by taking selfies with the national flag. It's a unique way for us to come together and celebrate India's independence, contributing to the Azadi ka Amrit Mahotsav theme.
    The project included only one thing: taking a selfie with the Tiranga. We believe that this small act can make a big impact.
    TCET NSS volunteers, guided by a strong sense of responsibility and love for our nation, actively participated in the project. It's not just about taking a selfie - we want you to think about the historical significance of India's struggle for independence. Many volunteers have shared that this initiative has deepened their connection to the nation, increased their respect for past struggles, and filled them with pride.
    Our project has been a success, evident in the increased love for our country, stronger community bonds, and a shared commitment to celebrate India's independence. We've found strengths in patriotic engagement and community building, with opportunities for education and awareness. Our initiative aligns perfectly with the Azadi ka Amrit Mahotsav theme, showcasing the power of online efforts to foster pride and unity. Even in the digital realm, simple acts like taking a selfie contribute meaningfully to celebrating India's rich history and independence. These initiatives are small yet significant steps in our journey of love, unity, and reflection on our incredible past!`,
    summary: `The "Selfie with the Tiranga" project by TCET NSS UNIT aimed to make people love their country and understand its history. Volunteers took selfies with the national flag online, showing their love for India. This project brought people together and made them celebrate India's independence. It fit well with the Azadi ka Amrit Mahotsav theme, proving that online events can make people proud and united.`,
  },{
    project: "Talk with the City",
    domain: "SOCIETY",
    images: [...Major_HD.TalkWithCity],
    reduced_images: [...Major_simple.TalkWithCity],
    quote: `When the voices connect, the problems dissect.`,
    main: `The TCET NSS conducted the "Talk with the City" project, a proactive effort to connect with the community and comprehend their challenges. Venturing into Singh Estate, Thakur Village kandivali(East) which is adopted by TCET NSS UNIT, volunteers formed groups to engage residents with a thoughtful questionnaire. This direct interaction aimed to uncover the daily struggles faced by the community. Discussions extended beyond identifying problems as TCET NSS volunteers actively delved into dialogues to explore potential solutions. 
    The motive behind the project was rooted in fostering a deeper understanding of the issues prevalent in the adopted village. By approaching residents with a structured questionnaire, the volunteers aimed to give voice to their concerns and create a platform for open dialogue. The goal was not only to identify problems but also to establish a collaborative effort where solutions could be discussed and implemented. 
    One of the significant learnings from the "Talk with the City" project was the power of direct engagement in community service.Through these interactions, volunteers learned firsthand about the daily struggles and challenges faced by ordinary people, gaining valuable insights into their lives and experiences. Volunteers gained valuable insights into the nuanced challenges faced by the residents, allowing for more targeted and effective problem-solving. The project highlighted the importance of empathy, communication, and community involvement in creating positive change.`,
    summary: `TCET NSS Unit initiated the "Talk with the City" project, focusing on understanding the challenges faced by people. Volunteers visited Singh Estate, Thakur Village kandivali(East) which is adopted by TCET NSS UNIT, dividing into groups to gather insights through a prepared questionnaire. Engaging in discussions, they not only identified problems but also offered solutions and the struggles faced by the common people. The project emphasised community interaction and problem-solving. A key learning was the importance of direct communication in comprehending and addressing local issues effectively.`,
  },{
    project: "Back2School : Best out of waste workshop",
    domain: "SOCIETY",
    images: [...Major_HD.BackSchool],
    reduced_images: [...Major_simple.BackSchool],
    quote: `Recycle, create, innovate.`,
    main: `TCET NSS Unit organises the "Best out of Waste workshop", showcasing the transformative potential of waste by creating both visually pleasing and practical items. Volunteers, organised into groups, take their ingenuity to local schools. Here, they collaborate with students, imparting the skill of repurposing waste materials into useful products. This interactive approach not only instils the art of recycling but also underlines the significance of reusing resources to reduce environmental impact. 
    The motive behind this project is twofold: first, to demonstrate the creative possibilities inherent in items considered as waste, and second, to impart the crucial lessons of recycling and reusing to the younger generation. By engaging with students directly, the project aims to foster an early understanding of the importance of responsible waste management. Through hands-on activities, students not only witness the process of crafting useful items but also comprehend the broader message of environmental sustainability. 
    An essential learning from this initiative is that waste can be repurposed to create valuable resources. Through creativity and collaboration, seemingly discarded materials find a new lease on life as functional and visually appealing products. This project not only contributes to environmental consciousness but also strengthens the sense of community by donating the crafted items to the TCET NSS adopted village. It serves as a reminder that small, mindful actions can collectively make a significant impact in promoting a sustainable and responsible approach to waste management`,
    summary: `TCET NSS Unit conducts the "Best out of Waste" project, illustrating the transformation of waste into both beautiful and practical items. Volunteers, grouped with diverse creative ideas, visit schools, crafting these products alongside students. This hands-on approach not only teaches the art of recycling but also emphasises the importance of reusing materials. The created items, showcasing the power of recycling, are generously donated to the TCET NSS adopted village, promoting sustainability and community engagement. The learning here is clear: waste can be a valuable resource with a little creativity and effort.`,
  },{
    project: "Kite Making",
    domain: "SOCIETY",
    images: [...Major_HD.KiteMaking],
    reduced_images: [...Major_simple.KiteMaking],
    quote: `Crafting dreams into the sky, one kite at a time.`,
    main: `The TCET NSS Unit organises a memorable kite-making project at a local primary and secondary school to celebrate the festival of Makar Sankranti. The initiative aims to not only engage the students in a creative activity but also impart valuable skills and foster teamwork. The volunteers took the lead in teaching the students the steps of crafting a kite, from selecting materials to assembling the pieces.
    Dividing the students into groups, the volunteers distribute the necessary materials, offering guidance and support throughout the entire process. The collaborative atmosphere during the project promotes teamwork among the students, creating a positive and enriching environment.
    Once all the kites were completed, a collective effort unfolded as students and volunteers gathered to fly their creations. Beyond the joy of kite-flying, the project left a lasting impact on both volunteers and students. It showcased the power of hands-on learning and the potential for creativity to serve as a tool for education and community building. The experience not only brought a tangible outcome in the form of flying kites but also left behind a sense of accomplishment, shared memories, and a strengthened bond among all those involved.`,
    summary: `The TCET NSS unit organises a kite making project for the primary and secondary school to celebrate the festival of Makar Sankranti with them. They guide students through the entire kite-making process, dividing them into groups and providing materials. After crafting their kites, both students and volunteers gathered to fly them, turning the activity into a collaborative and educational experience.`,
  },{
    project: "Joy of Giving Week : Donation drive",
    domain: "SOCIETY",
    images: [...Major_HD.JoyGive],
    reduced_images: [...Major_simple.JoyGive],
    quote: `Give a little, change a lot.`,
    main: `The TCET NSS Unit organises a heartwarming "Joy of Giving Week" that transcends the boundaries of the college to reach remote villagers in need. Faculty, students, and staff enthusiastically participate, contributing a diverse array of items including toys, clothes, food packages, and books. 
    These vibrant boxes symbolised the collective spirit of generosity that was brewing within the college community. Students and faculty embraced the opportunity to make a positive impact, recognizing the privilege of being able to give back to those less fortunate.
    The NSS volunteers play a crucial role in not only coordinating the logistics but also in spreading awareness about the campaign. Their efforts motivate and inspire others to actively participate in the Joy of Giving Week. The act of giving becomes a shared experience, binding the college community together in a common purpose beyond academic pursuits.
    The donation boxes overflowed with contributions, reflecting the compassion and empathy of the TCET community. The Joy of Giving Week not only addressed the material needs of the recipients but also sowed the seeds of compassion, unity, and social responsibility within the hearts of everyone involved.`,
    summary: `The TCET NSS Unit organises a Joy of Giving Week, during which college faculty, students, and staff generously donate items like toys, clothes, food packages, and books. The week-long initiative aims to collect essentials for remote villagers in need. Active participation from the college community results in boxes filled with donations.`,
  },{
    project: "Sow the seed of change:  Debate Activity",
    domain: "SOCIETY",
    images: [...Major_HD.SeedChange],
    reduced_images: [...Major_simple.SeedChange],
    quote: `Debate: where words clash and ideas ignite.`,
    main: `The TCET NSS Unit "Sow the seed of change'' initiative under Meri Mati Mera Desh theme, is considered as a commendable effort to not only spread awareness but also instigate change and advocate for environmental responsibility. Enthusiastic volunteers actively participate, showcasing their perspectives and share their point of views on various critical topics.The volunteers are divided into groups, each engaged in a debate, offering insights on issues like India's independence and the practice of dowry etc.
    The project provides a platform for volunteers to articulate their views, improving communication and argumentative skills through this debate. It facilitates critical thinking, enabling participants to analyse each point thoroughly. A crucial aspect was the feedback analysis, gauging the participants' experiences and determining the project's impact on their awareness and understanding of the raised issues.
    The "Sow the seed of change" initiative by the TCET NSS Unit reflects a commitment to environmental responsibility and community engagement. Despite challenges, the project's strengths and opportunities form a robust foundation for its ongoing success, fostering a sense of responsibility towards nature and driving positive change within the community.`,
    summary: `The TCET NSS Unit "Sow the seed of change” initiative under Meri Mati Mera Desh theme, aims to raise environmental awareness and instigate change. Through engaging debates on different topics, volunteers explore their critical thinking, communication skills, and their ability to analyse complex issues, fostering intellectual growth and community engagement through participating in these debates.`,
  },{
    project: "(MU) De Addiction Rally",
    domain: "SOCIETY",
    images: [...Major_HD.AddictRally],
    reduced_images: [...Major_simple.AddictRally],
    quote: `A collective journey towards a brighter, addiction free future.`,
    main: `The Nasha Mukti Rally, organised by the Mumbai University, unfolds at Azad Maidan in Churchgate, Mumbai. The volunteers, carrying posters and compelling slogans against tobacco, alcohol, and cigarettes, filled the bustling streets. Their vibrant chants resonate, capturing the attention of the people and conveying a powerful message promoting a healthier, addiction-free lifestyle.
    Advancing towards the Gateway of India, government officials stage a thought-provoking skit. This provides a conducive setting for open discussions and idea exchange. Beyond being a demonstration against addiction, the rally evolves into a platform fostering connections and community among participants.
    The ripple effect was palpable as individuals were inspired to share their knowledge with their communities, contributing to a broader movement against addiction. The Nasha Mukti Rally stands as a remarkable display of unity, collective determination, and a strong belief in a future free from addiction's shackles. It leaves an enduring impact, catalysing positive change in society.`,
    summary: `The Mumbai University organises a “Nasha Mukti Rally” at Azad Maidan in Churchgate, Mumbai. Enthusiastic students aim to spread awareness about addiction dangers. The rally moves to the Gateway of India, where government officials perform a skit illustrating addiction's harsh realities. Participants pledge to live substance-free, promoting unity and a commitment to raise awareness. The project ends positively, with participants leaving motivated to make a difference.`,
  },{
    project: "(MU) Ganpati Visarjan",
    domain: "SOCIETY",
    images: [...Major_HD.Visarjan],
    reduced_images: [...Major_simple.Visarjan],
    quote: `In the waters of farewell, Ganpati's blessings linger.`,
    main: `The TCET NSS Unit conducts a Ganpati Visarjan Volunteering project, held at Thakur Village,Kandivali (E) on the 3rd, 5th, 7th and 11th day of Ganpati Visarjan. The primary objectives are to ensure the safe and smooth immersion of Ganpati idols, managing traffic and safety in the process.
    The project demonstrates that positive change is achievable through collaboration and shared values. Volunteers recognized the significance of considering the unique needs and circumstances of different regions and communities when designing and implementing management skills. The importance of community involvement and the collective impact of such efforts on society became evident.
    Feedback from volunteers is collected to understand their experiences, ensuring the project's effectiveness in increasing awareness and knowledge about management skills during volunteering.
    The outcomes were tangible, with volunteers actively assisting in lifting Ganpati idols, gaining valuable experience in managing traffic and crowds. The Ganpati Visarjan Volunteering project by the TCET NSS Unit not only contributes to the success of the event but also promotes community unity, cultural preservation, and environmental responsibility. The experience enriches the volunteers with valuable life skills, strengthening community bonds, and raising awareness about cultural traditions and sustainability.`,
    summary: `The TCET NSS Unit successfully organises a Ganpati Visarjan Volunteering project, ensuring safe and orderly idol immersion. With a focus on traffic and crowd management, volunteers displayed dedication to community service. Positive feedback highlighted increased awareness about management skills and the importance of collaborative efforts. Its main aim was to manage the traffic and ensure safety during the overall process.`,
  },{
    project: "Amrit Kalash Yatra",
    domain: "SOCIETY",
    images: [...Major_HD.AmritKalash],
    reduced_images: [...Major_simple.AmritKalash],
    quote: `Unity and diversity, a pot filled with the richness of togetherness.`,
    main: `The TCET NSS UNIT embarked on a meaningful journey with the project "Amrit Kalash Yatra,".This initiative aims to educate and unite on the importance of Amrit Kalash and the significance of soil in our environment.
    The objective is to symbolise unity by collecting soil from various regions, creating an Amrit Kalash—a visual representation of unity in diversity within the people. All members, including students and faculty, actively contribute soil from their places, emphasising the project's well-organised and disciplined execution by NSS volunteers. 	
    The project successfully fosters a sense of unity and community. NSS volunteers play a crucial role in educating participants about the cultural and symbolic significance of the Amrit Kalash. The feedback session further ensures a comprehensive understanding of the project's impact before its conclusion.
    The "Amrit Kalash Yatra" is an awareness initiative, strengthening community bonds. It highlights the significance of tradition, how art, in the form of the Amrit Kalash, spiritually and culturally connects us all.`,
    summary: `The TCET NSS UNIT successfully organises a "Amrit Kalash Yatra" focusing on the creation of Amrit Kalash to raise awareness about soil's environmental significance. The project emphasises the power of visual representation, effective communication, and community-building initiatives.`,
  },{
    project: "Road Safety and Traffic Management",
    domain: "SOCIETY",
    images: [...Major_HD.TrafficManage],
    reduced_images: [...Major_simple.TrafficManage],
    quote: `Guiding traffic, steering safety - a community in motion.`,
    main: `The TCET NSS UNIT's "Road Safety and Traffic Management" project at Mahindra Gate, Kandivali (E), went beyond a typical awareness campaign. It aimed to make roads safer by educating people about following traffic rules, wearing helmets, and using seat belts.
    The project organised volunteers into groups to create catchy slogans and posters. These materials were then displayed at red traffic signals, making them effective tools for spreading awareness. The project's adaptability to real-time traffic conditions received praise from the Traffic Police.
    With support from the Mumbai Traffic Police, the project played a significant role in increasing awareness about road safety. Volunteers created 30-40 posters, placards and slogans, demonstrating the community's active involvement in promoting safer roads.
    The main goals were to educate people about traffic rules and emphasise the importance of helmets and seat belts. Despite facing challenges, the collaboration with the Mumbai Traffic Police became a model for future initiatives. The project's success is a testament to how collective efforts and community participation can truly make a lasting impact on road safety, serving as inspiration for others.`,
    summary: `The TCET NSS UNIT organises a "Road Safety and Traffic Management" project at Mahindra Gate, Kandivali(E). In collaboration with the Mumbai Traffic Police, the  volunteers created around 30-40 posters, placards  and slogans to raise awareness about the traffic rules, helmets, and seat belts. The initiative, marked by flexibility and real-time adjustments, effectively engaged the community and demonstrated the impact of collaborative efforts in enhancing road safety. The main objective of this project was to make people aware about the importance of following traffic rules.`,
  },{
    project: "MatDaan se YogDaan : Voter Id Registration",
    domain: "SOCIETY",
    images: [...Major_HD.MatDaan],
    reduced_images: [...Major_simple.MatDaan],
    quote: `A small card, a big voice - let every citizen be heard.`,
    main: `The TCET NSS Unit's project for registering voter IDs at Thakur College of Engineering and Technology in Kandivali (E) shows a strong commitment to getting people involved in their community and participating in the democratic process. The main goals were to make sure people understand why having a voter ID is important and to support a fair and democratic election system.
    The volunteers helped about 100+ people register for their voter IDs. The college faculty, students, and other staff members get themselves registered to obtain their voter ID. This not only achieved the main goal but also made the volunteers feel more connected as a group and improved their communication skills.
    It emphasised the importance of civic responsibility and active participation in the democratic process. Through this initiative, volunteers connected with their local community and encouraged discussions about governance and policy matters. The feedback analysis was conducted to understand volunteers' experiences, further highlighting the positive impact of the project in increasing awareness regarding the importance of voter IDs.
    The TCET NSS Unit's voter ID registration project demonstrates a commitment to both civic responsibility and education, achieving tangible outcomes in the form of 100+ registered voter IDs every year. The project's success, coupled with the valuable learning experiences for volunteers, positions it as a commendable initiative promoting democratic values and community engagement.`,
    summary: `The TCET NSS UNIT volunteers embraced the voter id registration at the Thakur College of Engineering and Technology, Kandivali (E). Our main goal was to make people aware about the importance of having a voter id and to promote a fair and democratic electoral system. Enthusiastic volunteers actively participated in the project and contributed their part.Volunteers provided adequate assistance to those who had come to make their voter id. It increased more awareness regarding the importance of having a voter id card. It emphasised on the significance of participating in the democratic process, showcasing your role as a responsible citizen.`,
  },{
    project: "(MU) Gandhi Jayanti Bhajan Sandhya ",
    domain: "SOCIETY",
    images: [...Major_HD.Gandhijaynati],
    reduced_images: [...Major_simple.EcoCarryBag],
    quote: `Harmonising culture, echoing Gandhi's values.`,
    main: `TCET NSS volunteers experienced a delightful evening at the Bhajan Sandhya held at the Gateway of India, Mumbai. The atmosphere was filled with the melodious tunes of bhajans sung by special guest singers, creating a spiritual and cultural environment. The event showcased a variety of bhajans from different parts of India, highlighting the richness of our cultural heritage.
    Importantly, the event was not just about music, it also aimed to instil the values advocated by Mahatma Gandhi. Through stories from his life, such as the Salt March to Dandi, the event emphasised principles like non-violence, truthfulness, and kindness. These values were not only a tribute to Gandhi but also served as valuable life lessons for all the volunteers.
    Aligned with the morals of the NSS, the Bhajan Sandhiya event reinforced the principles of community service and social responsibility. Participants learned that cultural events like these could be powerful platforms for imparting meaningful values. The event concluded with a collective pledge where everyone committed to helping others in the community, maintaining cleanliness, and supporting the Swachh Bharat Mission. This pledge reflected a strong dedication to service and cleanliness, embodying the ideals inspired by Mahatma Gandhi. Overall, the Bhajan Sandhiya event left a lasting impact by seamlessly blending music, culture, and essential life lessons.`,
    summary: `TCET NSS volunteers participated in Bhajan Sandhya at the Gateway of India on Gandhi Jayanti. The event featured special guest singers who filled the evening with beautiful bhajans, showcasing India's diverse cultural heritage. Incorporating Mahatma Gandhi's values, the event highlighted principles like kindness and non-violence through stories like the Salt March. Aligned with NSS principles, the event concluded with a collective pledge, emphasising commitments to community service, cleanliness, and support for the Swachh Bharat Mission, reflecting the unit's dedication to Gandhian ideals.`,
  },
];

const minor_project = [
  {
    project: "Preamble to the Constitution",
    domain: "EDUCATION",
    summary:
      "In celebration of Samvidhan Diwas (Constitution Day) on November 26th, a noteworthy initiative was taken by TCET NSS UNIT, commemorating the adoption of the Constitution of India. TCET NSS Volunteer’s heartfelt tribute to our Constitutionthrough the online reading of the Preamble and receiving the certificate, available in22 Official Languages and English, it's an inclusive embrace of unity in diversity—abeacon of democracy for our nation's foundation. This celebration fosters a deepappreciation for our constitutional values and invokes a sense of pride and belongingamong TCET NSS Volunteers, reinforcing their commitment to upholding India'sdemocratic principles.",
  },
  {
    project: "Online Quiz on Bharat Loktantra ki janani",
    domain: "EDUCATION",
    summary:
      "Embarking on a fascinating knowledge journey this Constitution Day, TCET NSS Volunteers engage in the Bharat Loktantra ki Janani online quiz—a digital homage to India's democratic heritage conducted on an online government portal. Challenging themselves, testing constitutional prowess, TCET NSS Volunteers join the celebration of Bharat Loktantra, where democracy reigns supreme and receive a certificate for taking the test. This quiz enhances understanding of democratic principles and contributes to the collective celebration of India's democratic legacy, fostering a sense of civic pride among TCET NSS Volunteers",
  },
  {
    project: "POSTER MAKING",
    domain: "EDUCATION",
    summary:
      "Poster making is a vibrant aspect of various projects across education, environment, society, and health domains in TCET NSS UNIT. These colourful creations serve as impactful messengers, simplifying complex ideas into visually appealing messages. TCET NSS Volunteers showcase their creativity, turning big concepts into eye-catching visuals. The simplicity of posters makes spreading awareness easier, acting as superheroes in conveying messages effectively. Whether it's about Tree Plantation, Blood Donation Awareness, Road Safety & Traffic Management, or Electricity Conservation Awareness, poster making becomes a dynamic tool for creating understanding and making a positive impact",
  },
  {
    project: "Plenary Talk",
    domain: "EDUCATION",
    summary:
      "Dive into the treasures of ancient Indian wisdom with our enlightening Plenary Talk on the Indian knowledge system conducted by Mumbai University(MU). TCET NSS Volunteers explore the profound insights of Ayurveda, Yoga, Vedic literature, and the interconnectedness of the universe. This captivating talk delves into the richness of our heritage, showcasing the timeless relevance of this knowledge in the modern world. TCET NSS Volunteers embraced the holistic living and sustainable practices embedded in India's knowledge legacy.",
  },
  {
    project: "NSS Orientation",
    domain: "EDUCATION",
    summary:
      "Discover the TCET NSS UNIT's world through an enlightening NSS Orientation, where volunteers learn about the significance of the NSS logo and delve into the roots of NSS Foundation Day. It's more than an orientation; it's a journey into the heart of community service and meaningful engagement. TCET NSS Volunteers engaged in a journey of knowledge and community service, enriching their understanding of this impactful initiative.",
  },
  {
    project: "NSS SE Recruitment",
    domain: "EDUCATION",
    summary:
      "TCET NSS Volunteers unleashed the power of community engagement through theNSS Recruitment. Aiming to foster stronger connections with S.E. students and adeeper sense of purpose, this initiative enriches the TCET NSS Volunteer’sexperience. By sharing knowledge and experiences, TCET NSS UNIT cultivates aculture of continuous learning. The recruitment serves to expand the TCET NSS UNIT's reach, recruiting dedicated S.E. students. As a result, many students joinedTCET NSS UNIT in building a vibrant community committed to positive change andcollective growth.",
  },
  {
    project: "Article Writing",
    domain: "EDUCATION",
    summary:
      "Unlocking Creativity through Words: TCET NSS UNIT's Article Writing Project provides a platform for TCET NSS Volunteers to explore the profound power of expression. Through heartfelt poems and insightful articles also gets included in the official TCET NSS UNIT’s magazine “Parivartan”, TCET NSS Volunteers delve into diverse themes, passionately sharing their thoughts and ideas. This initiative creates a canvas where voices find resonance, fostering a vibrant community where creativity knows no bounds. ",
  },
  {
    project: "Dandi Memorial Yatra",
    domain: "EDUCATION",
    summary:
      "Embark on a journey through history with the TCET NSS UNIT's Dandi Memorial Yatra which took place at the Gateway Of India, a tribute to Mahatma Gandhi's iconic Dandi March and the sacrifices of freedom fighters. TCET NSS Volunteers immersed themselves in the past, witnessing a captivating skit that unfolded the glorious chapters of India's struggle for Independence. This project aimed to honour the contributions of those who fought for freedom from British rule. Through this immersive experience, volunteers not only gained knowledge but also a profound understanding of the sacrifices that paved the way to independence",
  },
  {
    project: "Marine Pollution Seminar",
    domain: "EDUCATION",
    summary:
      "Dive into the depths of understanding with our Marine Pollution project, where knowledge meets action. TCET NSS Volunteers explored the complex factors affecting marine life and enthusiastically talked about solutions. As a result, they not only gained insights into the importance of the marine ecosystem but also contributed to the ongoing conversation on preserving our oceans. Towards the end of the seminar a fun quiz was conducted to test the knowledge gained by the TCET NSS Volunteers and a certificate was given afterwards.",
  },
  {
    project: "Sow the Seed of Change : Debate",
    domain: "EDUCATION",
    summary:
      "TCET NSS UNIT's initiative for environmental awareness. Volunteers passionately debated on topics like 'India's Independence' and 'Dowry.' This project enhanced communication and critical thinking skills, fostering adaptability. A deeper understanding of complex issues and a showcase of participants' engagement abilities. Experience the results of our dedication to environmental responsibility and active participation in fostering change. ",
  },
  {
    project: "Amrit Kalash : Pot Painting",
    full: [
      FullImages.AmritKalash.img1,
      FullImages.AmritKalash.img2,
      FullImages.AmritKalash.img3,
      FullImages.AmritKalash.img4,
      FullImages.AmritKalash.img5,
      FullImages.AmritKalash.img6,
      FullImages.AmritKalash.img7,
    ],
    domain: "EDUCATION",
    summary:
      "Dive into artistic expression with TCET NSS UNIT, from the initial white layer to the symbolic depth of Indian patriotism. TCET NSS Volunteers' dedication created more than a painted pot; they crafted cultural significance. Uncover the beauty of tradition, nurture creativity, and join a unifying journey where art binds us spiritually and culturally",
  },
  {
    project: "Blood Donation Awareness",
    domain: "EDUCATION",
    summary:
      "TCET NSS volunteers took a stand for our society's well-being by promoting blood donation awareness. They emphasised the significant impact of individual efforts, showcasing the power of spreading awareness. Donors received certificates and donor cards, highlighting the importance of donating blood. Donating blood saves lives in emergencies, surgeries, and medical situations. This initiative exemplifies how each person contributes to improving community health.",
  },
  {
    project: "Road Safety Seminar",
    domain: "EDUCATION",
    summary:
      "TCET NSS Unit's drive for safer roads partnered with 'Helmet for Life' creating a high-impact seminar on preventing accidents. A speaker's informative presentation emphasised responsible driving and distributed helmets to the TCET NSS Volunteers. Takeaways include certificates, helmets, a sense of responsibility, and a positive shift in driving behaviour. At the end of the seminar, TCET NSS Volunteers had a fun quiz about what they learned in the Road Safety Seminar",
  },
  {
    project: "Electricity Conservation Awareness",
    domain: "EDUCATION",
    summary:
      "TCET NSS Unit's impactful online project raised awareness on responsible electricity use. TCET NSS Volunteers discussed, created posters, made questionnaires for the survey conducted at Singh Estate, and shared innovative ideas of conserving usage of electricity. Examining electricity bills of their families, neighbours, maids, watchmen, etc, they aimed to promote smart use. The project inspired a sense of responsibility for Mother Earth, fostering a cleaner, sustainable future. Now, armed with knowledge and passion, TCET NSS volunteers lead the charge in teaching efficient electricity use for a greener tomorrow.",
  },
  {
    project: "Samvidhan Din : Constitution Day",
    domain: "EDUCATION",
    summary:
      "TCET NSS volunteers actively engaged in activities centred around Constitutional Rights, Fundamental Rights, and Democracy. With a powerful start with the National Anthem, the event showcased strong dedication to educating about India's democracy. The day at Mumbai University included expert insights on the Rupee issue, certificates for the volunteers, offering historical perspectives and solutions. The conference emphasised the Constitution's pivotal role, inspiring and motivating TCET NSS Volunteers to contribute to positive societal change. More than a conference, it became a collective effort for a better future and a renewed commitment to uphold our Constitution",
  },
  {
    project: "Desh ke Utsav Pledge",
    domain: "EDUCATION",
    quote: "Cultural threads, where unity spreads.",
    summary:
      "TCET NSS Volunteers pledged to promote the nation and its heritage, fostering a sense of community involvement from an online government portal and certificates were given to them for taking the pledge. Through virtual showcases and festival participation, TCET NSS Volunteers embraced cultural diversity, uniting beyond differences. This collective commitment goes beyond a ceremony—it's an ongoing journey toward unity, civic responsibility, and cultural celebration. Together, TCET NSS Volunteers advanced their shared commitment to unity, civic responsibility, and the lively celebration of cultural diversity",
  },
  {
    project: "Be Vocal About Local Pledge",
    domain: "EDUCATION",
    quote: "Sustainable future, with voices nurtured.",
    summary:
      "TCET NSS Volunteers unite in pledging for local economic empowerment on an online government portal. Each volunteer commits online, receiving a certificate for their participation. Learnings include the collective impact on local businesses and cultural heritage. With TCET NSS Volunteers participating, the positive project impact enhances the contributing to a favourable image and reinforces our commitment to local empowerment. The pledge emphasises the social impact of choosing local, promoting eco-friendly behaviour. Join us in fostering resilient communities, economic sustainability, and a more vibrant local environment. ",
  },
  {
    project: "Swachh Diwali Shubh Diwali Pledge Activity",
    domain: "EDUCATION",
    quote: "Illuminate with care, Diwali pledge we bear.",
    summary:
      "Embrace a green Diwali with TCET NSS UNIT! Volunteers pledge online through a government portal for an eco-friendly celebration, receiving certificates for their commitment. Learn about the environmental impact of traditional Diwali practices and shift towards sustainable choices in decorations and lighting. TCET NSS Volunteers promoted a cleaner Diwali to peers, family, and the community. Make a positive impact with a pledge for a Swachh and Shubh Diwali.",
  },
  {
    project: "Nukkad Natak On Angdaan",
    domain: "EDUCATION",
    quote: "Not all heroes wear capes! They donate",
    summary:
      "Step into a world of compassion and commitment with TCET NSS UNIT's Organ Donation Awareness project. Through a captivating skit, TCET NSS Volunteers creatively combined informative posters and impactful slogans, educating the society about the impact of organ donation. Revealing the truth behind myths and encouraging personal responsibility, the heartfelt pledge by TCET NSS Volunteers signifies a small yet impactful step towards fostering a healthier society. TCET NSS Volunteers spread the message of hope and the power of organ donation through creativity and dedication",
  },
  {
    project: "Eco Harbour : E-waste collection drive",
    domain: "ENVIRONMENT",
    quote: "E-waste. End it. Our Planet depends on it.",
    summary:
      "TCET NSS Unit organises a project to tackle electronic waste. We aim to stop improper disposal that harms our environment.When we gather and recycle old electronic stuff, it not only prevents dangerous materials from getting into our surroundings but also helps us recover valuable materials for reuse, reducing the need for new resources and lessening the environmental impact of making electronics. During the project, our NSS volunteers learn about the importance of responsible e-waste disposal, raising awareness about sustainable practices.",
  },
  {
    project: "Swachhata hi Seva",
    domain: "ENVIRONMENT",
    quote: "Time to make a plea to make India defecation free",
    summary:
      "TCET NSS Unit conducts the project “Swachhta hi Seva” for a cleaner India, free from open defecation. Our volunteers actively participate in this initiative, improving cleanliness in communities and public spaces. Simultaneously, we spread awareness about waste and pollution's impact, stressing the importance of preserving natural resources. The result: cleaner surroundings, reduced litter, and better waste management. This positively impacts the local environment, reducing pollution and ensuring the sustainable preservation of our natural resources.",
  },
  {
    project: "Anti-dowry rally (MU)",
    domain: "SOCIETY",
    quote: "Love is not bought,it cannot be sold. Say no to dowry",
    summary:
      "The TCET NSS participated in an Anti-Dowry organised by Asha Kulkarni rally near Parle G factory in Vile Parle. Together with other NSS units, they held up posters to spread the message against dowry. The inclusion of a skit aimed to further raise awareness about this social issue, effectively using a creative medium to convey the message against dowry during the event. The main goals were to inform people about the harms of giving or taking dowry. This event taught participants the importance of working together to change society and showed them how creating awareness in the community can tackle long standing social problems",
  },
  {
    project: "Gurudev Bhajan Sandhya (MU)",
    domain: "SOCIETY",
    quote: "Calmness is the cradle of power.",
    summary:
      "TCET NSS volunteers gathered at Vishnu Hanuman Ground, Goregaon West for the Gurudev Bhajan Sandhya. Standing in solidarity with Gurudev Sri Sri Ravi Shankar ji, volunteers from various NSS units immersed themselves in an evening dedicated to spiritual harmony. The event resonated with teachings on peace, guiding participants through meditation, yoga, and more. They joined hands to build an environment that promotes calmness, resonating with the shared dream of a world rooted in peace and inner harmony",
  },
  {
    project: "Swasthya Samwad : Medical Survey",
    domain: "SOCIETY",
    quote: "E-waste. End it. Our Planet depends on it.",
    summary:
      "TCET NSS Unit organises a project to tackle electronic waste. We aim to stop improper disposal that harms our environment.When we gather and recycle old electronic stuff, it not only prevents dangerous materials from getting into our surroundings but also helps us recover valuable materials for reuse, reducing the need for new resources and lessening the environmental impact of making electronics. During the project, our NSS volunteers learn about the importance of responsible e-waste disposal, raising awareness about sustainable practices.",
  },
  {
    project: "Human Trafficking",
    domain: "SOCIETY",
    quote: "Freedom is a right, not a privilege",
    summary:
      "In a bid to combat human trafficking, which involves the illegal trade of humans for forced labour or other forms of exploitation, TCET NSS Unit conducted an awareness project with clear goals: enlighten volunteers about trafficking issues, advocate for victims' rights, and prevent criminal practices. Volunteers, in groups, created posters addressing human trafficking. The session increased awareness, aligning with the UN's 'World Day Against Trafficking in Persons' theme of 'Use and Abuse of Technology' this year. Several volunteers benefited from the initiative, making strides towards a better-informed and proactive community in the fight against human trafficking",
  },
  {
    project: "Back2School : School Teaching",
    domain: "SOCIETY",
    quote: "Guiding minds, where endless curiosity binds.",
    summary:
      "The TCET NSS conducted a School Teaching project in its adopted village. The volunteers were on a mission to make a difference. They split into groups, with some focusing on teaching older kids and others on the younger ones. The motive was clear, to share knowledge and create a joyful learning atmosphere. The volunteers didn't just teach; they played games, ensuring a fun and holistic experience. The motive went beyond classrooms; it was about building connections and leaving a positive impact. In this shared learning adventure, both the volunteers and the children gained valuable insights, fostering a spirit of growth and community in the adopted village",
  },
  {
    project: "Yuva Samvad (MU)",
    domain: "SOCIETY",
    quote: "Young hearts, boundless dreams",
    summary:
      "TCET NSS volunteers participated in the online Yuva Samvad competition organised by Mumbai University, focusing on the theme 'Meri Mati Mera Desh.' Volunteers eloquently spoke on subjects such as India's rich culture and heritage. This virtual platform allowed our volunteers to showcase their knowledge and patriotic spirit. The objectives included fostering a sense of national pride and highlighting cultural diversity. Volunteers gained valuable insights into effective communication, cultural appreciation, and the significance of preserving our heritage. Overall, the competition was a meaningful exchange of ideas, fostering a deeper connection with our roots.",
  },
  {
    project: "Anti-ragging Week",
    domain: "SOCIETY",
    quote: "Respect your peers, wipe out ragging's fears!",
    summary:
      "During Anti-Ragging Week, the TCET NSS Unit organised an impactful initiative - an anti-ragging quiz based on an enlightening documentary. Volunteers were provided with a link to the documentary, fostering awareness and understanding of the issue. Subsequently, a quiz link was shared, encouraging active participation. The motive was clear: to educate, prevent, and create a safer environment. This initiative not only disseminated crucial information but also instilled a sense of responsibility among volunteers.Through this, the TCET NSS Unit aimed to promote a campus culture rooted in respect, empathy, and the eradication of ragging",
  },
  {
    project: "Honeywell Event Discipline",
    domain: "ENVIRONMENT",
    quote: "Unity in service, hospitality in action.",
    summary:
      "At the Honeywell event, TCET NSS volunteers were organised into groups, each with a specific role. Some enthusiastically welcomed foreign delegates with a special NSS clap, fostering a friendly atmosphere. Another group efficiently managed the crowd, ensuring a seamless experience for the international guests participating in games. Throughout the event, volunteers excelled in crowd and discipline management, displaying teamwork and organisational skills. The motive was clear: create a warm environment and showcase unity. In this process, they gained valuable insights into effective event coordination, teamwork, and hospitality—lessons that extend beyond the occasion, fostering a strong sense of community and shared responsibility",
  },
  {
    project: "BenevolentPaws: Feeding Animals and Birds",
    domain: "ENVIRONMENT",
    quote: "Fur and feather, paws together!",
    summary:
      'On International Animal Rights Day, TCET NSS Unit conducted the project "Benevolent Paws: Feeding Animals and Birds." Volunteers enthusiastically fed various creatures, sharing uplifting images of their efforts. The motive was to spread kindness and awareness about the well-being of animals, birds, and fishes. The project emphasised our shared responsibility to care for the environment and its inhabitants. Volunteers learned the importance of compassion, empathy, and the positive impact of small actions in creating a more humane world. This initiative sparked a sense of responsibility towards our animal friends and encouraged ongoing efforts for their welfare.',
  },
  {
    project: "Poster making for ashram beautification",
    domain: "ENVIRONMENT",
    quote: "Crafting joy, painting compassion.",
    summary:
      "Dive into the world of compassion and creativity with TCET NSS Volunteers inspiring project, turning walls into vibrant canvases at the Old Age Home. Each stroke carries the spirit of kindness, uplifting the residents' hearts. Witness the transformation of spaces through our volunteers' creativity, sparking joy and fostering a sense of community. Join us in spreading smiles and making every brushstroke count in the beautiful tapestry of giving. Together, let's celebrate the power of art to brighten lives and create lasting memories",
  },
  {
    project: "Public Awareness Campaign",
    domain: "ENVIRONMENT",
    quote: "Informed choices, engaged voices.",
    summary:
      "Step into the realm of impact with our Public Awareness Campaign, where enthusiasm meets dedication. TCET NSS Volunteers, driven by a commitment to community service, harnessed the power of information to connect with government schemes. Through videos and virtual platforms, they learned and spread awareness, emphasising the responsibility we all bear towards nation-building. Witness the journey of informed citizenship, where collective action shapes a brighter, more engaged community",
  },
  {
    project: "Nukkad Natak On Social Issues",
    domain: "ENVIRONMENT",
    quote: "Time travel through the ages, a skit that resonates.",
    summary:
      "Embark on a journey through eras with TCET NSS UNIT's thought-provoking Nukkad Natak On Social Issues. TCET NSS Volunteers, driven by dedication and talent, bring to life the challenges faced by females across different times. From captivating introductions to seamless performances, witness the echoes of societal evolution. TCET NSS Volunteers foster connections, enhancing communication skills, and leaving a lasting impact on society. The Nukkad Natak On Social Issues is more than a performance; it's a journey through time, unravelling cultural transformations with every act",
  },
  {
    project: "Books To Street",
    domain: "ENVIRONMENT",
    quote: "Waste to wisdom: Recycled notebooks tell a story of change",
    summary: `The TCET NSS UNIT's "Books to Street" project aimed to promote recycling and provide free notebooks to underprivileged students. Enthusiastic TCET NSS Volunteers actively participated, creating over 500 notebooks from old ones. This initiative showcased resourcefulness, empowering TCET NSS Volunteers to make a positive impact on their community. The project, inspiring creativity and sustainability, garnered support from the community, especially young volunteers. Despite challenges, the initiative highlights the potential to recycle and support others in need`,
  },
  {
    project: "Electricity conservation awareness",
    domain: "ENVIRONMENT",
    quote:
      "Switch off, power up. Conserve electricity for a brighter, sustainable future",
    summary:
      "The TCET NSS Unit hosts a webinar focused on raising awareness about Electricity Conservation, featuring breakout rooms for group discussions. This project yields over 25+ posters and presentations showcasing innovative ideas. Volunteers collaboratively design a questionnaire to enhance future surveys in the adopted villages, providing deeper insights into electricity conservation issues. The initiative cultivates critical thinking, teamwork, and communication skills, fostering a heightened appreciation for the significance of saving electricity. Anticipated to have a positive impact, volunteers aim to share gained knowledge and insights.",
  },
  {
    project: "Eco Harbour : E-waste collection drive",
    domain: "ENVIRONMENT",
    quote: "E-waste. End it. Our Planet depends on it.",
    summary:
      "TCET NSS Unit organises a project to tackle electronic waste. We aim to stop improper disposal that harms our environment.When we gather and recycle old electronic stuff, it not only prevents dangerous materials from getting into our surroundings but also helps us recover valuable materials for reuse, reducing the need for new resources and lessening the environmental impact of making electronics. During the project, our NSS volunteers learn about the importance of responsible e-waste disposal, raising awareness about sustainable practices.",
  },
  {
    project: "UNITY RUN",
    domain: "ENVIRONMENT",
    quote: "Together we stand, hand in hand",
    summary:
      "The Rashtriya Ekta Diwas - Unity Run at Thakur College of Engineering and Technology, Kandivali(E) a powerful initiative on Sardar Vallabhbhai Patel's birth anniversary, brings the NSS volunteers together for a symbolic collective run around the Thakur Complex, Kandivali(E). More than a physical activity, it became a strong symbol of unity, showcasing TCET NSS volunteers' responsibility to ensure no participant is left behind. Participatory learning emphasises how unity strengthens a diverse nation. Positive feedback analysis highlights the personal and national significance learned by volunteers. The run successfully promotes unity and patriotism, with certificates reinforcing a sense of achievement and pride. In conclusion, it proves transformative, fostering unity, patriotism, and fitness in the college community. ",
  },
  {
    project: "Veero Ka Vandan",
    domain: "ENVIRONMENT",
    quote: "Saluting the valour that echoes through the corridors of bravery",
    summary:
      'The TCET NSS UNIT organises the "Veero ka Vandan" project, an initiative expressing gratitude to police officers, traffic police, and security guards. Dedicated volunteers create and distribute over more than 60 handmade gratitude cards, aligning with the theme "Meri Maati, Mera Desh: Maati ko Naman, Veero ka Vandan." The project emphasises the significance of expressing gratitude, fostering positive relationships, and recognizing the sacrifices of heroes. Despite limited resources, the initiative strengthens community bonds, demonstrates the impact of simple acts of kindness, and presents opportunities for future similar projects. The "Veero ka Vandan" initiative reflects a commitment to community well-being, promoting awareness of gratitude and compassion.',
  },
  {
    project: "Aakalan : Paper Correction",
    domain: "ENVIRONMENT",
    quote: "In the margins of mistakes, knowledge finds its corrections",
    summary:
      "The Rashtriya Ekta Diwas - Unity Run at Thakur College of Engineering and Technology, Kandivali(E) a powerful initiative on Sardar Vallabhbhai Patel's birth anniversary, brings the NSS volunteers together for a symbolic collective run around the Thakur Complex, Kandivali(E). More than a physical activity, it became a strong symbol of unity, showcasing TCET NSS volunteers' responsibility to ensure no participant is left behind. Participatory learning emphasises how unity strengthens a diverse nation. Positive feedback analysis highlights the personal and national significance learned by volunteers. The run successfully promotes unity and patriotism, with certificates reinforcing a sense of achievement and pride. In conclusion, it proves transformative, fostering unity, patriotism, and fitness in the college community. ",
  },
  {
    project: "Voter ID awareness",
    domain: "ENVIRONMENT",
    quote: "Empower your voice, secure your choice – Get your Voter ID today!",
    summary:
      "The TCET NSS Unit organised a voter ID awareness campaign at Thakur College of Engineering and Technology, Kandivali (E). The TCET NSS volunteers play a crucial role in spreading awareness about the significance of possessing a voter ID through a dedicated campaign within the college premises. This initiative marks a crucial step in nurturing civic responsibility and encouraging active involvement in the democratic process. Volunteers explain the importance, eligibility criteria, and the step-by-step process, offering information on the required documents for a smooth application. The volunteers make sure that more and more people join this movement and ensure that their voice is heard by acquiring the Voter ID during this enlightening campaign",
  },
];

const domain_names = [
  { name: "All", search: "", icon: Heart },
  { name: "Environment", search: "ENVIRONMENT", icon: Earth },
  { name: "Education", search: "EDUCATION", icon: Book },
  { name: "Society", search: "SOCIETY", icon: UserGroup },
  { name: "Health", search: "HEALTH", icon: HeartPulse },
  { name: "NSS Camp", search: "NSS CAMP", icon: HeartPulse },
];

const domain_index = {
  All: 0,
  Environment: 1,
  Education: 2,
  Society: 3,
  health: 4,
  "NSS CAMP": 5,
};

export default function ProjectDisplay({ domain }) {
  const [selectedDomain, setSelectedDomain] = useState(
    domain_index[domain] || 0
  );
  const [query, setQuery] = useState("");
  console.log(query);
  useEffect(() => {
    document.title = "Projects | TCET NSS UNIT";
  });
  const filtered_major_items = major_projects.filter(
    (item) =>
      item.project.toLowerCase().includes(query.toLowerCase()) &&
      item.domain.includes(domain_names[selectedDomain].search)
  );
  const filtered_minor_items = minor_project.filter(
    (item) =>
      item.project.toLowerCase().includes(query.toLowerCase()) &&
      item.domain.includes(domain_names[selectedDomain].search)
  );
  return (
    <div className="projects-display-container">
      <div className="domain-option-filters-containers">
        <div className="domain-option-domains">
          <SidebarHeader />
          <h3 className="domain-options-name">DOMAINS</h3>
          <ul className="domain-option-domains">
            {domain_names.map((domain, idx) => (
              <li
                key={idx}
                className={`project-option ${
                  idx === selectedDomain ? "p-active" : ""
                }`}
                onClick={() => setSelectedDomain(idx)}
              >
                <img
                  className="domain-svg-selector"
                  src={domain.icon}
                  alt={`${domain.name} icon`}
                />
                <h5>{domain.name}</h5>
              </li>
            ))}
          </ul>
        </div>
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <div className="projects-cards-side">
        <MajorProjectsDisplay projects={filtered_major_items} />
        <MinorProjectsDisplay projects={filtered_minor_items} />
      </div>
    </div>
  );
}
