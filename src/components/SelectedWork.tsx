import { Container, Title, Card, Image, Text, Group, Badge, Button, Stack, SimpleGrid, Box, Code } from '@mantine/core';
import { IconArrowRight, IconLock, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

const CodeVisual = ({ tech, title }: { tech: string[], title: string }) => (
    <Box
        h="100%"
        mih={220}
        p="md"
        style={{
            borderRadius: 8,
            backgroundColor: '#0d1117',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}
    >
        <Group gap={6} mb="md">
            <Box w={10} h={10} bg="#ff5f56" style={{ borderRadius: '50%' }} />
            <Box w={10} h={10} bg="#ffbd2e" style={{ borderRadius: '50%' }} />
            <Box w={10} h={10} bg="#27c93f" style={{ borderRadius: '50%' }} />
            <Text size="xs" c="dimmed" ml="auto" style={{ fontFamily: 'monospace' }}>bash</Text>
        </Group>

        <Code block color="dark" style={{ fontSize: '0.7rem', lineHeight: 1.6, background: 'transparent' }}>
            {
                title.includes('RAG') ? (
                    `from haystack import Pipeline
                    from qdrant_client import QdrantClient

                    # Initializing secure retrieval
                    vector_db = QdrantClient(host="localhost")
                    rag_pipeline = Pipeline()

                    def query(prompt):
                        """Retrieve compliant docs"""
                        return rag_pipeline.run(prompt)`
                ) : title.includes('Inference') ? (
                    `import torch
                    from transformers import AutoModel

                    # Loading 4-bit Quantized Model
                    model_id = "mistralai/Mistral-7B-v0.1"
                    model = AutoModel.from_pretrained(
                        model_id, 
                        device_map="auto",
                        load_in_4bit=True
                    )`
                ) : title.includes('Portfolio') ? (
                    `// The code you're looking at right now
                    import { MantineProvider } from '@mantine/core';
                    export function App() {
                        return (
                            <MantineProvider theme={theme}>
                                <Header />
                                <Hero />
                                <SelectedWork />
                            </MantineProvider>
                        );
                    }`
                ) : (
                    `interface ProjectState {
                    id: string;
                    status: 'active' | 'archived';
                    metrics: Record<string, number>;
                    }

                    // Type-safe data fetching
                    const getData = async () => {
                    return await api.get<ProjectState>('/v1');
                    }`
                )
            }
        </Code>
    </Box>
);

const projects = [
    {
        title: 'Enterprise RAG Q&A System',
        category: 'AI ARCHITECTURE',
        description: 'A secure Retrieval-Augmented Generation pipeline for querying thousands of unstructured construction documents (RFIs, NCRs, audits, specs).',
        details: [
            'Fine-tuned BAAI embedding model for industry terminology.',
            'Orchestrated Qdrant vector search with Haystack pipelines.',
            'Achieved higher retrieval accuracy than commercial base models.'
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
            'Streamlined knowledge transfer between project teams and site leads.'
        ],
        tech: ['TypeScript', 'React', 'Hono', 'Mantine'],
        linkType: 'case-study'
    },
    {
        title: 'Private Inference Infrastructure',
        category: 'DEVOPS & ML OPS',
        description: 'Self-hosted LLM inference API designed for zero-egress environments (SOC 2 compliance).',
        details: [
            'Deployed 4-bit quantized Mistral 7b models on private endponts.',
            'Managed containerized deployment on Azure.',
            'Ensured total data sovereignty for sensitive client IP.'
        ],
        tech: ['Docker', 'Azure', 'Hugging Face', 'Linux'],
        linkType: 'case-study'
    },
    {
        title: 'Personal Portfolio (Meta)',
        category: 'FRONTEND DEVELOPMENT & DESIGN',
        description: 'The responsive, high-performance interface you are viewing right now. Built to demonstrate clean component architecture and design system implementation.',
        details: [
            'Built with Vite & React for sub-second load times.',
            'Implemented custom glassmorphism & physics-based animations.',
            'Fully typed codebase with strict Typescript configuration.'
        ],
        tech: ['React', 'TypeScript', 'Mantine', 'Vite'],
        linkType: 'github'
    },
];

export function SelectedWork() {
    return (
        <Container id="work" size="lg" py="xl" mb={100} style={{ scrollMarginTop: '80px' }}>
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
                    <Card 
                        key={index} 
                        padding="xl" 
                        radius="md" 
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                        }}
                    >
                        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                            <Stack justify="space-between">
                                <div>
                                    <Badge 
                                        color="yellow" 
                                        variant="light" 
                                        mb="sm"
                                        radius="sm"
                                        style={{
                                            color: '#facc15', 
                                            backgroundColor: 'rgba(234, 179, 8, 0.1)'
                                        }}
                                    >
                                        {project.category}
                                    </Badge>
                                    <Title order={3} mb="xs" style={{ fontFamily: 'Inter, sans-serif', color: 'white' }}>
                                        {project.title}
                                    </Title>
                                    <Text c="gray.4" mb="md" size="sm" style={{ lineHeight: 1.6 }}>
                                        {project.description}
                                    </Text>

                                    <Stack gap="xs" mb="lg">
                                        {project.details.map((detail, i) => (
                                            <Group key={i} gap="sm" justify="flex-start" align="flex-start" wrap="nowrap">
                                                <Text c="yellow.6" size="sm" mt={2}>:</Text>
                                                <Text size="sm" c="gray.5" style={{ lineHeight: 1.5 }}>{detail}</Text>
                                            </Group>
                                        ))}
                                    </Stack>
                                </div>

                                <Group gap="xs">
                                    {project.tech.map((t) => (
                                        <Badge 
                                            key={t} 
                                            variant="outline" 
                                            color="grey" 
                                            size="sm"
                                            radius="sm"
                                            style={{
                                                textTransform: 'none',
                                                color: '#9ca3af',
                                                borderColor: 'rgba(255, 255, 255, 0.1)',
                                            }}
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </Group>
                            </Stack>

                            <Stack justify="space-between">
                                <CodeVisual tech={project.tech} title={project.title} />
                                <Group justify="flex-end">
                                    {project.linkType === 'case-study' ? (
                                        <Button variant="subtle" color="grey" size="xs" rightSection={<IconLock size={14}/>} disabled>
                                            Proprietary / Internal
                                        </Button>
                                    ) : (
                                        <Button
                                            component="a"
                                            target="_blank"
                                            href="https://github.com/izaac-thomas"
                                            variant="outline"
                                            color="yellow"
                                            size="xs"
                                            rightSection={project.linkType === 'github' ? <IconBrandGithub size={14}/> : <IconArrowRight size={14}/>}
                                            style={{ borderColor: 'rgba(234, 179, 8, 0.5)' }}
                                        >
                                            View Source
                                        </Button>
                                    )}
                                </Group>
                            </Stack>
                        </SimpleGrid>
                    </Card>
                ))}
            </Stack>
        </Container>
    );
}
