import ak1 from '../imgs/work/uiux/ak_step1-1.png';
import ak2 from '../imgs/work/uiux/ak_step1-2.png';
import ak3 from '../imgs/work/uiux/ak_step3.png';
import ak4 from '../imgs/work/uiux/ak_step4.png';
import ak5 from '../imgs/work/uiux/ak_step5-0.png';
import ak6 from '../imgs/work/uiux/ak_step5-1.png';
import ak7 from '../imgs/work/uiux/ak_step5-2.png';
import ak8 from '../imgs/work/uiux/ak_step5-3.png';
import ak9 from '../imgs/work/uiux/ak_step5-4.png';
import ak10 from '../imgs/work/uiux/ak_step5-5.png';
import ak11 from '../imgs/work/uiux/ak_step5-6.png';
import ak12 from '../imgs/work/uiux/ak_step5-7.png';
import ak13 from '../imgs/work/uiux/ak_step5-8.png';
import ak14 from '../imgs/work/uiux/ak_step5-9.png';
import ak15 from '../imgs/work/uiux/ak_step5-10.png';
import ak16 from '../imgs/work/uiux/ak_step5-11.png';
import ak17 from '../imgs/work/uiux/ak_step5-12.png';
import ak18 from '../imgs/work/uiux/ak_step5-13.png';
import ak19 from '../imgs/work/uiux/ak_step5-14.png';
import ak20 from '../imgs/work/uiux/ak_step5-15.png';
import ak21 from '../imgs/work/uiux/ak_step5-16.png';
import ak22 from '../imgs/work/uiux/ak_step5-17.png';
import ak23 from '../imgs/work/uiux/ak_step5-18.png';
import rb1 from '../imgs/work/uiux/rabbit_step1-1.png';
import rb2 from '../imgs/work/uiux/rabbit_step1-2.png';
import rb3 from '../imgs/work/uiux/rabbit_step3.png';
import rb4 from '../imgs/work/uiux/rabbit_step4.png';
import rb5 from '../imgs/work/uiux/rabbit_step5-1.png';
import rb6 from '../imgs/work/uiux/rabbit_step5-2.png';
import rb7 from '../imgs/work/uiux/rabbit_step5-3.png';
import rb8 from '../imgs/work/uiux/rabbit_step5-4.png';
import rb9 from '../imgs/work/uiux/rabbit_step5-5.png';
import ms1 from '../imgs/work/uiux/ms_step1-1.png';
import ms2 from '../imgs/work/uiux/ms_step1-2.png';
import ms3 from '../imgs/work/uiux/ms_step2.png';
import ms4 from '../imgs/work/uiux/ms_step3-1.png';
import ms5 from '../imgs/work/uiux/ms_step3-2.png';
import ms6 from '../imgs/work/uiux/ms_step3-3.png';
import ms7 from '../imgs/work/uiux/ms_step3-4.png';
import ms8 from '../imgs/work/uiux/ms_step3-5.png';
import ms9 from '../imgs/work/uiux/ms_step3-6.png';
import ms10 from '../imgs/work/uiux/ms_step3-7.png';
import ms11 from '../imgs/work/uiux/ms_step3-8.png';
import ms12 from '../imgs/work/uiux/ms_step3-9.png';
import ms13 from '../imgs/work/uiux/ms_step3-10.png';
import ms14 from '../imgs/work/uiux/ms_step3-11.png';
import ms15 from '../imgs/work/uiux/ms_step3-12.png';
import ms16 from '../imgs/work/uiux/ms_step3-13.png';
import ms17 from '../imgs/work/uiux/ms_step3-14.png';
import ms18 from '../imgs/work/uiux/ms_step3-15.png';
import ms19 from '../imgs/work/uiux/ms_step3-16.png';
import ms20 from '../imgs/work/uiux/ms_step3-17.png';
import landingRb from '../imgs/work/uiux/landing_rb.png';
import landingAk from '../imgs/work/uiux/landing_ak.png';
import landingMs from '../imgs/work/uiux/landing_ms.png';
import akVideo1 from '../imgs/work/uiux/ak_video1.mov';
import akVideo2 from '../imgs/work/uiux/ak_video2.mp4';
import rbVideo from '../imgs/work/uiux/rb_video.mp4';
import msVideo from '../imgs/work/uiux/ms_video.mp4';
import akVideoCover from '../imgs/work/uiux/ak_desktop_video_cover.png';
import akVideoCoverMobile from '../imgs/work/uiux/ak_mobile_video_cover.png';
import rbVideoCover from '../imgs/work/uiux/rabbit_desktop_video_cover.png';
import msVideoCover from '../imgs/work/uiux/ms_mobile_video_cover.png';

