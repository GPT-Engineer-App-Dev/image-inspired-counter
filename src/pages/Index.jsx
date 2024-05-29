import { Button, Container, Flex, Text, useBoolean } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useBoolean(false);
  const [splits, setSplits] = useState([]);

  const startTimer = () => {
    setTimerOn.on();
  };

  const stopTimer = () => {
    setTimerOn.off();
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    setSplits([]);
  };

  const splitTime = () => {
    setSplits([...splits, time]);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black">
      <Flex direction="column" align="center" justify="center" p={4} bg="gray.900" borderRadius="lg">
        <Text fontSize="6xl" fontFamily="monospace" letterSpacing="wider" color="yellow.400">{new Date(time * 1000).toISOString().substr(11, 8)}</Text>
        <Flex mt={4}>
          <Button colorScheme="yellow" mr={2} onClick={startTimer} isDisabled={timerOn}>Start</Button>
          <Button colorScheme="red" mr={2} onClick={stopTimer} isDisabled={!timerOn}>Stop</Button>
          <Button colorScheme="green" mr={2} onClick={resetTimer}>Reset</Button>
          <Button colorScheme="purple" onClick={splitTime} isDisabled={!timerOn}>Split</Button>
        </Flex>
        <Flex direction="column" mt={4}>
          {splits.map((split, index) => (
            <Text key={index} color="whiteAlpha.800" fontFamily="monospace">{`Split ${index + 1}: ${new Date(split * 1000).toISOString().substr(11, 8)}`}</Text>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;