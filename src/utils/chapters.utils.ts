import * as chapterOne from './chapterOne/chapterOne.utils';
import * as chapterTwo from './chapterOne/chapterTwo.utils';
import * as chapterThree from './chapterOne/chapterThree.utils';
import * as chapterFour from './chapterOne/chapterFour.utils';
import * as chapterRdv from './chapterOne/chapterRdv.utils';
import * as chapterFinal from './chapterOne/chapterFinal.utils'
import * as chapterSeven from './chapterTwo/chapterSeven.utils'
import * as chapterOneThousand from './chapterTwo/chapterOneThousand.utils'
import * as chapter_8 from './chapterTwo/chapter_8.utils'
import { choices } from '../interfaces/choices.interface';


export const narativeIndicationsForChapter = (chapterNumber: number) => {
    console.log(chapterNumber);
    if (chapterNumber === 1) {
        return chapterOne.narativeIndications;
    } else if (chapterNumber === 2) {
        return chapterTwo.narativeIndications;
    } else if (chapterNumber === 3) {
        return chapterThree.narativeIndications;
    } else if (chapterNumber === 4) {
                    return chapterFour.narativeIndications;
        } else if(chapterNumber === 999){
        return chapterRdv.narativeIndications;
    } else if(chapterNumber === 5){
        return chapterFinal.narativeIndications;
    } else if(chapterNumber === 7){
        return chapterSeven.narativeIndications;
    }else if (chapterNumber === 1000){
        return chapterOneThousand.narativeIndications;
    }else if (chapterNumber === 8){
        return chapter_8.narativeIndications;
    }
}

export const followingMessage = async (chapterNumber: number, message: string, playerName: string) => {
    if (chapterNumber === 1) {
        return await chapterOne.followingMessage(message, playerName);
    } else if (chapterNumber === 2) {
        return await chapterTwo.followingMessage(message, playerName);
    } else if (chapterNumber === 3) {
        return chapterThree.followingMessage(message, playerName);
    } else if (chapterNumber === 4) {
                    return chapterFour.followingMessage(message, playerName);
        } else if (chapterNumber === 5){
        return chapterFinal.followingMessage(message, playerName);
    } else if (chapterNumber === 999){
        return chapterRdv.followingMessage(message, playerName);
    } else if(chapterNumber === 7){
        return chapterSeven.followingMessage(message, playerName);
    } else if (chapterNumber === 1000){
        return chapterOneThousand.followingMessage(message, playerName);;
    }
}

export const startingConversation = (chapterNumber: number) => {
    if (chapterNumber === 1) {
        return chapterOne.startingConversation;
    } else if (chapterNumber === 2) {
        return chapterTwo.startingConversation;
    } else if (chapterNumber === 3) {
        return chapterThree.startingConversation;
    } else if (chapterNumber === 4) {
        return chapterFour.startingConversation;
    } else if (chapterNumber === 999) {
        return chapterRdv.startingConversation;
    } else if (chapterNumber === 5) {
        return chapterFinal.startingConversation;
    } else if (chapterNumber === 7) {
        return chapterSeven.startingConversation;
    } else if (chapterNumber === 1000){
        return chapterOneThousand.startingConversation;
    }
    else {
        return chapterOne.startingConversation
    }
}

export const getFutureChapter = (currentChapter: number): number => {
    const choicesData: string[] = JSON.parse(localStorage.getItem('choices')!);
    if(currentChapter === 3){
        if(choicesData.includes('rdv')){
            return 999;
        }
    } else if (currentChapter === 7) {
        if(choicesData.includes('team')){
            return 1000;
        } else return 8;
    } else if (currentChapter === 11) {
        if(choicesData.includes('rdv_sarah')){
            return 1002;
        } else return 1001;
    }else if (currentChapter === 1002) {
        return 1003;
    } else if (currentChapter === 1001 || currentChapter === 1003){
        return 12;
    }
    else if (currentChapter === 999){
        return 4;
    }
    return currentChapter +1
}

export const choicesDescription = async (): Promise<choices[]> => {
    let choicesDesc: choices[] = [];
    const choicesData: string[] = JSON.parse(await localStorage.getItem('choices')!);

    let i = 0;
    choicesData.forEach(choice => {
        if (choice === "anniversaire") {
            if(i == 0){
                choicesDesc.push({
                    desc: "Vous n'avez pas obtenu de rendez-vous avec Lucie",
                    img: require('../assets/choices/no_rdv.png')
                });
            }
            choicesDesc.push({
                desc: "Lucie vous a invité à son anniversaire",
                img: require('../assets/choices/birthday.png')
            });
        }
        if (choice === "rdv") {
            choicesDesc.push({
                desc: "Vous avez obtenu un rendez-vous avec Lucie",
                img: require('../assets/choices/rdv.png')
            });
        }
        if(choice == "avance"){
            choicesDesc.push({
                desc: "Vous êtes arrivé en avance au rendez-vous, Lucie a été embarrassée",
                img: require('../assets/choices/time.png')
            });
        }
        if(choice == "heure"){
            choicesDesc.push({
                desc: "Vous êtes arrivé à l'heure au rendez-vous, cela a plut à Lucie",
                img: require('../assets/choices/time.png')
            });
        }
        if(choice == "retard"){
            choicesDesc.push({
                desc: "Vous êtes arrivé en retard au rendez-vous, cela a décu Lucie",
                img: require('../assets/choices/time.png')
            });
        }
        if (choice === "menteur") {
            choicesDesc.push({
                desc: "Vous avez fait le choix de mentir à Matéo et celui-ci ne vous parle plus",
                img:  require('../assets/choices/menteur.png')
            });
        }
        if (choice === "honnete") {
            choicesDesc.push({
                desc: "Vous avez été honnête avec Matéo et votre relation a été conservée",
                img:  require('../assets/choices/honnete.png')
            });
        }
        if(choice === "no_kiss"){
            choicesDesc.push({
                desc: "Vous n'avez rien tenté avec Lucie mais vous avez passé une bonne soirée",
                img:  require('../assets/choices/no_kiss.png')
            })
        }
        if(choice === "kiss"){
            choicesDesc.push({
                desc: "Vous avez embrassé Lucie",
                img:  require('../assets/choices/kiss.png')
            })
        }
        if(choice === "fight"){
            choicesDesc.push({
                desc: "Vous avez tenu tête à Brice",
                img:  require('../assets/choices/fight.png')
            })
        }
        if(choice === "no_fight"){
            choicesDesc.push({
                desc: "Vous avez préféré ignorer les attaques de Brice",
                img:  require('../assets/choices/fight.png')
            })
        }
        i++;
    });

    return choicesDesc;
}
