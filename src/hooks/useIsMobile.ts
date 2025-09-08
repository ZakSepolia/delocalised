import { useEffect, useState } from "react";

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // Điều kiện kiểm tra kích thước màn hình
		};

		handleResize(); // Kiểm tra kích thước màn hình lần đầu tiên

		window.addEventListener("resize", handleResize);

		// Hàm cleanup để gỡ bỏ event listener khi component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isMobile;
};

export default useIsMobile;
