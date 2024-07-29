function Card({ img, content, header, namespace, link }) {
    return (
        <>
            <div className="w-[300px] h-[400px] rounded-md border">
                <img
                    src={img}
                    alt="img"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        {header}
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        {content}
                    </p>
                    <button type="button"
                        className="rounded-md w-full mt-3 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" data-cal-namespace={namespace}
                        data-cal-link={link}
                        data-cal-config='{"layout":"month_view"}'
                    >Schedule Now</button>
                </div>
            </div>
        </>
    )
}

export default Card