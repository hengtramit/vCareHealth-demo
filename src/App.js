import header from './header.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={header} alt="Bachelor of Computer Science"/>
        </div>
        <h1>1. Program Overview</h1>
        <p>
            <b>Bachelor of Computer Science</b> is the study of computers and computational systems, we focus mostly on software systems, including computer theory, design, development, and application. The majority of Computer Science is related to Computer Systems, Data Science, Machine Learning, Information Security, Database Management, Design Thinking, Programming Languages, Software Engineering, and Theory of Computing.
        </p>
        <p>
            At the end of the bachelor program, students will gain a deep knowledge of computer science such as web and/or mobile programming, database administration, and UI/UX design. In addition, students will be able to solve complex technical problems and address the needs of the community and society.
        </p>
        <p>
            Within 3-5 years from graduation, our students are expected to become IT professionals in the leading IT industries; IT researchers of total activities; leaders in a multidisciplinary, collaborative, team environment, and lifetime learners through the skills provided that enable them to adapt quickly to this challenging domain.
        </p>
        <h1>2. Learning Outcomes</h1>
        <p>Upon completion of this program, the students will be able to:</p>
        <ul>
            <li>Develop a website or web application</li>
            <li>Develop mobile application</li>
            <li>Analysis and design database</li>
            <li>Understand the social and ethical implications of working as a professional in the field of computer science</li>
            <li>Critically analyze a problem and design, implement, and evaluate a computer solution that meets the requirement</li>
            <li>Work effectively in small groups on medium scale computing projects</li>
        </ul>
        <h1>3. Future Careers</h1>
        <ul>
            <li>Software Developer (Web, Mobile, Java, API...)</li>
            <li>Data Analyst</li>
            <li>IT Project Manager</li>
            <li>Digital Innovator</li>
            <li>Qaulity Assurance Engineer</li>
            <li>Database Designer and Administrator</li>
            <li>Digital Technology Entrepreneur</li>
        </ul>
        <h1>4. Program Structure</h1>
        <div>
            <table>
                <tr>
                    <th colspan="3"><strong>Year 1</strong></th>
                </tr>
                <tr>
                    <td><strong>Term 1</strong></td>
                    <td><strong>Term 2</strong></td>
                    <td><strong>Term 3</strong></td>
                </tr>
                <tr>
                    <td>- Algorithms and Programming I</td>
                    <td>- Algorithms and Programming II</td>
                    <td>- Advanced Algorithms</td>
                </tr>
                <tr>
                    <td>- Linear Algebra</td>
                    <td>- Introduction to Networks (CCNA1)</td>
                    <td>- Basic Robotics</td>
                </tr>
                <tr>
                    <td>- Liberal Arts</td>
                    <td>- Probability and Statistics</td>
                    <td>- Web Design</td>
                </tr>
                <tr>
                    <td>- Information Technology Essentials</td>
                    <td>- Discrete Mathematics</td>
                    <td>- Database Analysis and Design</td>
                </tr>
                <tr>
                    <td>- Life Skill</td>
                    <td>- Soft Skills II</td>
                    <td>- Creativity & Problem Solving</td>
                </tr>
                <tr>
                    <td>- Seminar</td>
                    <td>- Seminar</td>
                    <td>- Seminar</td>
                </tr>
                <tr>
                    <th colspan="3"><strong>Year 2</strong></th>
                </tr>
                <tr>
                    <td><strong>Term 4</strong></td>
                    <td><strong>Term 5</strong></td>
                    <td><strong>Term 6</strong></td>
                </tr>
                <tr>
                    <td>- Web Application</td>
                    <td>- Mobile Programming</td>
                    <td>- Software Engineering</td>
                </tr>
                <tr>
                    <td>- Database Administration</td>
                    <td>- Design Thinking</td>
                    <td>- Project I</td>
                </tr>
                <tr>
                    <td>- Computer Architecture</td>
                    <td>- Operating System</td>
                    <td>- Career Preparation</td>
                </tr>
                <tr>
                    <td>- Object-Oriented Programming</td>
                    <td>- Entrepreneurship</td>
                    <td>- Seminar</td>
                </tr>
                <tr>
                    <td>- Seminar</td>
                    <td>- Seminar</td>
                </tr>
                <tr>
                    <th colspan="3"><strong>Year 3</strong></th>
                </tr>
                <tr>
                    <td><strong>Term 7</strong></td>
                    <td><strong>Term 8</strong></td>
                    <td><strong>Term 9</strong></td>
                </tr>
                <tr>
                    <td rowspan="5">Internship I</td>
                    <td>- Fundamentals of Cyber Security</td>
                    <td>- Fundamentals of Machine Learning</td>
                </tr>
                <tr>
                    <td>- Blockchain</td>
                    <td>- Project Managment</td>
                </tr>
                <tr>
                    <td>- Research Methodology</td>
                    <td>- Cloud Computing</td>
                </tr>
                <tr>
                    <td>- Automata</td>
                    <td>- Management</td>
                </tr>
                <tr>
                    <td>- Seminar</td>
                    <td>- Seminar</td>
                </tr>
                <tr>
                    <th colspan="3"><strong>Year 4</strong></th>
                </tr>
                <tr>
                    <td><strong>Term 10</strong></td>
                    <td><strong>Term 11</strong></td>
                    <td rowspan="5"></td>
                </tr>
                <tr>
                    <td>- Fundamentals of Data Science</td>
                    <td rowspan="4">Internship II</td>
                </tr>
                <tr>
                    <td>- Project II</td>
                </tr>
                <tr>
                    <td>- Marketing</td>
                </tr>
                <tr>
                    <td>- Seminar</td>
                </tr>
            </table>
        </div>
      </header>
    </div>
  );
}

export default App;
