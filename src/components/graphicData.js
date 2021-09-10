import landingFr from '../imgs/work/graphic/landing_fr.png';
import landingMg from '../imgs/work/graphic/landing_mg.png';
import guide from '../imgs/work/graphic/iconGuideBook.png';
import map from '../imgs/work/graphic/map.png';
import sketch from '../imgs/work/graphic/sketches.png';
import icon from '../imgs/work/graphic/icons.png';
import iconMobile from '../imgs/work/graphic/icons_mobile.png';
import feature from '../imgs/work/graphic/features.png';
import Phoebe from '../imgs/work/graphic/phoebe.png';
import PhoebeMobile from '../imgs/work/graphic/phoebe_mobile.png';
import PhoebeText from '../imgs/work/graphic/phoebe_text.svg';
import PhoebeTextMobile from '../imgs/work/graphic/phoebe_text_mobile.svg';
import Joey from '../imgs/work/graphic/joey.png';
import JoeyMobile from '../imgs/work/graphic/joey_mobile.png';
import JoeyText from '../imgs/work/graphic/joey_text.svg';
import JoeyTextMobile from '../imgs/work/graphic/joey_text_mobile.svg';
import Monica from '../imgs/work/graphic/monica.png';
import MonicaMobile from '../imgs/work/graphic/monica_mobile.png';
import MonicaText from '../imgs/work/graphic/monica_text.svg';
import MonicaTextMobile from '../imgs/work/graphic/monica_text_mobile.svg';
import Chandler from '../imgs/work/graphic/chandler.png';
import ChandlerMobile from '../imgs/work/graphic/chandler_mobile.png';
import ChandlerText from '../imgs/work/graphic/chandler_text.svg';
import ChandlerTextMobile from '../imgs/work/graphic/chandler_text_mobile.svg';
import Rachel from '../imgs/work/graphic/rachel.png';
import RachelMobile from '../imgs/work/graphic/rachel_mobile.png';
import RachelText from '../imgs/work/graphic/rachel_text.svg';
import RachelTextMobile from '../imgs/work/graphic/rachel_text_mobile.svg';
import Ross from '../imgs/work/graphic/ross.png';
import RossMobile from '../imgs/work/graphic/ross_mobile.png';
import RossText from '../imgs/work/graphic/ross_text.svg';
import RossTextMobile from '../imgs/work/graphic/ross_text_mobile.svg';
import magazine1 from '../imgs/work/graphic/musical_magazine.png';
import magazine2 from '../imgs/work/graphic/musical_magazine2.png';
import magazine3 from '../imgs/work/graphic/musical_magazine3.png';

const graphicData = [
    {
        urlName: 'Icon_Guide',
        mainTitle: 'Icon Guide Book',
        subtitle: 'Comedy “Friends” golden ratio icons',
        gallery: landingFr,
        iconGuideBook: guide,
        sectionWithoutChar: [
            map, sketch, icon, feature,
        ],
        sectionWithoutCharMobile: [
            map, sketch, iconMobile, feature,
        ],
        characters: [
            [Phoebe, PhoebeText],
            [Joey, JoeyText],
            [Monica, MonicaText],
            [Chandler, ChandlerText],
            [Rachel, RachelText],
            [Ross, RossText]
        ],
        charactersMobile: [
            [PhoebeMobile, PhoebeTextMobile],
            [JoeyMobile, JoeyTextMobile],
            [MonicaMobile, MonicaTextMobile],
            [ChandlerMobile, ChandlerTextMobile],
            [RachelMobile, RachelTextMobile],
            [RossMobile, RossTextMobile]
        ]
    },
    {
        urlName: 'Magazine_Design',
        mainTitle: 'Magazine Design',
        subtitle: 'Interview pages of a celebrity Jolin Tsai in Magazine.',
        gallery: landingMg,
        pages: [magazine1, magazine2, magazine3]
    },
]

export default graphicData;