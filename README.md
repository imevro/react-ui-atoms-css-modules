# React UI Atoms

Atomic components for React UI styled with CSS Modules

[![build status](https://img.shields.io/travis/jqestate/react-ui-atoms-css-modules/master.svg?style=flat)](https://travis-ci.org/jqestate/react-ui-atoms-css-modules)


## Table Of Contents

* [Usage](#usage)
* [Components List](#components-list)
* [License](#license)


## Usage
```sh
npm install --save @react-ui/atoms-css-modules
```

Supply components and their styles to `initUI`:

```javascript
// src/components/ui/index.js

import initUI from '@react-ui/core';
import atoms from '@react-ui/atoms-css-modules';

import Header from 'src/components/ui/header';

const UI = initUI(atoms.components, { Header })(atoms.styles);

export default UI;
```

Use atomic components where needed:

```jsx
import React, { Component } from 'react';

import UI from 'src/components/ui';
const {
  Button, Label,
  Grid: { Container, Row, Col },
} = UI;

class MyUberComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header>Beautiful Header</Header>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Here I am!</Label>
            <Button kind="primary">Press me</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
```


## Components List

* [Alert](/docs/components.md#alert)
* [Badge](/docs/components.md#badge)
* [Button](/docs/components.md#button)
* [BtnGroup](/docs/components.md#btngroup)
* [Image](/docs/components.md#image)
* [Label](/docs/components.md#label)
* [Loading](/docs/components.md#loading)
* [Media](/docs/components.md#media)
* [Panel](/docs/components.md#panel)
* [Grid (12 columns)](/docs/components.md#grid)
  - Container
  - Row
  - Col
* [Form](/docs/components.md#form)
  - Container
  - Group
  - Select
  - Input
  - Label
  - Static
  - Textarea
  - Helper
* [Navbar](/docs/components.md#navbar)
  - Container
  - Menu
  - Link
  - Brand
  - Static
* [Pager](/docs/components.md#pager)
* [Table](/docs/components.md#table)
  - Container
  - Row
  - Heading
  - Cell


## License

Apache License, Version 2.0
