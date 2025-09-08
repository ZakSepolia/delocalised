import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonLoader({ width, className }: { width?: number; className?: string }) {
	return (
		<Skeleton
			baseColor="#176477"
			width={width ? width : 80}
			style={{ opacity: 0.5 }}
			className={className}
		/>
	);
}

export default SkeletonLoader;
