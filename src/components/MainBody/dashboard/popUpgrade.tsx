import React, { memo, useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import Colors from "../../../constants/Colors";
import Texts from "../../../constants/Texts";
import i18n from "i18n-js";
import moment from "moment";
import { TronContract } from "../../../contexts/tronWeb";
import { contract } from "../../../config";

const closeImg = require("../../../assets/images/close.png");
const checkImg = require("../../../assets/images/ic-green-check.png");
interface PopUpgradeProps {
  showPop: boolean;
  setShowPop: any;
  selectPlan: number;
  setSelectPlan: any;
  offices: Array<Office>;
}
interface Office {
  level: number;
  time: number;
  user: number;
}
export default ({
  showPop,
  setShowPop,
  selectPlan,
  setSelectPlan,
  offices,
}: PopUpgradeProps) => {
  const [step, setStep] = useState(1);
  const { matrixMarketing, ref, usdt, address } = useContext(TronContract);
  const pricePackage = [0, 15, 45, 90, 180, 240, 420, 600, 900];
  const getAmountUpgrade = (currentLevel: number, upgradeLevel: number) => {
    let total = 0;
    let detail = [];
    for (let i = currentLevel + 1; i <= upgradeLevel; i++) {
      total += pricePackage[i];
      detail.push({
        level: i,
        price: pricePackage[i],
      });
    }
    //Total là tổng số tiền
    // Detail là danh sách các level nâng cấp
    return {
      total,
      detail,
    };
  };

  //Upgrade funtion
  const upgrade = async (upgradeLevel: number) => {
    let result = await matrixMarketing.upgradePackage(upgradeLevel, ref);
    console.log(result);
  };

  const [approve, setApprove] = useState(false);
  //Checking USDT Approve
  useEffect(() => {
    const checkApprove = async () => {
      let remaining = (
        await usdt.allowance(address, contract.matrixMarketingAddress).call()
      ).remaining;
      if (Number(remaining) > 10 ** 10) {
        setApprove(true);
      }
    };
    checkApprove();
  }, []);

  //Neu approve bang false thi hien thi cap quyen Approve nut dong y se la goi funtion duoi
  const approveUSDT = async () => {
    let result = await usdt
      .approve(contract.matrixMarketingAddress, 10 ** 15)
      .send({
        callValue: 0,
        feeLimit: 1e7,
        shouldPollResponse: true,
      });
    if (result) {
      setApprove(true);
    }
  };

  return (
    <PopUpgradeWrap>
      <div id="pop-upgrade-content">
        <div id="pop-upgrade-content-inner">
          <span id="pop-upgrade-title">{i18n.t("upgradeAccount")}</span>
          <span id="pop-upgrade-quote">{i18n.t("upgradeAccountquote")}</span>
          <div id="pop-upgrade-main">
            <div id="p-u-m-step">
              <PumStep1 selectPlan={selectPlan}>
                <div className="p-u-m-icon">
                  <img src={checkImg} alt="" />
                  <span>{i18n.t("approveUsdt")}</span>
                </div>
              </PumStep1>
              <span id="p-u-m-s-divider"></span>
              <PumStep2 selectPlan={selectPlan}></PumStep2>
            </div>
          </div>
        </div>
        <div id="pop-upgrade-close-button" onClick={() => setShowPop(!showPop)}>
          <img src={closeImg} alt="" />
        </div>
      </div>
    </PopUpgradeWrap>
  );
};

const PopUpgradeWrap = memo(styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.8);
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  #pop-upgrade-content {
    min-width: 60%;
    min-height: 70%;
    background: ${Colors.white};
    border-radius: 15px;
    flex-direction: column;
    padding: 20px 40px;
    align-items: center;
    justify-content: center;
    position: relative;
    #pop-upgrade-content-inner {
      flex: 1;
      flex-direction: column;
      align-items: center;
      #pop-upgrade-title {
        font-size: ${Texts.size.extra};
        line-height: ${Texts.size.extra};
        color: ${Colors.green};
      }
      #pop-upgrade-quote {
        font-size: ${Texts.size.large};
        line-height: ${Texts.size.large};
        color: ${Colors.black};
      }
      #pop-upgrade-main {
        background: ${Colors.white4};
        border-radius: 10px;
        #p-u-m-s-divider {
        }
      }
    }
  }
  #pop-upgrade-close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`);

const PumStep1 = memo(styled.div`
  .p-u-m-icon {
    border-radius: 50%;
    ${(props: any) =>
      props.selectPlan === 1
        ? css`
            background-color: ${Colors.orange};
            span {
              color: ${Colors.orange};
            }
          `
        : css`
            background-color: ${Colors.green} span {
              color: ${Colors.green};
            }
          `}
  }
`);
const PumStep2 = memo(styled.div`
  .p-u-m-icon {
    border-radius: 50%;
    ${(props: any) =>
      props.selectPlan === 2
        ? css`
            background-color: ${Colors.orange};
            span {
              color: ${Colors.orange};
            }
          `
        : css`
            background-color: ${Colors.green} span {
              color: ${Colors.green};
            }
          `}
  }
`);
