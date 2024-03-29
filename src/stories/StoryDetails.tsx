import { faHome, faBookmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody, MDBCardText } from "mdbreact";
import { useState } from "react";
import { Link } from "react-router-dom";
import BottomLinks from "../common/BottomLinks";
import FlipContent from "./FlipContent";

const StoryDetails = (props: any) => {
    let storyId = 0;
    if (props.match.params.id) {
        storyId = parseInt(props.match.params.id);
    }

    const contentData = [
        { id: 1, title: "Sample story title 1", body: "Sample details 1", tagId: 1, storyCategoryId: 1 },
        { id: 2, title: "Sample story title 2", body: "Sample details 2", tagId: 1, storyCategoryId: 1 },
        { id: 3, title: "Sample story title 3", body: "Sample details 3", tagId: 1, storyCategoryId: 1 },
    ];

    const dialogsData = [
        { id: 1, storyId: 1, content: "Programmer can build their career in Upwork.", contentBangla: "প্রোগ্রামার আপওয়ার্ক এ তাদের ক্যারিয়ার গড়তে পারে।" },
        { id: 2, storyId: 1, content: "Know the application process in Upwork.", contentBangla: "আপওয়ার্ক এ আবেদন প্রক্রিয়া জানুন।" },
        { id: 3, storyId: 1, content: "Step 1 - Create your Upwork profile.", contentBangla: "ধাপ 1 - আপনার আপওয়ার্ক প্রোফাইল তৈরি করুন।" },
        // { id: 4, storyId: 1, content: "dialog 4 dialog 4", contentBangla: "" },
        // { id: 5, storyId: 1, content: "dialog 5", contentBangla: "" },
        // { id: 6, storyId: 1, content: "dialog 6", contentBangla: "" }
    ];

    const dialogsDataByStoryId = dialogsData.filter((item: any) => {
        return item.storyId === storyId;
    });

    const showNoOfDialog = 2;
    let startingIdx = 0;

    let count = 0;
    const visibleDialogData = dialogsData.filter((item, index) => {
        count++;
        return index >= startingIdx && count <= showNoOfDialog;
    });
    startingIdx = startingIdx + showNoOfDialog;

    const [visibleDialogs, setVisibleDialogs] = useState<any[]>(visibleDialogData);
    const [startingIndex, setStartingIndex] = useState(startingIdx);

    const storyData = contentData.find(item => item.id === storyId);

    const getDialogData = (evt: any, isPreviousData: boolean = false) => {
        // console.log(startingIndex, isPreviousData);
        let count = 0;
        let startingIdx = startingIndex;
        if (isPreviousData) {
            startingIdx = startingIndex - (showNoOfDialog * 2);
            setStartingIndex(startingIdx);
        }

        const visibleDialogData = dialogsData.filter((item, index) => {
            if (index >= startingIdx) {
                count++;
            }
            return index >= startingIdx && count <= showNoOfDialog;
        });

        // console.log(visibleDialogData);
        setVisibleDialogs(visibleDialogData);
        const newStartingIndex = startingIdx + showNoOfDialog;
        setStartingIndex(newStartingIndex);
    }

    return (
        <div className="container" style={{ padding: 0 }}>
            {/*         
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">{storyData?.title}</MDBCardHeader>
                    <MDBCardBody>
                        <div className="container">
                            {visibleDialogs.length > 0 && visibleDialogs.map((item, index) => {
                                return (<div key={item.id}>
                                    <div className={"row " + (index % 2 !== 0 ? "justify-content-end" : '')}>
                                        <div className={"col-8 " + (index % 2 !== 0 ? "dialogRight dialogCotainer" : 'dialogCotainerReply')}>
                                            {item.content}
                                            <br />
                                            {item.contentBangla}
                                        </div>
                                    </div>
                                    <div className={"row " + (index % 2 !== 0 ? "justify-content-end" : '')}>
                                        <div className={"col-8 " + (index % 2 !== 0 ? "dialogRight" : '')}>
                                            <img src={"/images/img" + (index % 2 !== 0 ? "1" : "2") + ".png"} alt="" height="100%" />
                                        </div>
                                    </div>
                                </div>);
                            })}
                            <div className="row">
                                <div className="col-12" style={{ textAlign: "center", marginTop: "10px" }}>
                                    {startingIndex > showNoOfDialog &&
                                        <button type="button" className="btn btn-primary"
                                            onClick={(e) => getDialogData(e, true)}
                                            style={{ paddingLeft: "30px", paddingRight: "30px", marginRight: "20px" }}>Back</button>
                                    }
                                    {dialogsData.length >= (startingIndex + showNoOfDialog) ?
                                        <button type="button" className="btn btn-primary"
                                            onClick={getDialogData}
                                            style={{ paddingLeft: "30px", paddingRight: "30px" }}>Next</button> :
                                        <>
                                            <Link to={"/vocabulary/" + storyId}>
                                                <button type="button" className="btn btn-primary"
                                                    style={{ paddingLeft: "30px", paddingRight: "30px", marginRight: "20px" }}>Learn Vocabulary</button>
                                            </Link>
                                            <Link to={"/storyQuestions/" + storyId}>
                                                <button type="button" className="btn btn-primary"
                                                    style={{ paddingLeft: "30px", paddingRight: "30px" }}>Start Exam</button>
                                            </Link>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
         */}

            {dialogsDataByStoryId.length > 0 && <FlipContent storyId={storyId}
                title={storyData?.title}
                content={dialogsData} />}
        </div>
    );
}

export default StoryDetails;