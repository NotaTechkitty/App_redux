import React from "react";
import PropTypes from "prop-types";

function IconButton({
  icon,
  notification = { quantity: 0 },
  styledNotification,
  className,
  onClick,
}) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {icon}
      {notification.quantity !== 0 ? (
        <span className={styledNotification}>{notification.quantity}</span>
      ) : null}
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.elementType,
  notification: PropTypes.object,
  styledNotification: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;

export const renderIconButton = (listIcon) =>
  listIcon.map((item) => (
    <IconButton
      key={item.id}
      icon={item.icon}
      className="button-icon"
      onClick={item.onClick}
      notification={item.notification}
      styledNotification={item.styledNotification}
    />
  ));
