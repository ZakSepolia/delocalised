import BlockIcon from "icons/Block";
import CheckmarkCircleIcon from "icons/CheckmarkCircle";
import CloseIcon from "icons/Close";
import ErrorIcon from "icons/Error";
import InfoIcon from "icons/Info";
import LoadingIcon from "icons/Loading";
import styled, { DefaultTheme } from "styled-components";
import { AlertProps } from "./types";

interface ThemedIconLabel {
	variant: AlertProps["variant"];
	theme: DefaultTheme;
	hasDescription: boolean;
}

export const variants = {
	INFO: "info",
	DANGER: "danger",
	SUCCESS: "success",
	WARNING: "warning",
	PENDING: "pending",
} as const;

const getIcon = (variant: AlertProps["variant"] = variants.INFO) => {
	switch (variant) {
		case variants.DANGER:
			return BlockIcon;
		case variants.WARNING:
			return ErrorIcon;
		case variants.SUCCESS:
			return CheckmarkCircleIcon;
		case variants.PENDING:
			return LoadingIcon;
		case variants.INFO:
		default:
			return InfoIcon;
	}
};

const IconLabel = styled.div<ThemedIconLabel>`
	background-color: #2d6a50;
	border-radius: 16px 0 0 16px;
	color: #024639;
	padding: 12px;
`;

const withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
const Details = styled.div<{ hasHandler: boolean }>`
	flex: 1;
	padding-bottom: 12px;
	padding-left: 12px;
	padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : "12px")};
	padding-top: 12px;
	color: #fff;
`;

const CloseHandler = styled.div`
	border-radius: 0 16px 16px 0;
	right: 8px;
	position: absolute;
	top: 8px;
`;

const Flex = styled.div`
	display: flex;
`;

const StyledAlert = styled(Flex)<ThemedIconLabel>`
	position: relative;
	background-color: #2d6a50;
	border-radius: 25px;
	box-shadow: 0px 4px 10px rgba(120, 118, 148, 0.14);
`;

export const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick }) => {
	const Icon = getIcon(variant);

	return (
		<StyledAlert variant={variant} hasDescription={!!children}>
			<IconLabel variant={variant} hasDescription={!!children}>
				{Icon === LoadingIcon ? (
					<Icon color="#FFF" stroke="#49A7F5" spin width="24px" />
				) : (
					<Icon color="currentColor" width="24px" />
				)}
			</IconLabel>
			<Details hasHandler={!!onClick}>
				<div className="font-[700] text-[18px]">{title}</div>
				{typeof children === "string" ? <div>{children}</div> : children}
			</Details>
			{onClick && (
				<CloseHandler>
					<CloseIcon width="24px" color="currentColor" onClick={onClick} />
				</CloseHandler>
			)}
		</StyledAlert>
	);
};
