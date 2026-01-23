import { Container, Title, Card, Image, Text, Group, Badge, Button, Stack, SimpleGrid } from '@mantine/core';
import { IconArrowRight, IconLock, IconBrandGithub } from '@tabler/icons-react';

const projects = [
    {
        title: 'Enterprise RAG Q&A System',
        category: 'AI ARCHITECTURE',
        description: 'A secure Retrieval-Augmented Generation pipeline for querying thousands of unstructured construction documents (RFIs, NCRs, audits, specs).',
        details: [
            'Fine-tuned BAAI embedding model for industry terminology.',
            'Orchestrated Qdrant vector search with Haystack pipelines.',
            'Acieved higher retrieval accuracy than commercial base models.'
        ],
        tech: ['Python', 'Haystack', 'Qdrant', 'FastAPI'],
        linkType: 'case-study',
    },
    {
        title: 'Lessons Learned Platform',
        category: 'FULL STACK WEB DEV',
        description: 'A modern web application for capturing and distributing critical field knowledge across construction sites.',
        details: [
            'Designed a high-performance frontend using React & TypeScript.',
            'Built a lightweight backend API with Hono.',
            'Something something, easier communication across project teams.'
        ],
        tech: ['TypeScript', 'React', 'Hono', 'Mantine'],
        linkType: 'screenshot'
    },
    {
        title: 'Private Inference Infrastructure',
        category: 'DEVOPS & ML OPS',
        description: 'Self-hosted LLM inference API designed for zero-egress environments (SOC 2 compliance).',
        details: [
            'Deployed 4-bit quantized Mistral 7b models on private endponts.',
            'Managed containerized deployment on Azure',
            'Ensured total data sovereignty for sensitive client IP.'
        ],
        tech: ['Docker', 'Azure', 'Hugging Face', 'Linux'],
        linkType: 'github'
    },
];

export function SelectedWork() {
    return (
        <Container id="work" size="md" py="xl" mb={100} style={{ scrollMarginTop: '100px' }}>
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
                // COMPLETED_PROJECTS
            </Title>
            <Stack gap="xl">
                {projects.map((project, index) => (
                    <Card key={index} padding="xl" radius="md" withBorder bg="rgba(0,0,0,0.3)">
                        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                            <Stack justify="space-between">
                                <div>
                                    <Badge color="yellow" variant="light" mb="sm">
                                        {project.category}
                                    </Badge>
                                    <Title order={3} mb="xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {project.title}
                                    </Title>
                                    <Text c="dimmed" mb="md" size="sm">
                                        {project.description}
                                    </Text>

                                    <Stack gap="xs" mb="lg">
                                        {project.details.map((detail, i) => (
                                            <Group key={i} gap="xs" justify="flex-start" align="flex-start" wrap="nowrap" preventGrowOverflow>
                                                <Text c="yellow.6" size="xs" mt={4} style={{ lineHeight: 0.6 }}>: </Text>
                                                <Text size="xs" c="gray.3">{detail}</Text>
                                            </Group>
                                        ))}
                                    </Stack>
                                </div>

                                <Group gap="xs">
                                    {project.tech.map((t) => (
                                        <Badge key={t} variant="outline" color="grey" size="sm">{t}</Badge>
                                    ))}
                                </Group>
                            </Stack>

                            <Stack 
                                justify="center" 
                                align="center" 
                                bg="rgba(255,255,255,0.3)"
                                style={{
                                    borderRadius: 8,
                                    border: '1px dashed #4b5563'
                                }} 
                                h="100%"
                                mih={200}
                            >
                                <Text c="dimmed" size="xs" tt="uppercase" lts={1}>Project Image</Text>
                                {project.linkType === 'case-study' ? (
                                    <Button variant="light" color="grey" rightSection={<IconLock size={14}/>}>
                                        Proprietary / View Details
                                    </Button>
                                ) : (
                                    <Button variant="outline" color="yellow" rightSection={<IconArrowRight size={14}/>}>
                                        View Project
                                    </Button>
                                )}
                            </Stack>

                        </SimpleGrid>
                    </Card>
                ))}
            </Stack>
        </Container>
    );
}
