import { Container, SimpleGrid, Card, Text, Group, Badge, ThemeIcon, Title } from '@mantine/core';
import { IconDatabase, IconBrain, IconServer, IconAppWindow } from '@tabler/icons-react';

const stack = [
    {
        title: 'AI & Inference',
        icon: IconBrain,
        description: 'Local LLM development & RAG architecture',
        skills: ['Python', 'Haystack', 'LlamaCPP', 'Hugging Face', 'Sentence-Transformers', 'Mistral 7b']
    },
    {
        title: 'Vector & Data',
        icon: IconDatabase,
        description: 'High-dimensional search & storage',
        skills: ['Qdrant', 'Pandas', 'NumPy', 'MySQL', 'Scikit-Learn']
    },
    {
        title: 'API & Backend',
        icon: IconServer,
        description: 'High-performance logic layers',
        skills: ['FastAPI', 'Hono', 'Docker', 'Azure', 'Node.js']
    },
    {
        title: 'Interface',
        icon: IconAppWindow,
        description: 'Modern, type-safe frontends',
        skills: ['TypeScript', 'React', 'Mantine UI', 'VixX', 'Vite']
    }
];

export function TechStack() {
    return (
        <Container id="stack" size="md" py="xl" mb={100} h="100vh" style={{ scrollMarginTop: '100px' }}>
            <Title
                order={2}
                mb="lg"
                c="dimmed"
                style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: 2
                }}
            >
                // Technical_Specification
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                {stack.map((category) => (
                    <Card key={category.title} padding="lg" radius="md" withBorder bg="rgba(0,0,0,0.3)">
                        <Group align="flex-start" mb="md">
                            <ThemeIcon size="lg" radius="md" variant="light" color="yellow">
                                <category.icon size={20} />
                            </ThemeIcon>
                            <div>
                                <Text fw={700} size="lg" c="white" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {category.title}
                                </Text>
                                <Text size="sm" c="dimmed">
                                    {category.description}
                                </Text>
                            </div>
                        </Group>

                        <Group gap={8}>
                            {category.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                    color="grey"
                                    radius="sm"
                                    size="lg"
                                    style={{ 
                                        textTransform: 'none', 
                                        fontWeight: 500,
                                        color: '#d1d5db'
                                    }}
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </Group>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
}
