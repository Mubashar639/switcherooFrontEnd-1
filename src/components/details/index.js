import React, { Component } from "react";

import "./index.css";
import MoverUser1 from "./personalDetailsMover2.3a/personalDetailsMover2.3a";
import SwitcherUser1 from "./personalDetailsSwitch2.2a/personalDetailsSwitch2.2a";
import FTBUser1 from "./personalDetails2.1a/personalDetails2.1a";
import MoverUser2 from "./personalDetailsMover2.3b/personalDetailsMover2.3b";
import PersonalDetails21a from "./personalDetails2.1a/personalDetails2.1a";
import PersonalDetails21b from "./personalDetails2.1b/personalDetails2.1b";

import PersonalDetails22a from "./personalDetailsSwitch2.2a/personalDetailsSwitch2.2a";
import PersonalDetails22b from "./personalDetailsSwitch2.2b/personalDetailsSwitch2.2b";

import PersonalDetails23a from "./personalDetailsMover2.3a/personalDetailsMover2.3a";
import PersonalDetails23b from "./personalDetailsMover2.3b/personalDetailsMover2.3b";

import PersonalDetails1 from "./personalDetails1/personalDetails";

import SwitcherUser2 from "./personalDetailsSwitch2.2b/personalDetailsSwitch2.2b";
import FTBUser2 from "./personalDetails2.1b/personalDetails2.1b";

import EmployementDetails from "./EmploymentDetailsPAYE/EmploymentDetailsPAYE";
import MonthlyOutgoings from "./monthlyOutgoings/MonthlyOutgoings";
import SavingAccount from "./SavingAccounts/SavingAccountsIndex";
import Declaration from "./Declaration/Declaration";
import CreditCommentments from "./creditCommittments//CreditCommittments";

import MortgageFrom1 from "./step1//step1";
import MortgageFrom2 from "./step2//step2";
import MortgageFrom3 from "./step3//step3";
import MortgageFrom4 from "./3.2 Mortgage Details Mover2b/detailMover";
import IncomeDetailsSE from "./incomDetailsSE/incomDetailsSE";
import IncomeDetailsPYE from "./incomDetailsPAYE/incomDetailsPAYE";

import { connect } from "react-redux";
import Api from "../../redux/api/detailsApi";

import MonthlyOutgoing from "./monthlyOutgoings/MonthlyOutgoings";
import CreditCommittments from "./creditCommittments/CreditCommittments";
import BankDetails from "./bankDetails/BankDetails";
import TopSteper from "./topnavigation/topSteper";
import UserNav from "./userNavigation/topNavigation";

export class index extends Component {
  state = {
    selectedKeyUser1: 0,
    selectedKeyUser2: 1,
    progressUser1: 0,
    progressUser2: 0,
    incomeDetails: "Self Employed",
    defalutClient: "user1",
    secPageUser1: false,
    secPageUser2: false,
    purposeOfMortgage: "",
    MortgageFrom: "First Time Buyer",
    isMortgageFrom: false,
    user1Data: {},
    user2Data: {}
  };

  onSubmitData = () => {
    console.log("submited", this.state.user1Data);
    this.props.set_Personal_Details({
      userId: this.props.user._id,
      applicant2: {
        ...this.state.user1Data
      }
      // applicant2: {
      //   ...this.state.user2Data
      // }
    });
  };

  // changeProfRoute = key => this.setState({ selectedKey: key });

