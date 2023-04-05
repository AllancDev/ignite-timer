import styled from 'styled-components'

export type ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariantColor
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  width: 100px;
  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme['green-500']};
`
