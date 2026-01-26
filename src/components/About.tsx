import { Container, Text, Title, SimpleGrid, ThemeIcon, Stack, Box, Group } from '@mantine/core';
import { IconShovel, IconCpu, IconBrowserCheck } from '@tabler/icons-react';

function Feature({ icon: Icon, title, desc }: {icon: any, title: string, desc: string }) {
    return (
        <Group
            wrap="nowrap"
            align="flex-start"
            p="md"
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 8
            }}
        >
            <ThemeIcon size={40} radius="md" variant="light" color="yellow" style={{ flexShrink: 0 }}>
                <Icon size={22} />
            </ThemeIcon>
            <div>
                <Text fw={700} size="md" mb={4} c="white" style={{ fontFamily: 'Inter, sans-serif' }}>{title}</Text>
                <Text size="sm" c="dimmed" style={{ lineHeight: 1.5 }}>{desc}</Text>
            </div>
        </Group>
    );
}

export function About() {
    return (
        <Box id="about" py={120} style={{ borderTop: '1px solid #374151' }}>
            <Container size="lg">
                <Title
                    order={2}
                    mb="xl"
                    c="dimmed"
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '1.2rem',
                        textTransform: 'uppercase',
                        letterSpacing: 2
                    }}
                >
                    // WHO_AM_I
                </Title>
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60} verticalSpacing={40}>
                    <Stack gap="lg">
                        <Title order={3} size="h1" style={{ lineHeight: 1.1, fontFamily: 'Inter, sans-serif' }}>
                            I build software that <Text span c="yellow" inherit>survives</Text> the job site.
                        </Title>

                        <Text c="gray.3" size="lg" style={{ lineHeight: 1.6 }}>
                            My background isn't typical for a Data Scientist. I spent over 5 years in construction, starting as a <Text span c="yellow" fw={500}>Labourer</Text> and working my way up to <Text span c="yellow" fw={500}>Foreman</Text>.
                        </Text>

                        <Text c="gray.4" size="md" style={{ lineHeight: 1.6 }}>
                            I know that on a project site, complexity is a liability. Today, I use that field experience to architect AI solutions that are robust, secure, and genuinely useful to the teams building our infrastructure.
                        </Text>
                    </Stack>

                    <Stack gap="md">
                        <Feature
                            icon={IconShovel}
                            title="Field-First Perspective"
                            desc="I understand the difference between an RFI and an NCR, and why software needs to work when you're wearing gloves."
                        />
                        <Feature
                            icon={IconCpu}
                            title="Local AI & Architecture"
                            desc="Specialized in RAG pipelines, vector search (Qdrant), and running private LLMs on your own infrastructure."
                        />
                        <Feature
                            icon={IconBrowserCheck}
                            title="Application Engineering"
                            desc="I deliver end-to-end applications. I wrap my models in type-safe interfaces (React/TS) so your team can interact with the intelligence immediately."
                        />
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
