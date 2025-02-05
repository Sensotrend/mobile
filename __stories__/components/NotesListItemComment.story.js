/* eslint import/no-extraneous-dependencies: 0 */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import faker from "faker";
import startOfToday from "date-fns/start_of_today";
import setHours from "date-fns/set_hours";
import setMinutes from "date-fns/set_minutes";

import StoryContainerComponent from "../utils/StoryContainerComponent";
import NotesListItemComment from "../../src/components/NotesListItemComment";

faker.seed(123);

const currentUserId = "1";
const timestampEarlierToday = setMinutes(setHours(startOfToday(), 9), 41);
const note = {
  id: "1",
  timestamp: timestampEarlierToday,
  messageText: `#note This is a note. ${faker.fake("{{lorem.paragraph}}")}`,
  userId: "1",
};
const comment = {
  id: "2",
  timestamp: timestampEarlierToday,
  messageText: faker.fake("#hashtag1 {{lorem.paragraph}} #hashtag2"),
  userId: "1",
  userFullName: "Jell Jellyfish",
};
const onPressEditComment = () => {};
const onPressDeleteComment = () => {};

storiesOf("NotesListItemComment", module).add("default", () => (
  <StoryContainerComponent>
    <NotesListItemComment
      style={{ width: 300 }}
      currentUserId={currentUserId}
      note={note}
      comment={comment}
      onPressEditComment={onPressEditComment}
      onPressDeleteComment={onPressDeleteComment}
    />
  </StoryContainerComponent>
));

const commentWithLongUserFullName = {
  id: "1",
  timestamp: timestampEarlierToday,
  messageText: faker.fake("#hashtag1 {{lorem.paragraph}} #hashtag2"),
  userId: "1",
  userFullName: "This is a really long full name for a user",
};

storiesOf("NotesListItemComment", module).add("long user full name", () => (
  <StoryContainerComponent>
    <NotesListItemComment
      style={{ width: 300 }}
      currentUserId={currentUserId}
      note={note}
      comment={commentWithLongUserFullName}
      onPressEditComment={onPressEditComment}
      onPressDeleteComment={onPressDeleteComment}
    />
  </StoryContainerComponent>
));
