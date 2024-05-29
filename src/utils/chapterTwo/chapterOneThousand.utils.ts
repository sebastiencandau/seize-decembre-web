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
    name: 'Sarah',
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
                        msg: `ça me rassure, tu sais ce qu'on dit sur ces crados! 😬`,
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
                    ":(",
                    "😯",
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
        case ":(":
        case "😯":
        case "merci":
            choices = JSON.parse(await localStorage.getItem('choices')!)
            choices[6] = 'sarah-appreciate-1';
            localStorage.setItem('choices', JSON.stringify(choices));
            return {
                messages: [
                    {
                        msg: "bon je dois te parler d'un truc sérieux Sarah",
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
        case "je suis venu te parler d'un truc sérieux Sarah...":
            return {
                messages: [
                    {
                        msg: "oui, pardon",
                        type: null,
                        received: false
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
        case "de Lucie...":
            return {
                messages: [
                    {
                        msg: "j'ai échangé des messages avec un compte anonyme",
                        type: null,
                        received: false
                    },
                    {
                        msg: "qui avait l'air d'en savoir un rayon sur nous",
                        type: null,
                        received: false
                    },
                    {
                        msg: `c'est à dire ? 🧐`,
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "il m'a dit que Lucie ne s'était pas suicidée",
                    "est-ce que Lucie possédait un carnet ?"
                ]
            };
        case "il m'a dit que Lucie ne s'était pas suicidée":
            return {
                messages: [
                    {
                        msg: "mais c'est n'importe quoi ?",
                        type: null,
                        received: true
                    },
                    {
                        msg: "tu as conscience que c'est n'importe quoi ?",
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "j'ai un doute",
                    "j'y crois"
                ]
            };
        case "j'y crois":
        case "j'ai un doute":
            return {
                messages: [
                    {
                        msg: "j'ai besoin de ton aide Sarah",
                        type: null,
                        received: false
                    },
                    {
                        msg: `je te fais confiance ${playerName}`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `et je veux bien t'aider`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `mais je pense que c'est dangereux de rabâcher tout ça`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `on a déjà beaucoup soufferts`,
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "Lucie possédait un carnet ?",
                    "est-ce que tu sais des choses sur Lucie que je ne sais pas ?"
                ]
            };
        case "est-ce que tu sais des choses sur Lucie que je ne sais pas ?":
            return {
                messages: [
                    {
                        msg: "Lucie faisait partie de ce que j'appelle",
                        type: null,
                        received: true
                    },
                    {
                        msg: `"Les coeurs brisés"`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `les coeurs brisés sont des gens qui je pense, sont plus sensibles que la moyenne`,
                        type: null,
                        received: true
                    },
                    {
                        msg: "ils voient et ressentent des choses que les autres ne comprennent pas forcément",
                        type: null,
                        received: true
                    },
                    {
                        msg: "le fait qu'ils se sentent incompris les poussent à s'isoler et alors ils se sentent comme des ombres.",
                        type: null,
                        received: false
                    },
                    {
                        msg: `souvent ils en veulent au monde entier`,
                        type: null,
                        received: true
                    },
                    {
                        msg: "mais en réalité c'est à eux qu'ils en veulent le plus",
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "je comprends ce que c'est",
                    "ce doit être si dur à vivre",
                    `pourquoi "Les coeurs brisés" ?`
                ]
            };


        case "je comprends ce que c'est":
            return {
                messages: [
                    {
                        msg: "moi aussi...",
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "alors tu penses qu'elle s'est vraiment suicidée ?",
                    `pourquoi "Les coeurs brisés" ?`
                ]
            };

        case "ce doit être si dur à vivre":
            return {
                messages: [
                    {
                        msg: "le plus dur",
                        type: null,
                        received: true
                    },
                    {
                        msg: "c'est de le cacher à ses proches",
                        type: null,
                        received: true
                    },
                    {
                        msg: `Lucie était très pudique sur ses souffrances`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `et elle ne voulait surtout pas que ce soit un fardeau pour ses proches`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `alors elle le cachait.`,
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "alors tu penses qu'elle s'est vraiment suicidée ?",
                    `pourquoi "Les coeurs brisés" ?`
                ]
            };
        case "alors tu penses qu'elle s'est vraiment suicidée ?":
        case "personne ne lui a fait du mal selon toi ?":
            return {
                messages: [
                    {
                        msg: "c'est le plus probable selon moi",
                        type: null,
                        received: true
                    },
                    {
                        msg: "mais un doute persiste",
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "un doute ?",
                    `dis moi tout`
                ]
            };
            case "j'aurais aimé être là pour elle":
                return {
                    messages: [
                        {
                            msg: "on l'a été tout les deux",
                            type: null,
                            received: true
                        },
                        {
                            msg: `je pense que parfois les choses nous dépassent ${playerName}`,
                            type: null,
                            received: true
                        }
                    ],
                    choices: [
                        "alors tu penses qu'elle s'est vraiment suicidée ?",
                        `personne ne lui a fait du mal selon toi ?`
                    ]
                };
        case "dis moi tout":
        case "un doute ?":
            return {
                messages: [
                    {
                        msg: "Brice",
                        type: null,
                        received: true
                    },
                    {
                        msg: "ce gars est pas net",
                        type: null,
                        received: true
                    },
                    {
                        msg: `il traine dans de sales histoires`,
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "quelles histoires ?",
                    `tu penses qu'il aurait pu lui faire du mal ?`
                ]
            };
        case "quelles histoires ?":
        case `tu penses qu'il aurait pu lui faire du mal ?`:
            return {
                messages: [
                    {
                        msg: "je sais pas trop",
                        type: null,
                        received: true
                    },
                    {
                        msg: "mais parfois Lucie se confiait à moi sur sa relation",
                        type: null,
                        received: true
                    },
                    {
                        msg: `et j'ai pu comprendre qu'il était violent`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `elle avait peur de lui`,
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "peur à quel point ?",
                    `violent comment ?`
                ]
            };
        case "peur à quel point ?":
        case "violent comment ?":
            return {
                messages: [
                    {
                        msg: "au point où elle m'a un jour mise en garde",
                        type: null,
                        received: true
                    },
                    {
                        msg: "au point où elle m'a un jour mise en garde",
                        type: "indication",
                        received: true
                    },
                    {
                        msg: `Sarah vous transfère un message`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `"Sarah si un jour il m'arrive quelque chose, c'est Brice"`,
                        type: "indication",
                        received: true
                    },
                ],
                choices: [
                    "wah...",
                    `alors c'est lui.`
                ]
            };
        case "wah...":
        case "alors c'est lui.":
            return {
                messages: [
                    {
                        msg: "je vais mener l'enquête Sarah",
                        type: null,
                        received: false
                    },
                    {
                        msg: "laisse moi t'aider",
                        type: null,
                        received: true
                    }
                ],
                choices: [
                    "(accepter)",
                    `(refuser)`
                ]
            };
        case "(accepter)":
            choices = JSON.parse(await localStorage.getItem('choices')!)
            choices[7] = 'sarah_colaborate';
            localStorage.setItem('choices', JSON.stringify(choices));
            return {
                messages: [
                    {
                        msg: "ce choix aura des conséquences",
                        type: 'indication',
                        received: true
                    },
                    {
                        msg: "bienvenue dans l'équipe !",
                        type: null,
                        received: true
                    },
                    {
                        msg: `bien chef 🫡`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `il nous faut des noms de code !`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `choisis pour moi`,
                        type: null,
                        received: true
                    },
                ],
                choices: [
                    "Baker",
                    `Trinity`,
                    "BranleX2000"
                ]
            };

        case "(refuser)":
            choices = JSON.parse(await localStorage.getItem('choices')!)
            choices[7] = 'sarah_alone';
            localStorage.setItem('choices', JSON.stringify(choices));
            return {
                messages: [
                    {
                        msg: "ce choix aura des conséquences",
                        type: 'indication',
                        received: true
                    },
                    {
                        msg: "c'est mieux pour toi si tu restes en dehors de ça Sarah...",
                        type: null,
                        received: true
                    },
                    {
                        msg: `je comprends...`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `si tu as besoin de quoi que ce soit... tu peux compter sur moi`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `FIN DE LA SECONDE PARTIE`,
                        type: 'indication',
                        received: true
                    },
                ],
                choices: [
                ]
            };

        case "Baker":
            localStorage.setItem('pseudo', JSON.stringify('agent 007'));
            return {
                messages: [
                    {
                        msg: "génial",
                        type: null,
                        received: true
                    },
                    {
                        msg: `toi tu seras`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `agent 007`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `FIN DE LA SECONDE PARTIE`,
                        type: 'indication',
                        received: true
                    },
                ],
                choices: [
                ]
            };

        case "Trinity":
            localStorage.setItem('pseudo', JSON.stringify('Morpheus'));
            return {
                messages: [
                    {
                        msg: "classe 🤖",
                        type: null,
                        received: true
                    },
                    {
                        msg: `toi tu seras`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `Morpheus`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `FIN DE LA SECONDE PARTIE`,
                        type: 'indication',
                        received: true
                    },
                ],
                choices: [
                ]
            };

        case "BranleX2000":
            localStorage.setItem('pseudo', JSON.stringify('CiCACA3301'));
            return {
                messages: [
                    {
                        msg: "MDRRR",
                        type: null,
                        received: true
                    },
                    {
                        msg: `ça me va`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `alors toi tu seras...`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `CiCACA3301`,
                        type: null,
                        received: true
                    },
                    {
                        msg: `FIN DE LA SECONDE PARTIE`,
                        type: 'indication',
                        received: true
                    },
                ],
                choices: [
                ]
            };

    }

}