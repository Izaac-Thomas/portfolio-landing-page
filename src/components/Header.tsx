import { Group, Text, Button, Box, Burger, Drawer, Stack, Container } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconTerminal2 } from '@tabler/icons-react';

export function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            close();
        }
    };

    return (
        <Box 
            component="header"
            py="md"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                backgroundColor: 'rgba(17, 24, 39, 0.85)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
                <Container size="xl">
                <Group justify="space-between">
                    <Group gap="xs" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <IconTerminal2 size={22} color="#eab308" />
                        <Text fw={700} className="cursor-blink" style={{
                            fontFamily: 'JetBrains Mono, monospace', letterSpacing: -0.5
                        }}>
                            IZAAC_THOMAS
                        </Text>
                    </Group>

                    <Group visibleFrom="xs" gap="sm">
                        <Button variant="subtle" color="grey" size="sm" onClick={() => scrollTo('about')} style={{ color: '#9ca3af', fontWeight: 500 }}>About</Button>
                        <Button variant="subtle" color="grey" size="sm" onClick={() => scrollTo('stack')} style={{ color: '#9ca3af', fontWeight: 500 }}>Stack</Button>
                        <Button variant="subtle" color="grey" size="sm" onClick={() => scrollTo('work')} style={{ color: '#9ca3af', fontWeight: 500 }}>Work</Button>
                        <Button variant="outline" color="yellow" size="sm" onClick={() => scrollTo('contact')} style={{ color: '#9ca3af', fontWeight: 500 }}>Contact</Button>
                    </Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                </Group>
                </Container>

                <Drawer 
                    opened={opened} 
                    onClose={close} 
                    position="right" 
                    padding="xl" 
                    size={isMobile ? '100%' : 'md'}
                    styles={{
                        content: { 
                            backgroundColor: 'rgba(17, 24, 39, 0.85)', 
                            backdropFilter: 'blur(12px)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.05)' 
                        },
                        header: { 
                            backgroundColor: 'transparent',
                            color: 'white' 
                        },
                        close: {
                            color: 'white',
                            transition: 'background-color 0.2s',
                            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                        }
                    }}
                >
                    <Stack gap="lg" mt="xl">
                        <Button 
                            variant="subtle" 
                            color="grey" 
                            size="lg" 
                            onClick={() => scrollTo('about')}
                            fullWidth
                            justify="flex-start"
                            leftSection={<Text c="yellow" span>//</Text>}
                            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem' }}
                        >
                            WHO_AM_I
                        </Button>
                        <Button 
                            variant="subtle" 
                            color="grey" 
                            size="lg" 
                            onClick={() => scrollTo('stack')}
                            fullWidth
                            justify="flex-start"
                            leftSection={<Text c="yellow" span>//</Text>}
                            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem' }}
                        >
                            TECHNICAL_STACK
                        </Button>
                        <Button 
                            variant="subtle" 
                            color="grey" 
                            size="lg" 
                            onClick={() => scrollTo('work')}
                            fullWidth
                            justify="flex-start"
                            leftSection={<Text c="yellow" span>//</Text>}
                            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem' }}
                        >
                            COMPLETED_PROJECTS
                        </Button>
                        <Button 
                            variant="outline" 
                            color="yellow" 
                            size="lg" 
                            onClick={() => scrollTo('contact')}
                            fullWidth
                            mt="xl"
                        >
                            Contact Me
                        </Button>
                    </Stack>
                </Drawer>
            </Box>
    );
}
