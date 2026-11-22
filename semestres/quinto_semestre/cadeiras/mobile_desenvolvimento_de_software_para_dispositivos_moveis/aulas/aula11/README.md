# Aula 11 - Navegação com Stack Navigator no React Native

Aplicativo móvel desenvolvido com **Expo** e **React Navigation**, contendo navegação em pilha entre as telas **Cardápio** e **Detalhes**, com passagem de parâmetros e botão de retorno.

---

## 📱 Funcionalidades Implementadas

1. **Stack Navigator**: Telas `Cardápio` e `Detalhes` devidamente registradas dentro de um `NavigationContainer` e `Stack.Navigator`.
2. **Cardápio com Dados Fixos**: Exibição modular de dois lanches definidos em código (`X-Burguer Especial` e `X-Salada Tradicional`).
3. **Passagem de Parâmetros**: Cada card de lanche possui um botão que invoca `navigation.navigate('Detalhes', { nome, preco, descricao })`.
4. **Leitura de Parâmetros e Retorno**: A tela de Detalhes desestrutura `route.params`, exibe os dados recebidos e possui um botão com `navigation.goBack()`.

---

## 📂 Estrutura do Projeto

```
aula11/
├── src/
│   ├── data/
│   │   └── cardapioData.js       # Dados fixos dos lanches (modularização)
│   └── screens/
│       ├── CardapioScreen.js     # Tela 1: Lista lanches e envia parâmetros via navigation.navigate
│       └── DetalhesScreen.js     # Tela 2: Lê route.params e executa navigation.goBack
├── assets/                       # Ícones e splash screen
├── App.js                        # Configuração do NavigationContainer e Stack.Navigator
├── app.json                      # Configuração do Expo
├── index.js                      # Ponto de entrada (registerRootComponent)
└── package.json                  # Dependências e scripts
```

---

## 🚀 Como Executar

No terminal, acesse a pasta `aula11` e inicie o Expo:

```bash
cd aula11
npm start
```

Ou se preferir abrir diretamente no navegador ou emulador:
- Pressione `a` para abrir no emulador Android
- Pressione `w` para abrir na versão Web
- Pressione `i` para abrir no simulador iOS
