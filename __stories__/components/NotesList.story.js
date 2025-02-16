/* eslint import/no-extraneous-dependencies: 0 */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import faker from "faker";
import subDays from "date-fns/sub_days";

import StoryContainerComponent from "../utils/StoryContainerComponent";
import NotesList from "../../src/components/NotesList";
import {
  DEFAULT_LOW_BG_BOUNDARY_VALUE,
  DEFAULT_HIGH_BG_BOUNDARY_VALUE,
  GRAPH_RENDERER_THREE_JS,
} from "../../src/components/Graph/helpers";

faker.seed(123);

const notesFetchAsync = () => {};
const notesFetchSetSearchFilter = () => {};
const commentsFetchAsync = () => {};
const graphDataFetchAsync = () => {};
const navigateEditNote = () => {};
const onDeleteNotePressed = () => {};
const navigateAddComment = () => {};
const navigateEditComment = () => {};
const onDeleteCommentPressed = () => {};
const notes = [];
for (let i = 0; i < 100; i += 1) {
  notes.push({
    id: i.toString(),
    timestamp: subDays(new Date("01/17/2018 9:41 AM"), i),
    messageText: faker.fake("{{lorem.paragraph}} #exercise #meal"),
    userId: "1",
  });
}
const currentUser = {
  userId: "1",
  username: "email@gmail.com",
  fullName: "Jill Jellyfish",
  lowBGBoundary: DEFAULT_LOW_BG_BOUNDARY_VALUE,
  highBGBoundary: DEFAULT_HIGH_BG_BOUNDARY_VALUE,
};
const graphRenderer = GRAPH_RENDERER_THREE_JS;

const props = {
  currentUser,
  currentProfile: currentUser,
  notes,
  notesFetchAsync,
  notesFetchSetSearchFilter,
  commentsFetchAsync,
  graphDataFetchAsync,
  navigateEditNote,
  onDeleteNotePressed,
  navigateAddComment,
  navigateEditComment,
  onDeleteCommentPressed,
  graphRenderer,
};

storiesOf("NotesList", module).add("default", () => (
  <StoryContainerComponent>
    <NotesList {...props} />
  </StoryContainerComponent>
));
