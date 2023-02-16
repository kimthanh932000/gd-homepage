import Hero from "./hero/Hero";
import Testimonials from "./testimonials/Testimonials";
import Courses from "./courses/Courses";
import AppDownload from "./app-download/AppDownload";
import Footer from "layout/footer/Footer";

export default function Index() {
	return (
		<>
			<Hero/>
			<Testimonials/>
			<Courses/>
			<AppDownload/>
		</>
	);
}
