import styled from 'styled-components';

const StyledMiniLoader = styled.div`
  width: 34px;
  height: 34px;
  display: inline-block;
  overflow: hidden;
  background: rgba(255, 255, 255, 0);
`;

const MiniLoaderInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: scale(0.34);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */

  div {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 10px solid #6c6c6c;
    border-top-color: transparent;
    border-radius: 50%;
    animation: animation 1s linear infinite;
    top: 50px;
    left: 50px;
    box-sizing: content-box;
  }

  @keyframes animation {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

function MiniLoader() {
  return (
    <StyledMiniLoader>
      <MiniLoaderInner>
        <div />
      </MiniLoaderInner>
    </StyledMiniLoader>
  );
}

export default MiniLoader;
