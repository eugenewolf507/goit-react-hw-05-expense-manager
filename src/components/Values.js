import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as selectors from '../redux/selectors';
import Stat from './Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: selectors.calculateTotalExpenses(state),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
