// Data extracted from the original source

const killersData = {
    trapper: {
        name: "The Trapper",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Evan_MacMillan",
        description: "An area-control Killer, able to apply pressure across the map by placing deadly Bear Traps for survivors to step in. The Trapper can shut down almost any window and pallet in the game and even completely lock down a small area by using several traps. While his power is slow and suffers against coordinated teams, one wrong step is all it takes for the game to turn around entirely.",
        dlc: false,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/trapper.png"
    },
    wraith: {
        name: "The Wraith",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Philip_Ojomo",
        description: "A stealth Killer, able to Cloak and Uncloak at the ringing of his Wailing Bell. Being almost entirely silent and invisible from a distance, the Wraith can cover large distances quickly and immediately inflict damage after a successful ambush. He doesn’t have many tools to help him in prolonged chases, however.",
        dlc: false,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/wraith.png"
    },
    hillbilly: {
        name: "The Hillbilly",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Max_Thompson_Jr.",
        description: "A high mobility Killer, able to cover large distances in a short amount of time and instantly down Survivors using his Chainsaw. The Hillbilly’s base ability gives him mobility, lethality and a tool to shred through pallets quickly, but using his Chainsaw successfully against smart opponents can be quite the challenge.",
        dlc: false,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/hillbilly.png"
    },
    nurse: {
        name: "The Nurse",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Sally_Smithson",
        description: "A warping Killer, able to Blink through obstacles and quickly close gaps with her power, Spencer’s Last Breath. The Nurse’s ability ignores all basic gameplay elements and makes her a constant threat in chase. Without a perfect execution, however, you will find yourself struggling against smarter Survivors.",
        dlc: false,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/nurse.png"
    },
    huntress: {
        name: "The Huntress",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Anna",
        description: "A ranged Killer, able to throw Hunting Hatchets at Survivors to injure them from a distance. The Huntress punishes careless Survivors with occasional long distance shots and her devastating ability to shred through health states from up close. Despite having low mobility and limited stealth options, her high skill ceiling shines in the hands of experienced players.",
        dlc: false,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/huntress.png"
    },
    shape: {
        name: "The Shape",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Michael_Myers",
        description: "A haunting Killer, intent on monitoring Survivors from a Distance to feed his power, Evil Within. The more he stalks, the stronger and faster he becomes. While the Shape’s early game is slow and his abilities are basic, there’s no getting around his powerful presence when he’s fully powered up. His unique add-ons make him rather unpredictable.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/shape.png"
    },
    hag: {
        name: "The Hag",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Lisa_Sherwood",
        description: "A cursed Killer, able to place traps and then teleport to them when activated, using her Blackened Catalyst. The Hag is mostly a defensive Killer, relying on careful trap placement, anticipating the Survivors’ moves. If they fail to harass you during your preparation, they will often find themselves in unwinnable scenarios.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/hag.png"
    },
    doctor: {
        name: "The Doctor",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Herman_Carter",
        description: "A madness-inducing Killer who is able to use his power, Carter’s Spark, to trigger electrical charges, incapacitating Survivors and eventually causing them to hallucinate and scream in terror, revealing their position. Despite lacking any remarkable mobility or lethality, The Doctor has excellent tools to find hiding survivors and prevent them from using their abilities at critical times. His shock can also be helpful during chase. His remarkable repertoire of add-ons expands these abilities even further.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/doctor.png"
    },
    cannibal: {
        name: "The Cannibal",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Bubba_Sawyer",
        description: "A chainsaw-wielding Killer, able to trigger a deadly frenzy using Bubba’s Chainsaw, immediately downing anyone in its path. While lacking in mobility or other complex abilities, the Cannibal has remarkable close range lethality and pallet breaking abilities. Correct use of his simple power will often put Survivors against the ropes, but your execution will need to be more and more precise as you go against stronger opponents.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/storebackground_ca.png"
    },
    nightmare: {
        name: "The Nightmare",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Frederick_%22Freddy%22_Krueger",
        description: "A nightmare inducing Killer, passively forcing Survivors into his Dream World using his power, Dream Demon. It is here that Survivors become extremely vulnerable to his dream abilities. Using his Dream Projection ability he is able to quickly appear across the map and put pressure on Survivors. The Nightmare’s multiple abilities have great synergies with already strong perks and allow him to keep pressure on generators across any distance and sometimes cut chases short. While not particularly difficult to use mechanically, you will need to use all of your powers efficiently if you want to win against strong opponents.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/freddy.png"
    },
    pig: {
        name: "The Pig",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Amanda_Young",
        description: "A tormenting Killer, able to crouch into stealth mode, then ambush Survivors from a short distance. She can also apply Reverse Bear Traps to downed Survivors, forcing them to remove it before the timer runs out. If the timer expires, they die instantly. The Pig doesn’t excel in any one area, but her several abilities (stealth, ambush, built-in slowdown…) can often be overwhelming for Survivors. Finding the correct synergy with your perks and add-ons is often the key to perform well.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/pig.png"
    },
    clown: {
        name: "The Clown",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Kenneth_Chase_alias_Jeffrey_Hawk",
        description: "A strategic Killer, able to control and corral Survivors by throwing bottles of The Afterpiece Tonic to create clouds of noxious gas that cover large areas for a short amount of time. Survivors intoxicated by the gas are inflicted with impaired vision and movement speed, and give away their location by coughing loudly. The Clown’s abilities are quite basic, but they can turn any greedy play by a Survivor into an almost guaranteed hit if they are applied correctly. With perks and add-ons to make up for his unremarkable mobility and lethality, the Clown can become a considerable threat.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/StoreBackground_GK.png"
    },
    spirit: {
        name: "The Spirit",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Rin_Yamaoka",
        description: "A phase-walking Killer, able to catch Survivors off-guard with her traversal power, Yamaoka’s Haunting. Her power allows her to teleport from one place to another without being seen. The sheer unpredictability of the Spirit’s power puts a lot of power into your hands while simultaneously making it extremely difficult for Survivors to make the right decisions in chase. Her chasing potential is off the charts once you get used to the intricacies of her phasing and her complex but powerful add-ons.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/Spirit.png"
    },
    legion: {
        name: "The Legion",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Frank,_Julie,_Susie,_Joey",
        description: "A band of merciless Killers, able to rushdown helpless Survivors with their power, Feral Frenzy. Attacks made during their frenzy inflict lingering internal damage, downing any Survivors that are not quick enough to react. While it doesn’t typically help to down survivors directly, the Legion’s power is a powerful tool to track them and keep them constantly injured. Every mistake they make will be harshly punished if you play your cards right and your chasing game is on point.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/StoreBackground_KK.png"
    },
    plague: {
        name: "The Plague",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Adiris",
        description: "A devout Killer, able to infect Survivors from a short distance using her power, Vile Purge. Survivors inflicted by this contamination risk becoming injured or broken, unless they find a way to cure themselves in a Pool of Devotion. The Plague is a very dynamic Killer, slowly poisoning Survivors’ health over time but also becoming an aggressive ranged attacker that can down multiple targets in seconds. Smart decision making and precise execution are both required to make the most of her abilities.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/Plaga.png"
    },
    ghostface: {
        name: "The Ghost Face",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Danny_Johnson_alias_Jed_Olsen",
        description: "A creepy Killer, able to stalk his victims and sneak up silently using his power, Night Shroud. Affected Survivors will find themselves vulnerable and oblivious to his presence and must use all of their perception and awareness to protect themselves from his approach. Ghostface’s excellent stealth provides a simple way to ambush Survivors but can also be used to expose them and deal devastating blows when they least expect it. Making mistakes with this Killer can be quite punishing, especially if you don’t bring add-ons to help with your power’s recovery.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/Jed_Olsen.png"
    },
    demogorgon: {
        name: "The Demogorgon",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/The_Demogorgon",
        description: "An unidentified Killer, able to open multiple portals and traverse between them to cover large distances. Using its power, Of the Abyss, it can detect any Survivors within a close proximity to the portals then unleash a leaping attack to inflict damage from a distance. The Demogorgon is a well-rounded Killer with a complex set of useful abilities and a repertoire of add-ons to enhance each of them. His chasing potential can be quite oppressive in the right hands.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/qk_storebackground.png"
    },
    oni: {
        name: "The Oni",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Kazan_Yamaoka",
        description: "A monstrous Killer, able to absord the blood energy of his injured foes, and then use that energy to transform into a brutal demon. Using his power, Yamaoka’s Wrath, he can rush down Survivors at great speed and deal deadly strikes with his kanabo. When powered up, the Oni gains a temporary but significant burst of speed and lethality that can quickly give him a decisive advantage. However, he must be played very efficiently until his power is ready to be used. His powerful add-ons can help in a number of different areas.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/oni.png"
    },
    deathslinger: {
        name: "The Deathslinger",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Caleb_Quinn",
        description: "A vengeful Killer, able to spear Survivors from a distance and reel them in using his power, The Redeemer. The Deathslinger has the remarkable ability to injure (and sometimes down) Survivors in most areas, provided that his accuracy is on point. Finding the right combination of perks and add-ons to fit your playstyle is particularly helpful and mitigates many of his shortcomings.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/Caleb_Quinn.png"
    },
    executioner: {
        name: "The Executioner",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Pyramid_Head",
        description: "A map-manipulation Killer, able to torment Survivors with the hazards he creates. Affected Survivors will be vulnerable to his special Hook, the Cage of Atonement, and his unique mori, Final Judgment. While the Executioner is mostly unable to use hook-related perks himself, he can often counter many of the strongest hook-related perks that Survivors bring. His ranged attack is difficult to master but provides a constant threat to Survivors in chase if used correctly.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/Pyramid_Head.png"
    },
    blight: {
        name: "The Blight",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Talbot_Grimes",
        description: "An unpredictable Killer, able to rush forward in a burst of speed and carom off obstacles to injure Survivors using his power, Blighted Corruption. The Blight’s sheer mobility makes it almost impossible for Survivors to consistently outrun him. While beginners might use his difficult ability sparingly, advanced Blight players are capable of constantly using their environment to create threats and end their chases extremely quickly.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/Talbot_Grimes.png"
    },
    twins: {
        name: "The Twins",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Victor_%26_Charlotte_Deshayes",
        description: "A cooperative pair of Killers, able to divide and hunt together using their power, Blood Bond. When released, Victor can use his remarkable speed to quickly injure or hinder Survivors. The Twins can apply a remarkable amount of pressure and slow the game down considerably. Smart decision making and precise use of Victor’s pounce are definitely required.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/thetwins.png"
    },
    trickster: {
        name: "The Trickster",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Ji-Woon_Hak",
        description: "A ranged Killer, able to quickly unleash a flurry of blades by using his power, Showstopper. While slightly underwhelming in certain areas, the Trickster’s power is deceivingly strong when Survivors are caught in the open or are forced to perform certain actions in front of you. While he is not as immediately threatening as some of the other ranged Killers, he has a lot more room for mistake in his approach.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/K23_storeBackground.png"
    },
    nemesis: {
        name: "The Nemesis",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Nemesis_T-Type",
        description: "An unrelenting Killer, capable of attacking at mid-range with his tentacle, while receiving support from zombies roaming the area. The Nemesis has a powerful short-range attack that grows stronger and more oppressive as the match goes on. Players that can manage a lot of information at once and adapt quickly will make the most out of his abilities.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/nemesis.png"
    },
    cenobite: {
        name: "The Cenobite",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Elliot_Spencer",
        description: "A summoning Killer, able to possess chain projectiles and use the Lament Configuration to torture every Survivor at once. The Cenobite has several active and passive abilities, enabling a wide range of different playstyles. Deep understanding of these abilities and tremendous mechanical skill are both required to bring out his potential.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/cenobite.png"
    },
    artist: {
        name: "The Artist",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Carmina_Mora",
        description: "A ranged-reconnaissance Killer, able to launch Dire Crows across the Map to reveal and attack Survivors. The Artist can shut down most loops in seconds and exert pressure across the map with her ranged attacks if Survivors do not counter her swarms appropriately. While she is easy enough to pick up, she possesses an enormous skill ceiling.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/artist.png"
    },
    onryo: {
        name: "The Onryō",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Sadako_Yamamura",
        description: "A vengeful Killer, able to silently and invisibly traverse the Realm, manifesting when she is ready to strike. The Onryo has a number of tools to ambush Survivors and keep them on their toes. Her stealth and remarkable mobility must be used very efficiently to make up for her limited chase potential.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/onryo.png"
    },
    dredge: {
        name: "The Dredge",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/The_Dredge",
        description: "The Dredge is a manifestation of the dark thoughts of a once-vibrant community, able to teleport between Lockers and summon an overwhelming darkness. The Dredge has excellent mobility across most maps and some basic anti-loop tools. Most of its abilities become stronger during Nightfall, which rewards good decision making and smart usage of certain perks. Newer Survivors can also be overwhelmed by the lack of visibility during this period.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/dredge.png"
    },
    mastermind: {
        name: "The Mastermind",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Albert_Wesker",
        description: "Albert Wesker is a brilliant and ruthless mastermind infused with the Power of Uroboros. The Mastermind can perform two quick dashes to traverse the map, hit Survivors or even vault obstacles. These dashes can be quite oppressive in chase if used correctly. His passive infection can also threaten to expose and hinder Survivors, forcing them to waste precious time to get rid of it.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/wesker.png"
    },
    knight: {
        name: "The Knight",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Tarhos_Kovács",
        description: "A strategic Killer, able to send his faithful Guards to hunt for Survivors and damage objects on the battlefield. The Knight and his summons can quickly overwhelm Survivors if they choose to stay in an area. Success with him heavily relies on bringing synergistic perks and add-ons as well as understanding each Guard’s unique strengths and properties.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/knight.png"
    },
    skull_merchant: {
        name: "The Skull Merchant",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Adriana_Imai",
        description: "A tactical Killer, able to place Drones that detect and debilitate her targets. The Skull Merchant’s Drones can create dangerous areas that Survivors must navigate carefully or risk becoming exposed. Despite having a limited chase potential early on, correct use of her abilities can severely slow down repairs and stall progress until a serious mistake allows her to gain the advantage.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/skull_merchant.png"
    },
    singularity: {
        name: "The Singularity",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/HUX-A7-13",
        description: "A relentless Killer, able to launch Biopods to move quickly across the map. The Singularity can use his power to keep an eye on several locations at once or focus his attention on a single area. A very aggressive playstyle is required to keep up with Survivors that constantly try to use EMPs to disable your abilities.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/singularity.png"
    },
    xenomorph: {
        name: "The Xenomorph",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/The_Xenomorph",
        description: "A vicious and cunning Killer, able to traverse the map quickly and strike from a distance with its tail. The Xenomorph’s tunnels are a constant source of mobility and ambush potential, but its real strength comes from mastering its strong but unintuitive tail attack. Be ready to make lots of quick decisions.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/xenomorph.png"
    },
    good_guy: {
        name: "The Good Guy",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Charles_Lee_Ray",
        description: "An elusive Killer, capable of deceiving Survivors with his illusory Footfalls and deadly Slice & Dice. The Good Guy is a unique Killer played in third person with stealth elements and a versatile dash attack. Your success with him will depend on your ability to land hits consistently and manage the power cooldown between uses.",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/good_guy.png"
    },
    unknown: {
        name: "The Unknown",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/The_Unknown",
        description: "A mysterious Killer, able to use his power, The Unknown’s Shadow, to create illusions of himself that can deceive Survivors. The Unknown is a unique Killer played in third person with stealth elements and a versatile dash attack. Your success with him will depend on your ability to land hits consistently and manage the power cooldown between uses.",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/the_unknown.png"
    },
    lich: {
        name: "The Lich",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Vecna",
        description: "",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/lich.png"
    },
    dark_lord: {
        name: "The Dark Lord",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Dracula",
        description: "",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/dark_lord.png"
    },
    houndmaster: {
        name: "The Houndmaster",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Portia_Maye",
        description: "",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/houndmaster.png"
    },
    ghoul: {
        name: "The Ghoul",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Ken_Kaneki",
        description: "",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/ghoul.png"
    },
    animatronic: {
        name: "The Animatronic",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/William_Afton",
        description: "",
        dlc: true,
        licensed: true,
        background: "https://assetboi.com/which_killer/killers/animatronic.png"
    },
    krasue: {
        name: "The Krasue",
        wiki_link: "https://deadbydaylight.wiki.gg/wiki/Burong_Sukapat",
        description: "",
        dlc: true,
        licensed: false,
        background: "https://assetboi.com/which_killer/killers/krasue.png"
    }
};

