<<<<<<< HEAD
import React from "react";
import Graph from "../Graph/Graph";

import styled from "styled-components";

const Account = props => {
  return (
    <MyAccount>
      <h2>Thank you for using MyConjugator</h2>
      <p>
        You're already one step closer to reaching your <strong>Goal</strong>!
      </p>

      <span> Track your Progress...</span>
      <GraphContainer>
        <Graph />
      </GraphContainer>
    </MyAccount>
  );
=======
import React from 'react';
import Graph from '../Graph/Graph';

import styled from 'styled-components';

const Account = (props) => {
	return (
		<MyAccount>
			<h2>Thank you for using MyConjugator</h2>
			<p>
				You're already one step closer to reaching your <strong>Goal</strong>!
			</p>

			<span> Track your Progress...</span>
			<GraphContainer>
				<Graph />
			</GraphContainer>
		</MyAccount>
	);
>>>>>>> 429b726d6b98692454931c060a4235812d890e46
};

export default Account;

const GraphContainer = styled.div`
<<<<<<< HEAD
  margin: 20px auto;
  width: 60%;
`;

const MyAccount = styled.div`
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
=======
	margin: 20px auto;
	width: 60%;
`;

const MyAccount = styled.div`
	text-align: center;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
>>>>>>> 429b726d6b98692454931c060a4235812d890e46
`;
