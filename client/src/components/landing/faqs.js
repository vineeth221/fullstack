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
            <div className="small-space" />
            <div className='about-area'>
            <div className=' about4'>
                <h2 class="text-center pt-5">FAQs
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
                            17 Columns is a tech-enabled construction company simplifying home construction. It uses technology-based solutions to deliver high-quality homes on time &amp; within budget.
                        </p>
                    )}
                </div>
                <div className="faq-item">
                    <h5 onClick={() => showAnswer('ans-2', 'head-2')} className="faq-item-heading">
                        <div style={{ maxWidth: '90%' }}>2. Is 17 Columns an authentic company?</div>
                        <img id="head-2" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-2') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-2') && (
                        <p id="ans-2" className="faq-item-ans">
                            Yes, 17 Columns is an authentic company registered as Build Craft Pvt. Ltd. It currently employs over 300 people and has been recognized for its achievements in Forbes India, The Economic Times, etc.
                        </p>
                    )}
                </div>
                <div className="faq-item">
                    <h5 onClick={() => showAnswer('ans-3', 'head-3')} className="faq-item-heading">
                        <div style={{ maxWidth: '90%' }}>3. Is it more expensive than a local contractor?</div>
                        <img id="head-3" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-3') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-3') && (
                        <p id="ans-3" className="faq-item-ans">
                            No, 17 Columns is not more expensive than a local contractor. It offers packages at par with market rates and ensures 0 cost overruns during the construction project.
                        </p>
                    )}
                </div>
                <div className="faq-item">
                    <h5 onClick={() => showAnswer('ans-4', 'head-4')} className="faq-item-heading">
                        <div style={{ maxWidth: '90%' }}>4. How can I track the progress of the project?</div>
                        <img id="head-4" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-4') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-4') && (
                        <p id="ans-4" className="faq-item-ans">
                            Our customer app allows you to track your construction progress, receive updates on quality checks, and keep informed of your financial transactions.
                        </p>
                    )}
                </div>
                <div className="faq-item">
                    <h5 onClick={() => showAnswer('ans-5', 'head-5')} className="faq-item-heading">
                        <div style={{ maxWidth: '90%' }}>5. How many projects have been delivered?</div>
                        <img id="head-5" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-5') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-5') && (
                        <p id="ans-5" className="faq-item-ans">
                            17 Columns has delivered over 4500+ homes, covering 3,500,000+ Sq.ft in 800+ pin codes across 10 cities in India.
                        </p>
                    )}
                </div>
                <div className="faq-item">
                    <h5 onClick={() => showAnswer('ans-6', 'head-6')} className="faq-item-heading">
                        <div style={{ maxWidth: '90%' }}>6. Will my home be ready on time?</div>
                        <img id="head-6" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-6') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-6') && (
                        <p id="ans-6" className="faq-item-ans">
                            Yes, it will. 17 Columns follows a system where each stage of completion adheres to a particular timeframe. Should any delay occur in spite of this, the contractor will become liable to a penalty.
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
                        <div style={{ maxWidth: '90%' }}>7. How much time will it take to construct?</div>
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
