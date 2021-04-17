import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";
const { TextArea } = Input;
export const CustomInput = styled(Input)`
  border-radius: ${(props) => (props.search ? "7px 7px 0 0" : "7px")};
  border: 1px solid #e1e4e8;
  border-bottom: ${(props) => (props.search ? "none" : "1px solid #e1e4e8")};
  color: ${(props) => (props.gray ? " var(--darkGray)" : "var(--black)")};
  background-color: ${(props) => (props.gray ? "var(--lighterGray)" : "white")};
`;
export const CustomInputArea = styled(TextArea)`
  border-radius: 7px;
  border: 1px solid #e1e4e8;
  color: ${(props) => (props.gray ? " var(--darkGray)" : "var(--black)")};
  background-color: ${(props) => (props.gray ? "var(--lighterGray)" : "white")};
`;

export const InputLable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 10px;
`;
export const ModleFooter = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  padding: 10px 0;
`;

export const Space = styled.div`
  height: 7px;
`;
export const ModleHeader = styled.div`
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: space-between;

  align-items: center;
  border-radius: 7px;
  font-size: 20px;
  padding: 50px 5px;
`;

export const EmptyTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 140px;
  align-items: center;
  justify-content: center;
  margin: 3% 0;
`;
export const CreateText = styled.u`
  color: var(--black);
  cursor: pointer;
  margintop: 10px;
`;
