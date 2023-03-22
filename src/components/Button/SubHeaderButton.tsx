import React from "react";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "@chakra-ui/react";

import { SvgIcon } from "components/Icons";
import type { TIcon } from "components/Icons";

interface ISubHeaderButtonProps {
  icon: TIcon;
  label: string;
  to?: string;
  onButtonClick?: () => void;
}

const SubHeaderButton: React.FC<ISubHeaderButtonProps> = ({ icon, label, to, onButtonClick }) => {
  return (
    <Tooltip key={`Tooltip-${icon}`} label={label} placement="top" bg="blue.500" hasArrow>
      {to ? (
        <Link to={to}>
          <Button onClick={onButtonClick || null}>
            <SvgIcon icon={icon} fill="#3182CE" width="2vw" height="2vh" />
          </Button>
        </Link>
      ) : (
        <Button onClick={onButtonClick || null}>
          <SvgIcon icon={icon} fill="#3182CE" width="2vw" height="2vh" />
        </Button>
      )}
    </Tooltip>
  );
};

export default SubHeaderButton;
