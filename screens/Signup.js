import React, { useState } from "react";
import { View } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/UserInput";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import CircleLogo from "../components/CircleLogo";

export default function Signup() {
  const [name, setName] = useState("Abida");
  const [email, setEmail] = useState("abida@gmail.com");
  const [password, setPassword] = useState("bidulini");
  const [loading, setLoading] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("All fields are required!");
      setLoading(false);
      return;
    }
    // console.log("SIGNUP REQUEST =>", name, email, password);
    try {
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      });
      setLoading(false);
      console.log("sign in success! =>", data);
      alert("Sign up successfull!");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <CircleLogo />
      <Text title center>
        Sign Up
      </Text>
      <UserInput
        name="Name"
        value={name}
        setValue={setName}
        autoCapitalize="words"
      />
      <UserInput
        name="Email"
        value={email}
        setValue={setEmail}
        autoCompleteType={email}
        keyboardType="email-address"
      />
      <UserInput
        name="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        autoCompleteType="password"
      />
      <SubmitButton
        title="Sign Up"
        handleSubmit={handleSubmit}
        loading={loading}
      />
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
    </View>
  );
}
