import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', data: { label: 'Cypress' }, position: { x: 0, y: 0 } },
];

const nodeTypes = [
  { id: '2', data: { label: 'Definição: Framework de teste de código aberto baseado em JavaScript' } },
  { id: '3', data: { label: 'Utilidade Principal: Automatização de testes E2E para aplicações web' } },
  { id: '4', data: { label: 'Características-chave: Execução no mesmo loop, espera automática, time travel' } },
  { id: '5', data: { label: 'Vantagens: Configuração simples, interface intuitiva, boa documentação' } },
  { id: '6', data: { label: 'Casos de uso: Testar fluxos de usuário, verificar UI, testar integrações' } },  
  { id: '9', data: { label: 'Seletores e Comandos Básicos', type: 'expandable', items: [
    'Aprender diferentes tipos de seletores (CSS, XPath)',
    'Utilizar comandos como click(), type(), check(), select()',
    'Entender o conceito de encadeamento de comandos'
  ] } },
  { id: '10', data: { label: 'Asserções', type: 'expandable', items: [
    "Usar asserções básicas como should('exist'), should('have.text')",
    'Aprender asserções mais complexas com expect()',
    'Entender a diferença entre asserções implícitas e explícitas'
  ] } },
  { id: '11', data: { label: 'Page Objects', type: 'expandable', items: [
    'Implementar o padrão Page Object Model',
    'Criar classes para representar páginas da aplicação',
    'Refatorar testes existentes para usar Page Objects'
  ] } },
  { id: '12', data: { label: 'Fixtures e Mocking', type: 'expandable', items: [
    'Usar fixtures para dados de teste',
    'Implementar mocking de respostas de API',
    'Utilizar cy.intercept() para stubbing de requisições'
  ] } },
  { id: '13', data: { label: 'Comandos Customizados', type: 'expandable', items: [
    'Criar comandos personalizados para ações repetitivas',
    'Adicionar comandos ao arquivo commands.js',
    'Utilizar TypeScript para definição de tipos de comandos customizados'
  ] } },
  { id: '14', data: { label: 'CI/CD Integration', type: 'expandable', items: [
    'Configurar Cypress para rodar em ambientes de CI (e.g., Jenkins, CircleCI)',
    'Implementar paralelização de testes',
    'Configurar relatórios de teste automatizados'
  ] } },
  { id: '15', data: { label: 'API Testing', type: 'expandable', items: [
    'Realizar testes de API usando Cypress',
    'Validar respostas de API',
    'Combinar testes de UI com testes de API'
  ] } },
  { id: '16', data: { label: 'Performance Testing', type: 'expandable', items: [
    'Medir tempo de carregamento de páginas',
    'Utilizar o Cypress para testes de performance básicos',
    'Integrar com ferramentas de performance como Lighthouse'
  ] } },
  { id: '17', data: { label: 'Visual Testing', type: 'expandable', items: [
    'Implementar testes de regressão visual',
    'Utilizar plugins como cypress-image-snapshot',
    'Configurar tolerâncias para diferenças visuais'
  ] } },
  { id: '18', data: { label: 'Testes de Acessibilidade', type: 'expandable', items: [
    'Integrar ferramentas de teste de acessibilidade como axe-core',
    'Escrever testes para verificar conformidade com WCAG',
    'Automatizar verificações de acessibilidade em fluxos de usuário'
  ] } },
  { id: '19', data: { label: 'Mobile Testing com Cypress', type: 'expandable', items: [
    'Configurar Cypress para testes em dispositivos móveis',
    'Usar viewports móveis para simular diferentes dispositivos',
    'Implementar testes responsivos'
  ] } },

];




function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onNodeClick = useCallback((event, node) => {
    const availableNodes = nodeTypes.filter(
      (type) => !nodes.some((n) => n.id === type.id)
    );

    if (availableNodes.length > 0) {
      const newNode = availableNodes[0];
      const gap = 250; // Espaço entre os nodes
      let position;

      if (nodes.length < 3) {
        // Para os três primeiros novos nodes (2, 3, 4), cresça para o lado
        position = {
          x: node.position.x + gap,
          y: node.position.y,
        };
      } else if (nodes.length === 3) {
        // Para o quarto novo node (5), cresça para baixo
        position = {
          x: node.position.x,
          y: node.position.y + gap,
        };
      } else {
        // Para os nodes restantes, cresça para o lado novamente
        position = {
          x: node.position.x + gap,
          y: node.position.y,
        };
      }

      setNodes((nds) => [
        ...nds,
        { ...newNode, position },
      ]);

      setEdges((eds) => [
        ...eds,
        { id: `e${node.id}-${newNode.id}`, source: node.id, target: newNode.id },
      ]);
    }
  }, [nodes]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;