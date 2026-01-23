import { Container, Text, Button, Group, Stack, Box, Anchor, Divider } from '@mantine/core';
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconTerminal2 } from '@tabler/icons-react';

export function ContactFooter() {
    return (
        <Box id="contact" bg="rgba(0,0,0,0.2)" style={{ borderTop: '1px solid #374151' }}>
            <Container size="md" py={80}>
                <Stack gap="xl" align="center">
                    <Stack gap={0} align="center">
                        <Group gap="xs" mb="sm">
                            <IconTerminal2 size={24} color="#eab308" />
                            <Text 
                                c="yellow"
                                style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: 1 }}
                            >
                                OPEN FOR WORK
                            </Text>
                        </Group>

                        <Text
                            size="xl"
                            fw={700}
                            ta="center"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
                        >
                            Have a project in mind?
                        </Text>

                        <Text c="dimmed" ta="center" maw={500} mt="md">
                            I am currently accepting new contracts for Q1 2026.
                            Whether you need a custom RAG pipeline or advice on your data strategy, I'm here to help.
                        </Text>
                    </Stack>

                    <Button
                        size="xl"
                        color="yellow"
                        c="dark.9"
                        h={60}
                        px={40}
                        component="a"
                        href="mailto:contact@izaacthomas.com"
                        leftSection={<IconMail size={24} />}
                        style={{ fontSize: '1.2rem' }}
                    >
                        contact@izaacthomas.com
                    </Button>

                    <Divider w="100%" color="dark.6" my="xl" />

                    <Group justify="space-between" w="100%">
                        <Text size="sm" c="dimmed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                            © 2026 Izaac Thomas. Edmonton, AB.
                        </Text>

                        <Group gap="lg">
                            <Anchor href="https://github.com/izaac-thomas" target="_blank" c="dimmed" lh={1}>
                                <IconBrandGithub size={22} />
                            </Anchor>
                            <Anchor href="https://linkedin.com/in/izaacthomas" target="_blank" c="dimmed" lh={1}>
                                <IconBrandLinkedin size={22} />
                            </Anchor>
                        </Group>
                    </Group>
                </Stack>
            </Container>
        </Box>
    );
}
