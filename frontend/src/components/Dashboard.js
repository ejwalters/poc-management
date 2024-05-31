// frontend/src/components/Dashboard.js

import React from 'react';
import styled from 'styled-components';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import avatarPlaceholder from '../images/eric.jpg'; // Replace with the path to your placeholder
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";


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
    margin-top: 100px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    height: 200px;
`;

const LargeCard = styled(Card)`
    margin: 1em;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    height: 350px;
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
    }
`;

const StyledCard2 = styled(StyledCard)`
    && {
        background-color: #ccffcc; // Adjust this value to your liking
    }
`;

const StyledCard3 = styled(StyledCard)`
    && {
        background-color: #ccccff; // Adjust this value to your liking
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

const Dashboard = () => {
    return (
        <div>
            <SearchCard>
                <SearchInput placeholder="Search" />
                <Avatar src={avatarPlaceholder} alt="Avatar" />
            </SearchCard>
            <LargeCard>
                <CardContainer>
                    <StyledCard1>
                        <CardContent>
                            {/* Summary content goes here */}
                        </CardContent>
                    </StyledCard1>
                    <StyledCard2>
                        <CardContent>
                            {/* Summary content goes here */}
                        </CardContent>
                    </StyledCard2>
                    <StyledCard3>
                        <CardContent>
                            {/* Summary content goes here */}
                        </CardContent>
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