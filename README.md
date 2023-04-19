# Cowlde-charts

cowlde-charts é uma biblioteca de gráficos construída utilizando React e Recharts.

![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# Instalando

Rodar no terminal dentro do diretório raiz da aplicação o seguinte comando:

```bash

$ npm i cowlde-charts

ou

$ yarn add cowlde-charts

```

# Exemplos

## Line Charts

### Simple Line

<img src="https://user-images.githubusercontent.com/74063350/232964170-624dd01e-d899-4d11-a1d6-26d721dc306e.png" align="center">

```bash
import { SimpleLineChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  lines: [
    {
      title: "uv",
      color: "#8884d8",
      dashed: { active: true, stroke: "3 3" },
      type: "linear",
    },
    {
      title: "pv",
      color: "#82ca9d",
      dashed: { active: false, stroke: "" },
      type: "monotone",
    },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      title: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ],
};

# Chart Component

<SimpleLineChart
    width: "100%"
    height: 300,
    dataSource,
    dashGrid: "3 3",
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.


## Area Charts

### Simple Area

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964301-0290854d-e20b-4629-b7e7-4cb47e2a929c.png">
</p>

```bash
import { SimpleAreaChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  areas: [
    { title: "uv", color: "#8884d8", type: "monotone", opacity: 0.7 },
    { title: "pv", color: "#82ca9d", type: "linear", opacity: 0.7 },
    { title: "amt", color: "#ffc658", type: "monotone", opacity: 0.7 },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      title: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ],
}

# Chart Component

<SimpleAreaChart
    width: "100%"
    height: 300,
    dataSource,
    dashGrid: "3 3",
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico. 

### Stacked Area

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964383-06742add-aee5-428f-9a79-dd5e26e916e3.png">
</p>

```bash
import { StackedAreaChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  areas: [
    { title: "uv", color: "#8884d8", type: "monotone", opacity: 0.7, stackId: "a" },
    { title: "pv", color: "#82ca9d", type: "monotone", opacity: 0.7, stackId: "a" },
    { title: "amt", color: "#ffc658", type: "monotone", opacity: 0.7, stackId: "a" },
  ],
  data: [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ],
};

# Chart Component

<StackedAreaChart
    width: "100%"
    height: 300,
    dataSource,
    dashGrid: "3 3",
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

## Pie Charts

### Simple Pie

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964405-ddfd2c1a-b047-49fb-b8e6-e5d887544abb.png">
</p>

```bash
import { SimplePieChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  cells: [
    { color: "#8884d8" },
    { color: "#82ca9d" },
    { color: "#ffc658" },
    { color: "#ff0000" },
  ],
  data: [
    { title: "Group A", value: 400 },
    { title: "Group B", value: 300 },
    { title: "Group C", value: 300 },
    { title: "Group D", value: 200 },
  ],
};

# Chart Component

<SimplePieChart
    width: "100%",
    height: 300,
    dataSource,
    outerRadius: 80,
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

##### outerRadius: Number
Configura o raio externo do círculo.

### Active Label Pie

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964422-a0018480-ef3d-4968-95b5-4a3be832a792.png">
</p>

```bash
import { ActiveLabelPieChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  cells: [
    { color: "#8884d8" },
    { color: "#82ca9d" },
    { color: "#ffc658" },
    { color: "#ff0000" },
  ],
  data: [
    { title: "Group A", value: 400 },
    { title: "Group B", value: 300 },
    { title: "Group C", value: 300 },
    { title: "Group D", value: 200 },
  ],
};

# Chart Component

<ActiveLabelPieChart
    width: "100%",
    height: 300,
    dataSource,
    outerRadius: 80, 
    innerRadius: 60,
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

##### outerRadius: Number
Configura o raio externo do círculo.

##### innerRadius: Number
Configura o raio interno do círculo.

## Bar Charts

### Simple Bar

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964465-b5b37b90-bec4-4b8e-90e1-7c29118312ca.png">
</p>

```bash
import { SimpleBarChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8" },
    { title: "pv", color: "#82ca9d" },
    { title: "amt", color: "#ffc658" },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      title: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ],
};

# Chart Component

<SimpleBarChart
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    barsize: 20,
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.


### Stacked Bar

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964505-1ddc9129-5f44-4284-8902-7ed25c0293af.png">
</p>

```bash
import { StackedBarChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8", stackId: "a" },
    { title: "pv", color: "#82ca9d", stackId: "a" },
    { title: "amt", color: "#ffc658", stackId: "b" },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      title: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ],
};

# Chart Component

<StackedBarChart
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    barsize: 20,
    onClick: (details: any) => console.log(details),
/>
```
#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.


### Positive and Negative Bar

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964602-daa8794c-0fd6-4484-a590-fe4f9cb8fdb8.png">
</p>

