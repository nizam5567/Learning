import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import BottomLinks from "../common/BottomLinks";

const Vocabulary = (props: any) => {
    let storyId = 0;
    if (props.match.params.storyId) {
        storyId = parseInt(props.match.params.storyId);
    }

    const vocabularyList = [
        { id: 1, contentId: 1, word: "Read", wordBangla: "পড়ুন" },
        { id: 2, contentId: 1, word: "Learn", wordBangla: "শিখুন" },
        { id: 3, contentId: 1, word: "Write", wordBangla: "লিখুন" },
        { id: 4, contentId: 1, word: "Expert", wordBangla: "বিশেষজ্ঞ" },
        { id: 5, contentId: 1, word: "Structure", wordBangla: "কাঠামো" },
    ];

    return (<>
        <MDBContainer>
            <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                <MDBCardHeader color="primary-color deep-orange lighten-1">Learn Vocabulary</MDBCardHeader>
                <MDBCardBody>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Word</th>
                                <th scope="col">Word in Bengali</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vocabularyList && vocabularyList.map((item, index) => {
                                return (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.word}</td>
                                    <td>{item.wordBangla}</td>
                                </tr>);
                            })}


                        </tbody>
                    </table>

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div style={{ position: "absolute", bottom: "100px", left: 0, textAlign: "center", width: "100%" }}>
                        <Link to={"/sentence/" + storyId}>
                            <button type="button" className="btn btn-secondary"
                                style={{ paddingLeft: "30px", paddingRight: "30px", marginRight: "20px" }}>Learn Sentence</button>
                        </Link>
                        <Link to={"/storyQuestions/" + storyId}>
                            <button type="button" className="btn btn-secondary"
                                style={{ paddingLeft: "30px", paddingRight: "30px" }}>Start Exam</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <BottomLinks />
    </>);
}

export default Vocabulary;