import React, { useState, useEffect } from "react";
import { Row, Col, Upload, Tabs, Select, Checkbox, Input, Button } from "antd";
import { ReactComponent as RefreshIcon } from "../../public/images/solid undo-right.svg";
import { ReactComponent as RefreshIconLeft } from "../../public/images/solid undo.svg";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
import { CustomPageWrapper, PageContent } from "../shared/CustomPage";
// import { Checkbox } from "@material-ui/core";
import { LoadData, addData, addFile } from "../../API";
import { BsArrowLeft } from "react-icons/bs";
import { PageBack } from "../Profile";
import { CustomButton } from "../shared/SharedComponents";
import { CustomInput } from "../shared/SharedStyle";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";
import DisplayEditer from "./DisplayEditer";
import styled from "styled-components";
import SideBar from "../Sidebar";

// import placeholder from "../assets/placeholder.png";
import { useParams } from "react-router-dom";
import fileDialog from "file-dialog";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageEditor from "@editorjs/image";
import Link from "@editorjs/link";
import Table from "@editorjs/table";
import SimpleImage from "@editorjs/simple-image";
let arEditorEvent;
let editor;
const { Option } = Select;
const { TabPane } = Tabs;
export const TextNote = styled.div`
  color: var(--darkGray);
  font-size: 13px;
`;
export const Space = styled.div`
  width: 17px;
`;
const EditerFooter = styled.div`
  position: absolute;
  background-color: #fafafa;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid var(--lightGray);
  border-radius: 0 0 7px 7px;
  color: var(--darkGray);
`;
const EventContent = styled(Col)`
  width: 65%;
  min-height: 800px;
  height: auto;
  background-color: white;
  border: 1px solid var(--lightGray);
  position: relative;

  border-radius: 0 0 7px 7px;
`;
const WidgetCol = styled(Col)`
  background-color: white;
  padding: 30px;
  height: auto;

  border-radius: 7px;
`;
const GrayText = styled.div`
  color: var(--darkGray);
  font-size: 16px;
`;
const Widget = styled(Col)`
  background-color: white;

  margint-bottom: 10%;
`;
const Layout = styled(Row)`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const LanguageOption = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 5px;

  justify-content: space-between;
  background-color: white;
`;
const LanguageSide = styled.div`
  padding: 10px 0;
  background-color: white;
  font-weight: bold;
`;

export const EventHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top:
  padding-bottom: 30px;
  border-bottom: 1px solid var(--lightGray);
`;
// padding: 10px 20px;
//   border-radius: 7px;
//   margin-bottom: 5%;
const UploadContenter = styled.div`
  background-color: white;

  width: 100%;
`;

const LanguageWidget = styled.div`
  height: 35%;
  background-color: white;
  padding: 10px 20px;
  border-radius: 7px;
`;
export const InputTitle = styled(Input)`
  width: 80%;
  height: 60px;
  font-size: 20px;
  border: none;
  font-weight: 500;
`;
const PageTitle = styled.span`
  font-size: 27px;
  font-weight: bold;
`;
const MainLayout = styled(Col)`
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;

  justify-content: space-between;
`;

const Divider = styled.div`
  height: 40px;
`;
const CenterFlex = styled.div`
  display: flex;
  gap: 6px;
  algin-items: center;
`;
const UploadSide = styled(Col)`
  width: 35%;
  padding-left: 4%;
  padding-top: 1%;
  border-top: 1px solid var(--lightGray);
  padding-right: 3%;
