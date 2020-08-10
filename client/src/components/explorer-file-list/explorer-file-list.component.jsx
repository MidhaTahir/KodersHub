import React from "react";
import "./explorer-file-list.styles.css";
import { ReactComponent as HtmlSvg } from "../../images/html-svg.svg";
import { ReactComponent as CssSvg } from "../../images/css-svg.svg";
import { ReactComponent as JsSvg } from "../../images/js-svg.svg";
import { Link } from "react-router-dom";

export default function ExplorerFileList() {
  return (
    <div className="filelist">
      <Link to="/dashboard/html">
        <HtmlSvg className="file-svg" />
      </Link>
      <Link to="/dashboard/css">
        <CssSvg className="file-svg" />
      </Link>
      <Link to="/dashboard/javascript">
        <JsSvg className="file-svg" />
      </Link>
    </div>
  );
}
