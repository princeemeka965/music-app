import styled from "styled-components";

export const Container = styled.div<{ isfull: boolean }>`
    display: flex;
    background-color: rgba(18, 18, 18, 0.64);
    flex-direction: column;
    width: 100%;
    position: relative; 
    z-index: 1;
    align-items: center;
    backdrop-filter: blur(37px);
    
    .musicDiv {
        width: 400px;
        margin-top: 5px;
        cursor: pointer;
    }

    .test {
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: end;

        input {
            appearance: none;
            border-radius: 10px;
            width: 120px;
            background-color: #4D4D4D;
            height: 4px;
            outline: none;
            margin-right: 15px;
        }
        input::-webkit-slider-thumb {
            appearance: none;
            height: 14px;
            width: 14px;
            background-color: #fff;
            border-radius: 50%;
        }
        .volumeButton {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
    .playPause{
        margin: 0 5px;
        background: linear-gradient(222deg, #FFF 12.65%, rgba(255, 255, 255, 0.00) 216.78%);
        padding: 10px;
        display: flex;
        justify-content: center;
    }
    .music {
        display: flex;
        color: #fff;
        align-items: center;
        margin-left: 5px;

        h1 {
            font-size: 18px;
            margin-bottom: 2px;
        }
        h3 {
            margin-top: 0px;
            font-size: 14px;
            color: #b5b5b5;
        }

        div {
            margin-left: 8px;
        }
    }

    .player {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;

        button {
            border: none;
            outline: none;
            border-radius: 50%;
            cursor: pointer;
        }

        .randomMusicsButton {
            position: relative;
        }
    }

    .inputButtons {
        display: flex;
        flex-direction: column;      
        align-items: center;
        width: 100%
    }
    .buttons {
        display: flex;
        width: 400px;
        position: relative;
        justify-content: center;
    }
    
    .progressBar {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;

        .Pduration {
            position: relative;
            left: 15px;
            color: #fff;
            font-size: 14px;
        }
        .PcurrentTime {
            position: relative;
            right: 10px;
            color: #fff;
            width: 35px;
            font-size: 14px;
        }
    }
    .currentProgress {
        -webkit-appearance: none;
        appearance: none;
        border-radius: 20px;
        width: 100%;
        margin: auto;
        background-color: #494A4D;
        height: 4px;
        outline: none;
    }

    @media only screen and (max-width: 820px) {
        .buttons {
            top: 0;
            right: 5%;
        }
        .progressBar {
            display: flex;
            align-items: center;
            width: 88vw;
            position: relative;
            bottom: 0px;
            right: -10%;
            
            input {
                margin: 0;
            }
    }

    @media only screen and (max-width: 575px) {
        .progressBar {
            right: 30px;
    }
        .buttons {
            width: 147px;
            top: 0px;
            right: 0;
            left: ${(props) => (props.isfull ? "-18" : "0")}%;
        }
    }
    `;
