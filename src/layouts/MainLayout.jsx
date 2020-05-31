/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBDropdownToggle, MDBDropdown, MDBDropdownMenu, MDBDropdownItem
} from 'mdbreact';
import './MainLayout.scss';
import RouteConstants from '../utils/RouteConstants';
import Home from '../../src/components/home/Home'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((prevState) => ({
      collapse: !prevState.collapse
    }));
  }

  renderHeader() {
    return (
      <header>
        <Home style={{background: "white"}}/>
        <MDBNavbar color="elegant-color" dark expand="md">
          <MDBContainer> 
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left> 
                <MDBNavItem>
                  <MDBNavLink to="/home">Home</MDBNavLink>
                </MDBNavItem> 
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Equity</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu left='true'>
                      <MDBDropdownItem href={RouteConstants.stockCharts}>Stock charts</MDBDropdownItem>
                      <MDBDropdownItem href={RouteConstants.financeReports}>Financial reports</MDBDropdownItem>
                      <MDBDropdownItem href={RouteConstants.ggm}>GGM</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem> 
                <MDBNavItem>
                  <MDBNavLink to="/fixed-income">Fix Income</MDBNavLink>
                </MDBNavItem> 
                <MDBNavItem>
                <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Forex</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu left='true'>
                      <MDBDropdownItem href={RouteConstants.forexCharts}>Forex charts</MDBDropdownItem>
                      <MDBDropdownItem href={RouteConstants.fxTool}>FX Tool</MDBDropdownItem>
                      <MDBDropdownItem href={RouteConstants.interestRateParity}>Interest Rate Parity</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown> 
                </MDBNavItem> 
                <MDBNavItem>
                  <MDBNavLink to="/derivatives">Derivatives</MDBNavLink>
                </MDBNavItem> 
                <MDBNavItem>
                  <MDBNavLink to="/portfolio-management">Portfolio Management</MDBNavLink>
                </MDBNavItem> 
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
    );
  }

  renderBody() {
    return (
      <MDBContainer className="main-container flex-fill m-0 p-0" fluid>
        {this.props.routes}
      </MDBContainer>
    );
  }

  render() {
    return (
      <article className="w-100 h-100 d-flex flex-column overflow-hidden">
        {this.renderHeader()}
        {this.renderBody()}
      </article>
    );
  }
}
