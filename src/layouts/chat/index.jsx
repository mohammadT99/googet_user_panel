//  =================== style  ================ //

import "./style.scss";
import {
    Add, AddSquare, DocumentUpload, SearchNormal1, Send2, Trash,
} from "iconsax-react";
import Header from "../../components/particials/header";
//  ================= imports =============== //
import React, {useCallback, useEffect, useState} from "react";
import CardChat from "../../components/card-chat";
import Avatar from "../../components/avatar";
import MessageBoxChat from "../../components/chat-box";
import {useDropzone} from "react-dropzone";
import {useDispatch} from "react-redux";
import Api from "../../libs/axios";
import webSocket, {websocket} from "../../store/socket.js";
import {useParams, useSearchParams} from "react-router-dom";

import useChat from "./hooks/chat.js";
import login from "../../pages/auth/login/index.jsx";
//  ================ components ============== //
const Chat = () => {
    // starts
    const [searchParam] = useSearchParams();
    const [selectedImages, setSelectedImages] = useState([]);
    const [input, setinput] = useState("");
    const [ fileUrl , setFileUrl ] = useState('') ;
    const [fileNmae , setFileName ] = useState('') ;
    const [ fileSize , setFileSize ] = useState('') ;
    const [searchinput, setSearchinput] = useState();
    const [uploadTextChat , setUploadTextChat ] = useState([]) ;
    const [conversaction, setConversaction] = useState([]);
    const [messageText, setMessageText] = useState([]);
    const [chatdiv, setChatdiv] = useState([]);
    const dispatch = useDispatch();
    const {sendmessage , websoket } = useChat()
    const conversactionList = async () => {
        try {
            const {data} = await Api.get("/conversations");
            // console.log( 'oooo',data.data.data)
            setConversaction(data.data.data);
            // console.log('conver :' , conversaction);
        } catch (e) {
            console.log(e);
        }
    };
    // dropzone
    const onDrop = useCallback((acceptedFiles,) => {
        acceptedFiles.forEach((file) => {
            setSelectedImages((prevState) => [...prevState, file]);
        });
    }, []);

    const {
        getRootProps, getInputProps, isDragActive,
    } = useDropzone({onDrop});

    // remove image uploader
    let removeImage = (key) => {
        const _images = selectedImages.filter((s, i) => i != key);
        setSelectedImages(_images);
    };

    // scrolto down
    const infiniteScroll = () => {
        console.log(chatdiv.scrollTop);
        if (chatdiv.scrollTop === -200) {
            console.log("ssdsd");
        }
    };

    // handlesubmit
    const handleSubmit = async () => {
        console.log('xsssxssxsxs');
        sendmessage(input)
        websoket.on('conversation/new-message-sent' , (data) => {
            console.log( 'assassaas', data)
            setMessageText([...messageText , data])
        })
        setinput("")

    };

    const serachfrom = () => {
        setSearchinput(document.getElementsByClassName("input-search"));
    };

    const message = async () => {
        try {
            const {data} = await Api.get(`/conversations/${searchParam.get("id")}?page=1`);
            setMessageText(data.data.rows.reverse());
        } catch (e) {
            console.log(e);
        }
    };

    // addmenu
    const  addmenu = () => {
       const conver =  document.getElementsByClassName('.chat__content__meassege ')
           conver.classList.add("chat__content__meassege__open ")
    }

    const handleUpload = async () => {
        console.log('upload' , uploadTextChat ) ;
        try {
            const {data} = await Api.post('conversation-messages/upload' , {
                    caption : uploadTextChat ,
                    files : selectedImages[0] ,
                key : searchParam.get("id")
            } ,
                {
                    headers : {
                        "Content-Type": "multipart/form-data",
                    }
                } );
            console.log(data)
            setMessageText([...messageText , data.data.msg])
            console.log(messageText);


        } catch (e) {
            console.log(e)
        }
    }
    
    //  =================== use Effect ===============  //
    useEffect(() => {
        conversactionList();
        message();
    }, [searchParam.get('id')]);
    useEffect(() => {
        dispatch(websocket());
    } , [])
    return (<>
            <Header/>
            <div className="chat">َََ
                <div className="chat__content">
                    <div className="chat__content__meassege">
                        <div className="chat__content__meassege__header">
                            <h1 className="text-lg font-bold flex-nowrap">پیام ها</h1>
                            <div className="header__menue">
                                <button className="icon add">
                                    <Add/>
                                </button>
                                <form className="form-search">
                                      <span className="icon" onClick={serachfrom}>
                                        <SearchNormal1 size="20"/>
                                      </span>
                                    <input
                                        type="text"
                                        className={`${searchinput ? "input-search d-block" : "input-search"}`}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="chat__content__meassege__filter">
                            <button className="btn">همه پیام ها</button>
                            <button className="btn"> جدید ترین ها</button>
                        </div>
                        {Array.isArray(conversaction) ? conversaction.map((item, key) => {
                            {
                                /* console.log(key); */
                            }
                            return (<div
                                    key={key}
                                    // onClick={activeBox(key)}

                                    className={`${searchParam.get("id") == item.c_key ? "link-card-active" : "link-card"}`}
                                >
                                    <CardChat
                                        type="card_chat"
                                        title={item.shop_name}
                                        message={item.last_message}
                                        id={item.c_key}
                                    />
                                </div>);
                        }) : "هیچ دیتایی یافت نشد...|"}
                    </div>
                    <div className="chat__content__body">
                        <div className="chat__content__body__header">
                            <Avatar type="avatar_chat" size="60px" title="سارا"/>
                            <a className="menue__chat" onClick={addmenu} >
                                <AddSquare />
                            </a>
                        </div>
                        <div
                            className="chat__content__body__chat"
                            id="chat__content__body__chat"
                            onScroll={infiniteScroll}
                        >
                            {messageText.map((item, key) => {
                                {console.log("itemitemitemitem",item)}
                                return (<MessageBoxChat
                                        key={key}
                                        classname={`${item.adviser_answer ? "message__box__clint" : "message__box__user"}`}
                                        messege={item.body}
                                        type={item.type}
                                        file={item.attachments}
                                    />);
                            })}
                        </div>
                        {/* <Input type="chat_input" /> */}
                        <form className="form-chat" onSubmit={handleSubmit}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()}   />
                                {isDragActive ? (<div className="drop__zone__box">
                                        <AddSquare size={50} color="#ccc"/>
                                        فایل خود را اینجا قرار دهید
                                    </div>) : (<DocumentUpload/>)}
                            </div>
                            <input
                                type="text"
                                className="input-chat"
                                onChange={(e) => setinput(e.target.value)}
                                value={input}
                                placeholder="متن پیام"
                            />
                            <button type="button" onClick={handleSubmit}>
                                <Send2/>
                            </button>
                        </form>

                        {selectedImages.length > 0 && (<div className="box">
                                {selectedImages.map((image, index) => {
                                    return (<div className="image">
                                            <img
                                                src={`${URL.createObjectURL(image)}`}
                                                width={80}
                                                key={index}
                                                alt=""
                                            />
                                            <div className="image-box">
                                                <p>{image.path}</p>
                                                <p>{image.size}</p>
                                            </div>
                                            <button
                                                onClick={() => removeImage(index)}
                                                className="btn-submit"
                                            >
                                                {" "}
                                                <Trash/>
                                            </button>
                                        </div>);
                                })}
                                <input type="text" className="outline-0 border-1 bg-amber-50 box__upload__input "
                                       name='caption'
                                       placeholder={'متن خود را وارد کنید'} onChange={(e) =>setUploadTextChat(e.target.value)}/>
                                <button className="btn-submit" onClick={handleUpload}> ارسال</button>
                            </div>)}
                    </div>
                </div>
            </div>
        </>);
};

export default Chat;
