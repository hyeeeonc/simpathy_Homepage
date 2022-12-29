import styled from '@emotion/styled'
import palette from '../../styles/palette'

const TitleContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
`

const TitleUnderlineContainer = styled.div`
  font-weight: 600;
  font-size: 1.7rem;
  text-transform: uppercase;

  padding: 0 18px 12px 0;

  border-bottom: 5px solid ${palette.main};
`

export const Title = ({ title }: { title: string }) => {
  return (
    <TitleContainer>
      <TitleUnderlineContainer>{title}</TitleUnderlineContainer>
    </TitleContainer>
  )
}
