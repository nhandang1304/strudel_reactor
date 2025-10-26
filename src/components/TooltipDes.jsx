import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import "../css/NewDesign.css"
function TooltipCustom({children, placement="bottom", title }) {
    return (
        <OverlayTrigger placement={placement} delay={{ show: 50, hide: 100 }}
            overlay={<Tooltip className="tooltip">{title}</Tooltip>}>
            {children}
        </OverlayTrigger>
    )
}
export default TooltipCustom;