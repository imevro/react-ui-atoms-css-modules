import Alert from './alert';
import Panel from './panel';
import Button from './button';
import BtnGroup from './btngroup';
import Loading from './loading';
import Label from './label';
import Badge from './badge';
import Grid from './grid';
import Image from './image';
import Table from './table';
import Form from './form';
import Media from './media';
import Pager from './pager';
import Navbar from './navbar';

export default {
  Alert,
  Panel,
  Button,
  BtnGroup,
  Loading,
  Label,
  Badge,
  Image,
  Media,
  Pager,

  Table: {
    Container: Table.Container,
    Row: Table.Row,
    Cell: Table.Cell,
    Heading: Table.Heading,
  },

  Form: {
    Container: Form.Container,
    Group: Form.Group,
    Input: Form.Input,
    Textarea: Form.Textarea,
    Label: Form.Label,
    Select: Form.Select,
    Static: Form.Static,
    Helper: Form.Helper,
  },

  Grid: {
    Container: Grid.Container,
    Row: Grid.Row,
    Col: Grid.Col,
  },

  Navbar: {
    Container: Navbar.Container,
    Menu: Navbar.Menu,
    Link: Navbar.Link,
    Static: Navbar.Static,
    Brand: Navbar.Brand,
  },
};
