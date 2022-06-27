import styled from "styled-components/macro";
import background from "../assets/background.jpg";
import { motion } from "framer-motion";

// Typography
export const H1 = styled.h1`
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: ${(props) => props.size || "18px"};
`;

export const H2 = styled.h2`
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: ${(props) => props.size || "18px"};
`;

export const H2SourceCode = styled.h2`
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  font-size: ${(props) => props.size || "16px"};
`;

export const P = styled.p`
  font-family: "Prompt", sans-serif;
  font-weight: 400;
  line-height: 1.3;
`;

export const IndexBackground = styled.div`
  background-image: url(${background});
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

// Not being used
export const NavbarWrapper = styled.div`
  background-color: #ced4da;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 52px;
  border-top: 4px solid #e9ecef;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

// Window Component
export const WindowWrapper = styled(motion.div)`
  background-color: #ced4da;
  border-left: 4px solid #e9ecef;
  border-top: 4px solid #e9ecef;
  border-right: 4px solid #6c757d;
  border-bottom: 4px solid #6c757d;
  width: ${(props) =>
    props.expand ? "100%" : props.minimize ? "324px" : "90%"};
  max-width: ${(props) => (props.expand ? "100%" : "800px")};
  min-height: ${(props) => (props.expand ? "100vh" : "auto")};
  height: ${(props) => (props.expand ? "100%" : "auto")};
  /* display: ${(props) => (props.exit ? "none" : "flex")}; */
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 0 auto;
`;

export const WindowTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => props.backgroundcolor};
  color: white;
  height: 48px;
`;

export const WindowTopBarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
`;

export const WindowTopBarRight = styled.div`
  display: flex;
  gap: 4px;
`;

export const WindowContent = styled(motion.div)`
  display: ${(props) => (props.minimize ? "none" : "block")};
  padding: 8px;
`;

export const RaisedWindowButton = styled.button`
  background-color: #ced4da;
  border-left: ${(props) =>
    props.enabled ? "4px solid #6c757d" : "4px solid #e9ecef"};
  border-top: ${(props) =>
    props.enabled ? "4px solid #6c757d" : "4px solid #e9ecef"};
  border-right: ${(props) =>
    props.enabled ? "4px solid #e9ecef" : "4px solid #6c757d"};
  border-bottom: ${(props) =>
    props.enabled ? "4px solid #e9ecef" : "4px solid #6c757d"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-family: "Space Mono", monospace;
  font-weight: 700;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  outline: 1px solid #343a40;
  color: black;

  :active {
    border-left: ${(props) =>
      props.disabled ? "4px solid #e9ecef" : "4px solid #6c757d"};
    border-top: ${(props) =>
      props.disabled ? "4px solid #e9ecef" : "4px solid #6c757d"};
    border-right: ${(props) =>
      props.disabled ? "4px solid #6c757d" : "4px solid #e9ecef"};
    border-bottom: ${(props) =>
      props.disabled ? "4px solid #6c757d" : "4px solid #e9ecef"};
  }
`;

// Accordion Tree Component
export const TreeHeader = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
`;

export const TreeButton = styled.button`
  border: 1.5px solid black;
  height: 20px;
  width: 20px;
  color: black;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  cursor: pointer;
  background-color: white;
`;

export const TreeIcon = styled.div`
  border: 1.5px solid #6c757d;
  height: 20px;
  width: 20px;
  color: #6c757d;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TreeChild = styled(motion.section)`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
  padding-left: 16px;
  border-style: none none none dashed;
  border-color: black;
  border-width: 0 0 0 1.5px;
`;
