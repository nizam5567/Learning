import React from "react";
import { ReactDOM } from 'react-dom';
import HTMLFlipBook from "react-pageflip";
import "./FlipContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="page page-cover" ref={ref} data-density="hard">
            <div className="page-content">
                <h2>{props.children}</h2>
            </div>
        </div>
    );
});

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                <h2 className="page-header">Page header - {props.number}</h2>
                {/* <div className="page-image"></div> */}
                <div className="page-text">{props.children}</div>
                {/* <div className="page-footer">{props.number + 1}</div> */}
                <div className="page-footer">{props.number}</div>
            </div>
        </div>
    );
});
const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
};
class FlipContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            totalPage: 0,
            windowHeight: 733,
            isSetWindowHeight: false,
        };
    }

    nextButtonClick = () => {
        // this.flipBook.getPageFlip().flipNext();
        if (this.flipBook && this.flipBook.pageFlip()) {
            this.flipBook.pageFlip().flipNext();
        }
    };

    prevButtonClick = () => {
        if (this.flipBook && this.flipBook.pageFlip()) {
            this.flipBook.pageFlip().flipPrev();
            console.log(this.flipBook.pageFlip().getPageCount());
        }
        // this.flipBook.getPageFlip().flipPrev();
    };

    onPage = (e) => {
        this.setState({
            // page: e.data,
            page: e.data + 1,
        });
    };

    componentDidMount() {
        let count = 0;

        setTimeout(() => {
            if (this.flipBook && this.flipBook.pageFlip()) {
                count = this.flipBook.pageFlip().getPageCount();
            }

            this.setState({
                totalPage: count,//this.flipBook.getPageFlip().getPageCount(),
            });
        }, 100);

        //setTimeout(() => {          
            
            const dimension = getWindowDimensions();

            let height = 733;
            if (dimension) {
                if (dimension.width <= 450) {
                    height = 900;
                } else if (dimension.width >= 450 && dimension.width < 767) {
                    height = 733;
                } else if (dimension.width >= 768 && dimension.width < 990) {
                    height = 1000;
                } else if (dimension.width >= 990 && dimension.width < 1150) {
                    height = 700;
                } else {
                    height = 500;
                }
            }

            // console.log("height - ", height);
            this.setState({
                windowHeight: height,
                isSetWindowHeight: true,
            });
            
        //}, 50);
    }



    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12" style={{ textAlign: "center", margin: "20px 0 10px" }}>
                        <h2><strong>{this.props.title}</strong></h2>
                    </div>
                </div>
                <div style={{ position: "relative" }}>
                    <div className="container" style={{ margin: "0 auto", width: "calc(100% - 55px)" }}>
                        {this.state.isSetWindowHeight && <HTMLFlipBook
                            width={550}
                            height={this.state.windowHeight}
                            size="stretch"
                            minWidth={250}
                            maxWidth={1000}
                            minHeight={400}
                            maxHeight={1533}
                            maxShadowOpacity={0.5}
                            showCover={false}
                            mobileScrollSupport={true}
                            onFlip={this.onPage}
                            onChangeOrientation={this.onChangeOrientation}
                            onChangeState={this.onChangeState}
                            className="demo-book"
                            ref={(el) => (this.flipBook = el)}
                        >

                            {/* <PageCover>{this.props.title}</PageCover> */}
                            {/* <Page number={1}>Lorem ipsum...</Page>
                    <Page number={2}>Lorem ipsum...</Page>
                    <Page number={3}>Lorem ipsum...</Page>
                    <Page number={4}>Lorem ipsum...</Page> */}
                            {this.props.content.length > 0 && this.props.content.map((item, index) => {
                                return (
                                    <Page number={index + 1} key={item.id}><div>
                                        <div className={"row "}>
                                            <div className={"col-12 " + (index % 2 !== 0 ? "dialogRight dialogCotainer" : 'dialogCotainerReply')}>
                                                {item.content}
                                                <br />
                                                {item.contentBangla}
                                            </div>
                                        </div>
                                        <div className={"row "}>
                                            <div className={"col-12 " + (index % 2 !== 0 ? "dialogRight" : '')}>
                                                <img src={"/images/img" + (index % 2 !== 0 ? "1" : "2") + ".png"} alt="" height="100%" />
                                            </div>
                                        </div>
                                    </div>
                                        {(index + 1) === this.props.content.length && <Link to={"/storyQuestions/" + this.props.storyId}>
                                            <button type="button" className="btn btn-secondary"
                                                style={{
                                                    paddingLeft: "30px", paddingRight: "30px",
                                                    position: "absolute", bottom: "50px",
                                                    left: "calc(50% - 70px)"
                                                }}>Start Exam</button>
                                        </Link>}
                                    </Page>);
                            })}

                            {/* <PageCover>THE END</PageCover> */}

                        </HTMLFlipBook>
                        }
                    </div>
                    <button type="button" onClick={this.prevButtonClick} className="prevBtn">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button type="button" onClick={this.nextButtonClick} className="nextBtn">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <div className="container" style={{ textAlign: "center", marginTop: "5px" }}>
                    <div>

                        {/* <button type="button" onClick={this.prevButtonClick}>
                            Previous page
                        </button> */}

                        [<span>{this.state.page}</span> of
                        <span> {this.state.totalPage}</span>]

                        {/* <button type="button" onClick={this.nextButtonClick}>
                            Next page
                        </button> */}

                    </div>
                    {/* <div>

                        State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>

                    </div> */}
                </div>
            </div>
        );
    }
}
export default FlipContent;