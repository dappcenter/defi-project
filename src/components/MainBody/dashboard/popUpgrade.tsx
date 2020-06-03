import React, { memo, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import Colors from '../../../constants/Colors';
import Texts from '../../../constants/Texts';
import i18n from 'i18n-js';
import moment from 'moment';
import Select from '../../common/core/Select'
import ClickOutside from '../../../utils/clickOutSide'
const closeImg = require('../../../assets/images/close.png')
const checkImg = require('../../../assets/images/ic-green-check.png')
interface PopUpgradeProps {
    showPop: boolean;
    setShowPop: any;
    selectPlan: number;
    setSelectPlan: any;
}
interface Office {
    level: number;
    time: number;
    user: number;
    slot: number;
    netValue: number;
}
export default ({ showPop, setShowPop, selectPlan, setSelectPlan }: PopUpgradeProps) => {
    const [step, setStep] = useState(1)
    const [currentSelect, setCurrentSelect] = useState({ title: '', value: '' })
    let dataSelect = [] as Array<any>
    for (let i = 1; i <= 8; i++) {
        if (i > selectPlan) { dataSelect.push({ value: i, title: `${i18n.t('level')} ${i}` }) }
    }
    const handleConfirm = () => {
        // setSelectPlan(value)
        setSelectPlan()
    }
    return (
        <PopUpgradeWrap>
            <ClickOutside handleClickOutSide={() => setShowPop(false)} style={{ minWidth: '60%', minHeight: '70%' }}>
                <div id="pop-upgrade-content">
                    <div id="pop-upgrade-content-inner">
                        <span id="pop-upgrade-title">{i18n.t('upgradeAccount')}</span>
                        <span id="pop-upgrade-quote">{i18n.t('upgradeAccountquote')}</span>
                        <div id="pop-upgrade-main">
                            <div id="pum-inner">
                                <div id="p-u-m-step">
                                    <PumStep1 step={step}>
                                        <div className="p-u-m-icon">
                                            <img src={checkImg} alt="" />
                                        </div>
                                        <span className="pum-title">{i18n.t('approveUsdt')}</span>
                                    </PumStep1>
                                    <PumDivider step={step}></PumDivider>
                                    <PumStep2 step={step}>
                                        <div className="p-u-m-icon">
                                            {selectPlan === 2 ?
                                                <img src={checkImg} alt="" />
                                                :
                                                <span className="pum-">2</span>
                                            }
                                        </div>
                                        <span className="pum-title">{i18n.t('approveUsdt')}</span>
                                    </PumStep2>
                                </div>
                                <div id="pum_current_lv">
                                    <div id="pumclv_inner">
                                        <div id="pumclvi_lv">
                                            <span>{i18n.t('currentLevel')}:</span>
                                            <span>{selectPlan}</span>
                                        </div>
                                        <div id="pumclvilv_upgrade">
                                            <span id="pumclvilvu_title">{i18n.t('levelUpgrade')}:</span>
                                            <div id="pumcl_select">
                                                <Select
                                                    listSelect={dataSelect}
                                                    action={setCurrentSelect}
                                                    defaultSelect={i18n.t('selectUpdate')}
                                                    currentSelect={currentSelect}
                                                />
                                            </div>
                                        </div>
                                        <div id="pumclvi_purchase">
                                            <div id="pumclvip_amount">
                                                <span>{i18n.t('purchaseAmount')}</span>
                                                <span>45 USDT</span>
                                            </div>
                                            <div id="pumclvip_cal1">
                                                <span>{i18n.t('level')} {selectPlan}</span>
                                                <span>15 USDT</span>
                                            </div>
                                            {currentSelect.title !== '' ?
                                                <div id="pumclvip_cal2">
                                                    <span>{i18n.t('level')} {currentSelect.value}</span>
                                                    <span>45 USDT</span>
                                                </div>
                                                :
                                                null
                                            }
                                        </div>
                                        <div id="pumclvi_button">
                                            <div id="pumclvib_inner">
                                                <button onClick={() => handleConfirm}
                                                    disabled={!(currentSelect.title !== '')}>
                                                    {i18n.t('confirm')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="pop-upgrade-close-button" onClick={() => setShowPop(!showPop)}>
                        <img src={closeImg} alt="" />
                    </div>
                </div>
            </ClickOutside>
        </PopUpgradeWrap>
    )
}

const PopUpgradeWrap = memo(styled.div`
    position:fixed;
    z-index:2;
    top:0;
    left:0;
    background-color:rgba(34,34,34,.8);
    align-items:center;
    justify-content:center;
    width:100vw;
    height:100vh;
    #pop-upgrade-content{
        flex:1;
        background:${Colors.white};
        border-radius:15px;
        flex-direction:column;
        padding:40px 50px;
        align-items:center;
        justify-content:center;
        position:relative;
        #pop-upgrade-content-inner{
            flex:1;
            flex-direction:column;
            align-items:center;
            width:100%;
            #pop-upgrade-title{
                font-size:${Texts.size.extra};
                line-height: ${Texts.size.extra};
                color: ${Colors.green};
            }
            #pop-upgrade-quote{
                font-size:${Texts.size.large};
                line-height: ${Texts.size.large};
                color: ${Colors.black};
            }
            #pop-upgrade-main{
                background:${Colors.white4};
                border-radius:10px;
                margin-top:30px;
                width:95%;
                flex:1;
                flex-direction:column;
                align-items:center;
                #pum-inner{
                    padding: 20px;
                    flex: 1;
                    flex-direction: column;
                    align-items:center;
                    justify-content:space-between;
                    width: calc(100% - 40px);
                    #p-u-m-step{
                        align-items:center;
                        margin-bottom:30px;
                        div{
                            flex-direction: column;
                            align-items:center;
                            justify-content:center;
                            img{
                                width:20px;
                                object-fit:contain;
                            }
                        }
                        .p-u-m-icon{
                            width:40px;
                            height:40px;
                        }
                    }
                    #pum_current_lv{
                        flex:1;
                        width: 80%;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        border:solid 1px ${Colors.green};
                        border-radius:5px;
                        #pumclv_inner{
                            flex: 1;
                            padding: 20px 0;
                            width: 80%;
                            flex-direction:column;
                            justify-content:space-between;
                            #pumclvi_lv{
                                justify-content:space-between;
                                align-items:center;
                                margin-bottom:20px;
                                span{
                                    font-size:${Texts.size.large};
                                    line-height: ${Texts.size.large};
                                    color: ${Colors.black};
                                    &:first-child{
                                        text-transform:uppercase;
                                    }
                                }
                            }
                            #pumclvilv_upgrade{
                                flex-direction:column;
                                margin-bottom:20px;
                                #pumclvilvu_title{
                                    font-size:${Texts.size.large};
                                    line-height: ${Texts.size.large};
                                    color: ${Colors.black};
                                    text-transform:uppercase;
                                }
                                #pumcl_select{
                                    width:100%;
                                    margin-top:10px;
                                }
                            }
                            #pumclvi_purchase{

                            }
                            #pumclvi_button{
                                width:100%;
                                align-items:center;
                                justify-content:center;
                                #pumclvib_inner{
                                    width:60%;
                                    justify-content:center;
                                    button{
                                        width:100%;
                                        border-radius:5px;
                                        background-color:${Colors.orange};
                                        box-shadow:none;
                                        color:${Colors.white};
                                        font-size: ${Texts.size.large};
                                        border: none;
                                        padding:15px 40px;
                                        &:hover{
                                            background-color:${Colors.orange1};
                                            box-shadow: 0 3px 6px 1px rgba(255, 159,91,.2)
                                        }
                                        &:disabled{
                                            background-color:${Colors.orange2};
                                            color: ${Colors.orange3};
                                            box-shadow:none;
                                            cursor: not-allowed;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    #pop-upgrade-close-button{
        position:absolute;
        top:20px;
        right:20px;
        cursor: pointer;
    }
`)
const PumDivider = memo(styled.div`
    width: 50px;
    height: 5px;
    ${(props: any) => props.step === 2 ?
        css`background-color: ${Colors.orange};`
        :
        css`background-color: ${Colors.green3};`
    };
    margin: 0 20px 10px 20px;
`)
const PumStep1 = memo(styled.div`
    .p-u-m-icon{
        border-radius:50%;
        ${(props: any) => props.step === 1 ? css`
            background-color: ${Colors.orange};
            span{
                color: ${Colors.orange}
            }
        `: css`
            background-color: ${Colors.green};
            span{
                color: ${Colors.green3}
            }
        `}
    }
    .pum-title{
        font-size:${Texts.size.normal};
        line-height: ${Texts.size.normal};
        ${(props: any) => props.step === 1 ?
        css`
            color: ${Colors.orange};
        `:
        css`
            color: ${Colors.green3};
        `
    }
    }
`)
const PumStep2 = memo(styled.div`
    .p-u-m-icon{
        border-radius:50%;
        ${(props: any) => props.step === 2 ? css`
            background-color: ${Colors.orange};
            span{
                color: ${Colors.orange}
            }
        `: css`
            background-color: ${Colors.green};
            span{
                color: ${Colors.green3}
            }
        `}
    }
    .pum-title{
        font-size:${Texts.size.normal};
        line-height: ${Texts.size.normal};
        ${(props: any) => props.step === 2 ?
        css`
            color: ${Colors.orange};
        `:
        css`
            color: ${Colors.green3};
        `
    }
    }
`)