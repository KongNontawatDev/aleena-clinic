import { Helmet } from "react-helmet-async";
type Props = {
	title: string;
	description: string;
	name: string;
	type: string;
  url?:string
};
export default function SEO({ title, description, name, type,url="/" }: Props) {
	return (
		<Helmet>
			{/* Standard metadata tags */}
      <meta charSet="utf-8" />
			<title>{title}</title>
			<meta name="description" content={description} />

			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta
				property="og:image"
				content="https://aleenaclinic.com/image/cover_image.png"
			/>
			<meta property="og:url" content={"https://aleenaclinic.com"+url} />

			<meta name="twitter:creator" content={name} />
			<meta name="twitter:card" content={"summary_large_image"} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta
				property="twitter:image"
				content="https://aleenaclinic.com/image/cover_image.png"
			/>
		</Helmet>
	);
}
