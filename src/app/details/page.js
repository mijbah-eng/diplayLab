import Detail from "@/components/detail";

async function Details({ searchParams }) {
    const resolvedParams = await searchParams;
    const productId = resolvedParams?.id || "1";
    return (
        <Detail productId={productId} />
    );
}

export default Details;