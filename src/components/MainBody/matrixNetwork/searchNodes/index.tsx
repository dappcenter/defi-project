import React, { memo, useState, useContext, useEffect, Fragment } from "react";
import styled, { css } from "styled-components/macro";
import Colors from "../../../../constants/Colors";
import Texts from "../../../../constants/Texts";
import i18n from 'i18n-js'
import Select from '../../../../components/common/core/Select'
const closeImg = require('../../../../assets/images/close.png')
const checkImg = require('../../../../assets/images/ic-green-check.png')
const upgradeSuccess = require('../../../../assets/images/upgrade-successful.svg')
const backImg = require('../../../../assets/images/white-back.png')
export default () => {
    const [username, setUsername] = useState('')
    const [step, setStep] = useState(3)
    const listUser = [
        { title: 'User 1   - 0x5ac6hd3krd…rd10ce5ac6hd', value: 1 },
        { title: 'User 2   - 0x5ac6hd3krd…rd10ce5ac6hd', value: 1 },
        { title: 'User 3   - 0x5ac6hd3krd…rd10ce5ac6hd', value: 1 },
        { title: 'User 4   - 0x5ac6hd3krd…rd10ce5ac6hd', value: 1 },
        { title: 'User 5   - 0x5ac6hd3krd…rd10ce5ac6hd', value: 1 }
    ]
    return (
        <SearchNodesWrap>
            <span id="search_node_title">{i18n.t('searchEmptyNode')}</span>
            <span id="search_node_quote">{i18n.t('searchEmptyNodeQuote')}</span>
            <div id="sn_input">
                <div id="sni_textbox">
                    <input onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button onClick={() => { }}>{i18n.t('confirm')}</button>
            </div>
            <div id="sni_result">
                <span id="snir_title">{i18n.t('searchResult')}</span>
                <div id="snir_content">
                    <div id="snirc_steps">
                        <div id="snircs_step">
                            <Snircs1 step={step}>
                                <div className="snircs_icon">
                                    <img src={checkImg} alt="" />
                                </div>
                                <span className="snircs_title">{i18n.t('emptyLevel')}</span>
                            </Snircs1>
                            <SnircsDivider1 step={step}></SnircsDivider1>
                            <Snircs2 step={step}>
                                <div className="snircs_icon">
                                    {step > 1 ?
                                        <img src={checkImg} alt="" />
                                        :
                                        <span className="pum-">2</span>
                                    }
                                </div>
                                <span className="snircs_title">{i18n.t('emptyNode')}</span>
                            </Snircs2>
                            <SnircsDivider2 step={step}></SnircsDivider2>
                            <Snircs3 step={step}>
                                <div className="snircs_icon">
                                    {step === 3 ?
                                        <img src={checkImg} alt="" />
                                        :
                                        <span className="pum-">3</span>
                                    }
                                </div>
                                <span className="snircs_title">{i18n.t('done')}</span>
                            </Snircs3>
                        </div>
                    </div>
                    <div id="snirc_result">
                        <div id="snircr_step1">
                            <span className="label">{i18n.t('emptyLevel')}:</span>
                            <span className="content">3</span>
                        </div>
                        {step > 2 ?
                            <div id="snircr_step2">
                                <span className="label">{i18n.t('emptyNode')}:</span>
                                <div className="nircrs2_username">
                                    <span className="child_label">{i18n.t('username')}:</span>
                                    <span className="child_value">Dunglovely</span>
                                </div>
                                <div className="nircrs2_address">
                                    <span className="child_label">{i18n.t('address')}:</span>
                                    <span className="child_value">0x5ac6hd3krd…10ce5ac6hd</span>
                                </div>
                                <div className="nircrs2_level_empty">
                                    <span className="child_label">{i18n.t('levelEmptyNode')}:</span>
                                    <span className="child_value">3</span>
                                </div>
                            </div>
                            :
                            null
                        }
                        {step === 3 ?
                            <div id="snircr_step3">
                                <span className="label">{i18n.t('listPendingUsers')}:</span>
                                <Select
                                    listSelect={listUser}
                                    action={() => { }}
                                    defaultSelect={i18n.t('selectUserToMatch')}
                                />
                                <button onClick={() => { }}>{i18n.t('submit')}</button>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </SearchNodesWrap>
    )
}

const SearchNodesWrap = memo(styled.div`
    background-color:${Colors.white};
    flex-direction:column;
    align-items:center;
    flex:1;
    padding:15px;
    border-radius:10px;
    #search_node_title{
        font-size: ${Texts.size.huge};
        line-height: ${Texts.size.huge};
        color: ${Colors.black};
        font-weight: 500;
        margin-bottom:20px; 
    }
    #search_node_quote{
        font-size: ${Texts.size.large};
        line-height: ${Texts.size.large};
        color: ${Colors.black};
        margin-bottom:15px; 
        text-align:center;
    }
    #sn_input{
        margin-bottom:30px;
        width:100%;
        #sni_textbox{
            flex:1;
            input{
                flex:1;
                padding:0 10px;
                border:solid 1px ${Colors.black};
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                border-right:none;
            }
        }
        button{
            border-radius: 5px;
            background-color: ${Colors.orange};
            box-shadow: none;
            color: ${Colors.white};
            font-size: ${Texts.size.large};
            border: none;
            padding:10px 20px;
            &:hover {
                background-color: ${Colors.orange1};
                box-shadow: 0 3px 6px 1px rgba(255, 159, 91, 0.2);
            }
            &:disabled {
                background-color: ${Colors.orange2};
                color: ${Colors.orange3};
                box-shadow: none;
                cursor: not-allowed;
            }
        }
    }
    #sni_result{
        flex: 1;
        width:100%;
        flex-direction: column;
        align-items:center;
        #snir_title{
            font-size: ${Texts.size.huge};
            line-height: ${Texts.size.huge};
            color: ${Colors.black};
            font-weight: 500;
            margin-bottom:20px; 
        }
        #snir_content{
            width: calc(100% - 40px);
            padding: 20px;
            align-items: center;
            justify-content: center;
            background-color:${Colors.white4};
            flex-direction:column;
            #snirc_steps{
                margin-bottom:10px;
                #snircs_step{
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
                    .snircs_icon{
                        margin-bottom:5px;
                        width:40px;
                        height:40px;
                    }
                }
            }
            #snirc_result{
                width: calc(100% - 30px);
                min-height: 40px;
                background: ${Colors.white};
                border-radius: 5px;
                border: solid 1px ${Colors.green};
                padding: 15px;
                flex-direction: column;
                #snircr_step1{
                    margin-bottom:15px;
                }
                #snircr_step2{
                    flex-direction: column;
                    margin-bottom:15px;
                    .label{
                        margin-bottom:10px;
                    }
                    .nircrs2_username, .nircrs2_address, .nircrs2_level_empty{
                        justify-content:space-between;
                    }
                    .nircrs2_username, .nircrs2_address{
                        margin-bottom:5px;
                    }
                }
                #snircr_step3{
                    flex-direction:column;
                    .label{
                        margin-bottom:10px;
                    }
                    button{
                        margin-top:20px;
                        border-radius: 5px;
                        background-color: ${Colors.orange};
                        box-shadow: none;
                        color: ${Colors.white};
                        font-size: ${Texts.size.large};
                        border: solid 1px  ${Colors.orange};
                        padding: 10px 40px;
                        &:hover {
                            background-color: ${Colors.orange1};
                            box-shadow: 0 3px 6px 1px rgba(255, 159, 91, 0.2);
                        }
                        &:disabled {
                            background-color: ${Colors.orange2};
                            color: ${Colors.orange3};
                            box-shadow: none;
                            cursor: not-allowed;
                        }
                    }
                }
                .label{
                    font-size: ${Texts.size.large};
                    line-height: ${Texts.size.large};
                    color: ${Colors.black};
                    flex:0.4
                }
                .content{
                    font-size: ${Texts.size.large};
                    line-height: ${Texts.size.large};
                    color: ${Colors.black};
                    flex:0.6
                }
                .child_label{
                    font-size: ${Texts.size.normal};
                    line-height: ${Texts.size.normal};
                    color: ${Colors.black1};
                    flex:0.35;
                    text-align:right;
                }
                .child_value{
                    font-size: ${Texts.size.large};
                    line-height: ${Texts.size.large};
                    color: ${Colors.black};
                    flex:0.6;
                }
                .label{
                    text-transform:uppercase; 
                }
            }
        }
    }
`)

const Snircs1 = memo(styled.div`
    .snircs_icon{
        border-radius:50%;
        background-color: ${Colors.orange};
        span{
            color: ${Colors.orange}
        }
    }
    .snircs_title{
        font-size:${Texts.size.normal};
        line-height: ${Texts.size.large};
        color: ${Colors.orange};
        text-transform:uppercase;
        text-align:center;
    }
`)
const Snircs2 = memo(styled.div`
    .snircs_icon{
        border-radius:50%;
        ${(props: any) => props.step > 1 ? css`
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
    .snircs_title{
        font-size:${Texts.size.normal};
        line-height: ${Texts.size.large};
        text-transform:uppercase;
        text-align:center;
        ${(props: any) => props.step > 1 ?
        css`
            color: ${Colors.orange};
        `:
        css`
            color: ${Colors.green3};
        `
    }
    }
`)
const Snircs3 = memo(styled.div`
    .snircs_icon{
        border-radius:50%;
        ${(props: any) => props.step === 3 ? css`
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
    .snircs_title{
        font-size:${Texts.size.normal};
        line-height: ${Texts.size.large};
        text-transform:uppercase;
        text-align:center;
        ${(props: any) => props.step === 3 ?
        css`
            color: ${Colors.orange};
        `:
        css`
            color: ${Colors.green3};
        `
    }
    }
`)
const SnircsDivider1 = memo(styled.div`
    width: 50px;
    height: 5px;
    ${(props: any) => props.step > 1 ?
        css`background-color: ${Colors.orange};`
        :
        css`background-color: ${Colors.green3};`
    };
    margin: 0 20px 10px 20px;
`)
const SnircsDivider2 = memo(styled.div`
    width: 50px;
    height: 5px;
    ${(props: any) => props.step === 3 ?
        css`background-color: ${Colors.orange};`
        :
        css`background-color: ${Colors.green3};`
    };
    margin: 0 20px 10px 20px;
`)

