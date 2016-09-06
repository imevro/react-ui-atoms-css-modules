import Alert from './alert/alert';
import Panel from './panel/panel';
import Button from './button/button';
import BtnGroup from './btngroup/btngroup';
import Loading from './loading/loading';
import Label from './label/label';
import Badge from './badge/badge';
import Grid from './grid';
import Image from './image/image';
import Table from './table';
import Form from './form';
import Media from './media/media';
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
