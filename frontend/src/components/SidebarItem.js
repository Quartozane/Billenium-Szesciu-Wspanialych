import React from "react";
import { ListGroupItem } from "react-bootstrap";

const SidebarItem = ({children}) => {
    return (
        <ListGroupItem as="button">{children}</ListGroupItem>
    )
}

export default SidebarItem;
