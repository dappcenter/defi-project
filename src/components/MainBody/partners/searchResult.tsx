import React, { memo, Fragment, useContext } from "react";
import styled, { css } from "styled-components/macro";
import Colors from "../../../constants/Colors";
import Texts from "../../../constants/Texts";
import i18n from "i18n-js";
import ResultItem from "./resultItem";
import { TronContract } from "../../../contexts/tronWeb";
interface SearchResultProps {
  startUser: string;
  level: number;
  searchUser: string;
}
export default ({ startUser, level, searchUser }: SearchResultProps) => {
  const { matrixMember, member, userData } = useContext(TronContract);
  const getPartners = async (_startUser, _level, _size, _page) => {
    let result = await matrixMember
      .getBranch(_startUser, _level, _size, _page * _size)
      .call();
    let partnersList = [] as any;
    for (let i = 0; i < result.list.length; i++) {
      const [partner, username, level] = await Promise.all([
        matrixMember.getNode(result.list[i]).call(),
        member.getUsername(result.list[i]).call(),
        userData.getLevel(result.list[i]).call(),
      ]);
      partnersList.push({
        username,
        level,
        address: result.list[i],
        sponsor: partner.sponsor,
        parent: partner.parent,
        numberF1: partner.F1.filter((item) => item !== "").length,
      });
    }
    return {
      partnersList,
      total: result.total,
    };
  };
  const searchData = [
    {
      id: 1,
      username: "Dung 4 não",
      address: "0x5ac6hd3kuf9uo10ce9vkndln3rd10ce5ac6hd3kuf9uo10ce9",
      level: 5,
      sponsor: "Dung mắt to",
      partners: 1,
    },
    {
      id: 2,
      username: "Dung 4 não",
      address: "0x5ac6hd3kuf9uo10ce9vkndln3rd10ce5ac6hd3kuf9uo10ce9",
      level: 5,
      sponsor: "Dung mắt to",
      partners: 1,
    },
    {
      id: 3,
      username: "Dung 4 não",
      address: "0x5ac6hd3kuf9uo10ce9vkndln3rd10ce5ac6hd3kuf9uo10ce9",
      level: 5,
      sponsor: "Dung mắt to",
      partners: 1,
    },
    {
      id: 4,
      username: "Dung 4 não",
      address: "0x5ac6hd3kuf9uo10ce9vkndln3rd10ce5ac6hd3kuf9uo10ce9",
      level: 5,
      sponsor: "Dung mắt to",
      partners: 1,
    },
    {
      id: 5,
      username: "Dung 4 não",
      address: "0x5ac6hd3kuf9uo10ce9vkndln3rd10ce5ac6hd3kuf9uo10ce9",
      level: 5,
      sponsor: "Dung mắt to",
      partners: 1,
    },
  ];
  return (
    <SearchResultWrap>
      {searchData.length > 0 ? (
        <Fragment>
          {searchData.map((item, index) => {
            return (
              <ResultItem
                key={index}
                id={item.id}
                username={item.username}
                address={item.address}
                level={item.level}
                sponsor={item.sponsor}
                partners={item.partners}
                lastItem={index === searchData.length - 1}
              />
            );
          })}
        </Fragment>
      ) : (
        <div id="sr_empty_list">
          <span>{i18n.t("noResult")}</span>
        </div>
      )}
    </SearchResultWrap>
  );
};
const SearchResultWrap = memo(styled.div`
  width: 100%;
  display: block;
  #sr_empty_list {
    flex: 1;
    align-items: center;
    justify-content: center;
    span {
      font-size: ${Texts.size.large};
      line-height: ${Texts.size.large};
      color: ${Colors.black3};
    }
  }
`);
