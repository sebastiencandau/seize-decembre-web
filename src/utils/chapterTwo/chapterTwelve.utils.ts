import { IConversation } from "../../interfaces/messages.interface";

export const NAME = 'Matéo';

export const narativeIndications = [
    "Chapitre 2: Aveuglés",
    "Partie 2: Sarah",
    "14 novembre 2017",
    "Un peu plus tard dans la soirée..."
]

export const startingConversation: IConversation =
{
    id: 1000,
    name: 'Liminal',
    profilePicture: 'Sarah',
    messages: [
    ],
    choices: [
        "coucou Sarah",
        "salut Sarah"
    ]
}

export const followingMessage = async (message: string, playerName: string) => {
    let choices;
    switch (message) {
        case "coucou Sarah":
        case "salut Sarah":
            return {
                messages: [
                    {
                        msg: `coucou ${playerName}`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `tu tombes bien ! fallait que je te parle d'un truc`,
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "je t'écoute",
                ]
            };
        case "je t'écoute":
            return {
                messages: [
                    {
                        msg: "hier j'ai croisé Allan à la bilbiothèque",
                        type: null,
                        received: true
                    },
                    {
                        msg: "je me suis rendue compte qu'il lisait les mêmes choses que moi",
                        type: null,
                        received: true
                    },
                    {
                        msg: "j'ai appris qu'il était en info, tu penses qu'il prend des douches ?",
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "euh.. oui ? Je suppose ?",
                    "je ne venu te parler d'un truc sérieux Sarah..."
                ]
            };
        case "euh.. oui ? Je suppose ?":
            return {
                messages: [
                    {
                        msg: `ça me rassure, tu sais ce qu'on dit sur ces gens là`,
                        type: null,
                        received: true
                    },
                    {
                        msg: "ils mangent des cartes graphiques à la pelle ! 😬",
                        type: null,
                        received: true
                    },
                    {
                        msg: `et toi ${playerName} y'a pas une fille qui te plaît dans ta classe ? `,
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "il y'a bien une fille qui me plaît mais elle n'est pas dans ma classe",
                    "non, l'amour c'est pas pour moi !",
                ]
            };
        case "il y'a bien une fille qui me plaît mais elle n'est pas dans ma classe":
            return {
                messages: [
                    {
                        msg: "????",
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "tu es trop curieuse aha",
                    "c'est de toi que je parle",
                ]
            };
        case "tu es trop curieuse aha":
            return {
                messages: [
                    {
                        msg: "mais dis moiiii 😠",
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "on en parlera + tard",
                ]
            };
        case "c'est de toi que je parle":
            return {
                messages: [
                    {
                        msg: "????",
                        type: null,
                        received: true
                    },
                    {
                        msg: "wahh",
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "excuse moi",
                    "je ne te plais pas ?",
                ]
            };
        case "excuse moi":
        case "je ne te plais pas ?":
            return {
                messages: [
                    {
                        msg: `mais wahh ${playerName}`,
                        type: null,
                        received: true
                    },
                    {
                        msg: "c'est pas que tu ne me plais pas",
                        type: null,
                        received: true
                    },
                    {
                        msg: "je pensais qu'on était de simples amis",
                        type: null,
                        received: true
                    },
                    {
                        msg: "j'ai jamais envisagé quoi que ce soit",
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "bon, bref",
                ]
            };
        case "non, l'amour c'est pas pour moi !":
            return {
                messages: [
                    {
                        msg: "dis pas ça",
                        type: null,
                        received: true
                    },
                    {
                        msg: "c'est pas comme si t'avais pas le choix",
                        type: null,
                        received: true
                    },
                    {
                        msg: "c'est ton côté ténébreux qui plaît je pense",
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "Je crois que les filles m'aiment bien parceque je suis un peu mystérieux comme Light Yagami",
                ]
            };
        case "Je crois que les filles m'aiment bien parceque je suis un peu mystérieux comme Light Yagami":
            return {
                messages: [
                    {
                        msg: " je suis toujours tout seul, aux récrées je m’assoie sur un banc avec ma capuche et la tête baissé et quand quelque passe à coté de moi je chuchote des truc genre okamari no suzoki, ça ne veut rien dire mais ça fait mystique, les gens sont intrigués.",
                        type: null,
                        received: false
                    },
                    {
                        msg: "MDDRRR",
                        type: null,
                        received: true
                    },
                    {
                        msg: "non en vrai",
                        type: null,
                        received: true
                    },
                    {
                        msg: "je pense qu'il faut qu'on travaille ta confiance en toi",
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "comment tu fais toi ?",
                    "tu penses ?",
                    "j'ai confiance en moi"
                ]
            };
        case "comment tu fais toi ?":
            return {
                messages: [
                    {
                        msg: `je fais semblant ${playerName}`,
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "bref"
                ]
            };
            case "tu penses ?":
                return {
                    messages: [
                        {
                            msg: `carrément`,
                            type: null,
                            received: true
                        },
                        {
                            msg: `on peut s'entre-aider si tu veux :)`,
                            type: null,
                            received: true
                        },
                    ],
                    choices: [
                        "merci"
                    ]
                };
                case "j'ai confiance en moi":
                    return {
                        messages: [
                            {
                                msg: `alors tu devrais plus en profiter`,
                                type: null,
                                received: true
                            },
                        ],
                        choices: [
                            "bref"
                        ]
                    };
        case "bref":
        case "merci":
            return {
                messages: [
                    {
                        msg: "je ne venu te parler d'un truc sérieux Sarah...",
                        type: null,
                        received: false
                    },
                    {
                        msg: "oui, pardon",
                        type: null,
                        received: true
                    },
                    {
                        msg: "d'accord...",
                        type: null,
                        received: true
                    },
                    {
                        msg: `de quoi es-tu venu me parler ?`,
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "de Lucie...",
                ]
            };
            case "je ne venu te parler d'un truc sérieux Sarah...":
                return {
                    messages: [
                        {
                            msg: "oui, pardon",
                            type: null,
                            received: false
                        },
                        {
                            msg: "oui, pardon",
                            type: null,
                            received: true
                        },
                        {
                            msg: "d'accord...",
                            type: null,
                            received: true
                        },
                        {
                            msg: `de quoi es-tu venu me parler ?`,
                            type: null,
                            received: true
                        }
                    ],
                    choices: [
                        "de Lucie...",
                    ]
                };

    }

}