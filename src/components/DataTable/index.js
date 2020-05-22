import React from "react";
import DataBody from "./DataBody";
import "./style.css";

DataTable = ({ infoHeadings, users, handleSort }) => {
    return (
        <div className="datatable mt-5">
            <table
                id="data-table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {infoHeadings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <DataBody users={users} />
            </table>
        </div>
    );
}

export default DataTable;