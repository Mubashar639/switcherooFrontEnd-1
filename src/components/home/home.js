import React from "react";
import { Row, Col, Collapse } from "antd";
import "./home.css";
import Chat from "../chat/chat";
import LeftBar from "./leftbar/leftbar";
import SearchBar from "./searchbar/searchbar";
import RightBar from "./rightbar/rightbar";
import UserSettings from "../userSettings/userSettings";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Feed from "./feed/feed";
import FinancialHealth from "../financialHealth/getStatetedText/getStartedText";
import GetStarted from "../financialHealth/getStarted/getStarted";
import DetailMover from "../details/detailMover/detailMover";
import AfterIntial from "../financialHealth/afterintial/";
import StepOne from "../details/step1/step1";
import StepTwo from "../details/step2/step2";
import StepThree from "../details/step3/step3";
import StepFour from "../yourApplication/firstForm/step4";
import SwitcherThree from "../details/switcher3/switcher3";
import MonthlyOutgoing from "../details/monthlyOutgoings/MonthlyOutgoings";
import CreditCommittments from "../details/creditCommittments/CreditCommittments";
import BankDetails from "../details/bankDetails/BankDetails";
// import AdditionalProperty from "../details/additionalProperty/AdditionalProperty";
import YourApplication from "../yourApplication/intro/docMain";
import PtsbForm from "../yourApplication/ptsbForm/Main";
import IcsForm from "../yourApplication/icsForm/src/App";
import AdditionalPropertyIndex from "../details/additionalProperty/additionalPropertyIndex";
import FinalPage from "../details/FinalPage/FinalPage";
import PersonalDetails1 from "../personalDetails/personalDetails1/personalDetails1";
import ExpertChat from "../expertChat/expertChat";
import Details from "../details";
import NewForm from "../yourApplication/newForm/newForm";
const { Panel } = Collapse;

function Home(props) {
  return (
    <>
      {
        // !props.UserState.user.isVerified&&
        // <Redirect to="/verifymail" />||

        <div>
          <Row gutter={0}>
            <Col className="gutter-row" lg={5}>
              <div className="gutter-box leftbar-container">
                <LeftBar />
              </div>
            </Col>
            <Col className="gutter-row" lg={19}>
              <div className="gutter-box">
                <Row>
                  <Col lg={24}>
                    <SearchBar />
                  </Col>
                  <Switch>
                    <Route
                      exact
                      path="/home/settings"
                      component={UserSettings}
                    />
                    <Route
                      exact
                      path="/home/relatedInformation"
                      component={AfterIntial}
                    />
                    <Route
                      exact
                      path="/home/financial-health"
                      component={FinancialHealth}
                    />
                    <Route
                      exact
                      path="/home/financial-health/get-started"
                      component={GetStarted}
                    />
                    <Route
                      exact
                      path="/home/details/s5"
                      component={DetailMover}
                    />
                    {/* <Route exact path="/home/details/s1" component={StepOne} /> */}
                    <Route
                      exact
                      path="/home/details/s1"
                      component={CreditCommittments}
                    />
                    <Route exact path="/home/details" component={Details} />

                    <Route exact path="/home/details/s2" component={StepTwo} />
                    <Route
                      exact
                      path="/home/details/s3"
                      component={StepThree}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/form1"
                      component={StepFour}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/ptsbForm"
                      component={PtsbForm}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/icsForm"
                      component={IcsForm}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/newForm"
                      component={NewForm}
                    />
                    <Route
                      exact
                      path="/home/details/s5"
                      component={MonthlyOutgoing}
                    />
                    <Route
                      exact
                      path="/home/details/credit-commitments"
                      component={CreditCommittments}
                    />
                    <Route
                      exact
                      path="/home/details/bank-details"
                      component={BankDetails}
                    />
                    <Route
                      exact
                      path="/home/details/switcher3"
                      component={SwitcherThree}
                    />
                    <Route
                      exact
                      path="/home/details/additional_p/:number"
                      component={AdditionalPropertyIndex}
                    />
                    <Route
                      exact
                      path="/home/details/final_page"
                      component={FinalPage}
                    />
                    <Route
                      exact
                      path="/home/details/personal_d1"
                      component={PersonalDetails1}
                    />
                    <Route
                      exact
                      path="/home/expertChat"
                      component={ExpertChat}
                    />
                    <Route
                      exact
                      path="/home/yourApplication"
                      component={YourApplication}
                    />
                    <Route path="/home" component={Feed} />
                  </Switch>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      }
    </>
  );
}

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(mapStateToProps)(Home);
