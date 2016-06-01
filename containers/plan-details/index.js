import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchPlanDetails, submitResponse, registerListeners } from "../../shared/actions";
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import Avatar from 'material-ui/lib/avatar';
import STYLE from '../../utils/style';
import PrimaryButton from '../../components/primary-button';


class PlanDetails extends Component {

    static fetchData(dispatch, params) {
        console.log("params");
        console.dir(params);
        const { id } = params;
        return fetchPlanDetails(dispatch, id);
    }

    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    componentDidMount() {
        if (!this.props.plan) {
            PlanDetails.fetchData(this.props.dispatch, this.props.params);
        }
        registerListeners(this.props.dispatch, this.props.params.id)
    }

    handleSubmit(e) {

        if (!this.state.comment) return;
        
        if(!this.props.user || !this.props.user.uid) return; 
        
        let payload = {
            type: 1,
            timestamp: new Date(),
            userId: this.props.user.uid,
            data: this.state.comment
        }

        this.setState({ comment: "" });
        submitResponse(this.props.dispatch, payload, this.props.params.id);
    }

    render() {
        const plan = this.props.plan;

        console.log("PLAN::", plan);

        if (this.props.isFetching) {
            return <div>
                <Helmet title="Plan details"/>
                Loading..
            </div>
        }

        return <Card>
            <Helmet title={ plan.place }/>
            <CardMedia mediaStyle={{ height: "30vh" }}
                overlay={<CardTitle title={ plan.place } subtitle={ plan.place } />}>
                <img src={plan.imageUrl} style={{ height: "100%" }} />
            </CardMedia>
            
            <CardText style={Style.inviteesContainer}>
            {
                plan.participants ? Object.keys(plan.participants).map((key) => {
                    return <div style={{display: "inline-block", marginRight: 15}}>
                        <Avatar src={plan.participants[key].imageUrl} style={{verticalAlign: "middle", marginRight: 5}}/>
                        <span>{plan.participants[key].name}</span>
                    </div>
                }) : <div>No one is invited?! That's weird!</div>
            }
            </CardText>
            <div style={Style.commentBoxContainer}>
                <textarea value={this.state.comment} style={Style.commentBox} onChange={(event) => this.setState({ comment: event.target.value }) }></textarea>
                <PrimaryButton onClick={this.handleSubmit.bind(this)} label="Comment"/>
            </div>
            
            <div style={Style.containerMargin}>
                {
                    plan.responses ? Object.keys(plan.responses).map((key) => {
                        let participantKey = plan.responses[key].userId;
                        return <div key={key}>
                        <div style={Style.imageContainer}>
                            <Avatar src={plan.participants[participantKey].imageUrl} style={{marginRight: 5}}/>
                        </div>
                        <div style={Style.commentResponse}>{plan.responses[key].data}</div>
                    </div>
                    }) : <div>No response.</div>
                }
            </div>
        </Card>;
    }
}

function mapStateToProps(state, ownProps) {
    let plan;

    console.dir(state);
    if (!state) return { plan: {}, isFetching: false };

    for (let i = 0; i < state.plans.list.length; i++) {
        if (state.plans.list[i]) {
            if (state.plans.list[i].id == ownProps.params.id) {
                plan = state.plans.list[i];
                break;
            }
        }
    }

    return {
        plan,
        isFetching: state.plans.isFetching,
        user: state.auth.user
    };
}

const Style = {
    commentBox: {
        width: "100%",
        resize: "none"
    },
    commentBoxContainer: {
        margin: "1em",
    },
    inviteesContainer: {
        background: STYLE.colors.secondary1,
        color: STYLE.colors.white
    },
    commentResponse: {
        width: "75%",
        display: "inline-block",
        padding: 10,
        minHeight: 20,
        border: "1px solid #C7C7C7",
        borderRadius: 5 
    },
    imageContainer: {
        width: "9%", 
        maxWidth: 50,
        minWidth: 50,
        verticalAlign: "top", 
        display: "inline-block"
    },
    containerMargin: {
        margin: "0 1em"
    }
}

export default connect(mapStateToProps)(PlanDetails)