```bash
import { PositiveNegativeBarChart } from "emaki-charts";

# Data Source Object

const dataSource = {
    bars: [
    { title: "uv", color: "#8884d8" },
    { title: "pv", color: "#82ca9d" },
    { title: "amt", color: "#ffc658" },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      title: "Page B",
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: -2000,
      pv: -9800,
      amt: 2290,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ],
};

# Chart Component

<PositiveNegativeBarChart
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    barsize: 20,
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

### Brush Bar

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964847-45e184f8-abeb-4def-8d6a-7a89b5b4e2f5.png">
</p>

```bash
import { BrushBarChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8" },
    { title: "pv", color: "#82ca9d" },
  ],
  data: [
    { title: "1", uv: 300, pv: 456 },
    { title: "2", uv: -145, pv: 230 },
    { title: "3", uv: -100, pv: 345 },
    { title: "4", uv: -8, pv: 450 },
    { title: "5", uv: 100, pv: 321 },
    { title: "6", uv: 9, pv: 235 },
    { title: "7", uv: 53, pv: 267 },
    { title: "8", uv: 252, pv: -378 },
    { title: "9", uv: 79, pv: -210 },
    { title: "10", uv: 294, pv: -23 },
    { title: "12", uv: 43, pv: 45 },
    { title: "13", uv: -74, pv: 90 },
    { title: "14", uv: -71, pv: 130 },
    { title: "15", uv: -117, pv: 11 },
    { title: "16", uv: -186, pv: 107 },
    { title: "17", uv: -16, pv: 926 },
    { title: "18", uv: -125, pv: 653 },
    { title: "19", uv: 222, pv: 366 },
    { title: "20", uv: 372, pv: 486 },
    { title: "21", uv: 182, pv: 512 },
    { title: "22", uv: 164, pv: 302 },
    { title: "23", uv: 316, pv: 425 },
    { title: "24", uv: 131, pv: 467 },
    { title: "25", uv: 291, pv: -190 },
    { title: "26", uv: -47, pv: 194 },
    { title: "27", uv: -415, pv: 371 },
    { title: "28", uv: -182, pv: 376 },
    { title: "29", uv: -93, pv: 295 },
    { title: "30", uv: -99, pv: 322 },
    { title: "31", uv: -52, pv: 246 },
    { title: "32", uv: 154, pv: 33 },
    { title: "33", uv: 205, pv: 354 },
    { title: "34", uv: 70, pv: 258 },
    { title: "35", uv: -25, pv: 359 },
    { title: "36", uv: -59, pv: 192 },
    { title: "37", uv: -63, pv: 464 },
    { title: "38", uv: -91, pv: -2 },
    { title: "39", uv: -66, pv: 154 },
    { title: "40", uv: -50, pv: 186 },
  ],
};

# Chart Component

<BrushBarChart
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    brushFilter: "title",
    brushColor: "#8884d8",
    brushHeight: 30,
    barSize: 20,
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### brushFilter: String
Configura o valor do objeto dataSource que será utilizado para realizar a filtragem no brush input.

##### brushColor: String
Configura a cor do brush input.

##### brushHeight: Number
Configura a altura do brush input.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

### Stacked Positive and Negative Bar

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964825-0fb42a67-6b2a-4c17-b58a-56a7cc0c18ac.png">
</p>

```bash
import { StackedPositiveNegativeBarChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8", stackId: "a" },
    { title: "pv", color: "#82ca9d", stackId: "a" },
    { title: "amt", color: "#ffc658", stackId: "b" },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      title: "Page B",
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: -2000,
      pv: -9800,
      amt: 2290,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      title: "Page E",
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      title: "Page F",
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      title: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
};


# Chart Component

<StackedPositiveNegativeBarChart
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    barSize: 20,
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

### Biaxial Bar

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964863-a7f14d46-a41c-44d9-8a6c-95e90dede076.png">
</p>

```bash
import { BiaxialBarChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8", axisId: "left" },
    { title: "pv", color: "#82ca9d", axisId: "right" },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      title: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
    },
  ],
};

# Chart Component

<BiaxialBarChart
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    leftAxisColor: "#8884d8",
    rightAxisColor: "#82ca9d",
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### leftAxisColor: String
Configura a cor do eixo esquerdo.

##### rightAxisColor: String
Configura a cor do eixo direito.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

## Composed Charts

### Line Bar Area

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964881-74f87269-2d59-4baf-89ef-e569f1b64e11.png">
</p>

```bash
import { LineBarAreaChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  areas: [{ title: "amt", color: "#ffc658", type: "monotone", opacity: 0.7 }],
  lines: [{ title: "uv", color: "#8884d8", type: "monotone" }],
  bars: [{ title: "pv", color: "#82ca9d" }],
  data: [
    {
      title: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      title: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      title: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      title: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
  ],
};

# Chart Component

<LineBarAreaChart
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    barSize: 20,
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

### Line Bar Area Horizontal

<p align="center">
    <img src="https://user-images.githubusercontent.com/74063350/232964889-938df03f-105e-44f5-b0cd-b281deebb47d.png">
</p>

```bash
import { LineBarAreaHorizontalChart } from "emaki-charts";

# Data Source Object

const dataSource = {
  areas: [
    { title: "amt", color: "#ffc658", type: "monotone", opacity: 0.7 }
  ],
  lines: [
    { title: "uv", color: "#8884d8", type: "monotone" }
  ],
  bars: [
    { title: "pv", color: "#82ca9d" }
  ],
  data: [
    {
      title: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      title: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      title: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      title: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
  ],
};

# Chart Component

<LineBarAreaHorizontalChart
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    barSize: 20,
    onClick: (details: any) => console.log(details),
/>
```

#### Propriedades

##### width: Number | String
A largura do container.

##### height: Number | String
A altura do container.

##### dataSource: Object
Objeto de fonte dos dados a serem renderizados.

##### dashGrid: String
Configura o tracejado de fundo do grid.

##### barSize: Number
Configura o tamanho das barras.

##### onClick: Function 
Função de click do gráfico. Esta função receberá o valor referente ao ponto clicado no gráfico.

# Storybook

Para acessar o storybook para testes de componentes e acesso a documentação, rodar no diretório raiz do repositório o seguinte comando:

```bash

$ npm run storybook

# Irá rodar em: http://localhost:6006

```
