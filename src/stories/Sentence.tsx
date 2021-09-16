import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const Sentence = (props: any) => {
    let storyId = 0;
    if (props.match.params.storyId) {
        storyId = parseInt(props.match.params.storyId);
    }

    const sentenceList = [
        { id: 1, contentId: 1, sentence: "Sample sentence 1", sentenceBangla: "পড়ুন" },
        { id: 2, contentId: 1, sentence: "Sample sentence 2", sentenceBangla: "শিখুন" },
        { id: 3, contentId: 1, sentence: "Sample sentence 3", sentenceBangla: "লিখুন" },        
    ];

    return (<>
        <MDBContainer>
            <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                <MDBCardHeader color="primary-color deep-orange lighten-1">Learn Sentence</MDBCardHeader>
                <MDBCardBody>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sentence</th>
                                <th scope="col">Sentence in Bengali</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sentenceList && sentenceList.map((item, index) => {
                                return (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.sentence}</td>
                                    <td>{item.sentenceBangla}</td>
                                </tr>);
                            })}


                        </tbody>
                    </table>
                    <div>
                        <Link to={"/storyQuestions/" + storyId}>
                            <button type="button" className="btn btn-primary"
                                style={{ paddingLeft: "30px", paddingRight: "30px" }}>Start Exam</button>
                        </Link>
                    </div>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>

    </>);
}

export default Sentence;