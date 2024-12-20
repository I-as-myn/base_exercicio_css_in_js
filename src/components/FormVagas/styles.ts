import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.colors.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.colors.corPrincipal};
`

export const BtnPesquisar = styled.button`
  background-color:${(props) => props.theme.colors.corPrincipal};
  border: 1px solid ${(props) => props.theme.colors.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color:${(props) => props.theme.colors.corSecundaria};
  margin-left: 8px;
  cursor: pointer:`
