import type { Metadata, ResolvingMetadata } from "next";
import { jobsData } from "@/constants/jobsData";
import JobDetail from "@/pages/JobDetail";
import { notFound } from "next/navigation";

// In Next.js 15+, params is a Promise
type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    props: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const job = jobsData.find((j) => j.id === params.slug);

    if (!job) {
        return {
            title: "Job Not Found - 4KMEDIA",
        };
    }

    return {
        title: `${job.title} | Careers at 4KMEDIA`,
        description: job.description.substring(0, 160),
        alternates: {
            canonical: `https://4kmedia.in/careers/${job.id}`,
        },
    };
}

export function generateStaticParams() {
    return jobsData.map((job) => ({
        slug: job.id,
    }));
}

export default async function JobDynamicPage(props: Props) {
    const params = await props.params;
    const job = jobsData.find((j) => j.id === params.slug);

    if (!job) {
        notFound();
    }

    return <JobDetail job={job} />;
}
