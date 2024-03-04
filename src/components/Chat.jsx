import React, { useEffect, useState } from "react";
import bot from "../assets/Bot.png";
import send_icon from "../assets/sendIcon.png";
import Staricon from '../assets/staricon.png';
import uploadIcon from '../assets/uploadIcon.png';
import responseIcon from '../assets/response-icon.png';
import voice from '../assets/Audio.png';



import prompt1 from "../assets/Graph.svg";
import prompt2 from "../assets/Password.svg";
import prompt4 from "../assets/Star.svg";
import prompt3 from "../assets/Setting 4.svg";
import CableTable from "./CableTable";
import Tab from "./Tab";
import ProductCardList from "./PoductCard";
import Terminal1 from "../assets/image 1.png";
import Terminal2 from "../assets/image 2.png";
import Terminal3 from "../assets/image 3.png";

const Chat = ({ data, submitData, loading, listData }) => {
  const [inputText, setInputText] = useState("");
  const [defaultText, setDefaultText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [isCardDetailsRequested, setIsCardDetailsRequested] = useState(false);
  const [selectedCable, setSelectedCable] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
  const [currentFibreIndex, setCurrentFibreIndex] = useState(null);

  const [currentClickIndex, setCurrentClickIndex] = useState(null);
  const handleCableHover = (cable) => {
    setSelectedCable(cable);
  };

  const handleButtonClick = (buttonNumber) => {
    // Handle the button click logic here
    console.log(`Button ${buttonNumber} clicked`);
    // You can add more logic or communicate with the parent component as needed
  };

  useEffect(() => {
    // Check if the trigger phrase is typed
    if (inputText.toLowerCase().includes("card details")) {
      setIsCardDetailsRequested(true);
    } else {
      setIsCardDetailsRequested(false);
    }
  }, [inputText]);

  const [course, setCourse] = useState([
    {
      courseheading: "Generate code for a  simple to-do list application",
      desc: "The code generator will create the necessary HTML, CSS, and JavaScript files to implement a basic to-do list web application. ",
      follow: true,
      image: prompt1,
    },
    {
      courseheading: "Check Cable supported for the cabinet",
      desc: "The code generator will create the necessary HTML, CSS, and JavaScript files to implement a basic to-do list web application. ",
      follow: true,
      image: prompt2,
    },
    {
      courseheading: "Product search using URL",
      desc: "The code generator will create the necessary HTML, CSS, and JavaScript files to implement a basic to-do list web application. ",
      follow: true,
      image: prompt3,
    },
  ]);
  const [isPrSelected, setIsPrSelected] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState({});
  const cableData = [
    {
      partNumber: "048EU5-T4101D20",
      matCode: 1124845,
      description:
        "48-Fiber ALTOS Gel-Free Double-Jacket, Single-Armored Enhanced Cable",
      history: [
        { year: 2021, amountSold: 2000 },
        { year: 2022, amountSold: 1000 },
        { year: 2023, amountSold: 500 },
        { year: 2024, amountSold: 10 },
      ],
    },
    {
      partNumber: "006EU4-T4101D20",
      matCode: 1124900,
      description:
        "6-Fiber ALTOS Gel-Free All-Dielectric, Non-Armored Enhanced Cable",
      history: [
        { year: 2021, amountSold: 1000 },
        { year: 2022, amountSold: 1500 },
        { year: 2023, amountSold: 2000 },
        { year: 2024, amountSold: 2500 },
      ],
    },
    {
      partNumber: "048ZU4-T4F22D20",
      matCode: 1124903,
      description:
        "ALTOS® Loose Tube, Gel-Free, All-Dielectric Cables with Binderless* FastAccess® Technology  48 F, SMF-28® Ultra fiber, Single-mode (OS2)",
      history: [
        { year: 2021, amountSold: 1500 },
        { year: 2022, amountSold: 2000 },
        { year: 2023, amountSold: 2500 },
        { year: 2024, amountSold: 3000 },
      ],
    },
    {
      partNumber: "024EU4-T4100D20",
      matCode: 1203447,
      description:
        "24-Fiber ALTOS Gel-Free All-Dielectric, Non-Armored Enhanced Cable",
      history: [
        { year: 2021, amountSold: 1800 },
        { year: 2022, amountSold: 2300 },
        { year: 2023, amountSold: 2800 },
        { year: 2024, amountSold: 3300 },
      ],
    },
    {
      partNumber: "024EUC-T4100D20",
      matCode: 1203448,
      description:
        "24-Fiber ALTOS Gel-Free Single-Jacket, Single-Armored Enhanced Cable",
      history: [
        { year: 2021, amountSold: 1200 },
        { year: 2022, amountSold: 1700 },
        { year: 2023, amountSold: 2200 },
        { year: 2024, amountSold: 2700 },
      ],
    },
    {
      partNumber: "048EUC-T4100D20",
      matCode: 1203449,
      description:
        "48-Fiber ALTOS Gel-Free Single-Jacket, Single-Armored Enhanced Cable",
      history: [
        { year: 2021, amountSold: 2200 },
        { year: 2022, amountSold: 2700 },
        { year: 2023, amountSold: 3200 },
        { year: 2024, amountSold: 3700 },
      ],
    },
    {
      partNumber: "072EUC-T4100D20",
      matCode: 1203451,
      description:
        "72-Fiber ALTOS Gel-Free Single-Jacket, Single-Armored Enhanced Cable",
      history: [
        { year: 2021, amountSold: 2800 },
        { year: 2022, amountSold: 3300 },
        { year: 2023, amountSold: 3800 },
        { year: 2024, amountSold: 4300 },
      ],
    },
    {
      partNumber: "096EUC-T4100D20",
      matCode: 1203452,
      description:
        "96-Fiber ALTOS Gel-Free Single-Jacket, Single-Armored Enhanced Cable",
      history: [
        { year: 2021, amountSold: 3200 },
        { year: 2022, amountSold: 3700 },
        { year: 2023, amountSold: 4200 },
        { year: 2024, amountSold: 4700 },
      ],
    },
    {
      partNumber: "144EUC-T4100D20",
      matCode: 1203453,
      description:
        "144-Fiber ALTOS Gel-Free Single-Jacket, Single-Armored Enhanced Cable",
      history: [
        { year: 2021, amountSold: 3600 },
        { year: 2022, amountSold: 4100 },
        { year: 2023, amountSold: 4600 },
        { year: 2024, amountSold: 5100 },
      ],
    },
    {
      partNumber: "144EU4-T4701D20",
      matCode: 1284141,
      description:
        "144-Fiber ALTOS Gel-Free All-Dielectric, Non-Armored Enhanced Cable with FastAccess Technology",
      history: [
        { year: 2021, amountSold: 4000 },
        { year: 2022, amountSold: 4500 },
        { year: 2023, amountSold: 5000 },
        { year: 2024, amountSold: 5500 },
      ],
    },
    {
      partNumber: "048EU4-T4701D20",
      matCode: 1284142,
      description:
        "48-Fiber ALTOS Gel-Free All-Dielectric, Non-Armored Enhanced Cable with FastAccess Technology",
      history: [
        { year: 2021, amountSold: 4100 },
        { year: 2022, amountSold: 4600 },
        { year: 2023, amountSold: 5100 },
        { year: 2024, amountSold: 5600 },
      ],
    },
    {
      partNumber: "024EU4-T4701D20",
      matCode: 1284143,
      description:
        "24-Fiber ALTOS Gel-Free All-Dielectric, Non-Armored Enhanced Cable with FastAccess Technology",
      history: [
        { year: 2021, amountSold: 4200 },
        { year: 2022, amountSold: 4700 },
        { year: 2023, amountSold: 5200 },
        { year: 2024, amountSold: 5700 },
      ],
    },
  ];
  const productData = {
    Corning: {
      id: 1,
      data: [
        {
          Product: "OptiSheath® MultiPort Terminal",
          Specs:
            "OptiTip® Multifiber Jumper, Toneable, Single-Tube Cable, 4 port Single-mode (OS2), 50 ft.",
          PartNumber: "345678987654",
          image: Terminal1,
        },
        {
          Product: "OptiConnect® MultiPort Terminal",
          Specs:
            "OptiTip® Multifiber Jumper, Bend Insensitive, 8 port Multi-mode (OM4), 75 ft.",
          PartNumber: "123456789012",
          image: Terminal2,
        },
      ],
    },
    Comscope: {
      id: 2,
      data: [
        {
          Product: "NOVUX™ Hardened Multi-fiber Terminal",
          Specs:
            "OptiTip® Multifiber Jumper, Toneable, Single-Tube Cable, 4 port Single-mode (OS2), 50 ft.",
          PartNumber: "345678987654",
          image: Terminal2,
        },
        {
          Product: "FiberXpress™ Multi-fiber Terminal",
          Specs:
            "OptiTip® Multifiber Jumper, Armored, 6 port Single-mode (OS2), 60 ft.",
          PartNumber: "789012345678",
          image: Terminal3,
        },
      ],
    },
    Panduit: {
      id: 3,
      data: [
        {
          Product: "Fiber Distribution Hub",
          Specs:
            "OptiLink® Multifiber Jumper, Bend Insensitive, 12 port Single-mode (OS2), 80 ft.",
          PartNumber: "987654321098",
          image: Terminal3,
        },
        {
          Product: "OptiCore™ Hardened Fiber Enclosure",
          Specs:
            "OptiTip® Multifiber Jumper, Toneable, Single-Tube Cable, 8 port Multi-mode (OM3), 70 ft.",
          PartNumber: "567890123456",
          image: Terminal2,
        },
      ],
    },
  };

  return (
    <div className="chatdata_container">
      <div className="home_heading-content">
        <div className="heading-content-1">
          <img src={Staricon}></img>
        </div>
        <div className="heading-content-2">
          <h3>CODE GENERATOR</h3>
          <p>
            Learn Selenium automationtesting and framework building in this
            hands-on workshop
          </p>
        </div>
      </div>
      {!isTyping && (
        <div className="Dropdown-group">
          <div className="Dropdown-1">
            <select>
              <option>Generate code</option>
              <option>select 2</option>
              <option>select 3</option>
            </select>
          </div>

          <div className="Dropdown-1">
            <select>
              <option>Professional</option>
              <option>select 2</option>
              <option>select 3</option>
            </select>
          </div>

          <div className="Dropdown-1">
            <select>
              <option>English</option>
              <option>select 2</option>
              <option>select 3</option>
            </select>
          </div>
        </div>
      )}

      <div className="conversation">
        {!isTyping && (
          <div className="home_course_container">
            {course.map((cr) => {
              return (
                <div className="cardd_container">
                  <div
                    className="cardd_body"
                    onClick={() => {
                      setIsPrSelected(true);
                      setSelectedPrompt(cr);
                      if (cr.follow) {
                        setDefaultText(cr.courseheading);
                        setInputText("");
                      } else {
                        setDefaultText("");
                        setInputText(cr.courseheading);
                      }
                    }}
                  >
                    <div className="cardd_body_head">
                      <div className="course-icom">
                        <img src={Staricon}></img>
                      </div>
                      <div className="course-heading">{cr.courseheading}</div>
                    </div>
                    <div className="cardd_body_desc">{cr.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {listData.length > 0 && (
          <div className="list_conversation">
            {console.log("coming", listData)}
            {listData.map((item, index) => {
              return (
                <>
                  {item.type === "user" ? (
                    <div key={index} className={`chat-${item.type}`}>

                      <div className="chaticon-user">


                        <div className="user-text">{item.text}</div>
                        <div className="user_profile">SJ</div>

                      </div>
                    </div>
                  ) : (
                    <>
                      {item.messageType === "customMessage" ? (
                        <div>
                          <div style={{ display: "flex" }}>
                            <div>
                              <img src={responseIcon}></img>
                            </div>
                            <div>
                              <div>
                                <div className="bot_text">
                                  <div
                                    key={index}
                                    className={`chat-${item.type}`}
                                  >
                                    <div>
                                      
                                      <div className="card-suggestion">
                                        According to the inventory data. This
                                        cabinet supports 48 Fibre Double jacked
                                        but I see that it was last used in year
                                        2021. As an alternative Please checkout
                                        48 Fibre SMF-28 (usually ships in 25
                                        days). You can compare the products
                                        below
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="static-buttons">
                                  <button
                                    onClick={() => {
                                      handleCableHover(cableData[0]);
                                      setCurrentFibreIndex(index);
                                    }}
                                    className={
                                      currentFibreIndex == index &&
                                      cableData[0].partNumber ===
                                        selectedCable.partNumber
                                        ? "button-1Active"
                                        : "buttons-1"
                                    }
                                  >
                                    48 Fibre Double jacked
                                  </button>
                                  <button
                                    className={
                                      currentFibreIndex == index &&
                                      cableData[2].partNumber ===
                                        selectedCable.partNumber
                                        ? "button-1Active"
                                        : "buttons-1"
                                    }
                                    onClick={() => {
                                      handleCableHover(cableData[2]);
                                      setCurrentFibreIndex(index);
                                    }}
                                  >
                                    48 Fibre SMF-28
                                  </button>

                                  {/*  <button
                                    onMouseEnter={() => {
                                      handleCableHover(cableData[2]);
                                      setCurrentHoverIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                      handleCableHover(null);
                                      setCurrentHoverIndex(null);
                                    }}
                                    className="buttons-1"
                                  >
                                    28 Fiber
                                  </button>*/}
                                </div>
                              </div>
                              {selectedCable && currentFibreIndex === index && (
                                <CableTable cable={selectedCable} />
                              )}
                            </div>
                          </div>
                        </div>
                      ) : item.messageType === "customMessage0" ? (
                        <div>
                          <div>
                            <div style={{ display: "flex" }}>
                              <div>
                                <img src={bot}></img>
                              </div>
                              <div>
                                <div className="bot_text">
                                  <div
                                    key={index}
                                    className={`chat-${item.type}`}
                                  >
                                    <div>
                                      <div className="card-suggestion">
                                        The part number for the MAT code 1269981
                                        is SAAP431U41A31U4S00.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {selectedDevice && currentClickIndex === index && (
                              <ProductCardList device={selectedDevice.data} />
                            )}
                          </div>
                        </div>
                      ) : item.messageType === "customMessage1" ? (
                        <div>
                          <div>
                            <div style={{ display: "flex" }}>
                              <div>
                                <img src={bot}></img>
                              </div>
                              <div>
                                <div className="bot_text">
                                  <div
                                    key={index}
                                    className={`chat-${item.type}`}
                                  >
                                    <div>
                                      <div className="card-suggestion">
                                        There are multiple vendors who produce
                                        multiport terminals. Which vendors do
                                        you prefer?
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="static-buttons">
                                  <button
                                    onClick={() => {
                                      setSelectedDevice(productData.Corning);
                                      setCurrentClickIndex(index);
                                    }}
                                    className={
                                      currentClickIndex == index &&
                                      productData.Corning.id ==
                                        selectedDevice.id
                                        ? "button-1Active"
                                        : "buttons-1"
                                    }
                                  >
                                    Corning
                                  </button>
                                  <button
                                    onClick={() => {
                                      setSelectedDevice(productData.Comscope);
                                      setCurrentClickIndex(index);
                                    }}
                                    className={
                                      currentClickIndex == index &&
                                      productData.Comscope.id ==
                                        selectedDevice.id
                                        ? "button-1Active"
                                        : "buttons-1"
                                    }
                                  >
                                    Comscope
                                  </button>
                                  <button
                                    onClick={() => {
                                      setSelectedDevice(productData.Panduit);
                                      setCurrentClickIndex(index);
                                    }}
                                    className={
                                      currentClickIndex == index &&
                                      productData.Panduit.id ==
                                        selectedDevice.id
                                        ? "button-1Active"
                                        : "buttons-1"
                                    }
                                  >
                                    Panduit
                                  </button>
                                </div>
                              </div>
                            </div>
                            {selectedDevice && currentClickIndex === index && (
                              <ProductCardList device={selectedDevice.data} />
                            )}
                          </div>
                        </div>
                      ) : item.messageType === "customMessage2" ? (
                        <>
                          <div className="bot_text">
                            <div key={index} className={`chat-${item.type}`}>
                              <div>
                                <div className="card-suggestion">
                                  Click on each product to reveal
                                  specifications.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vendors-container">
                            <a
                              href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"
                              className="vendor-1"
                            >
                              Corning
                            </a>
                            <div className="vendor-1">Comscope</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bot_text">
                          <div>
                                  <img className="response-icon" src={responseIcon}></img>
                                </div>
                            <div key={index} className={`chat-${item.type}`}>
                              <div>
                              
                                <div className="card-suggestion">
                                  {item.text}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              );
            })}
            {loading && (
              <div className="bot_text">
                {/* <img src={bot} alt="" /> */}
                <div id="wave" className="chat-bot">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="textarea_container">
        <div className="input">
         
          {defaultText && <p className="default_question">{defaultText} </p>}
          <input
            type="text"
            placeholder={defaultText ? "" : "Ask me anything..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setIsTyping(true);
                submitData(
                  defaultText ? `${defaultText} ${inputText}` : inputText
                );
                setDefaultText("");
                setInputText("");
              }
            }}
          />
        </div>
        <div className="upload-img">
          <img className="upload-icon" src={uploadIcon}></img>
        </div>
        <div className="send_button">
          <img
            className="send-icon"
            src={send_icon}
            onClick={() => {
              setIsTyping(true);
              submitData(
                defaultText ? `${defaultText} ${inputText}` : inputText
              );

              setDefaultText("");
              setInputText("");
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
