/* eslint-disable @typescript-eslint/ban-types */
import React, { MouseEventHandler, useMemo } from "react";

export type ListItemProps = {
  clickFn: MouseEventHandler,
  pageTitle: string;
  selected: boolean;
}

// For this component, we can move the logic to check which item is selected inside this child component
// But it will make the logic for ListItem dependent on the usePageContext
// Which will affect the number of renders
// -> should move the selected logic to the parent component
const ListItem = React.memo(({ selected, clickFn, pageTitle }: ListItemProps) => {
  // dont need to useCallback as method must re-run with every re-render
  const onItemClick: MouseEventHandler = (event) => {
    if (!selected) {
      clickFn(event);
    }
  }

  const itemClass = useMemo(() => {
    let commonClass = 'list-test-item';
    console.log('updated itemList class');

    if (selected) {
      commonClass += ' ' + 'list-test-item-clicked';
    }

    return commonClass;
  }, [selected]);

  return (
    <li className={itemClass} onClick={onItemClick}>
      {pageTitle}
    </li>
  );
});

export default ListItem;