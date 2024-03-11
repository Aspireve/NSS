import React, { useEffect, useState } from "react";
import "../styles/projects/display.css";
import Book from "../assets/static_images/book-solid.svg";
import Heart from "../assets/static_images/heart-solid.svg";
import HeartPulse from "../assets/static_images/heart-pulse-solid.svg";
import CampFire from "../assets/static_images/campground-solid.svg";
import UserGroup from "../assets/static_images/user-group-solid.svg";
import Earth from "../assets/static_images/earth-americas-solid.svg";
import MajorProjectsDisplay from "./ProjectMajorlist";
import MinorProjectsDisplay from "./ProjectMinorlist";
import SearchBar from "./ProjectSearchbar";
import SidebarHeader from "./ProjectSidebaeheader";
import Major_HD from "../assets/projects/index";
import Major_simple from "../assets/projects_reduced/index";

const major_projects = [
  {
    id: 10,
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
    id: 11,
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
    id: 12,
    project: "Nutrition Awareness Webinar",
    domain: "HEALTH",
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
    project: "Tiranga Rally",
    domain: "SOCIETY",
    images: [...Major_HD.Tiringa],
    reduced_images: [...Major_simple.Tiringa],
    quote: `Tiranga, a symbol of strength, unity, and the spirit of a proud nation.`,
    main: `The Mumbai University hosted an uplifting Tiranga rally in celebration of India's 75th independence anniversary, part of the Azadi ka Amrit Mahotsav. Known as "Har Ghar Tiranga," the campaign encourages everyone to bring the national flag home and proudly hoist it.Starting from the Sports Complex, Kolivery Village-Mumbai University and covering a 2-kilometre route through various points on campus, the rally involved enthusiastic volunteers from each unit. The participants, filled with energy, carried Tirangas and banners, creating a colourful spectacle symbolising unity and pride.
    The event concluded in the evening marking a total success. Participants expressed joy and fulfilment, having celebrated and learned more about the significance of Azadi ka Amrit Mahotsav. This initiative aligns with the principles of Atmanirbhar Bharat, emphasising self-reliance.Azadi Ka Amrit Mahotsav, translated to the "Elixir of energy of independence," is a tribute by the Indian government to those who significantly contributed to the country's progress.
    As India commemorates its 75th year of independence, events like the Tiranga rally serve as vibrant reminders of unity, patriotism, and the journey towards a self-reliant and prosperous nation. The simplicity of hoisting the Tiranga at home becomes a powerful symbol of individual contributions to the collective narrative of a free and thriving India. The enthusiasm and energy displayed by the participants highlight the deep-rooted connection people have with their country, making Azadi ka Amrit Mahotsav a truly memorable and unifying experience.`,
    summary: `The Mumbai University organised a Tiranga rally as part of the Azadi ka Amrit Mahotsav celebration. The "Har Ghar Tiranga" campaign encourages people to bring the Tiranga home and hoist it for India's 75th independence anniversary. The rally, covering 2 kms, featured energetic volunteers with Tirangas and banners. The event concluded successfully in the evening, fostering joy and awareness about Azadi ka Amrit Mahotsav's significance.`,
  },
  {
    id: 25,
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
  },
  {
    id: 26,
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
  },
  {
    id: 27,
    project: "Talk with the Village",
    domain: "SOCIETY, CAMP",
    images: [...Major_HD.TalkWithVillage],
    reduced_images: [...Major_simple.TalkWithVillage],
    quote: "Every uttered word paves the path to progress.",
    main: "TCET NSS unit conducted the Talk with the Village project aimed at engaging with villagers to understand their challenges and gather insights into their needs. Volunteers were divided into groups to interact with villagers and inquire about their experiences. They prepared a basic questionnaire to facilitate discussions and proposed solutions to the problems expressed by the villagers.\nThe main aim of the project was to identify and understand the challenges faced by villagers and propose solutions to address them. Villagers shared concerns such as a complete power shutdown every Friday and limited educational opportunities, with schooling only available up to 8th standard. Volunteers developed communication skills through interactions, enhancing their ability to ask relevant questions and actively listen to villagers' concerns.\nThrough the project, volunteers gained a deeper understanding of the challenges faced by villagers, fostering a sense of responsibility towards community well-being. Despite facing difficulties in communication due to language barriers, volunteers persevered to gather valuable information. Villagers also highlighted challenges such as limited access to medical services, further emphasising the importance of addressing community needs. In summary, the project helped volunteers connect with villagers, learning about their problems and building compassion. It showed how talking and listening well are vital for understanding and helping the community. Overall, it made a positive difference in the villagers' lives.",
    summary:
      "Engaging with villagers through 'Talk with the Village' project conducted at our adopted village Saiwan, the aim was to understand their challenges and propose solutions. Volunteers learned to ask relevant questions and actively listen, fostering a sense of responsibility towards community well-being. Despite language barriers, we persevered, gaining deeper insights into villagers' needs. From limited education to medical services, we discovered the importance of compassionate communication. This project exemplifies how dialogue and empathy can positively impact communities.",
  },
  {
    id: 29,
    project: "Kite Making",
    domain: "ENVIRONMENT",
    images: [...Major_HD.KiteMaking],
    reduced_images: [...Major_simple.KiteMaking],
    quote: `Crafting dreams into the sky, one kite at a time.`,
    main: `The TCET NSS Unit organises a memorable kite-making project at a local primary and secondary school to celebrate the festival of Makar Sankranti. The initiative aims to not only engage the students in a creative activity but also impart valuable skills and foster teamwork. The volunteers took the lead in teaching the students the steps of crafting a kite, from selecting materials to assembling the pieces.
    Dividing the students into groups, the volunteers distribute the necessary materials, offering guidance and support throughout the entire process. The collaborative atmosphere during the project promotes teamwork among the students, creating a positive and enriching environment.
    Once all the kites were completed, a collective effort unfolded as students and volunteers gathered to fly their creations. Beyond the joy of kite-flying, the project left a lasting impact on both volunteers and students. It showcased the power of hands-on learning and the potential for creativity to serve as a tool for education and community building. The experience not only brought a tangible outcome in the form of flying kites but also left behind a sense of accomplishment, shared memories, and a strengthened bond among all those involved.`,
    summary: `The TCET NSS unit organises a kite making project for the primary and secondary school to celebrate the festival of Makar Sankranti with them. They guide students through the entire kite-making process, dividing them into groups and providing materials. After crafting their kites, both students and volunteers gathered to fly them, turning the activity into a collaborative and educational experience.`,
  },
  {
    id: 30,
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
  },
  {
    id: 32,
    project: "(MU) Nasha Mukti rally",
    domain: "ENVIRONMENT",
    images: [...Major_HD.AddictRally],
    reduced_images: [...Major_simple.AddictRally],
    quote: `A collective journey towards a brighter, addiction free future.`,
    main: `The Nasha Mukti Rally, organised by the Mumbai University, unfolds at Azad Maidan in Churchgate, Mumbai. The volunteers, carrying posters and compelling slogans against tobacco, alcohol, and cigarettes, filled the bustling streets. Their vibrant chants resonate, capturing the attention of the people and conveying a powerful message promoting a healthier, addiction-free lifestyle.
    Advancing towards the Gateway of India, government officials stage a thought-provoking skit. This provides a conducive setting for open discussions and idea exchange. Beyond being a demonstration against addiction, the rally evolves into a platform fostering connections and community among participants.
    The ripple effect was palpable as individuals were inspired to share their knowledge with their communities, contributing to a broader movement against addiction. The Nasha Mukti Rally stands as a remarkable display of unity, collective determination, and a strong belief in a future free from addiction's shackles. It leaves an enduring impact, catalysing positive change in society.`,
    summary: `The Mumbai University organises a “Nasha Mukti Rally” at Azad Maidan in Churchgate, Mumbai. Enthusiastic students aim to spread awareness about addiction dangers. The rally moves to the Gateway of India, where government officials perform a skit illustrating addiction's harsh realities. Participants pledge to live substance-free, promoting unity and a commitment to raise awareness. The project ends positively, with participants leaving motivated to make a difference.`,
  },
  {
    id: 33,
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
  },
  {
    id: 34,
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
  },
  {
    id: 35,
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
  },
  {
    id: 36,
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
  },
  {
    id: 37,
    project: "(MU) Gandhi Jayanti Bhajan Sandhya ",
    domain: "EDUCATION",
    images: [...Major_HD.Gandhijaynati],
    reduced_images: [...Major_simple.EcoCarryBag],
    quote: `Harmonising culture, echoing Gandhi's values.`,
    main: `TCET NSS volunteers experienced a delightful evening at the Bhajan Sandhya held at the Gateway of India, Mumbai. The atmosphere was filled with the melodious tunes of bhajans sung by special guest singers, creating a spiritual and cultural environment. The event showcased a variety of bhajans from different parts of India, highlighting the richness of our cultural heritage.
    Importantly, the event was not just about music, it also aimed to instil the values advocated by Mahatma Gandhi. Through stories from his life, such as the Salt March to Dandi, the event emphasised principles like non-violence, truthfulness, and kindness. These values were not only a tribute to Gandhi but also served as valuable life lessons for all the volunteers.
    Aligned with the morals of the NSS, the Bhajan Sandhiya event reinforced the principles of community service and social responsibility. Participants learned that cultural events like these could be powerful platforms for imparting meaningful values. The event concluded with a collective pledge where everyone committed to helping others in the community, maintaining cleanliness, and supporting the Swachh Bharat Mission. This pledge reflected a strong dedication to service and cleanliness, embodying the ideals inspired by Mahatma Gandhi. Overall, the Bhajan Sandhiya event left a lasting impact by seamlessly blending music, culture, and essential life lessons.`,
    summary: `TCET NSS volunteers participated in Bhajan Sandhya at the Gateway of India on Gandhi Jayanti. The event featured special guest singers who filled the evening with beautiful bhajans, showcasing India's diverse cultural heritage. Incorporating Mahatma Gandhi's values, the event highlighted principles like kindness and non-violence through stories like the Salt March. Aligned with NSS principles, the event concluded with a collective pledge, emphasising commitments to community service, cleanliness, and support for the Swachh Bharat Mission, reflecting the unit's dedication to Gandhian ideals.`,
  },
  {
    id: 38,
    project: "Saiwan Donation Drive",
    domain: "SOCIETY, CAMP",
    images: [...Major_HD.SaivanDonation],
    reduced_images: [...Major_simple.SaivanDonation],
    quote: "The power of community lies in its ability to care",
    main: 'TCET NSS Unit organised three impactful projects under the Joy of Giving initiative to help villagers in need and bring the community together. In the first project, called "Joy of Giving Chantai," volunteers worked hard to sort and organise donated items like clothes, food, and stationery. They made sure everything was neatly arranged in separate boxes for men\'s, women\'s, and children\'s clothing, as well as containers for food and stationery. Their determination laid the foundation for the rest of the Joy of Giving Project.\n\nThe second project, "Joy of Giving Donation," aimed to give essential items to villagers in an organised way. Volunteers carefully planned the distribution process, managing crowds and understanding the specific needs of the recipients. This helped them learn how to communicate better and manage large groups of people effectively. Lastly, in "Joy of Giving Vitran," volunteers put together packages for families facing tough times. They personally delivered these packages door-to-door, connecting with families and learning about their individual needs. This project highlighted how important it is to understand others\' feelings and provide individualised help, demonstrating how being involved in the community can make a big difference.\n\nThese projects didn\'t just help people in need, but they also taught TCET NSS volunteers important skills like working together, staying organised, and getting involved in the community. Their hard work made the community feel more caring and united.',
    summary:
      "TCET NSS Unit undertook three meaningful projects as part of the Joy of Giving initiative at our adopted village Saiwan. Volunteers sorted donated items, provided essentials in an orderly manner, and delivered packages directly to families in need. These efforts not only provided tangible support to villagers but also strengthened community bonds. The aim was to ensure resources reached those who needed them most. Through teamwork and empathy, volunteers honed valuable skills and fostered solidarity within the community.",
  },
  {
    id: 39,
    project: "Jagrukta Abhiyan",
    domain: "SOCIETY, CAMP",
    images: [...Major_HD.JagruktaAbhi],
    reduced_images: [...Major_simple.JagruktaAbhi],
    quote: "Cleanliness for a healthier tomorrow.",
    main: 'The Shramdaan Rally in Saiwan Village was a vibrant initiative to promote awareness on crucial community issues. Starting at the Secondary School and concluding at the Primary School, the rally aimed to educate the village on topics such as Waste Management, Tree Plantation, Diseases prevention, and Hygiene. What set this project apart was the use of the local language, Marathi, for chanting slogans. This choice aimed to effectively connect with the villagers, ensuring a better understanding of the rally\'s purpose.\n\nTCET NSS Volunteers, along with enthusiastic school students, energetically chanted slogans like "Swachh Raha, Swast Raha, Samrudh Raha" (Cleanliness leads to health and prosperity), "Clean India, green India," "Meri maati mera desh, Samrudh rahe yehi sandesh" (My soil, my country, let it prosper), and "Swach Saiwan, Haritha Saiwan" (Clean Saiwan, Green Saiwan). The use of Marathi added a local touch, enhancing the impact of the messages. In addition to vocal efforts, the rally incorporated visually appealing posters created beforehand. This inclusion not only added a dynamic visual element to the project but also underscored the significance of using visual aids in community initiatives. The posters served as effective tools to convey messages and engage the villagers visually, complementing the vocal aspect of the rally.\n\nOverall, the Shramdaan Rally in Saiwan Village was a holistic approach to community engagement, combining the power of language, enthusiastic participation, and visually appealing elements to drive home essential messages about waste management, tree plantation, disease prevention, and hygiene. The project successfully showcased the value of using local languages and visual aids in community initiatives for a more profound impact.',
    summary:
      'This project in Saiwan Village, the Shramdaan Rally aimed to raise awareness on vital topics like Waste Management, Tree Plantation, Diseases prevention, and Hygiene. TCET NSS Volunteers, including school students, passionately chanted slogans exclusively in Marathi to connect with the community. Slogans like "Swachh Raha, Swast Raha\'\' and "Clean India, Green India" emphasised local understanding. The rally also featured visually impactful posters created earlier, highlighting the importance of visuals in community initiatives.',
  },
  {
    id: 40,
    project: "Meri Maati Mera Desh",
    domain: "SOCIETY",
    images: [...Major_HD.MeriMati],
    reduced_images: [...Major_simple.MeriMati],
    quote: "Unity in Soil, Love for Nation: Meri Mati Mera Desh!",
    main: `In a commendable effort to strengthen the bond between individuals and their homeland, the TCET NSS Unit initiated a project under the title "Meri Mati Mera Desh." The focal point of this initiative was a unique activity where participants were encouraged to click a selfie while placing soil in an Amrit Kalash, painted by dedicated NSS volunteers itself. The Amrit Kalash symbolized the essence of the country, and the act of putting soil into it was a tangible representation of love and respect towards the soil that sustains us.
    The project witnessed enthusiastic participation from college students, faculty members, and NSS volunteers. Everyone came together to not only engage in the activity but also to collectively take a pledge, solidifying their commitment to the nation. This pledge served as a powerful reminder of the individual responsibility each participant held towards contributing positively to the well-being of the country.
    To amplify the impact of the initiative, the volunteers prepared vibrant posters and catchy slogans that resonated with the theme of love for the country. The rally that ensued was a vibrant display of unity, as participants chanted these slogans passionately, creating an atmosphere charged with patriotism. The visuals of the rally, along with the heartfelt pledge and symbolic act of placing soil in the Amrit Kalash, collectively conveyed a powerful message about the importance of respecting and cherishing the land we call home.
    The "Meri Mati Mera Desh" event succeeded not only in fostering a sense of pride and belonging but also in creating a shared experience that will likely leave a lasting impact on the volunteers, reinforcing their connection to the nation and promoting a culture of love and respect for the soil that sustains us all.
    `,
    summary:
      "Under the 'Meri Mati Mera Desh' initiative, TCET NSS Unit organized a meaningful project, encouraging participants to express their love for the country by placing soil in specially painted Amrit Kalash. College students, faculty, and volunteers actively participated, taking a pledge to symbolize their commitment. The event featured a spirited rally with prepared posters and slogans, fostering a sense of unity and patriotism.",
  },
  {
    id: 41,
    project: "Wall Painting",
    domain: "SOCIETY, CAMP",
    images: [...Major_HD.WallPainting],
    reduced_images: [...Major_simple.WallPainting],
    quote: "Artistic expression, environmental impression.",
    main: 'TCET NSS Volunteers prepared for wall painting by discussing painting ideas for the "Majhi Vasundhara" theme and cutting stencil outlines to simplify the process. Working together, they developed improved plans for the Brush Hour project, showcasing effective teamwork and creativity. Through this project, TCET NSS Volunteers gained practical experience in conveying messages through painting, fostering personal growth and acquiring valuable skills.The project aimed to convey a message of environmental consciousness and foster community engagement through the theme "MAJHI VASUNDHRA." TCET NSS Volunteers strategically used stencils to transform the wall into a visually appealing space, successfully spreading awareness about the environment among villagers of Saiwan. The positive reception from villagers highlighted the project\'s impact on fostering appreciation for the surrounding ecosystem and promoting community togetherness.The project successfully combined art and community engagement to achieve its goals of spreading awareness about the environment and fostering appreciation for nature. Through hands-on experiences, TCET NSS Volunteers learned the importance of teamwork, creativity, and conveying messages effectively through art. The thematic focus on "Majhi Vasundhara" added depth and purpose to the project, demonstrating the power of art in advocating for important societal issues.',
    summary:
      'TCET NSS Volunteers carried out a wall painting project themed around "Majhi Vasundhara," aiming to promote environmental consciousness and community engagement. Through discussions and stencil cutting, they planned the painting process and transformed the wall into an attractive space, spreading environmental awareness among villagers. This project provided hands-on experience in conveying messages through art, emphasising teamwork, creativity, and community involvement, showcasing the impactful role of art in advocating for societal issues and promoting environmental awareness.',
  },
  {
    id: 42,
    project: "Energy Conservation",
    domain: "SOCIETY",
    images: [...Major_HD.EnergyCons],
    reduced_images: [...Major_simple.EnergyCons],
    quote: "Conserve Today, Power Tomorrow.",
    main: `The "Shakti Sanchay: Electricity Conservation Project" in Singh Estate, enhanced by the active participation of dedicated volunteers and leaves a lasting impact on the community. Divided into pairs, volunteers collected data by examining more than 100 electricity bills from diverse households. This thorough analysis enabled the project to offer personalized suggestions, addressing individual consumption patterns. Beyond raising awareness, the initiative demonstrated a commitment to sustainability
    The volunteers not only learned to effectively communicate the importance of electricity conservation but also provided actionable tips for households to adopt energy-efficient practices. The project extended its reach by exploring solar panel adoption and other eco-friendly measures. The extensive data collection, totaling more than 100 electricity bills, allowed for deep insights into consumption patterns, enabling the volunteers to tailor recommendations for maximum impact.
    The TCET NSS volunteers, by interacting directly with the community, not only educated residents about conservation but also empowered them with the knowledge and tools for active energy conservation. This community-driven approach ensured that the impact of the project extended beyond the immediate awareness campaign, setting the stage for sustainable, long-lasting improvements in electricity usage in Singh Estate.
    In conclusion, the "Shakti Sanchay: Electricity Conservation Project" not only informed and educated the community but also actively engaged residents in the journey towards a more eco-friendly and sustainable neighborhood. Through personalized recommendations and a data-driven approach, the project exemplified a strong dedication to creating lasting positive changes in electricity consumption habits.`,
    summary: "The 'Shakti Sanchay' Electricity Conservation Project by the TCET NSS UNIT volunteers is conducted in Singh Estate which is the adopted area of TCET NSS UNIT. It gathers insights from electricity bills of residents of the Singh Estate. Using personalized recommendations, the project enhanced awareness and empowered residents, fostering a sustainable community mindset. The initiative showcased a commitment to eco-friendly practices and long-term electricity conservation.",
  },
  {
    id: 43,
    project: "School Teaching",
    domain: "EDUCATION, CAMP",
    images: [...Major_HD.SchoolTeaching],
    reduced_images: [...Major_simple.SchoolTeaching],
    quote: "Volunteers and students: where inspiration meets opportunity.",
    main: "Volunteers committed themselves to fostering a positive atmosphere by organizing icebreakers and engaging games for primary and secondary students. Initially faced with hesitation, volunteers skillfully worked to ease students' discomfort through interactive activities, gradually encouraging more participation. Embracing vulnerability, volunteers not only showcased their talents but also motivated students to express themselves freely, resulting in a notably enjoyable environment where students eagerly anticipated further sessions.\n\nBeyond facilitating activities like origami, volunteers actively interacted with students, discussing their hobbies and future aspirations. They passionately motivated and inspired students, offering insights into various career paths and sharing updates on current events. By sharing real-world experiences, volunteers broadened students' perspectives and instilled a sense of ambition and curiosity for the future.\n\nUpon the volunteers' return, the depth of connection with the students was palpable as they warmly recalled the volunteers' names. This heartwarming gesture served as a testament to the profound impact of the interaction. It highlighted the lasting impression left by the volunteers' efforts, showcasing the significance of building genuine connections and inspiring young minds through thoughtful engagement.",
    summary:
      "Volunteers bonded with primary and secondary students through games, forming strong connections. Initially shy, students gradually engaged, showcasing talents and requesting more sessions. Volunteers learned Marathi for better communication, and students enjoyed origami. Upon return, students' memory of volunteers' names highlighted their closeness. Additionally, volunteers interacted with over 265 children in the adopted village, showing the enduring impact of school teachings.",
  },
  {
    id: 44,
    project: "Nukkad Natak on Samaajik Mudde",
    domain: "EDUCATION, CAMP",
    images: [...Major_HD.NukkadSamajik],
    reduced_images: [...Major_simple.NukkadSamajik],
    quote: "Community stories, cultural symphonies.",
    main: "TCET NSS Volunteers worked together to create a skit in Marathi, with a focus on cultural adaptation and effective communication. They successfully reproduced the Zephyr skit predominantly in Marathi, incorporating Marathi-based content and dialogues. TCET NSS Volunteers organised rehearsals, facilitating a valuable learning experience where volunteers exchanged ideas to enhance the skit, showcasing their collaborative creativity.\n\nThe aim of the project was to engage villagers and school students through an impactful skit performance, primarily presented in Marathi for easy understanding and connection with the local audience. The skit, themed around Time Travel, compared two eras and effectively delivered a strong message to the villagers through a Nukkad Natak format. The audience, including both villagers and students of Saiwan Village, showed interest and curiosity, enjoying the performance and grasping the underlying message about societal issues.\n\nThrough the process of organising and rehearsing the skit, the TCET NSS Volunteers learned valuable lessons in teamwork, communication, and creativity. They gained practical experience in cultural adaptation and effective message delivery, which not only entertained the audience but also prompted them to reflect on societal challenges. The enthusiastic response from both villagers and students of Saiwan Village served as a testament to the effectiveness of the skit and the efforts of the TCET NSS Volunteers.",
    summary:
      "TCET NSS Volunteers prepared a skit in Marathi, emphasising cultural adaptation and effective communication. Reproducing the Zephyr skit predominantly in Marathi, they organised rehearsals and exchanged ideas to enhance creativity. Themed around Time Travel, the skit engaged villagers and students, delivering a strong message about societal issues. Through this process, TCET NSS Volunteers gained valuable teamwork and communication skills, leading to an enthusiastic response from the audience.",
  },
  {
    id: 45,
    project: "Cancer and Digital Awareness Drive",
    domain: "EDUCATION",
    images: [...Major_HD.Cancer],
    reduced_images: [...Major_simple.Cancer],
    quote: "Awareness shields, cancer yields.",
    main: `The TCET NSS Unit's Cancer Awareness Drive at BMC Ground beside Thakur College Of Engineering and Technology, marked a significant effort to address the lack of awareness about different types of cancers and their causes, particularly the taboo surrounding breast cancer among women. 
    The project, spanning a duration of two hours, involved the active participation of volunteers from the TCET NSS Unit. The volunteers were strategically divided into pairs to cover maximum households in Singh Estate, adopted by the TCET NSS Unit. Visual aids such as posters were employed to enhance understanding and facilitate effective communication.
    The feedback analysis revealed that the volunteers had a positive experience interacting with the local residents, and the feedback session provided insights into what aspects of the awareness drive were informative, engaging, or challenging. The outcomes of the project included increased awareness within the community regarding different types of cancers and their causes.
    In conclusion, the TCET NSS Unit's Cancer Awareness Drive laid a foundation for future health initiatives, emphasizing the need for ongoing efforts to tackle challenges like ignorance and resistance. The project successfully broke taboos and contributed to improving the overall health and well-being of the adopted village.`,
    summary:
      "The TCET NSS Unit's Cancer Awareness Drive was successful in raising awareness about different types of cancers and their causes in Singh Estate. The project aimed to break the taboo surrounding breast cancer among women through direct community interaction and visual aids like posters. The volunteers learned valuable communication skills and the importance of addressing cultural taboos for open discussions. Despite challenges, the project achieved its goal of spreading awareness within the community, laying the foundation for future health initiatives.",
  },
  {
    id: 46,
    project: "Menstrual Cycle Awareness Seminar",
    domain: "HEALTH, CAMP",
    images: [...Major_HD.MenstCyc],
    reduced_images: [...Major_simple.MenstCyc],
    quote: "Periods are not a taboo, they're a natural part of womanhood.",
    main: "The primary objective of the project was to educate women and girls in the village about menstrual health, with a focus on fostering awareness and promoting hygiene practices. Recognizing the prevailing lack of understanding on these topics, the speaker diligently guided participants through valuable insights during the seminar, addressing common doubts and myths. Through this interactive session, participants gained comprehensive knowledge about the menstrual cycle and the female body, effectively bridging gaps in their understanding and enhancing their awareness.\n\nVolunteers played a crucial role in the success of the seminar, collaborating with the Difference NGO to organize and facilitate the event. In addition to their support, volunteers from the adopted village were recognized and rewarded with certificates for their participation and dedication. This collaborative effort not only benefited the attendees but also provided valuable learning opportunities for the volunteers themselves, who gained awareness of the importance of menstrual hygiene practices.\n\nOverall, the seminar left a significant impact on the empowerment of women and girls in the village. By promoting confidence and encouraging healthier practices, it contributed to the creation of a more informed and empowered community. Through effective communication and collaboration between volunteers, participants, and the NGO, the seminar successfully addressed misconceptions and provided essential knowledge, laying the foundation for improved well-being and self-assurance among villagers.",
    summary:
      "The project aimed to educate women and girls in the village about menstrual health, emphasizing awareness and hygiene. The seminar addressed common misconceptions and provided comprehensive knowledge, bridging understanding gaps. Volunteers collaborated with the Difference NGO to organize and facilitate the event, recognizing participants and gaining insights themselves. The seminar's impact empowered the community, promoting confidence and healthier practices, and fostering a more informed and self-assured village through effective communication and collaboration.",
  },
  {
    id: 47,
    project: "Free Medical Eye Checkup Camp",
    domain: "HEALTH, CAMP",
    images: [...Major_HD.FreeMedical],
    reduced_images: [...Major_simple.FreeMedical],
    quote: "Eyesight is priceless.",
    main: "The project in Saiwan Village included two primary objectives: conducting an Awareness initiative and organising a Medical Eye Checkup Camp in collaboration with the Lions Club. The aim was to raise awareness among residents about the forthcoming Free Medical Eye Checkup Camp and address the prevalent eye health issues within the Saiwan village. The project also sought to emphasise the distribution of free spectacles and eye checkups during the camp.\n\nDuring the Awareness initiative, TCET NSS Volunteers explained the importance and objectives of the upcoming Medical Eye Checkup Camp to the villagers of Saiwan. They emphasised the significance of addressing eye health concerns and explained the benefits of free spectacles and eye examinations. Meanwhile, the execution of the Medical Eye Checkup Camp involved the participation of a specialised eye doctor and assistant from the Lions Club NGO. TCET NSS Volunteers played a pivotal role in motivating villagers to partake in the eye examinations, recording vital information during checkups, and facilitating the distribution of spectacles based on diagnosed conditions. This collaborative effort resulted in the successful coordination between TCET NSS Volunteers, external healthcare professionals, and NGOs in organising specialised medical camps for community well-being.\n\nVillagers were happy with the Medical Eye Checkup Camp and felt it really helped them. They were thankful for the initiative as many people in the village have eye problems and need this kind of help. This project showed how important it is for everyone to work together and talk openly to make healthcare better. It proved that when people team up, they can make a big difference in solving health issues and making the community healthier overall.",
    summary:
      "The project in Saiwan Village aimed to raise awareness about a Free Medical Eye Checkup Camp and address prevalent eye health issues. TCET NSS Volunteers emphasised the importance of the camp and its benefits to villagers, while also assisting in the checkups and spectacle distribution. Villagers appreciated the initiative, highlighting the significance of teamwork and communication in improving healthcare outcomes and community well-being. ",
  },
  {
    id: 48,
    project: "Stem Workshop on Health & Hygiene",
    domain: "HEALTH, CAMP",
    images: [...Major_HD.Stem],
    reduced_images: [...Major_simple.Stem],
    quote: "Water Wise, Healthier Lives",
    main: "The STEM workshop, organised in partnership with IEEE Bombay section, was a proactive initiative aimed at educating children in the village about health and hygiene. Sampling sand and water for research purposes underscored the scientific aspect of the workshop, fostering curiosity among the villagers. The skit on millets emphasised the importance of incorporating healthy food choices into daily diets. Additionally, addressing the issue of clean water scarcity in the village, the workshop highlighted the importance of water conservation, rainwater harvesting, and methods for water purification.\n\nA notable highlight was the practical demonstration illustrating how dirty water could be purified and identifying contaminated water sources. The distribution of protein bars aimed to promote healthy snacking habits among the children, while the provision of colours and sketch pens encouraged creativity through poster-making activities. The interactive sessions facilitated meaningful engagement and exchange of ideas among the students, empowering them to take responsibility for their health and environment. Furthermore, the generous gesture of gifting a RO Kent system to the school showcased the commitment to addressing the clean water challenge sustainably.\n\nIn conclusion, the STEM workshop successfully combined education, practical demonstrations, and interactive activities to impart crucial knowledge about health, hygiene, and environmental sustainability. By fostering awareness and empowering the children with practical skills, the workshop aimed to create lasting positive impacts within the Saiwan village.",
    summary:
      "The STEM workshop, in collaboration with IEEE Bombay section, conducted a project focusing on spreading awareness about health and hygiene among children in the Saiwan village. The workshop included skits to raise awareness about the importance of millets for health, clean water issues, water conservation, and rainwater harvesting. Practical demonstrations on water purification techniques were showcased, including the distribution of protein bars, colours, and sketch pens, along with gifting a RO Kent system to the school.",
  },
];

