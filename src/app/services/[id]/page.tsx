import type { Metadata, ResolvingMetadata } from "next";
import { servicesData } from "@/constants/servicesData";
import ServiceDetail from "@/pages/ServiceDetail";
import { notFound } from "next/navigation";

// In Next.js 15+, params is a Promise
type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata(
    props: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const service = servicesData.find((s) => s.id === params.id);

    if (!service) {
        return {
            title: "Service Not Found - 4KMEDIA",
        };
    }

    return {
        title: `${service.t} Services | 4KMEDIA Hyderabad`,
        description: service.d,
        alternates: {
            canonical: `https://4kmedia.in/services/${service.id}`,
        },
    };
}

export function generateStaticParams() {
    return servicesData.map((service) => ({
        id: service.id,
    }));
}

export default async function ServiceDynamicPage(props: Props) {
    const params = await props.params;
    const service = servicesData.find((s) => s.id === params.id);

    if (!service) {
        notFound();
    }

    return <ServiceDetail service={service} />;
}
