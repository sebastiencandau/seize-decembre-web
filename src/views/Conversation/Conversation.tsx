import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { followingMessage, getFutureChapter, narativeIndicationsForChapter, startingConversation } from '../../utils/chapters.utils';
import { IConversation, IMessage } from '../../interfaces/messages.interface';
import * as AllImages from '../../assets';
import './Conversation.css'

interface props {
  setGameState: Dispatch<SetStateAction<boolean>>,
  chapter: number,
  playerName: string,
  stopChapter(): void
}

const Conversation = ({setGameState, chapter, playerName, stopChapter }: props) => {
  const [conversation, setConversation] = useState<IConversation>(startingConversation(chapter));
  const [followMessage, setFollowMessages] = useState<IMessage[]>();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [choice, setChoice] = useState<string>();
  const [choices, setChoices] = useState<string[]>();
  const [modalChoicesVisible, setModalChoicesVisible] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [playerCanWrite, setPlayerCanWrite] = useState(true);
  const [exitPartie, setExitPartie] = useState(false);

  const fetchfollowingMessage = async () => {
    const messagesF = await followingMessage(chapter, choice!, playerName);
    setFollowMessages(messagesF?.messages);
    setChoices(messagesF?.choices);
  };

  const fetchIndications = async () => {}

  useEffect(() => {
      if (messages.length === 0) {
        setFollowMessages(conversation.messages);
        setChoices(conversation.choices);
      } else {
        fetchfollowingMessage();
      }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      if (messages[messages.length - 1].type !== 'indication') {
        if (messages[messages.length - 1].type !== 'music') {
          if (messages[messages.length - 1].type !== null) {
            localStorage.setItem('chapter', JSON.stringify(getFutureChapter(chapter)));
            setTimeout(() => {
              stopChapter();
            }, 4000);
          }
        }
      }
    }
  }, [messages]);

  useEffect(() => {
    if (choice) {
      const newMessage = { type: null, received: false, msg: choice };
      let newMessages = messages;
      newMessages.push(newMessage);
      setMessages(newMessages);
      fetchfollowingMessage();
    }
  }, [choice]);

  useEffect(() => {
    if (followMessage && followMessage.length > 0) {
      setPlayerCanWrite(false);
      if (followMessage[0].type === null) {
        if (followMessage[0].type !== 'indication') {
          if(followMessage[0].received === true){
            setTimeout(() => {
              setIsWriting(true);
            }, 1000);
          }
        }
      }
      setTimeout(() => {
        let futuresMessages = [...messages];
        futuresMessages.push(followMessage[0]);
        const updatedFutureMessages = followMessage.filter((msg) => msg !== followMessage[0]);
        setIsWriting(false);
        setMessages(futuresMessages);
        setFollowMessages(updatedFutureMessages);
        setPlayerCanWrite(true);
      }, 4000);
    }
  }, [followMessage]);

  const renderMessage = (item: IMessage) => (
    <>
      { 
      (item.type === null || item.type === 'music') && (
        <div style={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: item.received ? 'flex-start' : 'flex-end',
        }}>
          {item.received && item.prenom &&
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={require(`../../assets/${item.prenom}.jpg`)} className="profilePicture" alt="Profile" />
              <span style={{ marginLeft: '8px', color: 'black' }}>{item.prenom}</span>
            </div>
          }
          <div
            style={{
              backgroundColor: item.received ? '#e0e0e0' : '#80cbc4',
              borderRadius: '50px',
              maxWidth: '50%',
              padding: '12px 20px',
              margin: '4px',
            }}
          >
            { item.received && item === messages[messages.length -1] &&
              <audio autoPlay={item.received} src={require('../../assets/musics/receive_message.mp3')} id="audio" />
            }
            {
              item.link && <audio autoPlay={item.received} src={require(`../../assets/musics/${item.link}.mp3`)} id="audio" />
            }
            <span
              style={{
                color: item.received ? 'black' : 'white',
                fontSize: '18px',
                fontStyle: 'normal',
              }}
            >
              {item.msg}
            </span>
          </div>
        </div>
      ) || item.type === 'link' &&
        (
          <div style={{ flexDirection: item.received ? 'row' : 'row-reverse' }}>
            <div
              style={{
                width: '5em',
                backgroundColor: item.received ? '#e0e0e0' : '#80cbc4',
                borderRadius: '50px',
                padding: '12px 20px',
                margin: '4px',
              }}
            >
              <a href={item.msg} onClick={() => { window.open(item.msg, "_blank"); }}>
                <span
                  style={{
                    color: item.received ? 'black' : 'white',
                    fontSize: '15px',
                    fontStyle: 'normal',
                  }}
                >
                  {item.msg}
                </span>
              </a>
            </div>
          </div>
        ) || (
          <div style={{
            flexDirection: 'row',
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: '15px',
            borderBottom: 'solid black 2px',
            marginLeft: '5em',
            marginRight: '5em'
          }}>
            <div style={{ flex: '1', height: '1px' }} />
            <div>
              <span style={{ width: '200px', textAlign: 'center', color: 'black' }}>{item.msg}</span>
            </div>
            <div style={{ flex: '1', height: '1px' }} />
          </div>
        )}
    </>
  );

  return (
    <div className="conversation-container">
    {
      conversation.name && (
        <>
          {
            conversation.music && <audio autoPlay src={require(`../../assets/musics/${conversation.music}.mp3`)} id="audio" />
          }
          <div className="profile-section">
            <span
              style={{ fontSize: '36px', color: 'black', marginRight: '10px', cursor: 'pointer' }}
              onClick={() => setExitPartie(true)}
            >
              &#8249;
            </span>
            <div className="profile-picture">
              <img src={conversation.profilePicture} alt="Profile" />
            </div>
            <span className="profile-name">{conversation.name}</span>
          </div>
          <div className='message-section'>
          <div className="background-container" style={{ backgroundImage: conversation.background ? `url(${conversation.background})` : 'none' }}></div>
          {
            isWriting && (
              <div
              style={{
                backgroundColor: '#e0e0e0',
                borderRadius: '50px',
                maxWidth: '1.5em',
                maxHeight: '1em',
                minHeight: '1em',
                minWidth: '1.5em',
                textAlign: 'center',
                padding: '12px 20px',
                margin: '4px',
              }}
            >
              <audio autoPlay src={require('../../assets/musics/typing.mp3')} id="audio" />
              <span className='is-writing-span'
                style={{
                  color: 'black',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  animation: 'sizeChange 4s',  // Utilisez l'animation définie dans le fichier CSS
                }}
              >
                ...
              </span>
            </div>
            ) 
            }
            {messages.slice().reverse().map((message, index) => (
              <div key={index} className="message-container">
                {renderMessage(message)}
              </div>
            ))}
          </div>
          <div className="input-section">
            <div className="input-container" onClick={() => {
              setModalChoicesVisible(true);
            }}>
              <input disabled={playerCanWrite ? false : true} type="text" placeholder={playerCanWrite ? "Faites un choix..." : ''} />
              <button>Envoyer</button>  
            </div>
          </div>

        </>
      )}

  {exitPartie === true && (
        <div className='modal-choices-container'>
          <div className='modal-choices-section' style={{display: 'block', textAlign: 'center'}}>
            <p>La partie en cours ne sera pas sauvegardée</p>
            <div>
            <button onClick={() => stopChapter()}>Quitter la partie</button>
            </div>
            <button onClick={() => setExitPartie(false)}>Annuler</button>
          </div>
        </div>
      )}

      {modalChoicesVisible === true && (
        <div className='modal-choices-container'>
          <div className='modal-choices-section'>
            {choices!.map((c) => {
              return (<><p onClick={() => {
                setChoice(c)
                setModalChoicesVisible(false);
              }} className='choice'>{c}</p><hr></hr></>)
            })}
          </div>
        </div>
      )}

    </div>
  );
};

export default Conversation;