const uiuxData = [
    // AK_Jewelry
    { 
        urlName: 'AK_Jewelry',
        mainTitle: 'Andrea Ko Jewelry Design (RWD)',
        subtitle: 'Redesign the website of jewelry design courses.',
        gallery: landingAk,
        description: '“Andrea Ko Jewelry Design Website” is mainly for recruiting students. However, the original online presence and the information were lacking. After I talked to Andrea, she told me most website visitors were first-time users, and they came to the website to search the information of jewelry beginner course. Thus, I redesigned the whole website (RWD) to make it more organized and clean, primarily focused on the user flow of the jewelry beginner course.',
        research: [
            {
                inline: true,
                title: 'Persona',
                paragraph: ['The user is a 26 years old woman called Christine. She lives in a wealthy economic condition. Her family business is related to the jewelry industry, so she is familiar with the jewelry industry. Christine is planning to start her jewelry brand. That is why she wants to take some jewelry courses, and then she can design the product by herself.'],
                img: ak1,
            },
            {
                inline: true,
                title: 'User Journey Map',
                paragraph: ['I invited a person who was interested in Andrea Ko\'s jewelry design course to use the original website and speak out what she felt while browsing the website.'],
                img: ak2,
            }
        ],
        ppAnalysis: [
            "Information is presented unclear and confusing.",
            "There is no hierarchy among the fonts. All of fonts are in same size and same weight.",
            "Sentences need to be simplified.",
        ],
        informationArchitecture: {
            paragraph: 'The architecture of the website is not complicated. The only thing that made me hesitate was putting “Portfolio” into the “About” section. Finally, I decided to keep them in different sections because Andrea Ko is also a freelancer. It would be more convenient for a company to see the portfolio directly.',
            img: ak3,
        },
        wireframe: { img: ak4 },
        mockup: [
            {
                inline: true,
                title: 'Overview',
                paragraph: ['Most users came from Instagram and Facebook to the website, so that mobile phone experience would be significant.',
                            'The website’s style is minimalism with abstract painting.Black, grey and white are the three main colours, and dark blue and dark red are secondary colours. Further, I used some animations to improve the experience, such as the shining earring or fading up effect.'],
                frame: ak5,
                video: akVideo1,
                poster: akVideoCoverMobile,
            },
            {
                title: 'Homepage',
                paragraph: ['I divided the homepage into three sections. First is the hero image with the slogan and call to action. The second part is the access to the “About.” The third part is the latest course information for users to follow up.'],
                img: [ak6, ak7, ak8],
                backgroundColor:'akBgc',
            },
            {
                title: 'Hamburger',
                paragraph: ['All the sections are in hamburger. There are deeper levels of the courses. Also, some courses divide into beginner and advanced. People are quickly finding which course is suited for them.'],
                img: [ak9, ak10],
                backgroundColor:'akBgc',
            },
            {
                title: 'About',
                paragraph: ['On the about page, the user can see the introduction of the teacher’s experience relates to the jewelry industry. Moreover, they can see the pros of taking courses in Andrea Ko\'s jewelry design class.'],
                img: [ak11, ak12],
                backgroundColor:'akBgc',
            },
            {
                title: 'Jewelry Design Course-Beginner',
                paragraph: ['I reorganized the whole information on the beginner jewelry course page. Instead of paragraphs, I listed bullet points to present the information. By using the subjects like “Who applies to this course,” “What can you learn from the class,” and “After finish this course, you can achieve like this... ”, users can easily understand if this is the course they are looking for.',
                            'There is a Registration form right under the bottom of the page. It allows users to register on the same page without leaving it to other pages or windows. ',
                            'If users want to register for the course, but they are not able to attend the latest class, they have access to tell Andrea Ko Jewelry Design when they are available for the class. Andrea will always take students\' needs into consideration.'],
                img: [ak13, ak14, ak15, ak16],
                backgroundColor:'akBgc',
            },
            {
                title: 'Portfolio',
                paragraph: ['I used a black background to present the jewelry design. With the contrast of shining jewelry and black, design works can jump out at the user.'],
                img: [ak17, ak18, ak19],
                backgroundColor:'akBgc',
            },
            {
                title: 'Blog',
                paragraph: ['Users can click the classification, which has four sections on the bar. There are three pictures in every article. Users can also see the recommended article with a high click-through rate on the bottom.'],
                img: [ak20, ak21, ak22, ak23],
                backgroundColor:'akBgc',
            },
            {
                title: 'Desktop',
                video: akVideo2,
                poster: akVideoCover,
                backgroundColor: 'akBgc',
            }
        ]
    },
    // TPE_Rabbit_Association
    {
        urlName: 'TPE_Rabbit_Association',
        mainTitle: 'Taipei Rabbit Saving Association Website (RWD)',
        subtitle: 'Redesign adopted process of the website.',
        gallery: landingRb,
        description: 'Taipei Rabbit Saving Association is a nonprofit organization that dedicates to save stray rabbits. However, they had a really complicated website. There was too much information without being well organized. Thus, I redesigned one of the vital services, the adopted process, to help them enhance the chance of adoption.',
        research: [
            {
                inline: true,
                title: 'Persona',
                paragraph: ['The user is a 30 years old woman called Hui-Lin Kao. She works as a purchasing with a good salary. With a stable life, Hui-Lin is planning to adopt a rabbit. Her ideal one is with white fur and red eyes. Therefore, she needs to find an organization she can trust and get clear information about adoption from the website.'],
                img: rb1,
            },
            {
                title: 'Usability testing',
                paragraph: [
                    'Testing Goal: To assess the user flow of adoption on the original website',
                    'Assess User Flow: Homepage - Click “see all rabbits” on the bottom of the page - Click in a rabbit introduction page - See the details and click “Adoption”- Read the rules before continue - Fill in a form from the outside link - Finish!',
                    'Task: You\'re considering adopting a rabbit. Please visit Taipei Saving Rabbit Association and see how to adopt a rabbit.',
                    'Result Of Testing: I analyze which pages participants went to, what participants were searching for on the page, what did they feel, what the status was while they were doing the task. Further, I listed the problems and difficulties and indicated which usability the original website was against. Lastly, I used effectiveness, efficiency, and satisfaction to analyze the priority of which page should be the first deal with.',
                ],
                img: rb2,
            }
        ],
        ppAnalysis: [
            "There are too much information on the homepage.",
            "Rabbits classification page is unclear. It’s hard finding the rabbit efficiently.",
            "There are too many words and paragraphs on the rabbit description page. Everything seems crowded and makes users losing patience.",
        ],
        informationArchitecture: {
            paragraph: 'I confirmed information architecture with the rabbit saving association through “Card Sorting .”During the closed sort, I founded that they wanted to put everything on the homepage. Commonly, clients feel everything is essential, so they want to put everything on the homepage. It is my responsibility to help them figure out the hierarchy of the website.',
            img: rb3,
        },
        wireframe: { img: rb4 },
        mockup: [
            {
                title: 'Overview',
                paragraph: [
                    'I use pink as the main color of website. Pink represents soft, gentle and cute impression to people. There is not much animation in this project. Everything is simple and intuitive.'
                ],
                video: rbVideo,
                poster: rbVideoCover,
                backgroundColor:'rbBgc',
            },
            {
                title: 'Homepage',
                paragraph: ['I divided the homepage into three sections. First is the hero image with the slogan ”Hello! Could you please help me? ” and a donating button under the sentence. The second part is the carousel of a bulletin board. In the third part, users can see three recommended rabbits for adoption. They also can click the “see all the rabbits” button in this section.'],
                img: [rb5],
                inline: false,
                backgroundColor:'rbBgc',
            },
            {
                title: 'Classification',
                paragraph: [
                    'Users can find all rabbits on the classification page and use a left-side filter to find the rabbit efficiently. The filters\' values for users to click are gender, adopted status, variety, fur\'s colour, and so on.',
                    'On the result part, some vital information is listed under the image, such as name, adopted status, age, variety, and weight. If there is no data for the searching result, the system will recommend other rabbits with a sentence like "These rabbits are eager for a sweet home" to stimulate the users\' empathy.',
                ],
                img: [rb6, rb7],
                inline: false,
                backgroundColor:'rbBgc',
            },
            {
                title: 'Rabbit Introduction',
                paragraph: ['On the individual rabbit introduction page, users can see basic information and the background story of the rabbit, which stimulate users\' empathy. Further, there are detailed health records for people to know the status of the rabbit. By offering information on the up and up, it will improve credibility for the user.'],
                img: [rb8],
                inline: false,
                backgroundColor:'rbBgc',
            },
            {
                title: 'Must Know Before Adoption',
                paragraph: ['When they click the “Adoption” button, users will come to the page with all the information they should know before they move on. This page eliminates those who aren’t qualified or aren’t well prepared to welcome a new family member. Moreover, there are common questions and answers for users to check before moving to the next step.'],
                img: [rb9],
                inline: false,
                backgroundColor:'rbBgc',
            },
            {
                title: 'Adoption Form',
                paragraph: ['As the association requires, the button will lead to a google form to apply for adoption. Therefore, the process of an adopted redesign of the website is finished.'],
            },
        ]
    },
    // Mentorship
    { 
        urlName: 'Mentorship_App',
        mainTitle: 'Seneca Collage Mentorship App',
        subtitle: 'Design a App for Seneca’s Students to find mentors on the platform.',
        gallery: landingMs,
        description: 'Seneca Mentorship App is an idea for Seneca students to find mentors and ask questions. It mainly divides into two parts; one is searching mentors the other one is a discussion board. This project was done by two students and me in Seneca.',
        research: [
            {
                inline: true,
                title: 'Empathy Map',
                paragraph: ['Commonly, students are hard to get the answer efficiently from school. Sometimes they don’t know who to ask for help with their school life. In such conditions, they usually feel nervous, anxious, and angry.'],
                img: ms1,
            },
            {
                inline: true,
                title: 'Six Hats',
                paragraph: ['Through the app, students will find the answer quickly. Nevertheless, there are still some potential challenges, such as lacking mentors, unclear information, etc. However, if the app had been well organized, it could be beneficial for students.'],
                img: ms2,
            }
        ],
        informationArchitecture: {
            paragraph: 'We mainly focus on the process of discussion board and finding mentors.',
            img: ms3,
        },
        mockup: [
            {
                inline: true,
                title: 'Overview',
                paragraph: ['Most users came from Instagram and Facebook to the website, so that mobile phone experience would be significant.',
                            'The website’s style is minimalism with abstract painting.Black, grey and white are the three main colours, and dark blue and dark red are secondary colours.Further, I used some animations to improve the experience, such as the shining earring or fading up effect.'],
                frame: ak5,
                video: msVideo,
                poster: msVideoCover
            },
            {
                title: 'Launch Screen/ Sign up/ Sign in',
                paragraph: ['User can either choose sign up or log in the app. The interface is clean and simple which makes the set up process wasier for user.'],
                img: [ms4, ms5, ms6, ms7],
                backgroundColor:'msBgc',
            },
            {
                title: 'Discussion Board',
                paragraph: ['There are three parts on the top bar, “All,” “Sort,” “Followed.” The “All” page is the default. “Sort” is for users to find different topics,  and they also can follow the topics they see the most.'],
                img: [ms8, ms9, ms10, ms11],
                backgroundColor:'msBgc',
            },
            {
                title: 'The Post',
                paragraph: ['Users can either see the comments from mentors or save the post as their collection on this page. Only mentors have the comment icon on the bottom right of their interface.'],
                img: [ms12, ms13],
                backgroundColor:'msBgc',
            },
            {
                title: 'Mentor Section',
                paragraph: ['Students can use the filter to search for mentors by clicking the filter icon. There are also few weekly best mentors for users to consult. They can see the basic information of mentors, the number of their replies, and how many mentees they get in a week.'],
                img: [ms14, ms15, ms16],
                backgroundColor:'msBgc',
            },
            {
                title: 'Mentor ‘s Info and Chatting Room.',
                paragraph: ['On the mentor’s info page, the user can see the basic information of the mentor. They also can rate the mentor by clicking “Rate this mentor,” which is under the stars. When users click “Chat with mentor!”, it will go to private message directly.'],
                img: [ms17, ms18, ms19, ms20],
                backgroundColor:'msBgc',
            },
        ]
    },
]

export default uiuxData;