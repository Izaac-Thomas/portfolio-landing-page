import './App.css'
import { 
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Badge,
  Box
 } from '@mantine/core';
 import { IconArrowRight, IconTerminal2 } from '@tabler/icons-react';
 import { Header } from './components/Header';
 import { TechStack } from './components/TechStack';
 import { SelectedWork } from './components/SelectedWork';
 import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundImage: 'radial-gradient(#374151 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        position: 'relative'
      }}
    >
    <Header />
    <Container 
      size="md" 
      h="100vh" 
      style={{ 
        display: 'flex', 
        alignItems: 'center',
        // backgroundImage: 'radial-gradient(#374151 1px, transparent 1px)',
        // backgroundSize: '40px 40px'
    }}>
      <Stack align="center" gap="lg">
        <Badge 
          size="lg"
          variant="light"
          color="grey"
          leftSection={<IconTerminal2 size={14} style={{ marginTop: 4 }} />}
          style={{ textTransform: 'none', letterSpacing: 0.5 }}
        >
          Available for new ventures
        </Badge>

        <Title
          order={1}
          style={{
            fontSize: 'clamp(2.5rem, 5vh, 4rem)',
            lineHeight: 1.1,
          }}
        >
          Turning Noisy Data into{' '} <Text span c="yellow" inherit>Verifiable Intelligence.</Text>
        </Title>

        <Text c="dimmed" size="xl" style={{ lineHeight: 1.6 }}>
          Independent Data Scientist architecting secure, local AI solutions. I build custom retrieval systems (RAG) that respect data sovereignty and solve hard operational problems.
        </Text>

        <Group mt="xl">
          <Button 
            size="lg"
            color="yellow"
            c="dark.9"
            rightSection={<IconArrowRight size={18} />}
          >
            Start a Project
          </Button>
          <Button
            variant="default"
            size="lg"
            component='a'
            href="mailto:contact@izaacthomas.com"
          >
            Contact Me
          </Button>
        </Group>
      </Stack>
    </Container>
    <TechStack />
    <SelectedWork />
    <ContactFooter />
    </Box>
  );
}

export default App;
