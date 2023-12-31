import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-content-between">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Project Partners
          </h3>
          <div className="py-28 flex flex-col lg:flex-row items-center">
          <a href={`https://www.phc.ox.ac.uk/`} className="flex items-left">
          <img src = "https://raw.githubusercontent.com/sami5001/CoMPuTEtalks/main/public/images/Oxford_Nuffield_Primary_Care_RGB.svg" alt="NDPCHS Logo" width="50%"/>
            </a>
            <a href={`https://www.ndph.ox.ac.uk/`} className="flex items-left">
            <img src = "https://www.ndph.ox.ac.uk/images/site-logos/department_main.png" alt="NDPH Logo" width="50%"/>
            </a>
          <a href={`https://www.arc-oxtv.nihr.ac.uk`} className="flex items-left">
            <img src = "https://raw.githubusercontent.com/sami5001/CoMPuTEtalks/78d25d93e6c64f9f0dd675d139197e980135ad30/public/images/NIHR_Logos_Funded-01-Col-Corp%20RGB.png" alt="NIHR Logo" width="50%"/>
            </a>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.phc.ox.ac.uk/research/medical-statistics/COMPUTE"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Project Details
            </a>
            <a
              href={`https://github.com/CoMPuTEprogramme`}
              className="mx-3 font-bold hover:underline"
            >
              View GitHub Repository
            </a>
          </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
