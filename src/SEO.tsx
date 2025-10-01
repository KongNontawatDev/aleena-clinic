import { Helmet } from "react-helmet-async";

type Props = {
	title: string;
	description: string;
	name: string;
	type: string;
	url?: string;
	image?: string;
	keywords?: string;
	canonical?: string;
	structuredData?: object;
};

export default function SEO({ 
	title, 
	description, 
	name, 
	type, 
	url = "/", 
	image = "https://aleenaclinic.com/image/cover_image.png",
	keywords = "จัดฟัน, ทำฟัน, ฟันปลอม, ถอนฟัน, ฟอกสีฟัน, คลินิก, aleena, clinic, อลีนา, คลินิกทันตกรรมอลีนา, สาขาในเมืองยโสธร, ถนนแจ้งสนิท, บริหารงานโดย, ทพ.ปรัชญ์, หมอปรัชญ์, ยโสธร, ยิ้มหวาน, smile room",
	canonical,
	structuredData
}: Props) {
	const fullUrl = `https://aleenaclinic.com${url}`;
	const canonicalUrl = canonical || fullUrl;

	// Default structured data สำหรับคลินิกทันตกรรม
	const defaultStructuredData = {
		"@context": "https://schema.org",
		"@type": "DentalClinic",
		"name": "คลินิกทันตกรรมอลีนา",
		"alternateName": "Aleena Dental Clinic",
		"description": description,
		"url": fullUrl,
		"logo": "https://aleenaclinic.com/image/logo.png",
		"image": image,
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "658 ถนนแจ้งสนิท ตำบลในเมือง",
			"addressLocality": "อำเภอเมือง",
			"addressRegion": "จังหวัดยโสธร",
			"postalCode": "35000",
			"addressCountry": "TH"
		},
		"telephone": "098-356-3711",
		"email": "aleenadent@gmail.com",
		"openingHours": "Mo-Su 16:00-20:00",
		"priceRange": "$$",
		"medicalSpecialty": "Dentistry",
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "บริการทันตกรรม",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "MedicalProcedure",
						"name": "จัดฟัน"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "MedicalProcedure",
						"name": "ทำฟัน"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "MedicalProcedure",
						"name": "ฟอกสีฟัน"
					}
				}
			]
		},
		"sameAs": [
			"https://www.facebook.com/aleenadentalclinicyasothon"
		]
	};

	const finalStructuredData = structuredData || defaultStructuredData;

	return (
		<Helmet>
			{/* Standard metadata tags */}
			<meta charSet="utf-8" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link rel="canonical" href={canonicalUrl} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={fullUrl} />
			<meta property="og:site_name" content="คลินิกทันตกรรมอลีนา" />
			<meta property="og:locale" content="th_TH" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:creator" content={name} />

			{/* Additional SEO meta tags */}
			<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
			<meta name="googlebot" content="index, follow" />
			<meta name="author" content="คลินิกทันตกรรมอลีนา" />
			<meta name="publisher" content="คลินิกทันตกรรมอลีนา" />
			<meta name="copyright" content="คลินิกทันตกรรมอลีนา" />
			<meta name="language" content="th" />
			<meta name="geo.region" content="TH-35" />
			<meta name="geo.placename" content="ยโสธร" />
			<meta name="geo.position" content="15.786486;104.149396" />
			<meta name="ICBM" content="15.786486, 104.149396" />

			{/* Mobile optimization */}
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
			<meta name="theme-color" content="#4DBCB5" />
			<meta name="msapplication-TileColor" content="#4DBCB5" />

			{/* Structured Data */}
			<script type="application/ld+json">
				{JSON.stringify(finalStructuredData)}
			</script>

			{/* Preconnect to external domains for performance */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link rel="preconnect" href="https://pagead2.googlesyndication.com" />
			<link rel="preconnect" href="https://www.google-analytics.com" />

			{/* DNS prefetch for performance */}
			<link rel="dns-prefetch" href="//www.facebook.com" />
			<link rel="dns-prefetch" href="//maps.google.com" />
		</Helmet>
	);
}
