import gtaImg from "../images/gta-banner.jpg"
import codImg from "../images/call-of-duty-ghost-team.jpg"
import gowImg from "../images/imrs.webp";
import horizonImg from "../images/horizon-call-of-the-mountain-5.webp";
import mkImg from "../images/Mortal-Kombat-11.jpg";
import rdr from "../images/Red-Dead-Redemption-2-Game-Information.jpg";



let productArray = [
    {
        productId : "1",
        productName : "GTA 5",
        productSeoUrl : "gta-5",
        desc:"Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
        proImg : gtaImg,
        proPrice : 15.00,
        offPrice : 7.50,
        offPercentage : "50%"
    },

    {
        productId : "2",
        productName : "Call Of Duty Ghost",
        productSeoUrl : "call-of-duty",
        desc:"Call of Duty: Ghosts features several staple multiplayer game modes, while introducing several new game types, including: Search and Rescue: A take on Search & Destroy, but rather than having a single life per round, in Search & Rescue a player's team can revive them.",
        proImg : codImg,
        proPrice : 30.00,
        offPrice : 15.00,
        offPercentage : "50%"
    },

    {
        productId : "3",
        productName : "God OF War Ragnarok",
        productSeoUrl : "god-of-war-ragnarok",
        desc:"God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. Atreus seeks knowledge to help him understand the prophecy of “Loki” and establish his role in Ragnarök.",
        proImg : gowImg,
        proPrice : 50.00,
        offPrice : 25.00,
        offPercentage : "50%"
    },

    {
        productId : "4",
        productName : "Mortal Kombat 11",
        productSeoUrl : "mortal-kombat-11",
        desc:"Kombat Mobile, Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.",
        proImg : mkImg,
        proPrice : 20.00,
        offPrice : 10.00,
        offPercentage : "50%"
    },

    {
        productId : "5",
        productName : "Horizon",
        productSeoUrl : "horizon",
        desc:"The horizon is the line that separates the Earth from the sky. There two main types of horizons—Earth-sky horizons and celestial horizons. Both Earth-sky and celestial horizons have different sub-types of horizons. The local horizon, geographic horizon.",
        proImg : horizonImg,
        proPrice : 10.00,
        offPrice : 7.00,
        offPercentage : "30%"
    },

    {
        productId : "6",
        productName : "Red Dead Redemption 2",
        productSeoUrl : "red-dead-redemption-2",
        desc:"The story is set in a fictionalized representation of the United States in 1899 and follows the exploits of Arthur Morgan, an outlaw and member of the Van der Linde gang, who must deal with the decline of the Wild West while attempting to survive against government forces",
        proImg : rdr,
        proPrice : 50.00,
        offPrice : 25.00,
        offPercentage : "50%"
    }

]

export default productArray;