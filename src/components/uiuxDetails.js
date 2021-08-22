import ak1 from '../imgs/work/ak_step1-1.png';
import ak2 from '../imgs/work/ak_step1-2.png';
import ak3 from '../imgs/work/ak_step3.png';
import ak4 from '../imgs/work/ak_step4.png';
import ak5 from '../imgs/work/ak_step5-0.png';
import ak7 from '../imgs/work/ak_step5-2.png';
import ak8 from '../imgs/work/ak_step5-3.png';
import ak9 from '../imgs/work/ak_step5-4.png';
import ak10 from '../imgs/work/ak_step5-5.png';
import ak11 from '../imgs/work/ak_step5-6.png';
import ak12 from '../imgs/work/ak_step5-7.png';
import ak13 from '../imgs/work/ak_step5-8.png';
import ak14 from '../imgs/work/ak_step5-9.png';
import ak15 from '../imgs/work/ak_step5-10.png';
import ak16 from '../imgs/work/ak_step5-11.png';
import ak17 from '../imgs/work/ak_step5-12.png';
import ak18 from '../imgs/work/ak_step5-13.png';
import ak19 from '../imgs/work/ak_step5-14.png';
import ak20 from '../imgs/work/ak_step5-15.png';
import ak21 from '../imgs/work/ak_step5-16.png';
import ak22 from '../imgs/work/ak_step5-17.png';
import ak23 from '../imgs/work/ak_step5-18.png';
import ak24 from '../imgs/work/ak_step5-19.png';
import rb1 from '../imgs/work/rabbit_step1-1.png';
import rb2 from '../imgs/work/rabbit_step1-2.png';
import rb3 from '../imgs/work/rabbit_step3.png';
import rb4 from '../imgs/work/rabbit_step4.png';
import rb5 from '../imgs/work/rabbit_step5-1.png';
import rb6 from '../imgs/work/rabbit_step5-2.png';
import rb7 from '../imgs/work/rabbit_step5-3.png';
import rb8 from '../imgs/work/rabbit_step5-4.png';
import rb9 from '../imgs/work/rabbit_step5-5.png';
import akVideo1 from '../imgs/work/ak_video1.mov';
import akVideo2 from '../imgs/work/ak_video2.mov';