const questionsData = [
    {
        text: "I would prefer a Killer that...",
        answers: [
            { text: "Plays and feels like a regular Killer... good to learn the basics.", points: { standard: 150, mixed: 75 } },
            { text: "Has their own unique playstyle... must be learnt from scratch.", points: { mixed: 75, unique: 150 } },
            { text: "Combines common Killer characteristics with some unique elements.", points: { standard: 25, mixed: 125, unique: 50 } },
            { text: "I don’t mind either way.", points: { standard: 75, mixed: 75, unique: 75 } }
        ],
        groups: {
            standard: ["trapper", "wraith", "shape", "doctor", "cannibal", "nightmare", "pig", "clown", "legion", "ghostface", "demogorgon", "oni", "executioner", "nemesis", "onryo", "knight"],
            unique: ["nurse", "huntress", "hag", "spirit", "singularity", "good_guy"],
            mixed: ["hillbilly", "plague", "deathslinger", "blight", "twins", "cenobite", "artist", "dredge", "mastermind", "skull_merchant", "xenomorph", "trickster"]
        }
    },
    {
        text: "I would prefer a Killer that...",
        answers: [
            { text: "Is easy for a beginner to pick up and learn.", points: { easy: 150, medium: 75 } },
            { text: "Has tons of depth but is very hard to learn.", points: { medium: 75, hard: 150 } },
            { text: "I don’t mind either way.", points: { easy: 75, medium: 75, hard: 75 } }
        ],
        groups: {
            easy: ["trapper", "wraith", "shape", "nightmare", "pig", "clown", "legion", "onryo", "skull_merchant"],
            medium: ["doctor", "spirit", "ghostface", "demogorgon", "oni", "deathslinger", "nemesis", "artist", "dredge", "knight", "cannibal", "xenomorph", "good_guy"],
            hard: ["hillbilly", "nurse", "huntress", "hag", "plague", "executioner", "blight", "twins", "trickster", "cenobite", "mastermind", "singularity"]
        }
    },
    {
        text: "I would prefer a Killer that...",
        answers: [
            { text: "Has a singular mechanic that I can focus on getting better at.", points: { single: 75, mix: 25 } },
            { text: "Has multiple abilities in their repertoire for me to use and learn.", points: { mix: 25, many: 75 } },
            { text: "I don’t mind either way.", points: { single: 50, mix: 50, many: 50 } }
        ],
        groups: {
            single: ["trapper", "wraith", "nurse", "huntress", "shape", "cannibal", "spirit", "legion", "ghostface", "deathslinger", "blight", "mastermind", "good_guy"],
            mix: ["hillbilly", "clown", "oni", "executioner", "trickster", "artist", "xenomorph"],
            many: ["hag", "doctor", "nightmare", "pig", "plague", "demogorgon", "twins", "nemesis", "cenobite", "onryo", "dredge", "knight", "skull_merchant", "singularity"]
        }
    },
    {
        text: "I would prefer a Killer that...",
        answers: [
            { text: "Has a huge skill ceiling... mastering them takes tons of time.", points: { medium: 75, high: 150 } },
            { text: "Has a reasonable skill ceiling. Complex, but not TOO complex.", points: { low: 75, medium: 150, high: 75 } },
            { text: "Has a lower skill ceiling... relatively easy to master quickly.", points: { low: 150, medium: 75 } },
            { text: "I don’t mind either.", points: { low: 75, medium: 75, high: 75 } }
        ],
        groups: {
            low: ["wraith", "shape", "nightmare", "pig", "legion", "onryo", "skull_merchant"],
            medium: ["trapper", "hag", "doctor", "clown", "spirit", "ghostface", "demogorgon", "oni", "trickster", "nemesis", "cannibal", "dredge", "knight"],
            high: ["hillbilly", "nurse", "huntress", "plague", "deathslinger", "executioner", "blight", "twins", "cenobite", "artist", "mastermind", "singularity", "xenomorph", "good_guy"]
        }
    },
    {
        text: "I prefer a Killer that is...",
        answers: [
            { text: "Mechanically demanding, requiring precise timing & inputs.", points: { medium: 50, hard: 100 } },
            { text: "Reliant on experience rather than quick reflexes & perfect execution.", points: { chill: 100, medium: 50 } },
            { text: "I don’t mind either way.", points: { chill: 50, medium: 50, hard: 50 } }
        ],
        groups: {
            chill: ["trapper", "wraith", "shape", "hag", "nightmare", "pig", "legion", "onryo", "knight", "skull_merchant"],
            medium: ["doctor", "cannibal", "clown", "spirit", "ghostface", "demogorgon", "oni", "plague", "artist", "dredge", "good_guy"],
            hard: ["hillbilly", "nurse", "huntress", "deathslinger", "executioner", "blight", "twins", "trickster", "nemesis", "cenobite", "mastermind", "singularity", "xenomorph"]
        }
    },
    {
        text: "I would prefer a Killer that...",
        answers: [
            { text: "Has add-ons that are really powerful or transformative.", points: { strong: 75, medium: 25 } },
            { text: "Has add-ons that just enhance its basic abilities a little.", points: { strong: 25, medium: 75, bad: 50 } },
            { text: "I don’t mind either way.", points: { strong: 50, medium: 50, bad: 50 } }
        ],
        groups: {
            strong: ["shape", "hag", "doctor", "plague", "blight", "huntress", "spirit", "cenobite"],
            medium: ["trapper", "wraith", "pig", "clown", "legion", "demogorgon", "oni", "twins", "trickster", "hillbilly", "deathslinger", "artist", "onryo", "ghostface", "dredge", "knight", "skull_merchant", "nurse", "cannibal", "singularity", "xenomorph", "good_guy"],
            bad: ["nightmare", "executioner", "nemesis", "mastermind"]
        }
    },
    {
        text: "When it comes to teachable perks...",
        answers: [
            { text: "I would really prefer a Killer that unlocks powerful teachables.", points: { good: 75, medium: 25 } },
            { text: "I don’t care about their teachables.", points: { good: 25, medium: 25, bad: 25 } }
        ],
        groups: {
            good: ["hillbilly", "hag", "cannibal", "clown", "legion", "plague", "blight", "nemesis", "artist", "onryo", "cenobite", "deathslinger", "demogorgon", "shape", "xenomorph"],
            medium: ["trapper", "nurse", "pig", "spirit", "trickster", "knight", "doctor", "ghostface", "good_guy", "nightmare", "twins"],
            bad: ["wraith", "huntress", "oni", "executioner", "mastermind", "singularity", "skull_merchant", "dredge"]
        }
    },
    {
        text: "My main preferred playstyle is...",
        answers: [
            { text: "An aggressive one, using my power to end chases.", points: { chaser: 200, mix: 100, ranged: 50, shape: 100, singularity: 100 } },
            { text: "Using several abilities together to build up pressure.", points: { mix: 200, setup: 50 } },
            { text: "Using stealth.", points: { stealth: 200, pig: 75, dredge: 75, mastermind: -50, skull_merchant: 50, xenomorph: 100, good_guy: 35, onryo: 80 } },
            { text: "Setting up traps & area control.", points: { stealth: 25, setup: 200, knight: 100 } },
            { text: "Ranged attacks.", points: { ranged: 200, plague: 150, executioner: 100, clown: 50, cenobite: 50, xenomorph: 50 } },
            { text: "I don’t have a preference.", points: { setup: 100, stealth: 100, chaser: 100, ranged: 100, mix: 100 } }
        ],
        groups: {
            chaser: ["hillbilly", "nurse", "cannibal", "clown", "spirit", "legion", "oni", "blight", "mastermind", "good_guy"],
            mix: ["doctor", "nightmare", "pig", "plague", "demogorgon", "executioner", "twins", "nemesis", "cenobite", "dredge", "knight", "xenomorph", "singularity", "onryo"],
            ranged: ["huntress", "deathslinger", "trickster", "artist"],
            stealth: ["wraith", "shape", "ghostface"],
            setup: ["trapper", "hag", "skull_merchant"],
            shape: ["shape"],
            pig: ["pig"],
            deathslinger: ["deathslinger"],
            plague: ["plague"],
            executioner: ["executioner"],
            clown: ["clown"],
            dredge: ["dredge"],
            cenobite: ["cenobite"],
            mastermind: ["mastermind"],
            knight: ["knight"],
            skull_merchant: ["skull_merchant"],
            xenomorph: ["xenomorph"],
            good_guy: ["good_guy"],
            singularity: ["singularity"],
            onryo: ["onryo"]
        }
    },
    // The previous implementation had a "secondary playstyle" that was identical but with half points, 
    // but the source code provided shows an explicit "secondary preferred playstyle" object.
    {
        text: "My secondary preferred playstyle is...",
        answers: [
            { text: "An aggressive one, using my power to end chases.", points: { chaser: 100, mix: 50, ranged: 25, shape: 50, singularity: 50 } },
            { text: "Using several abilities together to build up pressure.", points: { mix: 100, setup: 25 } },
            { text: "Using stealth.", points: { stealth: 100, pig: 35, dredge: 35, mastermind: -15, skull_merchant: 25, xenomorph: 50, good_guy: 75, onryo: 40 } },
            { text: "Setting up traps & area control.", points: { stealth: 15, setup: 100, knight: 50 } },
            { text: "Ranged attacks.", points: { ranged: 100, plague: 75, executioner: 50, clown: 25, cenobite: 25, xenomorph: 25 } },
            { text: "I don’t have a secondary playstyle.", points: { setup: 50, stealth: 50, chaser: 50, ranged: 50, mix: 50 } }
        ],
        groups: {
            chaser: ["hillbilly", "nurse", "cannibal", "clown", "spirit", "legion", "oni", "blight", "mastermind", "good_guy"],
            mix: ["doctor", "nightmare", "pig", "plague", "demogorgon", "executioner", "twins", "nemesis", "cenobite", "dredge", "knight", "xenomorph", "singularity", "onryo"],
            ranged: ["huntress", "deathslinger", "trickster", "artist"],
            stealth: ["wraith", "shape", "ghostface"],
            setup: ["trapper", "hag", "skull_merchant"],
            shape: ["shape"],
            pig: ["pig"],
            deathslinger: ["deathslinger"],
            plague: ["plague"],
            executioner: ["executioner"],
            clown: ["clown"],
            dredge: ["dredge"],
            cenobite: ["cenobite"],
            mastermind: ["mastermind"],
            knight: ["knight"],
            skull_merchant: ["skull_merchant"],
            xenomorph: ["xenomorph"],
            good_guy: ["good_guy"],
            singularity: ["singularity"],
            onryo: ["onryo"]
        }
    }
];

