import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';


import 'datatables.net';

const UserTable = ({ users }) => {
  useEffect(() => {
    const initTable = () => {
      $('#userTable').DataTable({
        data: users,
        columns: [
          { title: 'Seq.', data: 'Seq' },
          { title: 'First name', data: 'firstName' },
          { title: 'Last name', data: 'lastName' },
          { title: 'Position', data: 'position' },
          { title: 'Office', data: 'office' },
          { title: 'Age', data: 'age' },
          {
            title: 'Details',
            render: (data, type, row) => (
              <button className="detailsBtn">&#9658;</button>
            )
          }
        ],
        columnDefs: [
          { targets: [0, 1, 2, 3, 4, 5], orderable: false }
        ]
      });

      $('#userTable tbody').on('click', 'button.detailsBtn', function() {
        const data = $('#userTable').DataTable().row($(this).parents('tr')).data();
        displayUserDetails(data);
      });
    };

    const displayUserDetails = (user) => {
      const detailsContainer = $('#detailsContainer');
      detailsContainer.html(`
        <h2>User Details</h2>
        <p><strong>First Name:</strong> ${user.firstName}</p>
        <p><strong>Last Name:</strong> ${user.lastName}</p>
        <p><strong>Position:</strong> ${user.position}</p>
        <p><strong>Office:</strong> ${user.office}</p>
        <p><strong>Age:</strong> ${user.age}</p>
      `);
    };

    initTable();
  }, [users]);

  return (
    <div>
      <table id="userTable" className="display">
        <thead>
          <tr>
            <th>Seq.</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => (
            <tr key={index}>
              <td>{user.Seq}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.position}</td>
              <td>{user.office}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="detailsContainer">
        
      </div>
      
    </div>

  );
};

export default UserTable;

