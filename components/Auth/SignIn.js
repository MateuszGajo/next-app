import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../store/action/authAction";

const NormalLoginForm = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { errors } = state;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item
        validateStatus={errors.email ? "error" : null}
        help={errors.email ? errors.email : null}
      >
        <Input
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="E-mail"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        validateStatus={errors.password ? "error" : null}
        help={errors.password ? errors.password : null}
      >
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Hasło"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Zapamiętaj mnie</Checkbox>)}
        <a className="login-form-forgot" href="">
          Zapomniałem hasła
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Zaloguj się
        </Button>
        Or <a href="">Zarejstruj się teraz!</a>
      </Form.Item>
    </Form>
  );
};

const SignIn = Form.create({ name: "normal_login" })(NormalLoginForm);

export default SignIn;
