import React from 'react';
import { browserHistory } from 'react-router';
import styled from 'styled-compenents';

const Wrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class NotFound extends React.Component {
    componentDidMount() {
        browserHistory.replace('/');
    }
    render() {
        return (
            <Wrapper>
                页面不存在
            </Wrapper>
        );
    }
}

export default NotFound;