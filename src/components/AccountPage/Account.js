import React, { useContext } from "react";
import Graph from "../Graph/Graph";
import { UsernameContext } from "../../Context/Store";
import styled from "styled-components";

const Account = props => {
  const [username] = useContext(UsernameContext);

  return (
    <MyAccount>
      <h2>Thank you {username} for using MyConjugator</h2>
      <p>
        You're already one step closer to reaching your <strong>Goal</strong>!
      </p>

      <span> Track your Progress...</span>
      <GraphContainer>
        <Graph />
      </GraphContainer>
    </MyAccount>
  );
};

export default Account;

const GraphContainer = styled.div`
  margin: 20px auto;
  width: 60%;
`;

const MyAccount = styled.div`
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
