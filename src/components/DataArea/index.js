import React, { Component } from "react";
import DataTable from "../DataTable";
import Nav from "../Nav";
import API from "../../utils/API";
import "./style.css";

export default class DataArea extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    infoHeadings = [
        { name: "Photo", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone Number", width: "20%" },
        { name: "Email Address", width: "20%" },
        { name: "Date of Birth", width: "10%" }
    ]

    handleSort = infoHeading => {
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend"
            });
        } else {
            this.setState({
                order: "descend"
            })
        };

        const handleCompare = (a, b) => {
            if (this.state.order === "ascend") {
                switch (infoHeading) {
                    case a[infoHeading] === undefined:
                        return 1;
                    case b[infoHeading] === undefined:
                        return -1;
                    case infoHeading === "name":
                        return a[infoHeading].first.localeCompare(b[infoHeading.first]);
                    default:
                        return a[infoHeading] - b[infoHeading];
                }
            } else {
                switch(infoHeading) {
                    case a[infoHeading] === undefined:
                        return 1;
                    case b[infoHeading] === undefined:
                        return -1;
                    case infoHeading === "name":
                        return b[infoHeading].first.localeCompare(a[infoHeading].first);
                    default:
                        return b[infoHeading] - a[infoHeading];
                }
            }

        };

        const sortedUsers = this.state.filteredUsers.sort(handleCompare);
        this.setState({ filteredUsers: sortedUsers });
    }

    handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = this.state.users.filter(user => {
            let values = Object.values(user).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
    }

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
        console.log(this.users);
    }

    render() {
        return (
            <div>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    <DataTable 
                        infoHeadings={this.infoHeadings}
                        users={this.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </div>
        );
    }
};