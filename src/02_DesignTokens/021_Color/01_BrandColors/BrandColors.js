import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const BrandColors = () => {
    const data = useStaticQuery(graphql`
        query BrandColorsQuery {
            designTokensJson(name: { eq: "$brand-colors" }) {
                name
                mapValue {
                    name
                    compiledValue
                }
            }
        }
    `)

    return (
        <>
            <Canvas
                style={{
                    margin: "0",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    {data.designTokensJson.mapValue.map(node => (
                        <figure
                            style={{
                                margin: "0 36px 10px 30px",
                                minWidth: "200px",
                                maxWidth: "200px",
                            }}
                        >
                            <div
                                style={{
                                    height: "120px",
                                    width: "100%",
                                    backgroundColor: `${node.compiledValue}`,
                                    borderRadius: "4px",
                                    border: "2px solid #000013",
                                    boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 6px 0",
                                }}
                            ></div>
                            <figcaption
                                style={{
                                    color: "#000013",
                                    fontSize: "1.125rem",
                                    fontWeight: "700",
                                    textAlign: "left",
                                    padding: "0.4rem 0 2.5rem",
                                }}
                            >
                                brand-color({node.name})
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Canvas>

            <table
                className="docblock-argstable css-6hhrgj"
                style={{ textAlign: "left" }}
            >
                <thead className="docblock-argstable-head">
                    <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Default</th>
                        <th style={{ width: "50% !important" }}>Use</th>
                    </tr>
                </thead>
                <tbody className="docblock-argstable-body">
                    {data.designTokensJson.mapValue.map(node => (
                        <tr>
                            <td className="css-4lbn0a">
                                <span className="css-in3yi3">
                                    brand-color({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    <span>{node.compiledValue}</span>
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        background-color: brand-color(
                                        {node.name});
                                    </code>
                                </pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default BrandColors
