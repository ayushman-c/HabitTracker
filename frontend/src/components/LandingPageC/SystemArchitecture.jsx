import React from 'react'
import './SystemArchitecture.css'

const SystemArchitecture = () => {
  return (
    <>
        <div className="sysarc-main">
          <div className="sysrac-head">SYSTEM ARCHITECTURE</div>
          <div className="sysarc-boxes">
            <div className="box-row-1">
              <div className="box-1">
              <div className="box-content">
                <div className="box-small-heading">01 / FOUNDATION</div>
                <div className="box-big-heading">THE CORE FOUNDATION</div>
                <div className="picbox">
                  <div className="box-label">REAL-TIME SYNC ACTIVE</div>
                </div>
                <div className="box-desc">OUR PROPRIETARY TRACKING ENGINE PROCESSES YOUR HABITS WITH
MILLISECOND LATENCY. NO LAG BETWEEN DECISION AND DOCUMENTATION.</div>
              </div>
              </div>
              <div className="box-2">
                <div className="box-2-content">
                    <div className="box-2-small-heading">02 / FEEDBACK</div>
                    <div className="box-2-big-heading">SIGNAL CLARITY</div>
                    <div className="box-2-desc">VISUAL SIGNALS THAT BYPASS
COGNITIVE LOAD. RED MEANS FAIL.
LIME MEANS WIN. TERTIARY MEANS
GROWTH.</div>
                </div>
              </div>
            </div>
            <div className="box-row-2">
              <div className="box-3">
                <div className="box-3-content">
                  <div className="box-3-small-heading">03 / MOMENTUM</div>
                    <div className="box-3-big-heading">STREAK LOCK</div>
                    <div className="box-3-desc">HARD-CODED COMMITMENT
PROTOCOLS. ONCE A STREAK REACHES
LEVEL 5, IT BECOMES A PERMANENT
LIFESTYLE NODE.
GROWTH.</div>

                <div className="progress-box">
                  <div className="boxes"></div>
                  <div className="boxes"></div>
                  <div className="boxes"></div>
                  <div className="boxes"></div>
                  <div className="boxes-1"></div>
                </div>
                </div>

              </div>
              <div className="box-4">
                <div className="box-4-content">
                  <div className="box-4-small-heading">04 / ARCHIVE</div>
                <div className="box-4-big-heading">ETERNAL LEDGER</div>

                  <div className="box-4-desc">
                    <div className="desc">YOUR PROGRESS IS IMMUTABLE. WE
PROVIDE A SURGICAL LOOK BACK AT YOUR
EVOLUTION ACROSS MONTHS AND YEARS.</div>
                    <div className="lists">
                      <div className="list"></div>
                      <div className="list"></div>
                      <div className="list"></div>
                      <div className="list"></div>
                    </div>
                  </div>

                  <div className="box-4-button">ACCESS ARCHIVES</div>
                </div>

              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SystemArchitecture
