import { EXAMPLES } from "../data.js";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
export default function Examples() {
      const [selectedTopic, setSelectedTopic] = useState();
      function handleSelect(selectedButton) {
        //selectedButton => 'components', 'JSX', 'Props', 'State'
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
      }
    return (
           <section id="examples">
          <h2>Examples</h2>
          {/* //menu : liste of buttons */}
          <menu>
            {/* this called components compositions */}

            {/* App() runs → defines handleSelect.

            <TabButton> is called with props.

            TabButton() returns JSX with <button onClick={props.onSelect}>.

            React renders the <button> and attaches the event listener.

            User clicks → props.onSelect (the arrow function) executes.

            Arrow function calls handleSelect('components').

            handleSelect logs the message. ✅
                          */}

            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {/** {!selectedTopic} mean undefined    */}
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic]?.title}</h3>
              <p>{EXAMPLES[selectedTopic]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic]?.code}</code>
              </pre>
            </div>
          )}
        </section>
    );
}