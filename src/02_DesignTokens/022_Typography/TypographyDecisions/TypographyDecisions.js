import React from "react"
import { Canvas } from "@storybook/addon-docs"

const TypographyDecisions = () => {
    return (
        <div
            style={{
                marginBottom: "40px",
            }}
        >
            <h2
                style={{
                    marginTop: "80px",
                    marginBottom: "10px",
                }}
            >
                Typography Decisions
            </h2>
            <p className="css-1p8ieni">
                This section visually presents the type formatting decisions
                made using the design tokens above.
            </p>

            <div
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Headings</h3>
                <p className="css-1p8ieni">
                    The `h1` to `h6` elements represent six levels of section
                    and/or page headings with `h1` being at the highest
                    hierarchical level and `h6` being at the lowest. You should
                    only use one `h1` per page. However, using more than one
                    will not result in an error, but using only one is seen as a
                    best practice. Having a single top-level title is also
                    arguably better for screenreader users, and for SEO.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h1>H1 Heading</h1>
                        <h2>H2 Heading</h2>
                        <h3>H3 Heading</h3>
                        <h4>H4 Heading</h4>
                        <h5>H5 Heading</h5>
                        <h6>H6 Heading</h6>
                    </div>
                </Canvas>
            </div>

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Paragraphs</h3>
                <p className="css-1p8ieni">
                    The `p` element represents a paragraph. Paragraphs are
                    represented in visual media as blocks of text structured to
                    group related content and separate them from adjacent blocks
                    by blank lines and/or first-line indentation.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>Paragraph body text.</p>
                    </div>
                </Canvas>
            </section>
        </div>
    )
}

export default TypographyDecisions
