import React from "react";
import "./style.css";

function DataBody({ users }) {
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }

    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ login, name, photo, phoneNumber, emailAddress, dateOfBirth }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Photo" className="align-middle">
                                <img 
                                    src={photo.medium}
                                    alt={"profile image for " + name.first + " " + name.last}
                                    className="img-responsive"
                                />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone Number" className="align-middle">
                                {phoneNumber}
                            </td>
                            <td data-th="Email Address" className="align-middle">
                                <a href={"mailto: " + emailAddress} target="__blank">
                                    {emailAddress}
                                </a>
                            </td>
                            <td data-th="Date of Birth" className="align-middle">
                                {formatDate(dateOfBirth.date)}
                            </td>
                        </tr>
                    );
                })
            ) : (
                <div>

                </div>
            )}
        </tbody>
    );
}

export default DataBody;