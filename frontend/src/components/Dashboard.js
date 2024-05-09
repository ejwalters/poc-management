// frontend/src/components/Dashboard.js

import React from 'react';
import styled from 'styled-components';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";

const CardTitleWhite = styled.h4`
    color: #FFFFFF;
    margin-top: 0px;
    min-height: auto;
    font-weight: 300;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    margin-bottom: 3px;
    text-decoration: none;
`;

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card style={{ flex: 1, margin: '1em', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }}>
                    <CardContent>
                        {/* Summary content goes here */}
                    </CardContent>
                </Card>
                <Card style={{ flex: 1, margin: '1em', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }}>
                    <CardContent>
                        {/* Summary content goes here */}
                    </CardContent>
                </Card>
                <Card style={{ flex: 1, margin: '1em', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }}>
                    <CardContent>
                        {/* Summary content goes here */}
                    </CardContent>
                </Card>
            </div>
            <Card style={{ margin: '1em', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }}>
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
            </Card>
        </div>
    );
}

export default Dashboard;