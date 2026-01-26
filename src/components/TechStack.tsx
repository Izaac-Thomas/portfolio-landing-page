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
        skills: ['TypeScript', 'React', 'Mantine UI', 'VisX', 'Vite']
    }
];

export function TechStack() {
    return (
        <Container id="stack" size="lg" py="xl" mb={100} style={{ scrollMarginTop: '80px' }}>
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
                // Technical_Stack
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                {stack.map((category) => (
                    <Card 
                        key={category.title} 
                        padding="lg" 
                        radius="md" 
                        style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            transition: 'border-color 0.2s',
                        }}
                    >
                        <Group align="flex-start" mb="md">
                            <ThemeIcon 
                                size="xl" 
                                radius="md" 
                                variant="light" 
                                color="yellow.5"
                                style={{
                                    backgroundColor: 'rgba(234, 179, 8, 0.1)'
                                }}
                            >
                                <category.icon size={22} />
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
                                    size="md"
                                    style={{ 
                                        textTransform: 'none', 
                                        fontWeight: 500,
                                        color: '#9ca3af',
                                        borderColor: 'rgba(255, 255, 255, 0.1)'
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
