import './App.css';

export default function Education() {
  const items = [
    {
      course: 'M.Sc — Computer Science',
      university: 'University College of Science, Osmania University',
      years: 'Nov 2021 – Aug 2023',
      score: '6.67 CGPA',
    },
    {
      course: 'B.Sc — Mathematics, Statistics & Computer Science',
      university: 'NSV Degree College',
      years: 'May 2017 – Oct 2021',
      score: '9.07 CGPA',
    },
    {
      course: 'Intermediate (MPC)',
      university: 'Sri Vani Junior College',
      years: '2015 – 2017',
      score: '811 / 1000',
    },
    {
      course: 'SSC',
      university: 'Sri Chaitanya High School',
      years: '2014 – 2015',
      score: '9.0 CGPA',
    },
  ];

  return (
    <section className="section" id="education">
      <div className="section-inner">
        <span className="section-eyebrow">{'// education'}</span>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">A quick rundown of where the fundamentals came from.</p>

        <div className="timeline">
          {items.map((item, index) => (
            <div className="timeline-item" key={item.course}>
              <div className="timeline-rail">
                <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="timeline-line"></span>
              </div>
              <div className="timeline-card">
                <div className="timeline-card-head">
                  <span className="timeline-course">{item.course}</span>
                  <span className="timeline-years">{item.years}</span>
                </div>
                <p className="timeline-university">{item.university}</p>
                <span className="timeline-score">Score: {item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
