const IBpdf = ({location, height}) => {
    return (
        <div className="w-full h-full relative overflow-hidden">
            <embed src={location} type="application/pdf" width={"100%"} height={height}/>
        </div>
    )
}

export default IBpdf;