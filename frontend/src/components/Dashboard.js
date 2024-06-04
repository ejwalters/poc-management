// frontend/src/components/Dashboard.js

import React from 'react';
import styled from 'styled-components';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import avatarPlaceholder from '../images/eric.jpg'; // Replace with the path to your placeholder
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const CardTitleWhite = styled.h4`
    color: #FFFFFF;
    margin-top: 0px;
    min-height: auto;
    font-weight: 300;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    margin-bottom: 3px;
    text-decoration: none;
`;

const StyledCard = styled(Card)`
    flex: 1;
    margin: 1em;
    margin-top: 25px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    height: 200px;
    cursor: pointer;
`;

const LargeCard = styled(Card)`
    margin: 1em;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    height: 350px;

    > h1 {
        margin: .5em;
    }
`;

const SearchCard = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em;
    margin-top: 50px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    height: 70px;
`;

const StyledCard1 = styled(StyledCard)`
    && {
        background-color: #ffcccc; // Adjust this value to your liking
        position: relative;
    }
`;

const StyledCard2 = styled(StyledCard)`
    && {
        background-color: #ccffcc; // Adjust this value to your liking
        position: relative;
    }
`;

const StyledCard3 = styled(StyledCard)`
    && {
        background-color: #ccccff; // Adjust this value to your liking
        position: relative;
    }
`;

const SearchInput = styled.input`
    width: 500px;
    height: 15px;
    margin: 20px;
    margin-left: 30px;
    border: 1px solid lightgrey;
    border-radius: 7px;
    padding: 10px 30px 10px 10px; // Leave space for the icon
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
    padding-left: 30px;
    ::placeholder {
        color: lightgrey;
    }
    &:focus {
        outline: none;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Avatar = styled.img`
    width: 35px; // Adjust this value to your liking
    height: 35px; // Adjust this value to your liking
    border-radius: 50%; // Makes the image circular
    margin-right: 30px; // Adds some space between the image and the search input
`;

const ViewDiv = styled.div`
    width: 100%;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    position: absolute;
    bottom: 0;
`;

const StyledSquare = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px; // Adjust this value to your liking
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px; // Adjust this value to your liking
`;

const StyledSquare1 = styled(StyledSquare)`
    background-color: #cc9999; // Adjust this value to your liking
`;

const StyledSquare2 = styled(StyledSquare)`
    background-color: #99cc99; // Adjust this value to your liking
`;

const StyledSquare3 = styled(StyledSquare)`
    background-color: #9999cc; // Adjust this value to your liking
`;

const NumberText = styled.p`
    position: absolute;
    top: 10px; // Adjust this value to your liking
    left: 100px; // Adjust this value to your liking
    font-size: 30px; // Medium font
    font-weight: bold;
    margin: 0;
`;

const SmallText = styled.p`
    position: absolute;
    top: 50px; // Adjust this value to your liking
    left: 100px; // Adjust this value to your liking
    font-size: 14px; // Small font
    margin: 0;
`;

const Dashboard = () => {
    return (
        <div>
            <SearchCard>
                <SearchInput placeholder="Search" />
                <Avatar src={avatarPlaceholder} alt="Avatar" />
            </SearchCard>
            <LargeCard>
                <h1>Your Business</h1>
                <CardContainer>
                    <StyledCard1>
                    <StyledSquare1>
                        <FormatListBulletedIcon style={{ color: '#ffffff', fontSize: 35 }} />
                    </StyledSquare1>
                        <NumberText>2</NumberText>
                        <SmallText>Open POCs</SmallText> 
                        <CardContent>
                            {/* Summary content goes here */}
                        </CardContent>
                        <ViewDiv>View</ViewDiv>
                    </StyledCard1>
                    <StyledCard2>
                    <StyledSquare2>
                        <AttachMoneyIcon style={{ color: '#ffffff', fontSize: 35 }} />
                    </StyledSquare2>
                        <NumberText>5</NumberText>
                        <SmallText>Action Items</SmallText> 
                        <CardContent>
                            {/* Summary content goes here */}
                        </CardContent>
                        <ViewDiv>View</ViewDiv>
                    </StyledCard2>
                    <StyledCard3>
                    <StyledSquare3>
                        <QuestionMarkIcon style={{ color: '#ffffff', fontSize: 35 }} />
                    </StyledSquare3>
                        <NumberText>10</NumberText>
                        <SmallText>Open Questions</SmallText> 
                        <CardContent>
                            {/* Summary content goes here */}
                        </CardContent>
                        <ViewDiv>View</ViewDiv>
                    </StyledCard3>
                </CardContainer>
            </LargeCard>
            <LargeCard>
                <CardHeader color="primary">
                    <CardTitleWhite>Detail Table</CardTitleWhite>
                </CardHeader>
                <CardContent>
                    <Table
                        tableHeaderColor="primary"
                        tableHead={["Column 1", "Column 2", "Column 3"]}
                        tableData={[
                            ["Row 1 Data 1", "Row 1 Data 2", "Row 1 Data 3"],
                            ["Row 2 Data 1", "Row 2 Data 2", "Row 2 Data 3"],
                            // More rows can be added here
                        ]}
                    />
                </CardContent>
            </LargeCard>
        </div>
    );
}

export default Dashboard;