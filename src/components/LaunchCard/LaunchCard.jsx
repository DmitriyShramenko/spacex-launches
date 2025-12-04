import { Card, Image, Text, Button, CardSection, Flex } from '@mantine/core';

function LaunchCard({ launch }) {

  const image = launch.links?.mission_patch_small;
  const missionName = launch.mission_name;
  const rocketName = launch.rocket?.rocket_name;

  return (
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
          <Text fw={500}>{missionName}</Text>
        </CardSection>

        <CardSection>
          <Text c="dimmed">{rocketName}</Text>
        </CardSection>

        <Button
          mt="auto"
          variant="filled"
          fullWidth
        >
          See more
        </Button>

      </Flex>

    </Card>
  );
};

export default LaunchCard;