import { IConversation } from "../../interfaces/messages.interface";

export const NAME = 'Matéo';

export const narativeIndications = [
    "Chapitre 1: Lucie",
    "Partie 4",
    "12 décembre : 14h07"
]

export const startingConversation: IConversation =
{
    id: 3,
    name: 'Anniversaire de Lucie ❤️',
    profilePicture: 'https://static.wixstatic.com/media/29b61d_dd7fda3cf67048199aee9347e6c8e268~mv2.webp',
    messages: [
        { type: 'indication', received: true, msg: `Sarah vous a ajouté au groupe` },
        { type: null, received: true, prenom: "Sarah", msg: `Je crois qu'il y a tout le monde` },
        { type: null, received: true, msg: `Il manque des gens Lucie ?` },
        { type: null, received: true, prenom: "Lucie", msg: `non :) on est au complet !` },
    ],
    choices: [
        "Hey tout le monde",
        "( ne rien dire)",
    ]
}

export const followingMessage = async (message: string, playerName: string) => {
    let choices;
    switch (message) {
        case "tout va bien ?":
        case "ouais dis moi":
            return {
                messages: [
                    { msg: "ça concerne Lucie", type: null, received: true },
                ],
                choices: [
                    "Lucie ? C'est qui ?",
                    "je t'écoute",
                ]
            };

        case "Hey tout le monde":
        case "( ne rien dire)":
            return {
                messages: [
                    {
                        msg: `salut ${playerName}`,
                        prenom: 'Sarah',
                        type: null,
                        received: true
                    },
                    {
                        msg: `${playerName} !`,
                        prenom: 'Lucie',
                        type: null,
                        received: true
                    },
                    {
                        msg: `C qui ${playerName} ?`,
                        prenom: "Brice",
                        type: null,
                        received: true
                    },
                    {
                        msg: "Un ami de Matéo, je l'ai rencontré au ciné la semaine dernière",
                        type: null,
                        prenom: "Lucie",
                        received: true
                    },
                    {
                        msg: "ah et tu ne m'en as jamais parlé ?",
                        type: null,
                        prenom: "Brice",
                        received: true
                    },
                    {
                        msg: "t'es jaloux ou quoi",
                        prenom: "Lucie",
                        type: null,
                        received: true
                    },
                    {
                        msg: "je suis pas jaloux des losers",
                        prenom: "Brice",
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "c'est moi que tu traites de loser ?",
                    "( ne rien dire )"
                ]
            };
        case "c'est moi que tu traites de loser ?":
            choices = JSON.parse(await localStorage.getItem('choices')!)
            choices[5] = 'fight';
            localStorage.setItem('choices', JSON.stringify(choices));
            return {
                messages: [
                    {
                        msg: "ouais c'est toi mon gars",
                        type: null,
                        prenom: "Brice",
                        received: true
                    }
                ],
                choices: [
                    "va niquer tout tes morts",
                    "c'est celui qui dit qui l'est 😋",
                    "je vais même pas entrer dans ton jeu, je sais même pas qui tu es"
                ]
            };
        case "( ne rien dire )":
        case "je vais même pas entrer dans ton jeu, je sais même pas qui tu es":
            choices = JSON.parse(await localStorage.getItem('choices')!)
            choices[5] = 'no_fight';
            localStorage.setItem('choices', JSON.stringify(choices));
            return {
                messages: [
                    {
                        msg: `t'as raison ${playerName} rentre pas dans son jeu`,
                        type: null,
                        prenom: "Lucie",
                        received: true
                    },
                    {
                        msg: "il veut faire son intéressant comme d'hab",
                        type: null,
                        received: true
                    },
                    {
                        msg: "pff",
                        prenom: "Brice",
                        type: null,
                        received: true
                    },
                    {
                        msg: "bon Brice ferme la",
                        prenom: "Sarah",
                        type: null,
                        received: true
                    },
                    {
                        msg: "on est là pour s'organiser",
                        type: null,
                        received: true
                    },
                    {
                        msg: "qui emmène quoi ?",
                        type: null,
                        received: true
                    },
                    {
                        msg: "moi j'emmène ma sono",
                        prenom: "Mathieu",
                        type: null,
                        received: true
                    },
                    {
                        msg: "super !",
                        prenom: "Lucie",
                        type: null,
                        received: true
                    },
                    {
                        msg: "perso je peux prendre des bières et des gobelets",
                        type: null,
                        prenom: "Sarah",
                        received: true
                    },
                    {
                        msg: "je peux prendre de la weed aussi si jamais",
                        type: null,
                        received: true
                    },
                    {
                        msg: "yeaah",
                        type: null,
                        prenom: "Mathieu",
                        received: true
                    },
                    {
                        msg: `qu'est-ce que tu peux emmener ${playerName} ?`,
                        type: null,
                        prenom: "Lucie",
                        received: true
                    }
                ],
                choices: [
                    "je peux prendre de l'alcool fort",
                    "je peux ramener de quoi rouler",
                    "je peux prendre des chips et de la bouffe",
                    "je m'emmène moi c'est déjà ça"
                ]
            };
        case "va niquer tout tes morts":
            return {
                messages: [
                    {
                        msg: "wow calmez vous les gars",
                        type: null,
                        prenom: "Sarah",
                        received: true
                    },
                    {
                        msg: "on est pas là pour s'embrouiller",
                        type: null,
                        received: true
                    },
                    {
                        msg: "pff",
                        prenom: "Brice",
                        type: null,
                        received: true
                    },
                    {
                        msg: "bon Brice ferme la",
                        prenom: "Sarah",
                        type: null,
                        received: true
                    },
                    {
                        msg: "on est là pour s'organiser",
                        type: null,
                        received: true
                    },
                    {
                        msg: "qui emmène quoi ?",
                        type: null,
                        received: true
                    },
                    {
                        msg: "moi j'emmène ma sono",
                        prenom: "Mathieu",
                        type: null,
                        received: true
                    },
                    {
                        msg: "super !",
                        prenom: "Lucie",
                        type: null,
                        received: true
                    },
                    {
                        msg: "perso je peux prendre des bières et des gobelets",
                        type: null,
                        prenom: "Sarah",
                        received: true
                    },
                    {
                        msg: "je peux prendre de la weed aussi si jamais",
                        type: null,
                        received: true
                    },
                    {
                        msg: "yeaah",
                        type: null,
                        prenom: "Mathieu",
                        received: true
                    },
                    {
                        msg: `qu'est-ce que tu peux emmener ${playerName}`,
                        type: null,
                        prenom: "Lucie",
                        received: true
                    }
                ],
                choices: [
                    "je peux prendre de l'alcool fort",
                    "je peux ramener de quoi rouler",
                    "je peux prendre des chips et de la bouffe",
                    "je m'emmène moi c'est déjà ça"
                ]
            };
        case "c'est celui qui dit qui l'est 😋":
            return {
                messages: [
                    {
                        msg: "MDR",
                        type: null,
                        prenom: "Sarah",
                        received: true
                    },
                    {
                        msg: "je t'aime déjà toi",
                        type: null,
                        received: true
                    },
                    {
                        msg: "pff",
                        prenom: "Brice",
                        type: null,
                        received: true
                    },
                    {
                        msg: "bon Brice ferme la",
                        prenom: "Sarah",
                        type: null,
                        received: true
                    },
                    {
                        msg: "on est là pour s'organiser",
                        type: null,
                        received: true
                    },
                    {
                        msg: "qui emmène quoi ?",
                        type: null,
                        received: true
                    },
                    {
                        msg: "moi j'emmène ma sono",
                        prenom: "Mathieu",
                        type: null,
                        received: true
                    },
                    {
                        msg: "super !",
                        prenom: "Lucie",
                        type: null,
                        received: true
                    },
                    {
                        msg: "perso je peux prendre des bières et des gobelets",
                        type: null,
                        prenom: "Sarah",
                        received: true
                    },
                    {
                        msg: "je peux prendre de la weed aussi si jamais",
                        type: null,
                        received: true
                    },
                    {
                        msg: "yeaah",
                        type: null,
                        prenom: "Mathieu",
                        received: true
                    },
                    {
                        msg: `qu'est-ce que tu peux emmener ${playerName}`,
                        type: null,
                        prenom: "Lucie",
                        received: true
                    }
                ],
                choices: [
                    "je peux prendre de l'alcool fort",
                    "je peux ramener de quoi rouler",
                    "je peux prendre des chips et de la bouffe",
                    "je m'emmène moi c'est déjà ça"
                ]
            };
        case "je peux prendre de l'alcool fort":
        case "je peux ramener de quoi rouler":
        case "je peux prendre des chips et de la bouffe":
            choices = JSON.parse(await localStorage.getItem('choices')!);
            if(choices[1] === "honnete"){
                return {
                    messages: [
                        {
                            msg: "ça c'est une bonne idée",
                            type: null,
                            prenom: "Mathieu",
                            received: true
                        },
                        {
                            msg: "c'est parfait",
                            type: null,
                            prenom: "Sarah",
                            received: true
                        },
                        {
                            msg: "Matéo, t'as tjrs ton jeu de cartes ?",
                            type: null,
                            prenom: "Mathieu",
                            received: true
                        },
                        {
                            msg: "bonne idée ça !",
                            type: null,
                            prenom: "Lucie",
                            received: true
                        },
                        {
                            msg: "yep je prends",
                            type: null,
                            prenom: "Matéo",
                            received: true
                        },
                        {
                            msg: "bon...",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "des idées de ce qu'il manque ?",
                            type: null,
                            received: true
                        },
                        {
                            msg: "je crois qu'on est bons",
                            type: null,
                            prenom:"Mathieu",
                            received: true
                        },
                        {
                            msg: "je pense aussi, merci les copains 😊",
                            prenom: "Lucie",
                            type: null,
                            received: true
                        },
                        {
                            msg: "je sais que j'ai pas pu être trop dispo ces derniers temps pour toi Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "alors je voulais te remercier d'être toujours autant présente",
                            type: null,
                            received: true
                        },
                        {
                            msg: "tsss c'est quoi ce moment emotion de con",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "ça me donne la gerbe",
                            type: null,
                            received: true
                        },
                        {
                            msg: "c'est normal que je sois la pour toi, c'est pas de ta faute tout les trucs crades qui t'arrivent",
                            type: null,
                            received: true
                        },
                        {
                            msg: "merci à tout les autres aussi, ça me fait vraiment trop plaisir !",
                            prenom: "Lucie",
                            type: null,
                            received: true
                        },
                        {
                            msg: "A samedi les gars !!!",
                            prenom: "Mathieu",
                            type: null,
                            received: true
                        },
                        {
                            msg: "a samedi",
                            prenom: "Brice",
                            type: null,
                            received: true
                        },
                        {
                            msg: "à samedi ! ^.^",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        }
                    ],
                    choices: [
                        "hasta luego",
                        "à samedi !"
                    ]
                };
            } else {
                return {
                    messages: [
                        {
                            msg: "ça c'est une bonne idée",
                            type: null,
                            prenom: "Mathieu",
                            received: true
                        },
                        {
                            msg: "c'est parfait",
                            type: null,
                            prenom: "Sarah",
                            received: true
                        },
                        {
                            msg: "Matéo, t'as tjrs ton jeu de cartes ?",
                            type: null,
                            prenom: "Mathieu",
                            received: true
                        },
                        {
                            msg: "bonne idée ça !",
                            type: null,
                            prenom: "Lucie",
                            received: true
                        },
                        {
                            msg: "Matéo a quitté le groupe",
                            type: 'indication',
                            received: true
                        },
                        {
                            msg: "qu'est-ce qu'il lui arrive ?",
                            prenom: "Mathieu",
                            type: null,
                            received: true
                        },
                        {
                            msg: `${playerName} ?`,
                            prenom: "Lucie",
                            type: null,
                            received: true
                        },
                    ],
                    choices: [
                        "aucune idée",
                        "je gère vous inquiétez pas"
                    ]
                };
            }
            case "aucune idée":
            case  "je gère vous inquiétez pas":
                return {
                    messages: [
                        {
                            msg: "bon...",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "des idées de ce qu'il manque ?",
                            type: null,
                            received: true
                        },
                        {
                            msg: "je crois qu'on est bons",
                            type: null,
                            prenom:"Mathieu",
                            received: true
                        },
                        {
                            msg: "je pense aussi, merci les copains 😊",
                            prenom: "Lucie",
                            type: null,
                            received: true
                        },
                        {
                            msg: "je sais que j'ai pas pu être trop dispo ces derniers temps pour toi Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "alors je voulais te remercier d'être toujours autant présente",
                            type: null,
                            received: true
                        },
                        {
                            msg: "tsss c'est quoi ce moment emotion de con",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "ça me donne la gerbe",
                            type: null,
                            received: true
                        },
                        {
                            msg: "c'est normal que je sois la pour toi, c'est pas de ta faute tout les trucs crades qui t'arrivent",
                            type: null,
                            received: true
                        },
                        {
                            msg: "merci à tout les autres aussi, ça me fait vraiment trop plaisir !",
                            prenom: "Lucie",
                            type: null,
                            received: true
                        },
                        {
                            msg: "A samedi les gars !!!",
                            prenom: "Mathieu",
                            type: null,
                            received: true
                        },
                        {
                            msg: "a samedi",
                            prenom: "Brice",
                            type: null,
                            received: true
                        },
                        {
                            msg: "à samedi ! ^.^",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        }
                    ],
                    choices: [
                        "hasta luego",
                        "à samedi"
                    ]
                }
                case "je m'emmène moi c'est déjà ça":
            choices = JSON.parse(await localStorage.getItem('choices')!);
            if(choices[1] === "honnete"){
                return {
                    messages: [
                        {
                            msg: "le rat",
                            type: null,
                            prenom: "Sarah",
                            received: true
                        },
                        {
                            msg: "tu parles d'un kdo...",
                            type: null,
                            prenom: "Brice",
                            received: true
                        },
                        {
                            msg: "Matéo, t'as tjrs ton jeu de cartes ?",
                            type: null,
                            prenom: "Mathieu",
                            received: true
                        },
                        {
                            msg: "bonne idée ça !",
                            type: null,
                            prenom: "Lucie",
                            received: true
                        },
                        {
                            msg: "yep je prends",
                            type: null,
                            prenom: "Matéo",
                            received: true
                        },
                        {
                            msg: "bon...",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "des idées de ce qu'il manque ?",
                            type: null,
                            received: true
                        },
                        {
                            msg: "je crois qu'on est bons",
                            type: null,
                            prenom:"Mathieu",
                            received: true
                        },
                        {
                            msg: "je pense aussi, merci les copains 😊",
                            prenom: "Lucie",
                            type: null,
                            received: true
                        },
                        {
                            msg: "je sais que j'ai pas pu être trop dispo ces derniers temps pour toi Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "alors je voulais te remercier d'être toujours autant présente",
                            type: null,
                            received: true
                        },
                        {
                            msg: "tsss c'est quoi ce moment emotion de con",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        },
                        {
                            msg: "ça me donne la gerbe",
                            type: null,
                            received: true
                        },
                        {
                            msg: "c'est normal que je sois la pour toi, c'est pas de ta faute tout les trucs crades qui t'arrivent",
                            type: null,
                            received: true
                        },
                        {
                            msg: "merci à tout les autres aussi, ça me fait vraiment trop plaisir !",
                            prenom: "Lucie",
                            type: null,
                            received: true
                        },
                        {
                            msg: "A samedi les gars !!!",
                            prenom: "Mathieu",
                            type: null,
                            received: true
                        },
                        {
                            msg: "a samedi",
                            prenom: "Brice",
                            type: null,
                            received: true
                        },
                        {
                            msg: "à samedi ! ^.^",
                            prenom: "Sarah",
                            type: null,
                            received: true
                        }
                    ],
                    choices: [
                        "hasta luego",
                        "à samedi"
                    ]
                };
            } else {
                return {
                    messages: [
                        {
                            msg: "le rat",
                            type: null,
                            prenom: "Sarah",
                            received: true
                        },
                        {
                            msg: "tu parles d'un kdo...",
                            type: null,
                            prenom: "Brice",
                            received: true
                        },
                        {
                            msg: "Matéo, t'as tjrs ton jeu de cartes ?",
                            type: null,
                            prenom: "Mathieu",
                            received: true
                        },
                        {
                            msg: "bonne idée ça !",
                            type: null,
                            prenom: "Lucie",
                            received: true
                        },
                        {
                            msg: "Matéo a quitté le groupe",
                            type: 'indication',
                            received: true
                        },
                        {
                            msg: "qu'est-ce qu'il lui arrive ?",
                            prenom: "Mathieu",
                            type: null,
                            received: true
                        },
                        {
                            msg: `${playerName} ?`,
                            prenom: "Lucie",
                            type: null,
                            received: true
                        },
                    ],
                    choices: [
                        "aucune idée",
                        "je gère vous inquiétez pas"
                    ]
                };
            }
            case "hasta luego":
            case "à samedi !":
                return {
                    messages: [
                {
                  msg: "FIN DE LA PARTIE 4",
                  type: 'end',
                  received: true
                }
              ],
                    choices: []
                };
    }
}