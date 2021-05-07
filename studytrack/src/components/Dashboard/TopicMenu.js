import React from "react";
import { Menu } from "antd";

const TopicMenu = ({ topics, selectedKey, changeSelectedKey,icons }) => {
    const styledTopics = [];

    function toUpperFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    topics.forEach((topic, index) =>
        styledTopics.push(
            <Menu.Item key={index} onClick={changeSelectedKey} icon={icons[index]}>
                {toUpperFirst(topic)}
            </Menu.Item>
        )
    );

    return (
        <Menu mode="inline" selectedKeys={[selectedKey]}>
            {styledTopics}
        </Menu>
    );
}
export default TopicMenu;