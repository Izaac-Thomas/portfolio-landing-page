import { Group, Text, Button, Box } from '@mantine/core';
import { IconTerminal2 } from '@tabler/icons-react';

export function Header() {

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box 
            component="header"
            py="md"
            px="md"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid rgba(255,255,255,0,05)',
            }}>
                <Group justify="space-between">
                    <Group gap="xs">
                        <IconTerminal2 size={20} color="#eab308" />
                        <Text fw={700} style={{
                            fontFamily: 'JetBrains Mono, monospace', letterSpacing: -0.5
                        }}>
                            IZAAC_THOMAS
                        </Text>
                    </Group>

                    <Group>
                        <Button variant="subtle" color="grey" size="sm" onClick={() => scrollTo('stack')}>Stack</Button>
                        <Button variant="subtle" color="grey" size="sm" onClick={() => scrollTo('work')}>Work</Button>
                        <Button variant="outline" color="yellow" size="sm" onClick={() => scrollTo('contact')}>Contact</Button>
                    </Group>
                </Group>
            </Box>
    );
}
