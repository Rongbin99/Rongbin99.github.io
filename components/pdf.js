/**
 * Variable embedded PDF viewer
 * 
 * @param {string} location - Location of the PDF file.
 * @param {number} height - Height of the PDF viewer.
 * @return {void} Embedded PDF viewer with PDF.
 * 
 * Usage:
 * - import IBpdf from "../components/pdf.js";
 * - `<IBpdf location="<REQUIRED>" height="<REQUIRED>"/>`
 */
const IBpdf = ({location, height}) => {
    return (
        <div className="w-full h-full relative overflow-hidden">
            <embed src={location} type="application/pdf" width={"100%"} height={height}/>
        </div>
    )
}

export default IBpdf;
