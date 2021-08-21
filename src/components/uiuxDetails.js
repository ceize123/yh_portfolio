import ak1 from '../imgs/work/ak_step1-1.png';
import ak2 from '../imgs/work/ak_step1-2.png';
import ak3 from '../imgs/work/ak_step3.png';
import ak4 from '../imgs/work/ak_step4.png';
import ak5 from '../imgs/work/ak_step5-0.png';
import ak6 from '../imgs/work/ak_step5-1.png';
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
import akVideo1 from '../imgs/work/ak_video1.mov';
import akVideo2 from '../imgs/work/ak_video2.mov';

const uiuxDetail = [
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
            " Sentences need to be simplified. ",
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
    {
        urlName: 'TPE_Rabbit_Association',
        mainTitle: 'Taipei Rabbit Saving Association Website (RWD)',
        description: 'Taipei Rabbit Saving Association is a nonprofit organization that dedicates to save stray rabbits. However, they had a really complicated website. There was too much information without being well organized. Thus, I redesigned one of the vital services, the adopted process, to help them enhance the chance of adoption.',
        research: [
            {
                title: 'Persona',
                paragraph: 'The user is a 30 years old woman called Hui-Lin Kao. She works as a purchasing with a good salary. With a stable life, Hui-Lin is planning to adopt a rabbit. Her ideal one is with white fur and red eyes. Therefore, she needs to find an organization she can trust and get clear information about adoption from the website.',
            },
            {
                title: 'Usability testing',
                paragraph: [
                    'Testing Goal: To assess the user flow of adoption on the original website',
                    'Assess User Flow: Homepage - Click “see all rabbits” on the bottom of the page - Click in a rabbit introduction page - See the details and click “Adoption”- Read the rules before continue - Fill in a form from the outside link - Finish!',
                    'Task: You\'re considering adopting a rabbit. Please visit Taipei Saving Rabbit Association and see how to adopt a rabbit.',
                    'Result Of Testing: I analyze which pages participants went to, what participants were searching for on the page, what did they feel, what the status was while they were doing the task. Further, I listed the problems and difficulties and indicated which usability the original website was against. Lastly, I used effectiveness, efficiency, and satisfaction to analyze the priority of which page should be the first deal with.',
                ]
            }
        ],
    }
]

export default uiuxDetail;