const minor_project = [
  {
    id: 201,
    image: Major_HD.Preamble,
    project: "Preamble to the Constitution",
    domain: "EDUCATION",
    summary:
      "In celebration of Samvidhan Diwas (Constitution Day) on November 26th, a noteworthy initiative was taken by TCET NSS UNIT, commemorating the adoption of the Constitution of India. TCET NSS Volunteer’s heartfelt tribute to our Constitutionthrough the online reading of the Preamble and receiving the certificate, available in22 Official Languages and English, it's an inclusive embrace of unity in diversity—abeacon of democracy for our nation's foundation. This celebration fosters a deepappreciation for our constitutional values and invokes a sense of pride and belongingamong TCET NSS Volunteers, reinforcing their commitment to upholding India'sdemocratic principles.",
  },
  {
    id: 202,
    image: Major_HD.OnlineQuiz,
    project: "Online Quiz on Bharat Loktantra ki janani",
    domain: "EDUCATION",
    summary:
      "Embarking on a fascinating knowledge journey this Constitution Day, TCET NSS Volunteers engage in the Bharat Loktantra ki Janani online quiz—a digital homage to India's democratic heritage conducted on an online government portal. Challenging themselves, testing constitutional prowess, TCET NSS Volunteers join the celebration of Bharat Loktantra, where democracy reigns supreme and receive a certificate for taking the test. This quiz enhances understanding of democratic principles and contributes to the collective celebration of India's democratic legacy, fostering a sense of civic pride among TCET NSS Volunteers",
  },
  {
    id: 203,
    image: Major_HD.Poster,
    project: "POSTER MAKING",
    domain: "HEALTH",
    summary:
      "Poster making is a vibrant aspect of various projects across education, environment, society, and health domains in TCET NSS UNIT. These colourful creations serve as impactful messengers, simplifying complex ideas into visually appealing messages. TCET NSS Volunteers showcase their creativity, turning big concepts into eye-catching visuals. The simplicity of posters makes spreading awareness easier, acting as superheroes in conveying messages effectively. Whether it's about Tree Plantation, Blood Donation Awareness, Road Safety & Traffic Management, or Electricity Conservation Awareness, poster making becomes a dynamic tool for creating understanding and making a positive impact",
  },
  {
    id: 204,
    image: Major_HD.Plenarytalk,
    project: "Plenary Talk",
    domain: "EDUCATION",
    summary:
      "Dive into the treasures of ancient Indian wisdom with our enlightening Plenary Talk on the Indian knowledge system conducted by Mumbai University(MU). TCET NSS Volunteers explore the profound insights of Ayurveda, Yoga, Vedic literature, and the interconnectedness of the universe. This captivating talk delves into the richness of our heritage, showcasing the timeless relevance of this knowledge in the modern world. TCET NSS Volunteers embraced the holistic living and sustainable practices embedded in India's knowledge legacy.",
  },
  {
    id: 205,
    image: Major_HD.NSSOrientation,
    project: "NSS Orientation",
    domain: "EDUCATION",
    summary:
      "Discover the TCET NSS UNIT's world through an enlightening NSS Orientation, where volunteers learn about the significance of the NSS logo and delve into the roots of NSS Foundation Day. It's more than an orientation; it's a journey into the heart of community service and meaningful engagement. TCET NSS Volunteers engaged in a journey of knowledge and community service, enriching their understanding of this impactful initiative.",
  },
  {
    id: 206,
    image: Major_HD.NSSRecruitment,
    project: "NSS SE Recruitment",
    domain: "EDUCATION",
    summary:
      "TCET NSS Volunteers unleashed the power of community engagement through theNSS Recruitment. Aiming to foster stronger connections with S.E. students and adeeper sense of purpose, this initiative enriches the TCET NSS Volunteer’sexperience. By sharing knowledge and experiences, TCET NSS UNIT cultivates aculture of continuous learning. The recruitment serves to expand the TCET NSS UNIT's reach, recruiting dedicated S.E. students. As a result, many students joinedTCET NSS UNIT in building a vibrant community committed to positive change andcollective growth.",
  },
  {
    id: 207,
    image: Major_HD.ArticleWriting,
    project: "Article Writing",
    domain: "EDUCATION",
    summary:
      "Unlocking Creativity through Words: TCET NSS UNIT's Article Writing Project provides a platform for TCET NSS Volunteers to explore the profound power of expression. Through heartfelt poems and insightful articles also gets included in the official TCET NSS UNIT’s magazine “Parivartan”, TCET NSS Volunteers delve into diverse themes, passionately sharing their thoughts and ideas. This initiative creates a canvas where voices find resonance, fostering a vibrant community where creativity knows no bounds. ",
  },
  {
    id: 208,
    image: Major_HD.Dandiyatra,
    project: "Dandi Memorial Yatra",
    domain: "EDUCATION",
    summary:
      "Embark on a journey through history with the TCET NSS UNIT's Dandi Memorial Yatra which took place at the Gateway Of India, a tribute to Mahatma Gandhi's iconic Dandi March and the sacrifices of freedom fighters. TCET NSS Volunteers immersed themselves in the past, witnessing a captivating skit that unfolded the glorious chapters of India's struggle for Independence. This project aimed to honour the contributions of those who fought for freedom from British rule. Through this immersive experience, volunteers not only gained knowledge but also a profound understanding of the sacrifices that paved the way to independence",
  },
  {
    id: 209,
    image: Major_HD.MarinePollution,
    project: "Marine Pollution Seminar",
    domain: "ENVIRONMENT",
    summary:
      "Dive into the depths of understanding with our Marine Pollution project, where knowledge meets action. TCET NSS Volunteers explored the complex factors affecting marine life and enthusiastically talked about solutions. As a result, they not only gained insights into the importance of the marine ecosystem but also contributed to the ongoing conversation on preserving our oceans. Towards the end of the seminar a fun quiz was conducted to test the knowledge gained by the TCET NSS Volunteers and a certificate was given afterwards.",
  },
  {
    id: 210,
    image: Major_HD.SeedChange,
    project: "Sow the Seed of Change : Debate",
    domain: "EDUCATION",
    summary:
      "TCET NSS UNIT's initiative for environmental awareness. Volunteers passionately debated on topics like 'India's Independence' and 'Dowry.' This project enhanced communication and critical thinking skills, fostering adaptability. A deeper understanding of complex issues and a showcase of participants' engagement abilities. Experience the results of our dedication to environmental responsibility and active participation in fostering change. ",
  },
  {
    id: 211,
    image: Major_HD.PotPainting,
    project: "Amrit Kalash : Pot Painting",
    domain: "SOCIETY",
    summary:
      "Dive into artistic expression with TCET NSS UNIT, from the initial white layer to the symbolic depth of Indian patriotism. TCET NSS Volunteers' dedication created more than a painted pot; they crafted cultural significance. Uncover the beauty of tradition, nurture creativity, and join a unifying journey where art binds us spiritually and culturally",
  },
  {
    id: 212,
    image: Major_HD.BloodAwareness,
    project: "Blood Donation Awareness",
    domain: "HEALTH",
    summary:
      "TCET NSS volunteers took a stand for our society's well-being by promoting blood donation awareness. They emphasised the significant impact of individual efforts, showcasing the power of spreading awareness. Donors received certificates and donor cards, highlighting the importance of donating blood. Donating blood saves lives in emergencies, surgeries, and medical situations. This initiative exemplifies how each person contributes to improving community health.",
  },
  {
    id: 213,
    image: Major_HD.RoadSeminar,
    project: "Road Safety Seminar",
    domain: "EDUCATION",
    summary:
      "TCET NSS Unit's drive for safer roads partnered with 'Helmet for Life' creating a high-impact seminar on preventing accidents. A speaker's informative presentation emphasised responsible driving and distributed helmets to the TCET NSS Volunteers. Takeaways include certificates, helmets, a sense of responsibility, and a positive shift in driving behaviour. At the end of the seminar, TCET NSS Volunteers had a fun quiz about what they learned in the Road Safety Seminar",
  },
  {
    id: 214,
    image: Major_HD.ElectricityConservation,
    project: "Electricity Conservation Awareness",
    domain: "ENVIRONMENT",
    summary:
      "TCET NSS Unit's impactful online project raised awareness on responsible electricity use. TCET NSS Volunteers discussed, created posters, made questionnaires for the survey conducted at Singh Estate, and shared innovative ideas of conserving usage of electricity. Examining electricity bills of their families, neighbours, maids, watchmen, etc, they aimed to promote smart use. The project inspired a sense of responsibility for Mother Earth, fostering a cleaner, sustainable future. Now, armed with knowledge and passion, TCET NSS volunteers lead the charge in teaching efficient electricity use for a greener tomorrow.",
  },
  {
    id: 215,
    image: Major_HD.SamvidhanDin,
    project: "Samvidhan Din : Constitution Day",
    domain: "EDUCATION",
    summary:
      "TCET NSS volunteers actively engaged in activities centred around Constitutional Rights, Fundamental Rights, and Democracy. With a powerful start with the National Anthem, the event showcased strong dedication to educating about India's democracy. The day at Mumbai University included expert insights on the Rupee issue, certificates for the volunteers, offering historical perspectives and solutions. The conference emphasised the Constitution's pivotal role, inspiring and motivating TCET NSS Volunteers to contribute to positive societal change. More than a conference, it became a collective effort for a better future and a renewed commitment to uphold our Constitution",
  },
  {
    id: 216,
    image: Major_HD.DeshUtsav,
    project: "Desh ke Utsav Pledge",
    domain: "EDUCATION",
    quote: "Cultural threads, where unity spreads.",
    summary:
      "TCET NSS Volunteers pledged to promote the nation and its heritage, fostering a sense of community involvement from an online government portal and certificates were given to them for taking the pledge. Through virtual showcases and festival participation, TCET NSS Volunteers embraced cultural diversity, uniting beyond differences. This collective commitment goes beyond a ceremony—it's an ongoing journey toward unity, civic responsibility, and cultural celebration. Together, TCET NSS Volunteers advanced their shared commitment to unity, civic responsibility, and the lively celebration of cultural diversity",
  },
  {
    id: 217,
    image: Major_HD.VocalLocal,
    project: "Be Vocal About Local Pledge",
    domain: "EDUCATION",
    quote: "Sustainable future, with voices nurtured.",
    summary:
      "TCET NSS Volunteers unite in pledging for local economic empowerment on an online government portal. Each volunteer commits online, receiving a certificate for their participation. Learnings include the collective impact on local businesses and cultural heritage. With TCET NSS Volunteers participating, the positive project impact enhances the contributing to a favourable image and reinforces our commitment to local empowerment. The pledge emphasises the social impact of choosing local, promoting eco-friendly behaviour. Join us in fostering resilient communities, economic sustainability, and a more vibrant local environment. ",
  },
  {
    id: 218,
    image: Major_HD.SwatchhDiwali,
    project: "Swachh Diwali Shubh Diwali Pledge Activity",
    domain: "EDUCATION",
    quote: "Illuminate with care, Diwali pledge we bear.",
    summary:
      "Embrace a green Diwali with TCET NSS UNIT! Volunteers pledge online through a government portal for an eco-friendly celebration, receiving certificates for their commitment. Learn about the environmental impact of traditional Diwali practices and shift towards sustainable choices in decorations and lighting. TCET NSS Volunteers promoted a cleaner Diwali to peers, family, and the community. Make a positive impact with a pledge for a Swachh and Shubh Diwali.",
  },
  {
    id: 219,
    image: Major_HD.NukkadNatak,
    project: "Nukkad Natak On Angdaan",
    domain: "HEALTH",
    quote: "Not all heroes wear capes! They donate",
    summary:
      "Step into a world of compassion and commitment with TCET NSS UNIT's Organ Donation Awareness project. Through a captivating skit, TCET NSS Volunteers creatively combined informative posters and impactful slogans, educating the society about the impact of organ donation. Revealing the truth behind myths and encouraging personal responsibility, the heartfelt pledge by TCET NSS Volunteers signifies a small yet impactful step towards fostering a healthier society. TCET NSS Volunteers spread the message of hope and the power of organ donation through creativity and dedication",
  },
  {
    id: 220,
    image: Major_HD.Ecoharbour,
    project: "Eco Harbour : E-waste collection drive",
    domain: "ENVIRONMENT",
    quote: "E-waste. End it. Our Planet depends on it.",
    summary:
      "TCET NSS Unit organises a project to tackle electronic waste. We aim to stop improper disposal that harms our environment.When we gather and recycle old electronic stuff, it not only prevents dangerous materials from getting into our surroundings but also helps us recover valuable materials for reuse, reducing the need for new resources and lessening the environmental impact of making electronics. During the project, our NSS volunteers learn about the importance of responsible e-waste disposal, raising awareness about sustainable practices.",
  },
  {
    id: 221,
    image: Major_HD.SwatchattaSeva,
    project: "Swachhata hi Seva",
    domain: "ENVIRONMENT",
    quote: "Time to make a plea to make India defecation free",
    summary:
      "TCET NSS Unit conducts the project “Swachhta hi Seva” for a cleaner India, free from open defecation. Our volunteers actively participate in this initiative, improving cleanliness in communities and public spaces. Simultaneously, we spread awareness about waste and pollution's impact, stressing the importance of preserving natural resources. The result: cleaner surroundings, reduced litter, and better waste management. This positively impacts the local environment, reducing pollution and ensuring the sustainable preservation of our natural resources.",
  },
  {
    project: "Anti-dowry rally (MU)",
    image: Major_HD.DowryRally,
    domain: "SOCIETY",
    quote: "Love is not bought,it cannot be sold. Say no to dowry",
    summary:
      "The TCET NSS participated in an Anti-Dowry organised by Asha Kulkarni rally near Parle G factory in Vile Parle. Together with other NSS units, they held up posters to spread the message against dowry. The inclusion of a skit aimed to further raise awareness about this social issue, effectively using a creative medium to convey the message against dowry during the event. The main goals were to inform people about the harms of giving or taking dowry. This event taught participants the importance of working together to change society and showed them how creating awareness in the community can tackle long standing social problems",
  },
  {
    project: "Jagrukta Abhiyan Poster Making",
    image: Major_HD.JagruktaAbhiPoster,
    domain: "EDUCATION, CAMP",
    quote:
      "With awareness comes understanding, with understanding comes change",
    summary:
      "TCET NSS unit conducted the Jagrukta Abhiyan Poster Making project aimed at preparing posters and slogans for the Jagrukta Abhiyan rally in our adopted village Saiwan. The main objective was to raise awareness about key issues like hygiene, waste management, and disease prevention. Dedicated volunteers created posters and slogans, focusing on these topics. They organized into groups, each assigned to a specific theme. Slogans were crafted in Marathi for better understanding. Through this project, volunteers learned essential elements of rally preparation and gained insights into creating impactful awareness materials.",
  },
  {
    image: Major_HD.Gurudev,
    project: "Gurudev Bhajan Sandhya (MU)",
    domain: "EDUCATION",
    quote: "Calmness is the cradle of power.",
    summary:
      "TCET NSS volunteers gathered at Vishnu Hanuman Ground, Goregaon West for the Gurudev Bhajan Sandhya. Standing in solidarity with Gurudev Sri Sri Ravi Shankar ji, volunteers from various NSS units immersed themselves in an evening dedicated to spiritual harmony. The event resonated with teachings on peace, guiding participants through meditation, yoga, and more. They joined hands to build an environment that promotes calmness, resonating with the shared dream of a world rooted in peace and inner harmony",
  },
  // {
  //   image: Major_HD.MedicalSur,
  //   project: "Swasthya Samwad : Medical Survey",
  //   domain: "HEALTH",
  //   quote: "",
  //   summary: "",
  // },
  {
    image: Major_HD.SanitaryDistri,
    project: "Sanitary Pad Distribution",
    domain: "HEALTH, CAMP",
    quote: "Periods are normal, so are sanitary pads",
    summary:
      "TCET NSS unit organised a seminar to distribute sanitary pads to all the women of our adopted village Saiwan, ensuring access to menstrual hygiene products. The aim was to raise awareness about the menstrual cycle and the importance of using sanitary pads. Following the seminar, each woman received packets containing 2 pads and as a result more than 600 pads were distributed. Participants gained insights into menstrual cycle reasons and hygiene practices. They learned the importance of using sanitary pads for hygiene during menstruation. This initiative empowered women with essential products and knowledge, promoting better menstrual health practices in the community.",
  },
  {
    project: "Human Trafficking",
    image: Major_HD.HumanTraffic,
    domain: "EDUCATION",
    quote: "Freedom is a right, not a privilege",
    summary:
      "In a bid to combat human trafficking, which involves the illegal trade of humans for forced labour or other forms of exploitation, TCET NSS Unit conducted an awareness project with clear goals: enlighten volunteers about trafficking issues, advocate for victims' rights, and prevent criminal practices. Volunteers, in groups, created posters addressing human trafficking. The session increased awareness, aligning with the UN's 'World Day Against Trafficking in Persons' theme of 'Use and Abuse of Technology' this year. Several volunteers benefited from the initiative, making strides towards a better-informed and proactive community in the fight against human trafficking",
  },
  {
    image: Major_HD.SchoolTeac,
    project: "Back2School : School Teaching",
    domain: "SOCIETY",
    quote: "Guiding minds, where endless curiosity binds.",
    summary:
      "The TCET NSS conducted a School Teaching project in its adopted village. The volunteers were on a mission to make a difference. They split into groups, with some focusing on teaching older kids and others on the younger ones. The motive was clear, to share knowledge and create a joyful learning atmosphere. The volunteers didn't just teach; they played games, ensuring a fun and holistic experience. The motive went beyond classrooms; it was about building connections and leaving a positive impact. In this shared learning adventure, both the volunteers and the children gained valuable insights, fostering a spirit of growth and community in the adopted village",
  },
  {
    image: Major_HD.Zumba,
    project: " Fitness & Zumba Activity",
    domain: "EDUCATION, CAMP",
    quote:
      "Dance your way to fitness with Zumba: every step is a celebration of health.",
    summary:
      "The Energy Express aimed to boost student fitness with dance and engaging activities, including the Zephyr flash mob. Volunteers actively participated, encouraging involvement. The project focused on enhancing student fitness through enjoyable pursuits, with volunteers providing support. In the fitness activity, over 180 children from the adopted village participated, engaging in a Zumba session and preparing for a flash mob. The main objective was to foster fun interactions while teaching new dance moves.",
  },
  // {
  //   project: "Yuva Samvad (MU)",
  //   domain: "EDUCATION",
  //   quote: "Young hearts, boundless dreams",
  //   summary:
  //     "TCET NSS volunteers participated in the online Yuva Samvad competition organised by Mumbai University, focusing on the theme 'Meri Mati Mera Desh.' Volunteers eloquently spoke on subjects such as India's rich culture and heritage. This virtual platform allowed our volunteers to showcase their knowledge and patriotic spirit. The objectives included fostering a sense of national pride and highlighting cultural diversity. Volunteers gained valuable insights into effective communication, cultural appreciation, and the significance of preserving our heritage. Overall, the competition was a meaningful exchange of ideas, fostering a deeper connection with our roots.",
  // },
  {
    project: "Anti-ragging Week",
    image: Major_HD.Antiragg,
    domain: "EDUCATION",
    quote: "Respect your peers, wipe out ragging's fears!",
    summary:
      "During Anti-Ragging Week, the TCET NSS Unit organised an impactful initiative - an anti-ragging quiz based on an enlightening documentary. Volunteers were provided with a link to the documentary, fostering awareness and understanding of the issue. Subsequently, a quiz link was shared, encouraging active participation. The motive was clear: to educate, prevent, and create a safer environment. This initiative not only disseminated crucial information but also instilled a sense of responsibility among volunteers.Through this, the TCET NSS Unit aimed to promote a campus culture rooted in respect, empathy, and the eradication of ragging",
  },
  {
    project: "Honeywell Event Discipline",
    domain: "SOCIETY",
    image: Major_HD.HoneyWell,
    quote: "Unity in service, hospitality in action.",
    summary:
      "At the Honeywell event, TCET NSS volunteers were organised into groups, each with a specific role. Some enthusiastically welcomed foreign delegates with a special NSS clap, fostering a friendly atmosphere. Another group efficiently managed the crowd, ensuring a seamless experience for the international guests participating in games. Throughout the event, volunteers excelled in crowd and discipline management, displaying teamwork and organisational skills. The motive was clear: create a warm environment and showcase unity. In this process, they gained valuable insights into effective event coordination, teamwork, and hospitality—lessons that extend beyond the occasion, fostering a strong sense of community and shared responsibility",
  },
  {
    project: "BenevolentPaws: Feeding Animals and Birds",
    domain: "SOCIETY",
    image: Major_HD.Benevolent,
    quote: "Fur and feather, paws together!",
    summary:
      'On International Animal Rights Day, TCET NSS Unit conducted the project "Benevolent Paws: Feeding Animals and Birds." Volunteers enthusiastically fed various creatures, sharing uplifting images of their efforts. The motive was to spread kindness and awareness about the well-being of animals, birds, and fishes. The project emphasised our shared responsibility to care for the environment and its inhabitants. Volunteers learned the importance of compassion, empathy, and the positive impact of small actions in creating a more humane world. This initiative sparked a sense of responsibility towards our animal friends and encouraged ongoing efforts for their welfare.',
  },
  {
    image: Major_HD.Ashrambeau,
    project: "Poster making for ashram beautification",
    domain: "SOCIETY",
    quote: "Crafting joy, painting compassion.",
    summary:
      "Dive into the world of compassion and creativity with TCET NSS Volunteers inspiring project, turning walls into vibrant canvases at the Old Age Home. Each stroke carries the spirit of kindness, uplifting the residents' hearts. Witness the transformation of spaces through our volunteers' creativity, sparking joy and fostering a sense of community. Join us in spreading smiles and making every brushstroke count in the beautiful tapestry of giving. Together, let's celebrate the power of art to brighten lives and create lasting memories",
  },
  {
    image: Major_HD.PubAwareness,
    project: "Public Awareness Campaign",
    domain: "EDUCATION",
    quote: "Informed choices, engaged voices.",
    summary:
      "Step into the realm of impact with our Public Awareness Campaign, where enthusiasm meets dedication. TCET NSS Volunteers, driven by a commitment to community service, harnessed the power of information to connect with government schemes. Through videos and virtual platforms, they learned and spread awareness, emphasising the responsibility we all bear towards nation-building. Witness the journey of informed citizenship, where collective action shapes a brighter, more engaged community",
  },
  {
    image: Major_HD.ERDC,
    project: "ERDC seminar",
    domain: "EDUCATION",
    quote: "Inspiring minds, igniting innovation",
    summary:
      "TCET NSS unit's PO's participated in the One Day Conference on the 'Importance of Entrepreneurship Development' along with the PO’s of other NSS units of Mumbai University at Indian Institution of Management, Mumbai (IIM Mumbai). The objective was to explore ways to encourage entrepreneurship at the grassroots level. Through the conference, they learned about the significance of entrepreneurship in tackling unemployment and promoting rural growth. They also gained insights into integrating entrepreneurship into education and fostering collaboration among various stakeholders. Overall, the event emphasised practical strategies for implementing entrepreneurship and rural development projects effectively.",
  },
  {
    image: Major_HD.NukkadSocial,
    project: "Nukkad Natak On Social Issues",
    domain: "EDUCATION",
    quote: "Time travel through the ages, a skit that resonates.",
    summary:
      "Embark on a journey through eras with TCET NSS UNIT's thought-provoking Nukkad Natak On Social Issues. TCET NSS Volunteers, driven by dedication and talent, bring to life the challenges faced by females across different times. From captivating introductions to seamless performances, witness the echoes of societal evolution. TCET NSS Volunteers foster connections, enhancing communication skills, and leaving a lasting impact on society. The Nukkad Natak On Social Issues is more than a performance; it's a journey through time, unravelling cultural transformations with every act",
  },
  {
    project: "Books To Street",
    domain: "SOCIETY",
    image: Major_HD.B2Streets,
    quote: "Waste to wisdom: Recycled notebooks tell a story of change",
    summary: `The TCET NSS UNIT's "Books to Street" project aimed to promote recycling and provide free notebooks to underprivileged students. Enthusiastic TCET NSS Volunteers actively participated, creating over 500 notebooks from old ones. This initiative showcased resourcefulness, empowering TCET NSS Volunteers to make a positive impact on their community. The project, inspiring creativity and sustainability, garnered support from the community, especially young volunteers. Despite challenges, the initiative highlights the potential to recycle and support others in need`,
  },
  {
    project: "UNITY RUN",
    domain: "SOCIETY",
    image: Major_HD.UnityRun,
    quote: "Together we stand, hand in hand",
    summary:
      "The Rashtriya Ekta Diwas - Unity Run at Thakur College of Engineering and Technology, Kandivali(E) a powerful initiative on Sardar Vallabhbhai Patel's birth anniversary, brings the NSS volunteers together for a symbolic collective run around the Thakur Complex, Kandivali(E). More than a physical activity, it became a strong symbol of unity, showcasing TCET NSS volunteers' responsibility to ensure no participant is left behind. Participatory learning emphasises how unity strengthens a diverse nation. Positive feedback analysis highlights the personal and national significance learned by volunteers. The run successfully promotes unity and patriotism, with certificates reinforcing a sense of achievement and pride. In conclusion, it proves transformative, fostering unity, patriotism, and fitness in the college community. ",
  },
  {
    image: Major_HD.VeeronVardaan,
    project: "Veero Ka Vandan",
    domain: "SOCIETY",
    quote: "Saluting the valour that echoes through the corridors of bravery",
    summary:
      'The TCET NSS UNIT organises the "Veero ka Vandan" project, an initiative expressing gratitude to police officers, traffic police, and security guards. Dedicated volunteers create and distribute over more than 60 handmade gratitude cards, aligning with the theme "Meri Maati, Mera Desh: Maati ko Naman, Veero ka Vandan." The project emphasises the significance of expressing gratitude, fostering positive relationships, and recognizing the sacrifices of heroes. Despite limited resources, the initiative strengthens community bonds, demonstrates the impact of simple acts of kindness, and presents opportunities for future similar projects. The "Veero ka Vandan" initiative reflects a commitment to community well-being, promoting awareness of gratitude and compassion.',
  },
  {
    image: Major_HD.Aakalan,
    project: "Aakalan : Paper Correction",
    domain: "SOCIETY",
    quote: "In the margins of mistakes, knowledge finds its corrections",
    summary:
      "The Rashtriya Ekta Diwas - Unity Run at Thakur College of Engineering and Technology, Kandivali(E) a powerful initiative on Sardar Vallabhbhai Patel's birth anniversary, brings the NSS volunteers together for a symbolic collective run around the Thakur Complex, Kandivali(E). More than a physical activity, it became a strong symbol of unity, showcasing TCET NSS volunteers' responsibility to ensure no participant is left behind. Participatory learning emphasises how unity strengthens a diverse nation. Positive feedback analysis highlights the personal and national significance learned by volunteers. The run successfully promotes unity and patriotism, with certificates reinforcing a sense of achievement and pride. In conclusion, it proves transformative, fostering unity, patriotism, and fitness in the college community. ",
  },
  {
    image: Major_HD.VoterAwareness,
    project: "Voter ID awareness",
    domain: "EDUCATION",
    quote: "Empower your voice, secure your choice – Get your Voter ID today!",
    summary:
      "The TCET NSS Unit organised a voter ID awareness campaign at Thakur College of Engineering and Technology, Kandivali (E). The TCET NSS volunteers play a crucial role in spreading awareness about the significance of possessing a voter ID through a dedicated campaign within the college premises. This initiative marks a crucial step in nurturing civic responsibility and encouraging active involvement in the democratic process. Volunteers explain the importance, eligibility criteria, and the step-by-step process, offering information on the required documents for a smooth application. The volunteers make sure that more and more people join this movement and ensure that their voice is heard by acquiring the Voter ID during this enlightening campaign",
  },
  {
    project: "15th August Independence Day Parade",
    domain: "SOCIETY",
    image: Major_HD.Independence,
    quote: "Celebrating unity, embracing lessons.",
    summary: `TCET NSS Unit, as always, actively participated in the Independence Day parade. Starting with practice days earlier, volunteers identified the mistakes they were doing and rectified them, in order to perform nicely on Independence Day. Their objective was a flawless parade presentation. Volunteers, alongside other college committees, performed a marvellous parade, showcasing dedication and enthusiasm. The occasion not just marked Independence Day but also showed how TCET's NSS unit values learning and getting better. It was a celebration of freedom, with volunteers working together to improve and make the day special.`,
  },
  {
    project: "26th January Republic Day",
    domain: "SOCIETY",
    image: Major_HD.Republic,
    quote: "A flag of pride, a nation united.",
    summary: `The TCET NSS Unit actively joined the Republic Day flag hoisting tradition at Thakur College of Engineering and Technology. A substantial number of volunteers gathered to express reverence for the Indian flag during the ceremony. Following the flag hosting, Program Officers (POs) engaged in insightful discussions with volunteers, delving into the importance and objectives of NSS. The event concluded on a positive note with a lively photo session, where volunteers, council members, and POs came together to capture memorable moments of unity and participation.`,
  },
  {
    image: Major_HD.BOW,
    project: "Best out of waste Workshop",
    quote: "Waste not, want not: Embracing creativity in recycling",
    summary:
      'TCET NSS unit organised the "Best out of waste" project at our adopted village Saiwan, where volunteers formed groups to craft useful items from waste. The project aimed to empower Saiwan Village students of standard 6th to 10th by teaching them to repurpose waste for daily needs. Volunteers meticulously guided the children through the manual creation process, developing their creativity and environmental awareness. By showcasing prototypes they had prepared earlier, volunteers provided a glimpse of the transformation process of waste into useful products. This hands-on experience not only enriched the students\' skills but also instilled in them a sense of pride and responsibility towards sustainable living practices.',
    domain: "ENVIRONMENT, CAMP",
  },
  {
    image: Major_HD.Godadhi,
    project: "Godadi making project",
    quote: "Weave Warmth, Share Hope.",
    summary:
      "The TCET NSS Unit initiated the 'Godadi Making' project, where volunteers united to create warm Godadis and handbags. In pairs, experienced volunteers guided those new to stitching, fostering teamwork and skill development. The project's goal was to support the underprivileged in winter through handmade goods distribution.The project not only achieved its goal but also showed how working together and sharing knowledge can make a positive difference in the community.",
    domain: "ENVIRONMENT",
  },
  {
    image: Major_HD.StemCell,
    project: "Stem Cell Donation",
    quote: "Break Myths, Save Lives: Donate Stem Cells!",
    summary:
      "The Stem Cell donation drive organized by the TCET NSS UNIT was witnessed to make communities come together for a life changing cause. The initiative aimed to raise awareness and encourage potential donors. Participants learned about the significance of stem cell donation, fostering a sense of unity and compassion. The drive resulted in an increased donor registry, providing hope to individuals awaiting life-saving transplants. The success of the event exemplifies the power of collective action in making a profound impact on lives through medical altruism.Participants gained insights into the critical importance of stem cell donation, dispelling myths and fostering a sense of responsibility toward the broader community.",
    domain: "HEALTH",
  },
  {
    image: Major_HD.HarGhar,
    project: "Har ghar Tiranga",
    quote: "Bringing patriotism to every doorstep, one flag at a time.",
    summary:
      "The TCET NSS UNIT volunteers embarked on a project in nearby neighborhoods, going door-to-door to distribute patriotism and the tricolor flag to every household. They further organized rallies with slogans and various activities to promote national pride and unity. The project aimed to foster a sense of patriotism and community engagement among residents. Through this initiative, volunteers gained insights into the significance of spreading national pride and organizing inclusive events for community involvement, contributing to a strengthened sense of unity and patriotism.",
    domain: "SOCIETY",
  },
  {
    image: Major_HD.Patri,
    project: "Patriotic run",
    quote: "Patriotism in motion, community in action",
    summary:
      "The TCET NSS UNIT participates in the Patriotic Run to instill love for the country and foster unity among volunteers. The event showcases active community engagement, with participants taking on roles beyond running. A well-planned route, water bottle distribution, and tokens at checkpoints add symbolic gestures of support. The run conveys a message of fitness while enhancing patriotism and fostering a positive social environment. Feedback reveals a strengthened sense of pride and patriotism among volunteers, contributing to the event's success.",
    domain: "SOCIETY",
  },
  {
    image: Major_HD.PlasticPickup,
    project: "Plastic Pick-up Drive",
    quote: "Cleaning up together, for a brighter tomorrow",
    summary:
      "TCET NSS unit conducted the Cleanliness Drive project, aiming to clean our adopted village at Saiwan Village and address plastic pollution. Divided into groups, they cleaned specific areas, removing plastic wrappers and dry waste from the road. Volunteers handpicked plastic items using brooms and disposed of them in garbage bags. They learned about proper waste management and observed microplastics. Villagers' improper waste disposal methods were noted, contributing to unhygienic surroundings. Despite nearby bins, people still littered. Through this project, volunteers gained practical knowledge and awareness, promoting a cleaner environment for all.",
    domain: "SOCIETY, CAMP",
  },
  {
    image: Major_HD.MedicalCampVolu,
    project: "Medical Camp Volunteering",
    quote: "Making health a priority: volunteering to create positive change.",
    summary:
      "Volunteers efficiently managed the crowd at the Medical Camp in the adopted village, ensuring smooth operations and engaging with villagers. Their goal included addressing medical concerns and promoting awareness about Joy of Giving donations. Through conversations, villagers openly shared health issues, highlighting the importance of effective communication in gathering information and addressing concerns sensitively. Volunteers also encouraged villagers to benefit from Joy of Giving donations. This dual approach emphasized the significance of community engagement and efficient crowd management in facilitating impactful medical outreach.",
    domain: "SOCIETY, CAMP",
  },
  {
    image: Major_HD.MidDay,
    project: "Mid-day meal Distribution Volunteering",
    quote:
      "Feeding bodies, nurturing souls: volunteers creating a warm atmosphere one meal at a time.",
    summary:
      "Volunteers efficiently distributed midday meals at the adopted village school, catering to students from classes 1 to 10. They organized children into queues, ensuring timely service and fostering a welcoming atmosphere through meaningful interactions. Beyond simply providing meals, volunteers added a personal touch, delivering each with care and compassion. This approach cultivated a friendly environment, prioritizing students' well-being. Additionally, volunteers enhanced their communication skills, recognizing the importance of personal connections in maintaining a positive atmosphere beyond meal distribution.",
    domain: "SOCIETY, CAMP",
  },
  {
    image: Major_HD.PooshanDan,
    project: "PoshanDaan",
    quote: "Poshandaan: where every meal carries a touch of love",
    summary:
      "Volunteering at Poshandaan in Saiwan is a heartwarming experience. Volunteers personally deliver nourishing meals to the school, feeding over 265 children from classes 1 to 10. The aim is to establish a genuine connection, ensuring a personalized and warm approach. Organizing orderly queues, volunteers add a personal touch by personally handing out meals, inquiring about preferences. Serving sweets like laddoos, the project stands out as immensely rewarding, bringing joy and satisfaction as volunteers witness the children's happiness. Additionally, the adopted village of Saiwan is highlighted in rainwater harvesting efforts.",
    domain: "SOCIETY, CAMP",
  },
  {
    image: Major_HD.RainSurvey,
    project: "Rain Water Harvesting Survey Project",
    quote: "In every drop, a lesson. In every survey, a solution",
    summary:
      "The project aims to evaluate villagers' knowledge and practices regarding Rain Water Harvesting, identifying areas for improvement. Volunteers are strategically divided into subgroups and conduct surveys in a few of the houses, inquiring about awareness and implementation of Rain Water Harvesting. Villagers highlighted water scarcity challenges in May, emphasizing the use of rainwater for laundry. The survey provides valuable insights into seasonal water challenges and informed ongoing donation initiatives and awareness campaigns.",
    domain: "SOCIETY, CAMP",
  },
];

const domain_names = [
  { name: "All", search: "", icon: Heart },
  { name: "Environment", search: "ENVIRONMENT", icon: Earth },
  { name: "Education", search: "EDUCATION", icon: Book },
  { name: "Society", search: "SOCIETY", icon: UserGroup },
  { name: "Health", search: "HEALTH", icon: HeartPulse },
  { name: "NSS Camp", search: "CAMP", icon: CampFire },
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
