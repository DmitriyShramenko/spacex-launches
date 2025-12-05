import { useReducer } from 'react';
import { Card, Image, Text, Button, CardSection, Flex } from '@mantine/core';
import Modal from '../Modal/Modal';

const initialState = { opened: false };

function reducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return { ...state, opened: true };
    case "CLOSE":
      return { ...state, opened: false };
    default:
      return state;
  }
};

function LaunchCard({ launch }) {

  const image = launch.links?.mission_patch_small;
  const missionName = launch.mission_name;
  const rocketName = launch.rocket?.rocket_name;

  const [{ opened }, dispatch] = useReducer(reducer, initialState);

  return (

    <>
      <Card
        shadow="sm"
        padding="md"
        radius="md"
        withBorder
        w={240}
        h={290}
      >
        <Flex
          gap="md"
          justify="space-between"
          align="center"
          direction="column"
          wrap="nowrap"
          h='100%'
        >

          <CardSection p="md">
            <Image
              src={image}
              alt={missionName}
              h={80}
              fit="contain"
            />
          </CardSection>

          <CardSection>
            <Text
              fw={500}
              truncate="end"
              lineClamp={1}
            >
              {missionName}
            </Text>
          </CardSection>

          <CardSection>
            <Text c="dimmed">{rocketName}</Text>
          </CardSection>

          <Button
            mt="auto"
            variant="filled"
            fullWidth
            onClick={() => dispatch({ type: 'OPEN' })}
          >
            See more
          </Button>

        </Flex>
      </Card>

      <Modal
        opened={opened}
        onClose={() => dispatch({ type: "CLOSE" })}
        launch={launch}
      />

    </>

  );
};

export default LaunchCard;