`;
export const HeadText = styled.div`
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
`;
const FlexSpace = styled.div`
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
`;
export default function Index(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [titleAr, setTitleAr] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [platform, setPlatform] = useState("web");
  const [lang, setLang] = useState("en");
  const [thumbnail, setThumbnail] = useState("");
  const [imageName, setimageName] = useState();
  const { id } = useParams();
  const Props = {
    multiple: false,
    name: "image",
    action: "https://station-solo.herokuapp.com/dash/v1/upload",
    headers: { token: localStorage.getItem("station_token") },
  };

  const handleImage = (info, fileList) => {
    if (info.file.status === "done") {
      let data = {
        uid: info.file.uid,
        name: info.file.name,
        url: info.file.response.url,
      };
      setimageName(data);
      setImageUrl(info.file.response.url);
    }
  };
  const [Price, setPrice] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [ArabicEvent, setArabicEvent] = useState(false);
  const [EnglishEvent, setEnglishEvent] = useState(false);
  const publishArtical = () => {
    setIsLoading(true);

    // editor
    //   .save()
    //   .then((description) => {
    //     let englishData = {
    //       id: id,
    //       ticketPrice: Price,
    //       title,
    //       description: JSON.stringify(description),
    //       platform,
    //       publish: true,
    //       image: imageUrl,
    //       lang: "ar",
    //     };
    arEditorEvent
      .save()
      .then((descriptionAr) => {
        let arabicData = {
          id: id,
          ticketPrice: Price,
          title: titleAr,
          description: JSON.stringify(descriptionAr),
          platform,
          publish: true,
          image: imageUrl,
          lang: "en",
        };

        // if (!EnglishEvent) {
        //   Events.push(englishData);
        // }
        // if (!ArabicEvent) {
        //   Events.push(arabicData);
        // }
        console.log(arabicData);
        // addData(
        //   "toevent",
        //  englishData,
        //   (mesg, Data) => {
        //     if (mesg) {
        //       Mesg(mesg);
        //       setLoading(false);
        //     } else {
        //       SuccessMesg("Event Published  Successfully !");
        //       setLoading(false);
        //       props.history.push("/booking");
        //     }
        //   },
        //   (err) => {
        //     setLoading(false);
        //     FailedMesg(err);
        //   }
        // );
      })
      .catch((error) => {
        FailedMesg("Saving failed");
        console.log("Saving failed: ", error);
      });
    // })
    // .catch((error) => {
    //   FailedMesg("Saving failed");
    //   console.log("Saving failed: ", error);
    // });
  };
  const [tab, setTab] = useState("1");

  useEffect(() => {
    editor = new EditorJS({
      holderId: "arEditorEvent",
      tools: {
        headers: Header,
        list: List,
        image: {
          class: ImageEditor,
          config: {
            uploader: {
              uploadByFile(file) {
                console.log(file);
                var formdata = new FormData();
                formdata.append("image", file);
                return fetch(
                  "http://station-solo.herokuapp.com/dash/v1/upload",
                  {
                    method: "POST",
                    body: formdata,
                    headers: {
                      token: localStorage.getItem("station_token"),
                    },
                  }
                )
                  .then((respose) => respose.json())
                  .then((jsonRespone) => {
                    return {
                      success: 1,
                      file: {
                        url: jsonRespone.url,
                      },
                    };
                  })
                  .catch((e) => {
                    console.log(e);
                    setIsLoading(false);
                  });
              },
            },
          },
        },
        table: Table,
        link: Link,
      },
      placeholder: "Start writing or tap here to add images or  videos...",

      data: {},
    });
  }, []);

  const ShowEditor = () => {
    arEditorEvent = new EditorJS({
      holderId: "enEditor",
      tools: {
        headers: Header,
        list: List,
        image: {
          class: ImageEditor,
          config: {
            uploader: {
              uploadByFile(file) {
                console.log(file);
                var formdata = new FormData();
                formdata.append("image", file);
                return fetch(
                  "http://station-solo.herokuapp.com/dash/v1/upload",
                  {
                    method: "POST",
                    body: formdata,
                    headers: {
                      token: localStorage.getItem("station_token"),
                    },
                  }
                )
                  .then((respose) => respose.json())
                  .then((jsonRespone) => {
                    return {
                      success: 1,
                      file: {
                        url: jsonRespone.url,
                      },
                    };
                  })
                  .catch((e) => {
                    console.log(e);
                    // setIsLoading(false);
                  });
              },
            },
          },
        },
        table: Table,
        link: Link,
      },
      placeholder: "Start writing or tap here to add images or videos...",

      data: {},
    });
  };

  return (
    <CustomPageWrapper>
      {/* <GlobalStyle /> */}
      <SideBar />
      <PageContent>
        <div style={{ margin: "50px 20px" }}>
          <Row>
            <MainLayout>
              <div
                style={{
                  height: "120px",
                  margin: "65px 0",
                }}>
                <PageBack onClick={() => props.history.push("/booking")}>
                  <BsArrowLeft />
                  <div>Booking</div>
                </PageBack>

                <PageTitle>
                  {props.type === "edit"
                    ? "Update Event"
                    : "Create Event from Booking"}{" "}
                </PageTitle>
              </div>

              <CenterFlex>
                <span style={{ color: "var(--textGray)", marginRight: "8px" }}>
                  Save as draft
                </span>
                <CustomButton undo>
                  <RefreshIconLeft />
                </CustomButton>
                <CustomButton undo>
                  <RefreshIcon />
                </CustomButton>
                <CustomButton>Preview</CustomButton>
                <Space />

                <CustomButton main onOpen={publishArtical} loading={Loading}>
                  {props.type === "edit" ? "Save" : "Publish Event"}
                </CustomButton>
              </CenterFlex>
            </MainLayout>
          </Row>
          <Row
            style={{
              display: "flex",
            }}>
            <EventContent>
              <div className="card-container">
                <Tabs type="card" onChange={(e) => setTab(e)}>
                  <TabPane tab="Arabic" key="1">
                    <EventHeader>
                      <InputTitle
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ marginLeft: "10px", marginBottom: "10px" }}
                        placeholder="Event Title Goes Here .. "
                      />
                    </EventHeader>
                    <div
                      id="arEditorEvent"
                      style={{
                        width: "100%",
                      }}></div>

                    <EditerFooter>
                      <CenterFlex>
                        <Checkbox
                          onChange={(e) => setArabicEvent(e.target.checked)}
                        />{" "}
                        Disalbe Arabic
                      </CenterFlex>
                      <div>Words count: 0</div>
                    </EditerFooter>
                  </TabPane>
                  <TabPane tab="English" key="2">
                    <EventHeader>
                      {" "}
                      <InputTitle
                        onChange={(e) => setTitleAr(e.target.value)}
                        style={{ marginLeft: "10px", marginBottom: "10px" }}
                        placeholder="Event Title Goes Here .."
                      />
                    </EventHeader>
                    <DisplayEditer ShowEditor={ShowEditor} />

                    <EditerFooter>
                      <CenterFlex>
                        <Checkbox
                          onChange={(e) => setEnglishEvent(e.target.checked)}
                        />
                        Disalbe English
                      </CenterFlex>
                      <div>Words count: 0</div>
                    </EditerFooter>
                  </TabPane>
                </Tabs>
              </div>
            </EventContent>
            <UploadSide>
              <div>
                <HeadText>Header Photo</HeadText>

                <Upload
                  {...Props}
                  onChange={(e) => handleImage(e)}
                  defaultFileList={imageName && [imageName]}>
                  <div className="upload_modal_event">
                    <img
                      src={require("./default2.png")}
                      width="40%"
                      style={{ marginBottom: "10px" }}
                    />
                    <div style={{ paddingBottom: "10px" }}>
                      <span className="LightText">
                        Choose any file form computer or{" "}
                        <span style={{ color: "black" }}>Drag & Drop </span>it
                        here
                      </span>
                    </div>
                    <div className="LightText">
                      <Button style={{ borderColor: "var(--lighterGray)" }}>
                        Choose File
                      </Button>
                    </div>
                  </div>
                </Upload>
              </div>
              <Divider />
              <HeadText>Settings</HeadText>
              <FlexSpace>
                <GrayText> Price</GrayText>
                <div>
                  <CustomInput
                    placeholder="0"
                    onChange={(e) => setPrice(e.target.value)}
                    style={{ width: "8vw" }}
                  />
                </div>
              </FlexSpace>
              <FlexSpace>
                <GrayText> Platforms</GrayText>
                <Select
                  suffixIcon={<DropIcon />}
                  className="stylecss"
                  onChange={(e) => setPlatform(e)}
                  defaultValue="both">
                  <Option key="both" def>
                    Both
                  </Option>
                  <Option key="web">Web</Option>
                  <Option key="app">App</Option>
                </Select>
              </FlexSpace>
            </UploadSide>
          </Row>
        </div>{" "}
      </PageContent>
    </CustomPageWrapper>
  );
}
