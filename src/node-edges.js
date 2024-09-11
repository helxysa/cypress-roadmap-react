export const initialNodes = [
    { id: '1', data: { label: 'Cypress' } },
    { id: '2', data: { label: 'Definição: Framework de teste de código aberto baseado em JavaScript' } },
    { id: '3', data: { label: 'Utilidade Principal: Automatização de testes E2E para aplicações web' } },
    { id: '4', data: { label: 'Características-chave: Execução no mesmo loop, espera automática, time travel' } },
    { id: '5', data: { label: 'Vantagens: Configuração simples, interface intuitiva, boa documentação' }, type: 'special' },
    { id: '6', data: { label: 'Casos de uso: Testar fluxos de usuário, verificar UI, testar integrações' } },
    { 
      id: '7', 
      data: { 
        label: 'Instalação e Setup',
        items: [
          'Instalar Node.js e npm',
          'Inicializar um projeto Node.js',
          'Instalar Cypress via npm',
          'Configurar o arquivo cypress.json'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '8', 
      data: { 
        label: 'Primeiros Testes',
        items: [
          'Entender a estrutura de arquivos do Cypress',
          'Escrever testes simples usando cy.visit() e cy.get()',
          'Executar testes via interface gráfica e linha de comando'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '9', 
      data: { 
        label: 'Seletores e Comandos Básicos',
        items: [
          'Aprender diferentes tipos de seletores (CSS, XPath)',
          'Utilizar comandos como click(), type(), check(), select()',
          'Entender o conceito de encadeamento de comandos'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '10', 
      data: { 
        label: 'Asserções',
        items: [
          "Usar asserções básicas como should('exist'), should('have.text')",
          'Aprender asserções mais complexas com expect()',
          'Entender a diferença entre asserções implícitas e explícitas'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '11', 
      data: { 
        label: 'Page Objects',
        items: [
          'Implementar o padrão Page Object Model',
          'Criar classes para representar páginas da aplicação',
          'Refatorar testes existentes para usar Page Objects'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '12', 
      data: { 
        label: 'Fixtures e Mocking',
        items: [
          'Usar fixtures para dados de teste',
          'Implementar mocking de respostas de API',
          'Utilizar cy.intercept() para stubbing de requisições'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '13', 
      data: { 
        label: 'Comandos Customizados',
        items: [
          'Criar comandos personalizados para ações repetitivas',
          'Adicionar comandos ao arquivo commands.js',
          'Utilizar TypeScript para definição de tipos de comandos customizados'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '14', 
      data: { 
        label: 'CI/CD Integration',
        items: [
          'Configurar Cypress para rodar em ambientes de CI (e.g., Jenkins, CircleCI)',
          'Implementar paralelização de testes',
          'Configurar relatórios de teste automatizados'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '15', 
      data: { 
        label: 'API Testing',
        items: [
          'Realizar testes de API usando Cypress',
          'Validar respostas de API',
          'Combinar testes de UI com testes de API'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '16', 
      data: { 
        label: 'Performance Testing',
        items: [
          'Medir tempo de carregamento de páginas',
          'Utilizar o Cypress para testes de performance básicos',
          'Integrar com ferramentas de performance como Lighthouse'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '17', 
      data: { 
        label: 'Visual Testing',
        items: [
          'Implementar testes de regressão visual',
          'Utilizar plugins como cypress-image-snapshot',
          'Configurar tolerâncias para diferenças visuais'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '18', 
      data: { 
        label: 'Testes de Acessibilidade',
        items: [
          'Integrar ferramentas de teste de acessibilidade como axe-core',
          'Escrever testes para verificar conformidade com WCAG',
          'Automatizar verificações de acessibilidade em fluxos de usuário'
        ]
      },
      type: 'expandable'
    },
    { 
      id: '19', 
      data: { 
        label: 'Mobile Testing com Cypress',
        items: [
          'Configurar Cypress para testes em dispositivos móveis',
          'Usar viewports móveis para simular diferentes dispositivos',
          'Implementar testes responsivos'
        ]
      },
      type: 'expandable'
    }
  ];
  
  export const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e1-4', source: '1', target: '4' },
    { id: 'e1-5', source: '1', target: '5' },
    { id: 'e1-6', source: '1', target: '6' },
    { id: 'e1-7', source: '1', target: '7' },
    { id: 'e1-8', source: '1', target: '8' },
    { id: 'e1-9', source: '1', target: '9' },
    { id: 'e1-10', source: '1', target: '10' },
    { id: 'e1-11', source: '1', target: '11' },
    { id: 'e1-12', source: '1', target: '12' },
    { id: 'e1-13', source: '1', target: '13' },
    { id: 'e1-14', source: '1', target: '14' },
    { id: 'e1-15', source: '1', target: '15' },
    { id: 'e1-16', source: '1', target: '16' },
    { id: 'e1-17', source: '1', target: '17' },
    { id: 'e1-18', source: '1', target: '18' },
    { id: 'e1-19', source: '1', target: '19' }
  ];