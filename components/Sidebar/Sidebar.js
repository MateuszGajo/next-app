import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class Sider extends React.Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4"];

  state = {
    openKeys: ["sub1"]
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span className="navigation-name">Pierwsza Nawigacja</span>
            </span>
          }
        >
          <Menu.Item key="1">Opcja 1</Menu.Item>
          <Menu.Item key="2">Opcja 2</Menu.Item>
          <Menu.Item key="3">Opcja 3</Menu.Item>
          <Menu.Item key="4">Opcja 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span className="navigation-name">Druga Nawigacja</span>
            </span>
          }
        >
          <Menu.Item key="5">Opcja 5</Menu.Item>
          <Menu.Item key="6">Opcja 6</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="setting" />
              <span className="navigation-name">Trzecia Nawigacja</span>
            </span>
          }
        >
          <Menu.Item key="9">Opcja 9</Menu.Item>
          <Menu.Item key="10">Opcja 10</Menu.Item>
          <Menu.Item key="11">Opcja 11</Menu.Item>
          <Menu.Item key="12">Opcja 12</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span className="navigation-name">Czwarta Nawigacja</span>
            </span>
          }
        >
          <Menu.Item key="9">Opcja 13</Menu.Item>
          <Menu.Item key="10">Opcja 14</Menu.Item>
          <Menu.Item key="11">Opcja 15</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;