const uiuxDetail = [
    // AK_Jewelry
    { 
        urlName: 'AK_Jewelry',
        mainTitle: 'Andrea Ko Jewelry Design (RWD)',
        description: '“Andrea Ko Jewelry Design Website” is mainly for recruiting students. However, the original online presence and the information were lacking. After I talked to Andrea, she told us most website visitors were first-time users, and they came to the website to search the information of jewelry beginner course. Thus, I redesigned the whole website (RWD) to make it more organized and clean, primarily focused on the user flow of the jewelry beginner course.',
        research: [
            {
                inline: true,
                title: 'Persona',
                paragraph: 'The user is a 26 years old woman called Christine. She lives in a wealthy economic condition. Her family business is related to the jewelry industry, so she is familiar with the jewelry industry. Christine is planning to start her jewelry brand. That is why she wants to take some jewelry courses, and then she can design the product by herself.',
                img: ak1,
            },
            {
                inline: true,
                title: 'User Journey Map',
                paragraph: 'I invited a person who was interested in Andrea Ko\'s jewelry design course to use the original website and speak out what she felt while browsing the website.',
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
        wireframe: ak4,
        mockup: [
            {
                inline: true,
                title: 'Overview',
                paragraph: ['Most users came from Instagram and Facebook to the website, so that mobile phone experience would be significant.',
                            'The website’s style is minimalism with abstract painting.Black, grey and white are the three main colours, and dark blue and dark red are secondary colours.Further, I used some animations to improve the experience, such as the shining earring or fading up effect.'],
                frame: ak5,
                video: akVideo1,
                background: false,
            },
            {
                title: 'Homepage',
                paragraph: ['I divided the homepage into three sections. First is the hero image with the slogan and call to action. The second part is the access to the “About.” The third part is the latest course information for users to follow up.'],
                img: [ak7, ak8, ak9],
            },
            {
                title: 'Hamburger',
                paragraph: ['I divided the homepage into three sections. First is the hero image with the slogan and call to action. The second part is the access to the “About.” The third part is the latest course information for users to follow up.'],
                img: [ak10, ak11],
            },
            {
                title: 'About',
                paragraph: ['On the about page, the user can see the introduction of the teacher’s experience relates to the jewelry industry. Moreover, they can see the pros of taking courses in Andrea Ko\'s jewelry design class.'],
                img: [ak12, ak13],
            },
            {
                title: 'Jewelry Design Course-Beginner',
                paragraph: ['I reorganized the whole information on the beginner jewelry course page. Instead of paragraphs, I listed bullet points to present the information. By using the subjects like “Who applies to this course,” “What can you learn from the class,” and “After finish this course, you can achieve like this... ”, users can easily understand if this is the course they are looking for.',
                            'There is a Registration form right under the bottom of the page. It allows users to register on the same page without leaving it to other pages or windows. ',
                            'If users want to register for the course, but they are not able to attend the latest class, they have access to tell Andrea Ko Jewelry Design when they are available for the class. Andrea will always take students\' needs into consideration.'],
                img: [ak14, ak15, ak16, ak17],
            },
            {
                title: 'Portfolio',
                paragraph: ['I used a black background to present the jewelry design. With the contrast of shining jewelry and black, design works can jump out at the user.'],
                img: [ak18, ak19, ak20],
            },
            {
                title: 'Blog',
                paragraph: ['Users can click the classification, which has four sections on the bar. There are three pictures in every article. Users can also see the recommended article with a high click-through rate on the bottom.'],
                img: [ak21, ak22, ak23, ak24],
            },
            {
                title: 'Desktop',
                video: akVideo2,
            }
        ]
    },
    // TPE_Rabbit_Association
    {
        urlName: 'TPE_Rabbit_Association',
        mainTitle: 'Taipei Rabbit Saving Association Website (RWD)',
        description: 'Taipei Rabbit Saving Association is a nonprofit organization that dedicates to save stray rabbits. However, they had a really complicated website. There was too much information without being well organized. Thus, I redesigned one of the vital services, the adopted process, to help them enhance the chance of adoption.',
        research: [
            {
                inline: true,
                title: 'Persona',
                paragraph: 'The user is a 30 years old woman called Hui-Lin Kao. She works as a purchasing with a good salary. With a stable life, Hui-Lin is planning to adopt a rabbit. Her ideal one is with white fur and red eyes. Therefore, she needs to find an organization she can trust and get clear information about adoption from the website.',
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
        wireframe: rb4,
        mockup: [
            {
                title: 'Overview',
                paragraph: ['I use pink as the main color of website. Pink represents soft, gentle and cute impression to people. There is not much animation in this project. Everything is simple and intuitive.'],
                video: akVideo2,
            },
            {
                title: 'Homepage',
                paragraph: ['I divided the homepage into three sections. First is the hero image with the slogan ”Hello! Could you please help me? ” and a donating button under the sentence. The second part is the carousel of a bulletin board. In the third part, users can see three recommended rabbits for adoption. They also can click the “see all the rabbits” button in this section.'],
                img: [rb5],
            },
            {
                title: 'Classification',
                paragraph: [
                    'Users can find all rabbits on the classification page and use a left-side filter to find the rabbit efficiently. The filters\' values for users to click are gender, adopted status, variety, fur\'s colour, and so on.',
                    'On the result part, some vital information is listed under the image, such as name, adopted status, age, variety, and weight. If there is no data for the searching result, the system will recommend other rabbits with a sentence like "These rabbits are eager for a sweet home" to stimulate the users\' empathy.',
                ],
                img: [rb6, rb7],
            },
            {
                title: 'Rabbit Introduction',
                paragraph: ['On the individual rabbit introduction page, users can see basic information and the background story of the rabbit, which stimulate users\' empathy. Further, there are detailed health records for people to know the status of the rabbit. By offering information on the up and up, it will improve credibility for the user.'],
                img: [rb8],
            },
            {
                title: 'Must Know Before Adoption',
                paragraph: ['When they click the “Adoption” button, users will come to the page with all the information they should know before they move on. This page eliminates those who aren’t qualified or aren’t well prepared to welcome a new family member. Moreover, there are common questions and answers for users to check before moving to the next step.'],
                img: [rb9],
            },
            {
                title: 'Adoption Form',
                paragraph: ['As the association requires, the button will lead to a google form to apply for adoption. Therefore, the process of an adopted redesign of the website is finished.'],
            },
        ]
    }
]

export default uiuxDetail;