// App Logic

let currentQuestionIndex = 0;
let userAnswers = []; // Store chosen answer indices/objects

const quizContainer = document.getElementById('quiz-container');

function init() {
    document.getElementById('start-btn').addEventListener('click', startQuiz);
}

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questionsData.length) {
        showResults();
        return;
    }

    const q = questionsData[currentQuestionIndex];

    // Wipe
    quizContainer.innerHTML = '';

    // Header
    const progress = document.createElement('h4');
    // progress.innerText = `Question ${currentQuestionIndex + 1} / ${questionsData.length}`;
    progress.className = 'svelte-1o5mta3';
    // The original uses "Question X / Y", let's replicate close to it but keep our style
    progress.innerHTML = `<span style="font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">Question ${currentQuestionIndex + 1} / ${questionsData.length}</span>`;
    quizContainer.appendChild(progress);

    // Question Text
    const qTitle = document.createElement('h3');
    qTitle.className = 'question-text';
    qTitle.innerText = q.text;
    quizContainer.appendChild(qTitle);

    // Options Container
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'quiz-options';

    q.answers.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = ans.text;
        btn.addEventListener('click', () => handleAnswer(ans, q.groups));
        optionsDiv.appendChild(btn);
    });

    quizContainer.appendChild(optionsDiv);

    // Previous Button (if not first)
    if (currentQuestionIndex > 0) {
        const prevBtn = document.createElement('button');
        prevBtn.innerText = "Previous question";
        prevBtn.className = "quiz-btn prev-btn"; // We can style this differently if needed
        prevBtn.style.marginTop = "20px";
        prevBtn.style.backgroundColor = "transparent";
        prevBtn.style.border = "1px solid #666";
        prevBtn.style.color = "#aaa";
        prevBtn.addEventListener('click', () => {
            currentQuestionIndex--;
            userAnswers.pop(); // Remove last answer
            showQuestion();
        });
        quizContainer.appendChild(prevBtn);
    }
}

