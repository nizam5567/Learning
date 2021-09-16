import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody, MDBCardText } from "mdbreact";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        { id: 1, storyId: 1, content: "dialog 1", },
        { id: 2, storyId: 1, content: "dialog 2", },
        { id: 3, storyId: 1, content: "dialog 3 dialog 3", },
        { id: 4, storyId: 1, content: "dialog 4 dialog 4", },
        { id: 5, storyId: 1, content: "dialog 5", },
        { id: 6, storyId: 1, content: "dialog 6", }
    ];

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
        <div className="container">
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">{storyData?.title}</MDBCardHeader>
                    <MDBCardBody>
                        <div className="container">
                            {visibleDialogs.length > 0 && visibleDialogs.map((item, index) => {
                                return (<div key={item.id}>
                                    <div className={"row " + (index % 2 !== 0 ? "justify-content-end" : '')}>
                                        <div className={"col-8 " + (index % 2 !== 0 ? "dialogRight dialogCotainer" : 'dialogCotainerReply')}>{item.content}</div>
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
                                        <Link to={"/vocabulary/" + storyId}>
                                            <button type="button" className="btn btn-primary"
                                                onClick={getDialogData}
                                                style={{ paddingLeft: "30px", paddingRight: "30px" }}>Learn Vocabulary</button>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    );
}

export default StoryDetails;