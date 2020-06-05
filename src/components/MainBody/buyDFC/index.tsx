import React, { memo } from "react";
import styled, { css } from "styled-components/macro";
import Colors from "../../../constants/Colors";
import Texts from "../../../constants/Texts";
import i18n from "i18n-js";
import BuyPackages from './buyPackages'
import BenTableItem from './benTableItem'
import USDTBonusTableItem from './usdtBonusTableItem'
export default () => {
    const packages = [
        { name: 'cofounder', dfcbanana: 100000, sold: 1000, available: 99000, bonus: 123 },
        { name: 'angle', dfcbanana: 100000, sold: 1000, available: 99000, bonus: 123 },
        { name: 'seriaa', dfcbanana: 100000, sold: 1000, available: 99000, bonus: 123 },
        { name: 'seriab', dfcbanana: 100000, sold: 1000, available: 99000, bonus: 123 },
        { name: 'seriac', dfcbanana: 100000, sold: 1000, available: 99000, bonus: 123 },
        { name: 'seriad', dfcbanana: 100000, sold: 1000, available: 99000, bonus: 123 },
        { name: 'prelisting', dfcbanana: 100000, sold: 1000, available: 99000, bonus: 123 },
        { name: 'listing', dfcbanana: 100000, sold: 1000, available: 99000, bonus: 123 },
    ];
    const benData = [
        { id: 1, name: 'Cou-founder', volume: 100000, bonus: 0.5, txs: 12000 },
        { id: 2, name: 'Cou-founder', volume: 100000, bonus: 0.5, txs: 12000 },
        { id: 3, name: 'Cou-founder', volume: 100000, bonus: 0.5, txs: 12000 },
        { id: 4, name: 'Cou-founder', volume: 100000, bonus: 0.5, txs: 12000 },
        { id: 5, name: 'Cou-founder', volume: 100000, bonus: 0.5, txs: 12000 },
        { id: 6, name: 'Cou-founder', volume: 100000, bonus: 0.5, txs: 12000 },
        { id: 7, name: 'Cou-founder', volume: 100000, bonus: 0.5, txs: 12000 },
        { id: 8, name: 'Cou-founder', volume: 100000, bonus: 0.5, txs: 12000 },
    ]
    const bonusData = [
        { id: 1, level: 1, percent: 10 },
        { id: 2, level: 1, percent: 10 },
        { id: 3, level: 1, percent: 10 },
        { id: 4, level: 1, percent: 10 },
        { id: 5, level: 1, percent: 10 },
        { id: 6, level: 1, percent: 10 },
        { id: 7, level: 1, percent: 10 },
        { id: 8, level: 1, percent: 10 },
    ]
    const handleBuy = () => {

    }
    return (
        <BuyDFCWrap>
            <div id="buydfc_mainbody">
                <div id="bdfcm_round">
                    <span className="bdfcmr_block_title">{i18n.t('buyRound')}</span>
                    <div id="bdfcmr_content">
                        {packages.map((item, index) => {
                            return <BuyPackages
                                key={index}
                                name={item.name}
                                dfcbanana={item.dfcbanana}
                                sold={item.sold}
                                available={item.available}
                                bonus={item.bonus}
                                action={handleBuy}
                            />
                        })}
                    </div>
                </div>
                <div id="bdfcm_mid_content">
                    <div id="bdfcmmc_left">
                        <span className="bdfcmr_block_title">{i18n.t('benTable')}</span>
                        <div id="bdfcmmc_table_wrap">
                            <div className="bdfcmmct_header">
                                <div className="bdfcmmct_id">
                                    <span>{i18n.t('noNumber')}</span>
                                </div>
                                <div className="bdfcmmct_name">
                                    <span>{i18n.t('name')}</span>
                                </div>
                                <div className="bdfcmmct_volume">
                                    <span>{i18n.t('volume')}</span>
                                </div>
                                <div className="bdfcmmct_bonus">
                                    <span>{i18n.t('bonus')}</span>
                                </div>
                                <div className="bdfcmmct_tx">
                                    <span>{i18n.t('tx')}</span>
                                </div>
                            </div>
                            <div className="bdfcmmct_body">
                                {benData.map((item, index) => {
                                    return <BenTableItem
                                        key={index}
                                        id={item.id}
                                        name={item.name}
                                        volume={item.volume}
                                        bonus={item.bonus}
                                        txs={item.txs}
                                        lastItem={index === benData.length - 1}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                    <div id="bdfcmmc_right">
                        <span className="bdfcmr_block_title">{i18n.t('usdtBonus')}</span>
                        <div id="bdfcmmc_table_wrap">
                            <div className="bdfcmmct_header">
                                <div className="bdfcmmct_id">
                                    <span>{i18n.t('noNumber')}</span>
                                </div>
                                <div className="bdfcmmct_level">
                                    <span>{i18n.t('level')}</span>
                                </div>
                                <div className="bdfcmmct_percent">
                                    <span>%</span>
                                </div>
                            </div>
                            <div className="bdfcmmct_body">
                                {bonusData.map((item, index) => {
                                    return <USDTBonusTableItem
                                        key={index}
                                        id={item.id}
                                        level={item.level}
                                        percent={item.percent}
                                        lastItem={index === bonusData.length - 1}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bdfcm_sumup">
                    <span>{`=>`} {i18n.t('totalDFCusing')}: <span className="bdfcms_value">12,800,000 * 7</span>{i18n.t('token')}</span>
                    <span>{`=>`} {i18n.t('totalAvailableDFC')}: <span className="bdfcms_value">12,800,000</span> {i18n.t('token')}</span>
                </div>
            </div>
        </BuyDFCWrap>
    );
};

const BuyDFCWrap = memo(styled.div`
    flex: 1;
    width: 100%;
    flex-direction: column;
    overflow-y:scroll;
    #buydfc_mainbody{
        /* background-color:${Colors.white}; */
        flex-direction:column;
        flex:1;
        border-radius:10px;
        .bdfcmr_block_title{
            font-size: ${Texts.size.huge};
            line-height: ${Texts.size.huge};
            color: ${Colors.black};
            margin-bottom: 10px;
            font-weight: 500;
        }
        #bdfcm_round{
            flex-direction:column;
            #bdfcmr_content{
                flex: 1;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }
        #bdfcm_mid_content{
            justify-content:space-between;
            min-height: 300px;
            max-height: 450px;
            overflow: hidden;
            #bdfcmmc_left{
                flex-direction:column;
                flex:0.7;
            }
            #bdfcmmc_right{
                flex:0.3;
                margin-left:30px;
                flex-direction:column;
            }
            #bdfcmmc_table_wrap{
                background-color:${Colors.white};
                flex-direction:column;
                flex:1;
                border-radius:10px;
                padding:10px;
                .bdfcmmct_body{
                    flex-direction:column;
                }
            }
            .bdfcmmct_id{
                flex:.1;
                flex-wrap:wrap;
                align-items:center;
                padding:0 5px 0 0;
            }
            .bdfcmmct_name{
                flex:.2;
                flex-wrap:wrap;
                justify-content:center;
                align-items:center;
                padding:0 5px;
            }
            .bdfcmmct_volume{
                flex:.2;
                flex-wrap:wrap;
                justify-content:center;
                align-items:center;
                padding:0 5px;
            }
            .bdfcmmct_bonus{
                flex:.2;
                flex-wrap:wrap;
                justify-content:center;
                align-items:center;
                padding:0 5px;
            }
            .bdfcmmct_tx{
                flex:.25;
                flex-wrap:wrap;
                justify-content:flex-end;
                align-items:center;
                padding:0 0 0 5px;
                span{
                    text-align:right;
                }
            }
            .bdfcmmct_header{
                margin:0 20px;
                padding:15px 0;
                flex:1;
                justify-content:space-between;
                align-items:center;
                border-bottom: solid 1px ${Colors.black};
                span{
                    font-size: ${Texts.size.large};
                    line-height: ${Texts.size.large};
                    color: ${Colors.black};
                    font-weight: 500;
                }
            }
        }
        #bdfcm_sumup{
            flex-direction:column;
            margin-top:20px;
            span{
                font-size: ${Texts.size.larger};
                line-height: ${Texts.size.larger};
                color: ${Colors.black};
                margin-bottom: 10px;
                font-weight: 500;
                &.bdfcms_value{
                    font-size: ${Texts.size.huge};
                    color: ${Colors.black};
                    font-weight:700
                }
            }
        }
    }
`);
