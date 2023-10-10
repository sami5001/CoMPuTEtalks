import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <a href={`https://www.phc.ox.ac.uk/`} className="flex items-center">
          <img src = "images/Oxford_Nuffield_Primary_Care_RGB.svg" alt="Department Logo"/>
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
      </Container>
    </footer>
  )
}

export default Footer