function handleAnswer(answerObj, groupsObj) {
    userAnswers.push({ points: answerObj.points, groups: groupsObj });
    currentQuestionIndex++;
    showQuestion();
}

function calculateScores() {
    // Initialize standard/0 scores for all killers
    let scores = {};
    for (let kId in killersData) {
        scores[kId] = 0;
    }

    // Process all answers
    userAnswers.forEach(ans => {
        // ans.points is { key: score, ... }
        // ans.groups is { key: [killerId, ...], ... }
        for (let category in ans.points) {
            let pts = ans.points[category];
            let affectedKillers = ans.groups[category] || [];

            affectedKillers.forEach(kId => {
                if (scores.hasOwnProperty(kId)) {
                    scores[kId] += pts;
                }
            });
        }
    });

    // Convert to array and sort
    let sortedKillers = Object.keys(scores).map(kId => {
        return {
            id: kId,
            ...killersData[kId],
            score: scores[kId]
        };
    }).sort((a, b) => b.score - a.score); // Descending

    return sortedKillers;
}

function showResults() {
    const results = calculateScores();

    quizContainer.innerHTML = '';

    // Results Header
    const header = document.createElement('div');
    header.innerHTML = `
        <h2 style="font-family: HeaderFont; color: #fff;">Results</h2>
        <button class="quiz-btn" onclick="startQuiz()" style="margin-bottom: 20px;">Restart</button>
    `;
    quizContainer.appendChild(header);

    // List
    const list = document.createElement('ul');
    list.className = 'killer-list';
    list.style.listStyle = 'none';
    list.style.padding = '0';
    list.style.textAlign = 'left';
    list.style.width = '100%';
    list.style.maxWidth = '800px';

    results.forEach(k => {
        const li = document.createElement('li');
        li.className = 'result-item';

        // Dynamic background style if image exists
        let bgStyle = "background-color: #2b2b2b;";
        if (k.background) {
            bgStyle = `background: linear-gradient(to right, #2b2b2b 20%, rgba(43,43,43,0.8)), url('${k.background}'); background-size: cover; background-position: right top;`;
        }

        li.style.cssText = `
            ${bgStyle}
            margin-bottom: 15px;
            padding: 20px;
            border-radius: 8px;
            border-left: 5px solid #8d1ed2;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            position: relative;
            overflow: hidden;
        `;

        li.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="margin: 0; font-family: HeaderFont; font-size: 1.8rem; color: #fff; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">${k.name}</h3>
                <span style="font-weight: bold; color: #8d1ed2; font-size: 1.2rem; background: rgba(0,0,0,0.6); padding: 5px 10px; border-radius: 4px;">${k.score} pts</span>
            </div>
            
            <div style="margin-top: 10px; max-width: 600px; color: #ddd; text-shadow: 1px 1px 2px black;">
                ${k.description}
            </div>
            
            <div style="margin-top: 10px;">
                ${k.dlc ? '<span class="tag" style="background: #3498db; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 5px;">DLC</span>' : ''}
                ${k.licensed ? '<span class="tag" style="background: #f1c40f; color: black; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">Licensed</span>' : ''}
                <a href="${k.wiki_link}" target="_blank" style="float: right; color: #8d1ed2; text-decoration: none; font-weight: bold; background: rgba(0,0,0,0.6); padding: 5px;">Wiki &rarr;</a>
            </div>
        `;
        list.appendChild(li);
    });

    quizContainer.appendChild(list);
}

init();
