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

            <section
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
            </section>

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

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>X</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Links</h3>
                <p className="css-1p8ieni">
                    The `a` element with its `href` attribute, creates a
                    hyperlink know as a Anchor link to web pages, files, email
                    addresses, locations in the same page, or anything else a
                    URL can address. Content within each `a` should indicate the
                    link's destination. Underline should only be used or text
                    links and should never be used as a mechanism for adding
                    emphasis. While using the Ally Design System Starter Kit you
                    should create links either using the `InLink` Atom
                    components for internal links or the `ExLink` Atom component
                    for external links.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>
                            This is an <a href="#">Anchor link</a> example.
                        </p>
                    </div>
                </Canvas>
            </section>

            {/* Unordered and Ordered Lists
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
// The <ul> element represents an unordered list of items, typically rendered as a bulleted list.
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
// The <ol> element represents an ordered list of items — typically rendered as a numbered list. */}

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Lists</h3>
                <p className="css-1p8ieni">
                    The `ul` element represents an unordered list of items,
                    rendered as a bulleted list while the `ol` element
                    represents an ordered list of items renders as a numbered
                    list. Lists should either be part of a section with other
                    text for context or have a section heading.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <ul>
                            <li>This is an unordered list example</li>
                            <li>List items that are not in an order</li>
                            <li>It is just a list of items</li>
                        </ul>

                        <ol>
                            <li>This is an example of an ordered list</li>
                            <li>Items have a hierarchy</li>
                            <li>Items are shown with a number</li>
                        </ol>
                    </div>
                </Canvas>
            </section>
        </div>
    )
}

export default TypographyDecisions
