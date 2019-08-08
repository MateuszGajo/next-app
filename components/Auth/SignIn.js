import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { signIn } from "../../store/action/authAction";

const NormalLoginForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      const validateEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
      if (!validateEmail.test(values.mail) && values.mail !== "admin")
        return props.form.setFields({
          mail: {
            value: values.mail,
            errors: [new Error("Wpisz poprawny email!")]
          }
        });
      else if (values.password !== "admin")
        return props.form.setFields({
          mail: {
            value: values.mail,
            errors: [""]
          },
          password: {
            value: values.password,
            errors: [new Error("Nieprawidłowe hasło!")]
          }
        });
      !err && props.signin(values);
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("mail", {})(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="E-mail"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Wpisz hasło!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

const SignIn = Form.create({ name: "normal_login" })(NormalLoginForm);

const mapDispatchToProps = dispatch => {
  return {
    signin: creds => dispatch(signIn(creds))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignIn);
