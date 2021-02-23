import styled, { css } from 'styled-components';


interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
}
th{
  background-color:#7159C1;
  color: #fff;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
  
}

th, td {
  padding: 5px;
}

`;