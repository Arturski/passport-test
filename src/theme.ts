// theme.ts
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
    styles: {
        global: {
            body: {
                color: 'white.800',
                bg: 'gray.900',
                fontFamily: 'monospace'
            },
        },
    },
    colors: {
        black: "#101010",
        gray: {
            "50": "#fafafa",
            "100": "#f1f1f1",
            "200": "#e7e7e7",
            "300": "#d4d4d4",
            "400": "#adadad",
            "500": "#7f7f7f",
            "600": "#545454",
            "700": "#373737",
            "800": "#202020",
            "900": "#191919"
        },
        "blue": {
            "50": "#f4f6f9",
            "100": "#d7dee8",
            "200": "#bac7d7",
            "300": "#9badc5",
            "400": "#7d96b4",
            "500": "#6481a5",
            "600": "#4a6c96",
            "700": "#2a5284",
            "800": "#1d4372",
            "900": "#18365d"
        },
        "purple": {
            "50": "#f8f6fa",
            "100": "#e2dceb",
            "200": "#cdc3dc",
            "300": "#ae9fc7",
            "400": "#9986b9",
            "500": "#7f66a6",
            "600": "#6d509a",
            "700": "#5c3c8e",
            "800": "#4d2b84",
            "900": "#3a1b6c"
        },
        "pink": {
            "50": "#faf6f8",
            "100": "#ebdde4",
            "200": "#dcc2ce",
            "300": "#c79fb1",
            "400": "#b9869d",
            "500": "#a76784",
            "600": "#9a5172",
            "700": "#8b375d",
            "800": "#781f47",
            "900": "#591734"
        },
        "red": {
            "50": "#faf6f6",
            "100": "#ebdddc",
            "200": "#dac0be",
            "300": "#c59c9a",
            "400": "#b98886",
            "500": "#a96d6a",
            "600": "#9b5652",
            "700": "#8b3b37",
            "800": "#802924",
            "900": "#5f1c18"
        },
        "orange": {
            "50": "#fbfaf9",
            "100": "#f1ece7",
            "200": "#e1d7cb",
            "300": "#cab9a4",
            "400": "#b69e81",
            "500": "#a48762",
            "600": "#926f43",
            "700": "#7f5521",
            "800": "#644319",
            "900": "#523715"
        },
        "yellow": {
            "50": "#fefefd",
            "100": "#f9f9f5",
            "200": "#efede3",
            "300": "#e2e0cd",
            "400": "#d1cdaf",
            "500": "#b0a976",
            "600": "#918741",
            "700": "#73691d",
            "800": "#574f16",
            "900": "#474112"
        },
        "green": {
            "50": "#f9fcfb",
            "100": "#e1eee8",
            "200": "#c1dbd0",
            "300": "#9ec7b5",
            "400": "#7ab299",
            "500": "#559d7c",
            "600": "#2c855d",
            "700": "#1a6845",
            "800": "#165539",
            "900": "#12462f"
        },
        "teal": {
            "50": "#f7fafa",
            "100": "#ddebeb",
            "200": "#c1d9db",
            "300": "#9ec5c7",
            "400": "#73abae",
            "500": "#4d9498",
            "600": "#227a7f",
            "700": "#195f63",
            "800": "#154f53",
            "900": "#114144"
        },
        "cyan": {
            "50": "#f8fafb",
            "100": "#e1ebee",
            "200": "#d4e2e6",
            "300": "#c4d8dd",
            "400": "#98bac4",
            "500": "#84acb8",
            "600": "#6c9daa",
            "700": "#478494",
            "800": "#256e81",
            "900": "#1a5565"
        },
        "primary": {
            "50": "#f6f7fa",
            "100": "#dae1ea",
            "200": "#bac7d7",
            "300": "#94a8c1",
            "400": "#7f96b5",
            "500": "#627fa4",
            "600": "#4a6b96",
            "700": "#2f5687",
            "800": "#1f487c",
            "900": "#173459"
        }
    },
    components: {
        Tabs: {
            // Define global styles for Tabs component
            baseStyle: {
                // Your styles for Tabs component
                // Example: background color and text color
                bg: "gray.700",
                color: "white",
            },
        },
        Button: {
            baseStyle: {
                borderRadius: "0px",
                outline: 'none',
                boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
                transition: ".25s all ease",
                boxSizing: "border-box",
                _focus: {
                    boxShadow: "none",
                    outline: 'none',
                    borderColor: 'white'
                },
                _active: {
                    boxShadow: "none",
                    outline: 'none',
                    borderColor: 'white'
                },
                _hover: {
                    boxShadow: "none",
                    outline: 'none',
                    borderColor: 'white'
                },
            },
        },
        IconButton: {
            baseStyle: {
                bg: 'gray.700',
                color: "whiteAlpha.700",
                size: 'xs',
                outline: 'none'
            }
        },
        Popover: {
            baseStyle: {
                content: {
                    bg: "gray.700",
                },
                arrow: {
                    color: "whiteAlpha.500",
                },
                header: {
                    fontSize: "xs",
                    fontWeight: "bold",
                },
                body: {
                    fontSize: "md",
                },
            },
        },
        Drawer: {
            baseStyle: {
                dialog: {
                    bg: 'gray.800',
                    color: 'white',
                },
            },
        },
        Modal: {
            baseStyle: {
                overlay: {
                    bg: 'rgba(0, 0, 0, 0.7)',
                },
                body: {
                    bg: 'gray.700',
                    color: 'white',
                },
                header: {
                    bg: 'gray.900',
                    color: 'white',
                },
            },
        },
        Heading: {
            baseStyle: {
                fontFamily: 'monospace',
            },
        },
        InputLeftAddon: {
            baseStyle: {
                bg: 'gray.700',
                color: 'white',
            }
        }
    },

});

export default theme;