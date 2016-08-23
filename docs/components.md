# Components

Please note that _rem_ units are used for styling components.


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
  - Checkbox
  - Radio
  - Select
  - Input
  - Label
  - Static
  - Textarea
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


### Alert

```jsx
<UI.Alert message="Alert title here">
  Simple text here
</UI.Alert>

// or

<UI.Alert>
  Simple text here
</UI.Alert>
```

`Alert` props:
  * `message`

-------------------------------------------------------------------------------

### Badge

```jsx
<UI.Badge kind="success">
  42
</UI.Badge>
```

`Badge` props:
  * `primary`
  * `success`
  * `danger`
  * `warning`
  * `success`
  * `info`
  * `default`

-------------------------------------------------------------------------------

### Button

```jsx
<UI.Button type="button" kind="primary" size="xs">
  Just A Button
</UI.Button>

// or

<UI.Button to="/link" kind="success" size="md">
  Just A Link
</UI.Button>

// or

<UI.Button block type="button" size="lg" kind="primary">
  Just A Button
</UI.Button>
```

`Button` props:
  * `kind`
    - `primary`
    - `default`
    - `success`
    - `danger`
    - `warning`
    - `success`
    - `info`
  * `size`
    - `xs`
    - `sm` (default size)
    - `md`
    - `lg`
  * `block` (stretch to the full width of the container)

-------------------------------------------------------------------------------

### BtnGroup

```jsx
<UI.BtnGroup>
  <UI.Button type="button" kind="primary">button</UI.Button>
  <UI.Button type="button" kind="primary">button</UI.Button>
  <UI.Button type="button" kind="primary">button</UI.Button>
</UI.BtnGroup>
```

-------------------------------------------------------------------------------

### Image

```jsx
<UI.Image src="//" kind="circle" width="64" height="64" />

// or

<UI.Image src="//" responsive kind="rounded" width="128" height="128" />

// or

<UI.Image src="//" responsive width="128" height="128" />
```

`Image` props:
  * `kind`
    - `circle` (notice that for the perfect circle you need to provide a square image)
    - `rounded`
    - `bordered`
  * `responsive` (stretch to the full width of the container)

-------------------------------------------------------------------------------

### Label

```jsx
<UI.Label kind="success">
  Label text here
</UI.Label>
```

`Label` props:
  * `kind`
    - `primary`
    - `success`
    - `danger`
    - `warning`
    - `success`
    - `info`
    - `default`

-------------------------------------------------------------------------------

### Loading

A simple loading indicator:

```jsx
<UI.Loading />
```

-------------------------------------------------------------------------------

### Media

Media displays a media object (e.g., an image) to the left or to the right of a content block:

```jsx
<UI.Media
  left={<UI.Image src="//" width="64" height="64" />}
  body={<div>Your component goes here</div>}
/>

// or

<UI.Media
  left={<UI.Image src="//" width="64" height="64" />}
  body={<div>Your component goes here</div>}
  right={<UI.Image src="//" width="64" height="64" />}
/>

// or

<UI.Media
  body={<div>Your component goes here</div>}
  right={<UI.Image src="//" width="64" height="64" />}
/>
```

-------------------------------------------------------------------------------

### Panel

By default, `Panel` applies background color and padding in order to hold content.
This component uses media queries.

```jsx
<UI.Panel size="sm">
  Content goes here
</UI.Panel>
```

`Panel` props:
  * `size`
    - `xs`
    - `sm`

-------------------------------------------------------------------------------

### Grid (12 columns)

```jsx
<UI.Grid.Container>
  <UI.Grid.Row>
    <UI.Grid.Col xs="12" sm="6" md="4">
      1
    </UI.Grid.Col>
    <UI.Grid.Col xs="12" sm="6" md="4">
      2
    </UI.Grid.Col>
    <UI.Grid.Col xs="12" sm="6" md="4">
      3
    </UI.Grid.Col>
  </UI.Grid.Row>
  <UI.Grid.Row>
    <UI.Grid.Col xs="6" xsOffset="3">
      1
    </UI.Grid.Col>
  </UI.Grid.Row>
  <UI.Grid.Row xs="between">
    <UI.Grid.Col xs="4">
      1
    </UI.Grid.Col>
    <UI.Grid.Col xs="4">
      2
    </UI.Grid.Col>
  </UI.Grid.Row>
  <UI.Grid.Row xs="center bottom">
    <UI.Grid.Col xs="4">
      1
    </UI.Grid.Col>
    <UI.Grid.Col xs="2">
      2
    </UI.Grid.Col>
  </UI.Grid.Row>
</UI.Grid.Container>
```

By default, `Container` has its width fixed. You can use `fluid` prop to stretch it to 100%.

`Col` props that control the number of columns:
  * `xs`, `sm`, `md`, `lg`
    - values from `1` to `12`
  * `xsOffset`, `smOffset`, `mdOffset`, `lgOffset`
    - values from `1` to `12`

`Row` props that change the alignment within a column:
  * `xs`, `sm`, `md`, `lg`
    - `top`, `middle`, `bottom`
    - `start`, `center`, `end`
    - `around`, `between`

-------------------------------------------------------------------------------

### Form

