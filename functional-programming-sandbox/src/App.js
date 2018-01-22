import React, { Component } from 'react';
import { loadData } from './client';
import './App.css';

loadData();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterCompanies = (id) => {
    const newState = Object.assign({}, this.state);
    for (let company in newState) {
      if (id === 'all') {
        newState[company].isSelected = true;
      } else {
        if (id === company) {
          newState[company].isSelected = true;
        } else {
          newState[company].isSelected = false;
        }
      }
    }
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <aside>
          <img src='https://fh126cloud.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=nwBxOMDdkUTUYmkFK9g3jrPfTiCNrNTbwvdBzp7ACpo%3d&docid=2_014dcfd824cbc4a48ae13659af9673b17&rev=1' alt="Congratulations 2017 Promotions" />
        </aside>
        <main>
          <h1>Promotions</h1>
        </main>
      </div>
    );
  }
}

/*
class DropdownFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'all' };
  }

  handleChange = (event) => {
    const newState = { value: event.target.value };
    this.setState(newState);
    this.props.filterCompanies(event.target.value);
  };

  render() {
    const companyOptions = [];
    for (let company in this.props.companies) {
      companyOptions.push(
        <option 
          key={this.props.companies[company].id}
          value={this.props.companies[company].id}
        >
          {this.props.companies[company].name}
        </option>
      );
    }

    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option key={0} value="all">View Promotions By Company</option>
        {companyOptions}
      </select>
    );
  }
}

const Companies = (props) => {
  const companies = [];
  for (let company in props.companies) {
    const companyData = props.companies[company];
    companies.push(
      <Company
        key={company}
        isSelected={companyData.isSelected}
        name={companyData.name}
        promotions={companyData.promotions}
      />
    );
  }

  return (
    <ul>
      {companies}
    </ul>
  );
};

const Company = (props) => {
  let promotionGroups = [];
  for (let promotionType in props.promotions) {
    let title = '';
    let offices = [];

    if (promotionType === 'seniorPartner') {
      title = 'To Senior Partner';
    } else if (promotionType === 'partner') {
      title = 'To Partner';
    }

    if (promotionType === 'office') {
      offices = props.promotions['office'];
    }

    promotionGroups.push(
      <PromotionGroup
        key={promotionType}
        type={promotionType}
        title={title}
        offices={offices}
        employees={props.promotions[promotionType]}
      />
    );
  }

  promotionGroups = promotionGroups.sort((a, b) => {
    const keyA = a.key.toUpperCase();
    const keyB = b.key.toUpperCase();

    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  });

  if (!props.isSelected) {
    return null;
  } else {
    return (
      <li className="Company">
        <h2>{props.name}</h2>
        <ul>
          {promotionGroups}
        </ul>
      </li>
    );
  }
};

const PromotionGroup = (props) => {
  if (props.type === 'office') {
    return (
      <Offices type={props.type} offices={props.offices} />
    )
  } else {
    return (
      <li className="PromotionGroup">
        <h3>{props.title}</h3>
        <Employees type={props.type} employees={props.employees} />
      </li>
    );
  }
};

const Offices = (props) => {
  const offices = props.offices.map((office, index) => {
    return <Office
      key={office.office + index}
      type={props.type}
      name={office.office}
      employees={office.employees}
    />
  });
  return (
    <li>
      {offices}
    </li>
  )
};

const Office = (props) => {
  return (
    <div className="Office">
      <h3>{props.name}</h3>
      <Employees type={props.type} employees={props.employees} />
    </div>
  )
};

const Employees = (props) => {
  let employees = props.employees.map((employee, index) => {
    return <Employee
      key={employee['Employee Name'] + index}
      type={props.type}
      originalName={employee['Employee Name']}
      name={employee.formattedName}
      jobTitle={employee['Pending Core Title']}
      location={employee.Office}
    />;
  });

  employees = employees.sort((a, b) => {
    const nameA = a.props.originalName.toUpperCase();
    const nameB = b.props.originalName.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return (
    <ul>
      {employees}
    </ul>
  );
};

const Employee = (props) => {
  if (props.type === 'office') {
    return (
      <li className="Employee">
        <h4>{props.name}</h4>
        {props.jobTitle}
      </li>
    );
  } else {
    return (
      <li className="Employee">
        <h4>{props.name}</h4>
        {props.location}
      </li>
    );
  }
};
*/

export default App;