  profRouteRenderer = () => {
    console.log("getUser", this.props.user);
    const {
      selectedKeyUser1,
      selectedKeyUser2,
      defalutClient,
      MortgageFrom,
      incomeDetails,
      isMortgageFrom
    } = this.state;
    if (selectedKeyUser1 === 0 && isMortgageFrom == false) {
      return (
        <MortgageFrom1
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          MortgageFrom={value => this.setState({ MortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "First time Borrower" &&
      isMortgageFrom == true
    ) {
      return (
        <MortgageFrom2
        isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "Mortgage Switcher" &&
      isMortgageFrom == true
    ) {
      return (
        <MortgageFrom3
        isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "House Mover" &&
      isMortgageFrom == true
    ) {
      return (
        <MortgageFrom4
        isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser1 === 1 && defalutClient == "user1") {
      if (
        this.state.secPageUser1 == false &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            present={true}
            user={this.props.user}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser1: arg,
                user1Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser1 == true &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        return (
          <PersonalDetails21a
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            onSubmitData={this.onSubmitData}
            secPageMethod={arg => this.setState({ secPageUser1: arg })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            getData={data =>
              this.setState({
                user1Data: { ...this.state.user1Data, ...data }
              })
            }
          />
        );
      }

      //End First Time Buyer

      //  Start House Mover
      if (
        this.state.secPageUser1 == false &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "House Mover"
      ) {
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            user={this.props.user}
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser1: arg,
                user1Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser1 == true &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "House Mover"
      ) {
        return (
          <PersonalDetails23a
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            onSubmitData={this.onSubmitData}
            secPageMethod={arg => this.setState({ secPageUser1: arg })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            getData={data =>
              this.setState({
                user1Data: { ...this.state.user1Data, ...data }
              })
            }
          />
        );
      }

      //End House Mover

      //  Start "Switcher"
      if (
        this.state.secPageUser1 == false &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "Switcher"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            data={this.state.user1Data}
            user={this.props.user}
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser1: arg,
                user1Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser1 == true &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "Switcher"
      ) {
        return (
          <PersonalDetails22a
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            onSubmitData={this.onSubmitData}
            secPageMethod={arg => this.setState({ secPageUser1: arg })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            getData={data =>
              this.setState({
                user1Data: { ...this.state.user1Data, ...data }
              })
            }
          />
        );
      }

      //End "Switcher"
      if (
        selectedKeyUser1 === 2
        // this.props.purposeOfMortgage === "Switcher" &&
        // defalutClient === "user1"
      ) {
        return <h1>This is 2nd Step</h1>;
      }
      // }
    }
    if (selectedKeyUser2 === 1 && defalutClient == "user2") {
      if (
        this.state.secPageUser2 == false &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            present={true}
            user2={this.props.financial_Health_Check}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser2: arg,
                user2Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser2 == true &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        return (
          <PersonalDetails21b
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            onSubmitData={this.onSubmitData}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={arg => this.setState({ secPageUser2: arg })}
            getData={data =>
              this.setState({
                user2Data: { ...this.state.user2Data, ...data }
              })
            }
          />
        );
      }

      //End First Time Buyer

      //  Start House Mover
      if (
        this.state.secPageUser2 == false &&
        this.props.purposeOfMortgage == "House Mover"
      ) {
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            user2={this.props.financial_Health_Check}
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser2: arg,
                user2Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser2 == true &&
        this.props.purposeOfMortgage == "House Mover"
      ) {
        return (
          <PersonalDetails23b
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            onSubmitData={this.onSubmitData}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={arg => this.setState({ secPageUser2: arg })}
            getData={data =>
              this.setState({
                user2Data: { ...this.state.user2Data, ...data }
              })
            }
          />
        );
      }

      //End House Mover

      //  Start "Switcher"
      if (
        this.state.secPageUser2 == false &&
        this.props.purposeOfMortgage == "Switcher"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            data={this.state.user1Data}
            user2={this.props.financial_Health_Check}
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser2: arg,
                user1Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser2 == true &&
        this.props.purposeOfMortgage == "Switcher"
      ) {
        return (
          <PersonalDetails22b
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            onSubmitData={this.onSubmitData}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={arg => this.setState({ secPageUser2: arg })}
            getData={data =>
              this.setState({
                user2Data: { ...this.state.user2Data, ...data }
              })
            }
          />
        );
      }

      //End "Switcher"
      if (
        selectedKeyUser1 === 2
        // this.props.purposeOfMortgage === "Switcher" &&
        // defalutClient === "user1"
      ) {
        return <h1>This is 2nd Step</h1>;
      }
      // }
    }
    if (selectedKeyUser1 === 2 && defalutClient == "user1") {
      return (
        <EmployementDetails
          getIncomeValue={value => this.setState({ incomeDetails: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 2 && defalutClient == "user2") {
      return (
        <EmployementDetails
          getIncomeValue={value => this.setState({ incomeDetails: value })}
          setProgress={arg => this.setState({ progressUser2: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 3 && defalutClient == "user1") {
      return incomeDetails == "Self Employed" ? (
        <IncomeDetailsSE
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      ) : (
        <IncomeDetailsPYE
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 3 && defalutClient == "user2") {
      return incomeDetails == "Self Employed" ? (
        <IncomeDetailsSE
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      ) : (
        <IncomeDetailsPYE
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 4 && defalutClient == "user1") {
      return (
        <MonthlyOutgoings
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 4 && defalutClient == "user2") {
      return (
        <MonthlyOutgoings
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 5 && defalutClient == "user1") {
      return (
        <CreditCommentments
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 5 && defalutClient == "user2") {
      return (
        <CreditCommentments
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 6 && defalutClient == "user1") {
      return (
        <SavingAccount
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 6 && defalutClient == "user2") {
      return (
        <SavingAccount
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 7 && defalutClient == "user1") {
      return (
        <Declaration
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 7 && defalutClient == "user2") {
      return (
        <Declaration
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
  };
  UserChange = e => {
    this.setState({
      defalutClient: e.key
    });
  };

  render() {
    console.log("user1", this.state.user1Data);
    return (
      <div>
        <div>
          <div>
            {this.state.defalutClient == "user1" ? (
              <TopSteper
                defaltSet={this.state.selectedKeyUser1}
                progress={this.state.progressUser1}
                changeProfRout={data =>
                  this.setState({ selectedKeyUser1: data })
                }
                defalutClient={this.state.defalutClient}
              />
            ) : this.state.defalutClient == "user2" ? (
              <TopSteper
                defaltSet={this.state.selectedKeyUser2}
                progress={this.state.progressUser2}
                changeProfRout={data =>
                  this.setState({ selectedKeyUser2: data })
                }
                defalutClient={this.state.defalutClient}
              />
            ) : (
              ""
            )}
            <div className="bottonItems">
              {this.state.selectedKeyUser1 != 0 ? (
                <UserNav
                  defalutClient={this.state.defalutClient}
                  onchangeFunc={this.UserChange}
                />
              ) : null}
              {this.profRouteRenderer()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  userReducer: { user },
  Financial_data: {
    financial_Health_Check: { purposeOfMortgage },
    financial_Health_Check
  }
}) => ({
  purposeOfMortgage,
  financial_Health_Check,
  user
});

const mapDispatchToProps = dispacth => ({
  set_Personal_Details: props => dispacth(Api.personalDetailsDataPost(props))
  //  onSaveQ4Data : (data) => dispacth(Actions.saveQ4Data(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
