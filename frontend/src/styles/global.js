import styled from "styled-components/macro";
import background from "../assets/background.jpg";
import { motion } from "framer-motion";

// Typography
export const H1 = styled.h1`
  font-family: "Space Mono", monospace;
  font-weight: 700;
`;

export const IndexBackground = styled.div`
  background-image: url(${background});
  min-height: 100vh;
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
  display: ${(props) => (props.exit ? "none" : "flex")};
  width: ${(props) =>
    props.expand ? "100%" : props.minimize ? "auto" : "90%"};
  max-width: ${(props) => (props.expand ? "100%" : "800px")};
  height: ${(props) => (props.expand ? "100vh" : "auto")};
  border-radius: 4px;
  margin: 0 auto;
  flex-direction: column;
`;

export const WindowTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  background-color: ${(props) => props.backgroundcolor};
  color: white;
  height: 48px;
`;

export const WindowTopBarLeft = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 16px;
`;

export const WindowTopBarRight = styled.div`
  display: flex;
  gap: 4px;
`;

export const WindowContent = styled.div`
  display: ${(props) => (props.minimize ? "none" : "grid")};
  padding: 8px 4px;
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
