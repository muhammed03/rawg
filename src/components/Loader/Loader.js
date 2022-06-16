import styled from 'styled-components';

const StyledLoader = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: block;
  overflow: hidden;
  background: transparent;
`;

const LoaderInner = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
  div {
    position: absolute;
    width: 80px;
    height: 80px;
    backface-visibility: hidden;
    border: 10px solid #6c6c6c;
    border-top-color: transparent;
    border-radius: 50%;
    left: 50%;

    animation: animation 1s linear infinite;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: content-box;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    border-width: 10px;
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

function Loader() {
  return (
    <StyledLoader>
      <LoaderInner>
        <div />
      </LoaderInner>
    </StyledLoader>
  );
}

export default Loader;
