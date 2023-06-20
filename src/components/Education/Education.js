import  './Education.css';

const Education = () =>{
    return <section className='education'>
        <div className='classx '>
            <h2 className='classname animate__animated animate__fadeInRight animate__delay-1s'>Class X</h2>
            <h4 className='classyear animate__animated animate__fadeInLeft animate__delay-1s'>(2012-2013)</h4>
            <h4 className='classsubject animate__animated animate__fadeInRight animate__delay-1s'>Computer Science</h4>
            <h4 className='classinstitute animate__animated animate__fadeInLeft animate__delay-1s'>Gyan Ganga International Academy, Ratanpur, Bhopal (M.P.)</h4>
            <h4 className='classaff animate__animated animate__fadeInRight animate__delay-1s'>CBSE</h4>
        </div>
        <div className='classx '>
            <h2 className='classname animate__animated animate__fadeInRight animate__delay-1s'>Class XII</h2>
            <h4 className='classyear'>(2014-2015)</h4>
            <h4 className='classsubject animate__animated animate__fadeInRight animate__delay-1s'>Computer Science</h4>
            <h4 className='classinstitute'>Gyan Ganga International Academy, Ratanpur, Bhopal (M.P.)</h4>
            <h4 className='classaff animate__animated animate__fadeInRight animate__delay-1s'>CBSE</h4>
        </div>
        <div className='classx'>
            <h2 className='classname'>B.Sc</h2>
            <h4 className='classyear'>(2015-2018)</h4>
            <h4 className='classsubject'>Computer Science</h4>
            <h4 className='classinstitute'>CPS college Badagaon, Morena (M.P.)</h4>
            <h4 className='classaff'>Jiwaji University</h4>
        </div>
        <div className='classx '>
            <h2 className='classname'>B.Ed</h2>
            <h4 className='classyear'>(2019-2021)</h4>
            <h4 className='classinstitute'>SSBBSMP, Morena (M.P.)</h4>
            <h4 className='classaff'>Jiwaji University</h4>
        </div>
    </section>
}

export default Education;