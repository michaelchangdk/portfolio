import React from "react";
import { FetchSection } from "../../services/clientFunctions";
// Component Import
import Window from "../../components/Window";
// Styling and Asset Imports
import styled from "styled-components/macro";
import { FileTrayFull } from "@styled-icons/ionicons-solid/FileTrayFull";
import { ExternalLink } from "@styled-icons/heroicons-outline/ExternalLink";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
// Query Declaration
const query = `*[_type == "allprojects" && !(_id in path('drafts.**'))] {allprojects[]->, title, color}`;

const { format } = require("date-fns");

const AllProjects = (constraintsRef) => {
  const [loading, data] = FetchSection(query);

  console.log(data);
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
            <tr>
              <th>
                <TableHeaderButton>Project Name</TableHeaderButton>
              </th>
              <th>
                <TableHeaderButton>Date</TableHeaderButton>
              </th>
              <th>
                <TableHeaderButton>Tags</TableHeaderButton>Tags
              </th>
              <th>
                <TableHeaderButton>Links</TableHeaderButton>
              </th>
            </tr>
            {!loading &&
              data[0].allprojects.map((project) => (
                <tr key={project._id}>
                  <TableData>
                    <EmojiSize>{project.emoji}</EmojiSize> {project.title}
                  </TableData>
                  <TableData>
                    {format(new Date(project.published), "dd/MM/yyyy")}
                  </TableData>
                  <TableData>
                    <TableText>
                      {project.stack.map((item) => `${item}, `)}
                    </TableText>
                  </TableData>
                  <TableData>
                    <DataItemWrapper>
                      <GithubIcon />
                      <LiveIcon />
                    </DataItemWrapper>
                  </TableData>
                </tr>
              ))}
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
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(206, 212, 218, 1) 100%
  );
  color: #212529;
`;

const TableData = styled.td`
  padding: 4px 8px;
`;

const EmojiSize = styled.span`
  font-size: 20px;
`;

const TableText = styled.span`
  text-align: left;
  font-family: "Prompt", sans-serif;
  font-weight: 300;
  font-size: 14px;
`;

const DataItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
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
