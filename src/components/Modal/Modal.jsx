import { createPortal } from "react-dom";
import {
  Box,
  Image,
  Text,
  Group,
  ScrollArea,
} from "@mantine/core";

function Modal({ opened, onClose, launch }) {
  const modalElement = document.getElementById("modal-root");
  if (!modalElement) return null;
  if (!opened || !launch) return null;

  const img = launch.links?.mission_patch;
  const missionName = launch.mission_name;
  const rocketName = launch.rocket?.rocket_name;
  const details = launch.details || "No details provided";

  return createPortal(
    (
      <Box
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        onClick={onClose}
      >
        <Box
          bg="white"
          radius="md"
          p="lg"
          style={{
            width: "min(800px, 90vw)",
            maxHeight: "80vh",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Group justify="space-between" align="flex-start" mb="lg">
            <Text fw={600} fz="lg">
              {missionName}
            </Text>

          </Group>

          <ScrollArea style={{ flex: 1 }} offsetScrollbars>
            {img && (
              <Box ta="center" mb="lg">
                <Image
                  src={img}
                  alt={missionName}
                  maw={260}
                  mx="auto"
                  fit="contain"
                />
              </Box>
            )}

            <Text fw={500} mb={4}>
              Mission name:
            </Text>
            <Text c="dimmed" mb="md">
              {missionName}
            </Text>

            <Text fw={500} mb={4}>
              Rocket name:
            </Text>
            <Text c="dimmed" mb="md">
              {rocketName}
            </Text>

            <Text fw={500} mb={4}>
              Details:
            </Text>
            <Text c="dimmed">
              {details}
            </Text>
          </ScrollArea>

        </Box>
      </Box>
    ),
    modalElement
  );
}

export default Modal;

