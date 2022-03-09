import React, { useEffect, useState } from "react";

interface Props {
    text: string;
    type: string;
    placeholder: string;
    className?: string;
    childRef: React.MutableRefObject<HTMLInputElement>;
    children?: JSX.Element | JSX.Element[];
}

export const EditableInput = ({
    text,
    type,
    placeholder,
    children,
    className,
    childRef
  }: Props) => {
    // Manage the state whether to show the label or the input box. By default, label will be shown.
  // Exercise: It can be made dynamic by accepting initial state as props outside the component 
    const [isEditing, setEditing] = useState(false);
    useEffect(() => {
        if(childRef && childRef.current && isEditing === true){
            childRef.current.focus();
        }
    }, [isEditing, childRef])
    
  
  // Event handler while pressing any key while editing
    const handleKeyDown = (event: any, type: any) => {
      // Handle when key is pressed
    };
  
  /*
  - It will display a label is `isEditing` is false
  - It will display the children (input or textarea) if `isEditing` is true
  - when input `onBlur`, we will set the default non edit mode
  Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
  */
    return (
      <section className={className}>
        {isEditing ? (
          <div
            onBlur={() => setEditing(false)}
            onKeyDown={e => handleKeyDown(e, type)}
          >
            {children}
          </div>
        ) : (
          <div
            onClick={() => setEditing(true)}
          >
            <span>
              {text || placeholder || "Editable content"}
            </span>
          </div>
        )}
      </section>
    );
  };
