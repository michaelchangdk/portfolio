import React from "react";
import { motion } from "framer-motion";
// Function imports
import { FetchSection } from "../../services/clientFunctions";
import { joinString, SortTable } from "../../helpers/functions";
// Component Import
import Window from "../../components/Window";
// Styling and Asset Imports
import styled from "styled-components/macro";
import { SpaceBetween, P } from "../../styles/global";
import { FileTrayFull } from "@styled-icons/ionicons-solid/FileTrayFull";
import { ExternalLink } from "@styled-icons/heroicons-outline/ExternalLink";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { TriangleDown } from "@styled-icons/octicons/TriangleDown";
import { TriangleUp } from "@styled-icons/octicons/TriangleUp";
// Query Declaration
const query = `*[_type == "allprojects" && !(_id in path('drafts.**'))] {allprojects[]->, title, color}`;

const { format } = require("date-fns");

const AllProjects = (constraintsRef) => {
  const [loading, data] = FetchSection(query);
  const [
    sortedProjects,
    sortByDate,
    sortByTitle,
    titleSelect,
    titleSort,
    dateSelect,
    dateSort,
  ] = SortTable(loading, data);

  return (
    <Window
      title={!loading ? data[0].title : ""}
      navcolor="deeppink"
      constraintsRef={constraintsRef}
      icon={FileTrayFull}
      allowMaximize={true}
    >
      <BorderDiv>
        <ScrollMenu>
          <FileTable>
            <thead>
              <tr>
                <th>
                  <TableHeaderButton
                    onClick={() => sortByTitle()}
                    selected={titleSelect}
                    pointer="cursor"
                  >
                    <SpaceBetween>
                      Project Name
                      {titleSelect && titleSort ? <DownArrow /> : ""}
                      {titleSelect && !titleSort ? <UpArrow /> : ""}
                    </SpaceBetween>
                  </TableHeaderButton>
                </th>
                <th>
                  <TableHeaderButton
                    onClick={sortByDate}
                    selected={dateSelect}
                    pointer="cursor"
                  >
                    <SpaceBetween>
                      Date
                      {dateSelect && dateSort ? <DownArrow /> : ""}
                      {dateSelect && !dateSort ? <UpArrow /> : ""}
                    </SpaceBetween>
                  </TableHeaderButton>
                </th>
                <th>
                  <TableHeaderButton>Tags</TableHeaderButton>
                </th>
                <th>
                  <TableHeaderButton>File</TableHeaderButton>
                </th>
                <th>
                  <TableHeaderButton>View</TableHeaderButton>
                </th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                sortedProjects.map((project) => (
                  <motion.tr key={project._id} layout>
                    <TableData>
                      <EmojiSpan>{project.emoji}</EmojiSpan> {project.title}
                    </TableData>
                    <TableData>
                      {format(new Date(project.published), "dd/MM/yyyy")}
                    </TableData>
                    <TableData>
                      <P weight={300} size="14px">
                        {joinString(project.stack).toString()}
                      </P>
                    </TableData>
                    <TableData>
                      <GithubIcon />
                    </TableData>
                    <TableData>
                      <LiveIcon />
                    </TableData>
                  </motion.tr>
                ))}
            </tbody>
          </FileTable>
        </ScrollMenu>
      </BorderDiv>
    </Window>
  );
};

export default AllProjects;

const BorderDiv = styled.div`
  border: 1px solid #343a40;
  background-color: #f8f9fa;
`;

const ScrollMenu = styled.div`
  overflow: auto;
  white-space: nowrap;
  overflow-y: hidden;
`;

const FileTable = styled.table`
  width: 100%;
  text-align: left;
  /* border: 1px solid #343a40; */
  border-left: none;
  border-right: none;
  font-family: "Prompt", sans-serif;
  font-weight: 300;
  font-size: 14px;
  background-color: #f8f9fa;
`;

const TableHeaderButton = styled.button`
  width: 100%;
  padding: 4px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #343a40;
  text-align: left;
  font-family: "Prompt", sans-serif;
  font-weight: 400;
  font-size: 14px;
  background: rgb(255, 255, 255);
  background: ${(props) =>
    props.selected
      ? "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(158,202,219,1) 100%)"
      : "linear-gradient(180deg,rgba(255, 255, 255, 1) 0%,rgba(206, 212, 218, 1) 100%)"};
  color: #212529;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};
`;

const TableData = styled.td`
  padding: 4px 8px;
`;

const EmojiSpan = styled.span`
  font-size: 20px;
`;

const DownArrow = styled(TriangleDown)`
  height: 16px;
  width: 16px;
`;

const UpArrow = styled(TriangleUp)`
  height: 16px;
  width: 16px;
`;

const GithubIcon = styled(GithubOutline)`
  width: 20px;
  height: 20px;
  color: #212529;
`;

const LiveIcon = styled(ExternalLink)`
  width: 20px;
  height: 20px;
  color: #212529;
`;
