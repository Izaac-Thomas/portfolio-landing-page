import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
 import { About } from './components/About';
 import { TechStack } from './components/TechStack';
 import { SelectedWork } from './components/SelectedWork';
 import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundColor: '#111827',
        position: 'relative',
        color: 'white',
        overflow: 'hidden'
      }}
    >

      {/* Background Dot Pattern */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'radial-gradient(#8fc2f7 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
        }}
      />

      {/* Glow Effect */}
      <Box 
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(70vh, 100vw)',
          height: '50vh',
          backgroundColor: 'rgba(234, 179, 8, 0.25)',
          borderRadius: '100%',
          filter: 'blur(150px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Vignette */}
      <Box 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, #0a0a0a 120%)',
          pointerEvents: 'none',
        }}
      />

      {/* Film Grain Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          opacity: 0.05,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />


    <Box component="main" style={{ position: 'relative', zIndex: 10 }}>
      <Header />

      <Container 
        maw={'100%'}
        h="100vh" 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
      }}>
        <Stack align="center" gap="lg" maw={800}>
          <Badge 
            size="lg"
            variant="outline"
            color="yellow"
            leftSection={<IconTerminal2 size={14} style={{ marginTop: 4 }} />}
            style={{ textTransform: 'none', letterSpacing: 0.5, cursor: 'default' }}
          >
            Available for new ventures
          </Badge>

          <Title
            order={1}
            ta="center"
            style={{
              fontSize: 'clamp(2.5rem, 5vh, 4.5rem)',
              lineHeight: 1.1,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Turning Noisy Data into{' '} <Text span c="yellow" inherit>Verifiable Intelligence.</Text>
          </Title>

          <Text c="dimmed" size="xl" ta="center" maw={600} style={{ lineHeight: 1.6 }}>
            Independent Data Scientist architecting secure, local AI solutions. I build custom retrieval systems (RAG) that respect data sovereignty and solve hard operational problems.
          </Text>

          <Group mt="xl">
            <Button 
              size="lg"
              color="yellow"
              c="dark.9"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              rightSection={<IconArrowRight size={18} />}
            >
              See My Work
            </Button>
            <Button
              variant="default"
              size="lg"
              component='a'
              href="mailto:contact@izaacthomas.com"
              styles={{
                root: {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#e5e7eb',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }
              }}
            >
              Contact Me
            </Button>
          </Group>
        </Stack>
      </Container>
      <About />
      <TechStack />
      <SelectedWork />
    </Box>
    <ContactFooter />
    <Analytics />
    <SpeedInsights />
    </Box>
  );
}

export default App;
