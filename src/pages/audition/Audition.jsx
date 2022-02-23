import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import './Audition.css';

function Audition() {
    const [audition, setAudition] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        axios
            .get('/audition')
            .then((res) => {
                setAudition(res.data.audition);
                console.log(res.data.audition);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className="main-audition">
                <div className="audtion-title">
                    <h2>Feroci Philharmonic Orchestra</h2>

                    <h2>
                        {audition.map((item) => {
                            return item.title;
                        })}
                        th Season
                    </h2>

                    <h2>
                        <i>Audition</i>
                    </h2>
                </div>

                {/* text background */}
                <div className="text-img1">
                    <div className="img1">
                        <img
                            src="https://res.cloudinary.com/do58tgs2e/image/upload/v1644660709/Feroci-logo_eqwn2a.png"
                            alt=""
                        />{' '}
                    </div>
                    <br />
                    <h1>
                        FPO Audition <br />
                        2022
                    </h1>
                    <hr className="text-line" />
                    <h3>Call for Applications</h3>
                    <br />
                </div>

                {/* background */}
                <img
                    className="audition-img1"
                    src="https://res.cloudinary.com/do58tgs2e/image/upload/v1644985945/audition_img_kbxjnk.jpg"
                    alt=""
                />
            </div>

            {/* detail */}
            <div className="detail-audition">
                <strong>
                    The Froci Philharmonic Orchestra will be auditioning for the
                    following positions
                </strong>
                <br />
                <br />
                {/* เครื่องที่รับ */}

                <p>
                    *Positions offered will be revised if necessary and are
                    subject to the jury panel's final decision.
                </p>

                <strong>1. Qualification</strong>
                <br />
                <p>
                    1.1 Excellent musical skills and abilities <br />
                    1.2 Excellent mental and physical conditions in order to
                    work under demanding schedules.
                </p>

                <strong>2. Application requirements</strong>
                <p>
                    2.1 Complete online application form at
                    www.thailandphil.com/audition2017-2/application.html by 15th
                    October 2017, 5.00 p.m. (UTC+07:00)
                    <br />
                    2.2 Applications are open to all candidates; international
                    applicants are welcome to apply.
                </p>

                <strong>3. Audition process</strong>
                <p>
                    3.1 Live audition will be held on 19-20 October, 2017,
                    09:00-18:00 hrs.
                    <br />
                    3.2 The TPO office will announce audition time schedule by
                    17th October, 2017 on TPO official website.
                    <br />
                    3.3 Venue: Young Artist Music Program Building, PC607,
                    College of Music, Mahidol University. 25/25 Phutthamonthon
                    Sai 4, Salaya, Nakhonpathom, 73170 Thailand
                </p>

                <strong>4. Audition repertoires</strong>
                <p>
                    Please see:{' '}
                    <a href="http://www.thailandphil.com/audition2017-2/repertoires.html">
                        http://www.thailandphil.com/audition2017-2/repertoires.html
                    </a>{' '}
                </p>

                <strong>5. Conditions offered</strong>
                <br />
                <p>
                    5.1 Compensation (monthly, for 3 weeks/programs with 6
                    concerts) - Basic Compensation (All full-time positions)
                    45,000 THB - Position Allowance
                    <br />
                    • Principal 30,000 THB
                    <br />
                    • Co-principal 15,000 THB
                    <br />
                    Ex. - If you are a Co-principal oboe, the total amount you
                    will get; Basic compensation + Position allowance = 60,000
                    THB
                    <br />
                    - If you are a Horn Tutti the total amount you will get;
                    45,000 THB
                    <br />
                    5.2 Subject to the decisions from the audition committee,
                    successful candidates will be offered 1-year contract, which
                    promises at least 30 programs/weeks.
                    <br />
                    5.3 Work Permit and Re-entry for TPO related projects.
                    <br />
                    5.4 A set of concert dresses will be provided.
                    <br />
                    5.5 Each musician will be provided with health insurance.
                </p>

                <strong>6. Others</strong>
                <p>
                    6.1 Each applicant is responsible for preparing their own
                    sheet music and music instruments;
                    <br />
                    6.2 Except, all percussion instruments will be supplied. You
                    are welcome to bring your own Snare Drum, Tambourines, and
                    Cymbals. The Xylophone to be used is a Yamaha YX-500R 3 ½
                    Octave. The Glockenspiel to be used is a Yamaha YG-2500 3 ½
                    Octave.
                    <br />
                    6.3 Applicants must attend a live audition here on the
                    College of Music, Mahidol University campus. Recording
                    auditions are not accepted.
                    <br />
                    6.4 Positions will be offered according to the audition
                    committee's final decision. TPO has the absolute right to
                    keep the vacancy if there is no suitable candidate
                </p>
                <strong>
                    Applicants with further questions may also contact:
                </strong>
                <p>
                    Ms. Siriporn Lapthanaphanit
                    <br />
                    Tel: +66 (0) 2-000-0001 ext. 3106 Email: no1@silpakorn.ac.th
                    <br />
                    Ms. Yi-Wen Chen
                    <br />
                    Tel: +66 (0) 2-000-0002 ext. 3104 Email: no2@silpakorn.ac.th
                </p>

                <div className="form-btn">
                    <button
                        onClick={() => nav('/auditionform')}
                        type="button"
                        className="btn btn-light"
                    >
                        <strong>Application Form</strong>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Audition;