```jsx
<UI.Grid.Row>
  <UI.Form.Container>
    <UI.Form.Group horizontal size="sm" kind="success">
      <UI.Grid.Col xs="4">
        <UI.Form.Label>Email</UI.Form.Label>
      </UI.Grid.Col>
      <UI.Grid.Col xs="4">
        <UI.Form.Input placeholder="Email" />
      </UI.Grid.Col>
      <UI.Grid.Col xs="4">
        <UI.Form.Static>Text</UI.Form.Static>
      </UI.Grid.Col>
    </UI.Form.Group>
  </UI.Form.Container>
</UI.Grid.Row>

// or

<UI.Form.Container>
  <UI.Form.Group>
    <UI.Form.Label>Name</UI.Form.Label>
    <UI.Form.Input placeholder="Name" />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Label>Email</UI.Form.Label>
    <UI.Form.Input placeholder="Email" />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Label>Select</UI.Form.Label>
    <UI.Form.Select kind="primary" placeholder="Placeholder" options={[
      { value: `one`, label: `one` },
      { value: `two`, label: `two` },
    ]} />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Label>Select</UI.Form.Label>
    <UI.Form.Select kind="primary" ranged placeholder="Placeholder" options={[
      { value: `one`, label: `one` },
      { value: `two`, label: `two` },
    ]} />
    <UI.Form.Select kind="primary" ranged placeholder="Placeholder" options={[
      { value: `one`, label: `one` },
      { value: `two`, label: `two` },
    ]} />
  </UI.Form.Group>
</UI.Form.Container>

// or

<UI.Form.Container>
  <UI.Form.Group>
    <UI.Form.Label block>Name</UI.Form.Label>
    <UI.Form.Input block kind="warning" placeholder="Name" />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Label block>Email</UI.Form.Label>
    <UI.Form.Input block kind="warning" placeholder="Email" />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Textarea kind="success" block rows="6" />
  </UI.Form.Group>
</UI.Form.Container>

// or

/* Use this for floating kind of label, but don't forget to add the `required` prop to any `Input` or `Textarea` */
<UI.Form.Container>
  <UI.Form.Group float>
    <UI.Form.Input type="text" placeholder="Name" required />
    <UI.Form.Label>Name</UI.Form.Label>
  </UI.Form.Group>
</UI.Form.Container>
```

#### Group

`Form.Group` props:
  * `size` (modifies padding for `Label` or `Static`)
    - `xs`
    - `sm`
    - `lg`
  * `kind`
    - `success`
    - `error`
    - `warning`
  * `horizontal` (notice that `Label`, `Static` and `Input` are modified according to `display: block`)
  * `float` (for floating label)

#### Label

`Form.Label` props:
  * `block` (stretch the label to 100% width of the container)

#### Input

`Form.Input` props:
  * `kind`(modify border color)
    - `primary` (default)
    - `success`
    - `danger`
    - `warning`
    - `info`
  * `block`

#### Select

```jsx
<UI.Form.Select kind="primary" placeholder="Placeholder" options={[
  { value: `one`, label: `one` },
  { value: `two`, label: `two` },
]} />

// or

<UI.Form.Select block kind="primary" placeholder="Placeholder" options={[
  { value: `one`, label: `one` },
  { value: `two`, label: `two` },
  { value: `three`, label: `three` },
]} />
```

`Form.Select` props:
  * `kind` (modifies border color)
    - `primary` (default)
    - `success`
    - `danger`
    - `warning`
    - `info`
  * `block`
  * `ranged`
  * `options`
    - array of objects

#### Textarea

`Form.Textarea` props:
  * `kind` (modifies border color)
    - `primary` (default)
    - `success`
    - `danger`
    - `warning`
    - `info`
  * `block`

-------------------------------------------------------------------------------

### Navbar

```jsx
<UI.Navbar.Container>
  <UI.Navbar.Menu left>
    <UI.Navbar.Brand>Brand</UI.Navbar.Brand>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Static>Static</UI.Navbar.Static>
  </UI.Navbar.Menu>
  <UI.Navbar.Menu right>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
  </UI.Navbar.Menu>
</UI.Navbar.Container>

// or

<UI.Navbar.Container fixed>
  <UI.Navbar.Menu left>
    <UI.Navbar.Brand>Brand</UI.Navbar.Brand>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Static>Static</UI.Navbar.Static>
  </UI.Navbar.Menu>
  <UI.Navbar.Menu right>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
  </UI.Navbar.Menu>
</UI.Navbar.Container>
```

`Navbar.Container` props:
  * `fixed`

`Navbar.Menu` props:
  * `left`
  * `right`

-------------------------------------------------------------------------------

### Pager
```jsx
<Pager
  current="3"
  total="20"
  visiblePages="5"
  onPageChanged={this.handlePageChanged}
  titles={{
    first: `First`,
    prev: `Prev`,
    prevSet: `<<<`,
    nextSet: `>>>`,
    next: `Next`,
    last: `Last`
  }} />
```

`Pager` props:
  * `current` - number of current page
  * `total` - total number of pages (not items)
  * `visiblePages` - number of visible pages
  * `onPageChanged` - action handler
  * `titles` - captions used on navigation buttons
    - `first` - first page
    - `prev` - previous page
    - `prevSet` - previous set of pages
    - `nextSet` - next set of pages
    - `next` - next page
    - `last` - last page

-------------------------------------------------------------------------------

### Table

```jsx
<UI.Table.Container responsive bordered>
  <UI.Table.Row>
    <UI.Table.Heading>Heading 1</UI.Table.Heading>
  </UI.Table.Row>
  <UI.Table.Row>
    <UI.Table.Cell>Cell 1</UI.Table.Cell>
  </UI.Table.Row>
</UI.Table.Container>

// or

<UI.Table.Container>
  <UI.Table.Row>
    <UI.Table.Heading>Heading 1</UI.Table.Heading>
  </UI.Table.Row>
  <UI.Table.Row>
    <UI.Table.Cell bordered>Cell 1</UI.Table.Cell>
  </UI.Table.Row>
</UI.Table.Container>
```

`Table.Container` props:
  * `responsive`
  * `bordered`

`Table.Heading` and `Table.Cell` props:
  * `bordered`
