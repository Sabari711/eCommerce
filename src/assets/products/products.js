import gtaImg from "../images/gta-banner.png"
import codImg from "../images/call-of-duty-ghost-team.png"
import gowImg from "../images/imrs.png";
import horizonImg from "../images/horizon-call-of-the-mountain-5.png";
import mkImg from "../images/Mortal-Kombat-11.png";
import rdr from "../images/Red-Dead-Redemption-2-Game-Information.png";

import gow1 from '../images/productScreenShot/god-of-war-screen-1.png';
import gow2 from '../images/productScreenShot/god-of-war-screen-2.png';
import gow3 from '../images/productScreenShot/god-of-war-screen-3.png';
import gow4 from '../images/productScreenShot/god-of-war-screen-4.png';

import cod1 from '../images/productScreenShot/cod-1.png';
import cod2 from '../images/productScreenShot/cod-2.png';
import cod3 from '../images/productScreenShot/cod-3.png';
import cod4 from '../images/productScreenShot/cod-4.png';

import gta_v_1  from '../images/productScreenShot/gta-v-1.png';
import gta_v_2  from '../images/productScreenShot/gta-v-2.png';
import gta_v_3  from '../images/productScreenShot/gta-v-3.png';
import gta_v_4  from '../images/productScreenShot/gta-v-4.png';

import mk_1  from '../images/productScreenShot/MK11-1.png';
import mk_2  from '../images/productScreenShot/MK11-2.png';
import mk_3  from '../images/productScreenShot/MK11-3.png';
import mk_4  from '../images/productScreenShot/MK11-4.png';

import horizon1  from '../images/productScreenShot/horizon1.png';
import horizon2  from '../images/productScreenShot/horizon2.png';
import horizon3  from '../images/productScreenShot/horizon3.png';
import horizon4  from '../images/productScreenShot/horizon4.png';

import rdr1 from '../images/productScreenShot/rdr1.png';
import rdr2 from '../images/productScreenShot/rdr2.png';
import rdr3 from '../images/productScreenShot/rdr3.png';
import rdr4 from '../images/productScreenShot/rdr4.png';

let productArray = [
    {
        productId : "1",
        productName : "GTA 5",
        productSeoUrl : "gta-5",
        desc:"Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
        proImg : gtaImg,
        proPrice : 15.00,
        offPrice : 7.50,
        offPercentage : "50%",
        images : [
            gta_v_1,gta_v_2,gta_v_3,gta_v_4
        ]
    },

    {
        productId : "2",
        productName : "Call Of Duty Ghost",
        productSeoUrl : "call-of-duty",
        desc:"Call of Duty: Ghosts features several staple multiplayer game modes, while introducing several new game types, including: Search and Rescue: A take on Search & Destroy, but rather than having a single life per round, in Search & Rescue a player's team can revive them.",
        proImg : codImg,
        proPrice : 30.00,
        offPrice : 15.00,
        offPercentage : "50%",
        images : [
            cod1,cod2,cod3,cod4
        ]
    },

    {
        productId : "3",
        productName : "God OF War Ragnarok",
        productSeoUrl : "god-of-war-ragnarok",
        desc:"God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. Atreus seeks knowledge to help him understand the prophecy of “Loki” and establish his role in Ragnarök.",
        proImg : gowImg,
        proPrice : 50.00,
        offPrice : 25.00,
        offPercentage : "50%",
        images : [
            gow1,gow2,gow3,gow4
        ]
    },

    {
        productId : "4",
        productName : "Mortal Kombat 11",
        productSeoUrl : "mortal-kombat-11",
        desc:"Kombat Mobile, Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.",
        proImg : mkImg,
        proPrice : 20.00,
        offPrice : 10.00,
        offPercentage : "50%",
        images : [
            mk_1,mk_2,mk_3,mk_4
        ]
    },

    {
        productId : "5",
        productName : "Horizon",
        productSeoUrl : "horizon",
        desc:"The horizon is the line that separates the Earth from the sky. There two main types of horizons—Earth-sky horizons and celestial horizons. Both Earth-sky and celestial horizons have different sub-types of horizons. The local horizon, geographic horizon.",
        proImg : horizonImg,
        proPrice : 10.00,
        offPrice : 7.00,
        offPercentage : "30%",
        images : [
            horizon1,horizon2,horizon3,horizon4
        ]
    },

    {
        productId : "6",
        productName : "Red Dead Redemption 2",
        productSeoUrl : "red-dead-redemption-2",
        desc:"The story is set in a fictionalized representation of the United States in 1899 and follows the exploits of Arthur Morgan, an outlaw and member of the Van der Linde gang, who must deal with the decline of the Wild West while attempting to survive against government forces",
        proImg : rdr,
        proPrice : 50.00,
        offPrice : 25.00,
        offPercentage : "50%",
        images : [
            rdr1,rdr2,rdr3,rdr4
        ]
    }

]

export default productArray;