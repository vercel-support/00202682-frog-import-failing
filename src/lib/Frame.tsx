import { Button, TextInput } from "frog";
import { app } from "../api/index.js";

export const frame = () => {
  app.frame("/", (c) => {
    const { buttonValue, inputText, status } = c;
    const fruit = inputText || buttonValue;
    return c.res({
      image: (
        <div
          style={{
            alignItems: "center",
            background:
              status === "response"
                ? "linear-gradient(to right, #432889, #17101F)"
                : "black",
            backgroundSize: "100% 100%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            height: "100%",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 60,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              marginTop: 30,
              padding: "0 120px",
              whiteSpace: "pre-wrap",
            }}
          >
            {status === "response"
              ? `Nice choice.${fruit ? ` ${fruit.toUpperCase()}!!` : ""}`
              : "Welcome!"}
          </div>
        </div>
      ),
      intents: [
        <TextInput placeholder="Enter custom fruit..." />,
        <Button value="apples">Apples</Button>,
        <Button value="oranges">Oranges</Button>,
        <Button value="bananas">Bananas</Button>,
        status === "response" && <Button.Reset>Reset</Button.Reset>,
      ],
    });
  });
};
