import styled from 'styled-components';
import {Field, Form} from "formik";

export const SearchbarStyled = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);`
;

export const SearchForm = styled(Form)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;`
;

export const SearchFormButton = styled.button`
    display: inline-block;
    height: 48px;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    margin-right: 10px;
    padding: 0 10px;
    background-color: yellow;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: auto;
    color: #3f51b5;
    font-weight: 500;

    :hover {
        opacity: 0.8;
    }`
;

export const SearchFormInput = styled(Field)`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;

    ::placeholder {
    font: inherit;
    font-size: 18px;
    }`
;