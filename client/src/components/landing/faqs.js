import React, { useState } from 'react';
import Down from '../../components/navbar/icons/chevron-down.svg';

const Faqs = () => {
    const [visibleAnswers, setVisibleAnswers] = useState({});

    const showAnswer = (ansId, headId) => {
        setVisibleAnswers(prevState => {
            // Close all other FAQ items
            const updatedState = Object.keys(prevState).reduce((acc, key) => {
                acc[key] = key === ansId ? !prevState[key] : false;
                return acc;
            }, {});
            return { ...updatedState, [ansId]: !prevState[ansId] };
        });
    };

    const isAnswerVisible = (ansId) => visibleAnswers[ansId];

    return (
        <>
            <div className='about-area'>
                <div className=' about4'>
                    <h2 class="text-center pt-3">FAQs
                    </h2>
                </div>
                <div className="small-space" />
                <div id="faq-container">
                    <div className="faq-item">
                        <h5 onClick={() => showAnswer('ans-1', 'head-1')} className="faq-item-heading">
                            <div style={{ maxWidth: '90%' }}>1. What is 17 Columns ?</div>
                            <img id="head-1" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-1') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </h5>
                        {isAnswerVisible('ans-1') && (
                            <p id="ans-1" className="faq-item-ans">
                                17 Columns is tech driven turnkey construction company where both design and execution
                                is given importance and delivering the service at the right price with 200+ Quality Checks.
                            </p>
                        )}
                    </div>
                    <div className="faq-item">
                        <h5 onClick={() => showAnswer('ans-2', 'head-2')} className="faq-item-heading">
                            <div style={{ maxWidth: '90%' }}>2. How is 17Columns different?</div>
                            <img id="head-2" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-2') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </h5>
                        {isAnswerVisible('ans-2') && (
                            <p id="ans-2" className="faq-item-ans">
                                17 Columns is different than others because contractors only focus on execution and the
                                designers only focus on designs but 17Columns is the company where Architectural designs
                                and structural feasibility and execution are equally given importance to.
                            </p>
                        )}
                    </div>
                    <div className="faq-item">
                        <h5 onClick={() => showAnswer('ans-3', 'head-3')} className="faq-item-heading">
                            <div style={{ maxWidth: '90%' }}>3. Why Choose 17Columns?</div>
                            <img id="head-3" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-3') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </h5>
                        {isAnswerVisible('ans-3') && (
                            <p id="ans-3" className="faq-item-ans">
                                Choose 17Columns for not to become a victim of trap market, 17Columns gives you right
                                price in specific to your plan and design and estimate the right timeline and deliver the same
                                as promised.
                            </p>
                        )}
                    </div>
                    <div className="faq-item">
                        <h5 onClick={() => showAnswer('ans-4', 'head-4')} className="faq-item-heading">
                            <div style={{ maxWidth: '90%' }}>4. What is trap market?</div>
                            <img id="head-4" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-4') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </h5>
                        {isAnswerVisible('ans-4') && (
                            <p id="ans-4" className="faq-item-ans">
                                Trap market is where someone quote you the least price start the project and then start
                                extorting you for money to complete. Again, please note cheaper solutions can become
                                really expensive for you for sure.
                            </p>
                        )}
                    </div>
                    <div className="faq-item">
                        <h5 onClick={() => showAnswer('ans-5', 'head-5')} className="faq-item-heading">
                            <div style={{ maxWidth: '90%' }}>5.How to choose a contractor?</div>
                            <img id="head-5" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-5') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </h5>
                        {isAnswerVisible('ans-5') && (
                            <p id="ans-5" className="faq-item-ans">
                                Understand you design and the SKUs which goes into it and the labour cost and compare it
                                versus the quotes you got and is it really sounding realistic and decide.
                            </p>
                        )}
                    </div>
                    <div className="faq-item">
                        <h5 onClick={() => showAnswer('ans-6', 'head-6')} className="faq-item-heading">
                            <div style={{ maxWidth: '90%' }}>6. What are the pre requisites before starting construction?</div>
                            <img id="head-6" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-6') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </h5>
                        {isAnswerVisible('ans-6') && (
                            <p id="ans-6" className="faq-item-ans">
                                Firstly ensure all the property documents in place, taxes to be paid up to date and the plan
                                of the house to be ready and approved by the designated government agency.
                            </p>
                        )}
                    </div>
                    {/* <div className="faq-item">
        <h5 onClick={() => showAnswer('ans-7', 'head-7')} className="faq-item-heading">
          <div style={{ maxWidth: '90%' }}>7. What is QASCON?</div>
          <img id="head-7" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-7') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </h5>
        {isAnswerVisible('ans-7') && (
          <p id="ans-7" className="faq-item-ans">
            Quality Assessment for Construction a.k.a. QASCON® is a registered process by Brick&amp;Bolt for Quality Management. We perform 470+ quality checks on each floor as per QASCON®.
          </p>
        )}
      </div> */}
                    <div className="faq-item">
                        <h5 onClick={() => showAnswer('ans-8', 'head-8')} className="faq-item-heading">
                            <div style={{ maxWidth: '90%' }}>7. How much time will it take to construct ?</div>
                            <img id="head-8" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-8') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </h5>
                        {isAnswerVisible('ans-8') && (
                            <p id="ans-8" className="faq-item-ans">
                                It takes 6-14 months to complete a house construction project. It depends on the space, built-up area &amp; other factors.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faqs;
