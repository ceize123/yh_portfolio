import landingFr from '../imgs/work/graphic/landing_fr.png';
import landingMg from '../imgs/work/graphic/landing_mg.png';
import map from '../imgs/work/graphic/map.png';
import sketch from '../imgs/work/graphic/sketches.png';
import icon from '../imgs/work/graphic/icons.png';
import feature from '../imgs/work/graphic/features.png';
import Phoebe from '../imgs/work/graphic/phoebe.png';
import PhoebeText from '../imgs/work/graphic/phoebe_text.svg';
import Joey from '../imgs/work/graphic/joey.png';
import JoeyText from '../imgs/work/graphic/joey_text.svg';
import Monica from '../imgs/work/graphic/monica.png';
import MonicaText from '../imgs/work/graphic/monica_text.svg';
import Chandler from '../imgs/work/graphic/chandler.png';
import ChandlerText from '../imgs/work/graphic/chandler_text.svg';
import Rachel from '../imgs/work/graphic/rachel.png';
import RachelText from '../imgs/work/graphic/rachel_text.svg';
import Ross from '../imgs/work/graphic/ross.png';
import RossText from '../imgs/work/graphic/ross_text.svg';
import magazine1 from '../imgs/work/graphic/musical_magazine.png';
import magazine2 from '../imgs/work/graphic/musical_magazine2.png';
import magazine3 from '../imgs/work/graphic/musical_magazine3.png';

const graphicData = [
    {
        urlName: 'Icon_Guide',
        mainTitle: 'Icon Guide Book',
        subtitle: 'Comedy “Friends” golden ratio icons',
        gallery: landingFr,
        sectionWithoutChar: [
            map, sketch, icon, feature,
        ],
        characters: [
            [Phoebe, PhoebeText],
            [Joey, JoeyText],
            [Monica, MonicaText],
            [Chandler, ChandlerText],
            [Rachel, RachelText],
            [Ross, RossText]
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