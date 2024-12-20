import styled from 'styled-components'

export const VagaItem = styled.li`
  border: 1px solid ${(props) => props.theme.colors.corPrincipal};
  background-color: ${(props) => props.theme.colors.corSecundaria};
  color: ${(props) => props.theme.colors.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.corPrincipal};
    color: ${(props) => props.theme.colors.corSecundaria};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.colors.corSecundaria};
  background-color: ${(props) => props.theme.colors.corPrincipal};
  color: ${(props) => props.theme.colors.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: ${(props) => props.theme.colors.corPrincipal};
    background-color: ${(props) => props.theme.colors.corSecundaria};
    color: ${(props) => props.theme.colors.corPrincipal};
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const VagaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
