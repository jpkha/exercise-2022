import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

export const LogoMeilleursAgents = ({realtorsId}: {realtorsId: string}) => {
  const LogoContainer = styled.div`
  flex: 1 0 auto;
`
  const Logo = styled.h1`
  height: 37px;
  max-width: 133px;
  margin-left: 12px;
  position: relative;

  img {
    min-width: unset;
    max-width: unset;
    width: auto;
  }
`
  return <LogoContainer>
    <Logo>
      <Link href={`/realtors/${realtorsId}`} passHref>
        <a title="Revenir à la messagerie"><Image src="/logo-meilleursagents.svg" layout={'fill'} objectFit={'contain'} loading={'lazy'}
                  alt="logo de Meilleurs agents"/></a>
      </Link>
    </Logo>
  </LogoContainer>
}
