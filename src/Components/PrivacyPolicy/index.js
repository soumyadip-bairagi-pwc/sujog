import React from 'react';
import { connect } from "react-redux";
import usePageLocalization from '../../utils/usePageLocalization';

const PrivacyPolicy = ({ language }) => {
  const t = usePageLocalization(language, 'privacyPolicy');

  const renderList = (items) => {
    if (!items) return null;
    const arr = Array.isArray(items) ? items : [items];
    return (
      <ul style={{ paddingLeft: '2rem' }}>
        {arr.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  };

  return (
    <div className='container'>
      <title>{t.title}</title>
      <main style={{ paddingBottom: '2rem' }}>
        <div className='px-10 py-5 mt-4 card'>
          <h1 style={{ textAlign: 'left', padding: '1.5rem 0', color: '#F47216' }}>
            {t.title}
          </h1>

          {/* Section 1 */}
          <h2 style={{ color: '#F47216' }}>{t.s1title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s1p1}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s1p2}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s1p3}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s1p4}</p>

          {/* Section 2 */}
          <h2 style={{ color: '#F47216' }}>{t.s2title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s2p1}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s2p2}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s2p3}</p>

          {/* Section 3 */}
          <h2 style={{ color: '#F47216' }}>{t.s3title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p1}</p>
          {renderList(t.s3reglist)}
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p2}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p3}</p>
          {renderList(t.s3servicelist)}
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p4}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p5}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p6}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p7}</p>
          {renderList(t.s3officiallist)}
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p8}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p9}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p10}</p>
          {renderList(t.s3portallist)}
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p11}</p>
          {renderList(t.s3applist)}
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p12}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s3p13}</p>

          {/* Section 4 */}
          <h2 style={{ color: '#F47216' }}>{t.s4title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s4p1}</p>
          <p><strong>{t.s4restricted}</strong></p>
          {renderList(t.s4restrictedlist)}
          <p><strong>{t.s4confidential}</strong></p>
          {renderList(t.s4confidentiallist)}
          <p><strong>{t.s4open}</strong></p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s4p2}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s4p3}</p>

          {/* Section 5 */}
          <h2 style={{ color: '#F47216' }}>{t.s5title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s5p1}</p>
          {renderList(t.s5permlist)}
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s5p2}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s5p3}</p>

          {/* Section 6 */}
          <h2 style={{ color: '#F47216' }}>{t.s6title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s6p1}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s6p2}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s6p3}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s6p4}</p>
          {renderList(t.s6uselist)}
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s6p5}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s6p6}</p>

          {/* Section 7 */}
          <h2 style={{ color: '#F47216' }}>{t.s7title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s7p1}</p>

          {/* Section 8 */}
          <h2 style={{ color: '#F47216' }}>{t.s8title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s8p1}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s8p2}</p>

          {/* Section 9 */}
          <h2 style={{ color: '#F47216' }}>{t.s9title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s9p1}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s9p2}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s9p3}</p>

          {/* Section 10 */}
          <h2 style={{ color: '#F47216' }}>{t.s10title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s10p1}</p>

          {/* Section 11 */}
          <h2 style={{ color: '#F47216' }}>{t.s11title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s11p1}</p>

          {/* Section 12 */}
          <h2 style={{ color: '#F47216' }}>{t.s12title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s12p1}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s12p2}</p>

          {/* Section 13 */}
          <h2 style={{ color: '#F47216' }}>{t.s13title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s13p1}</p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s13p2}</p>

          {/* Section 14 */}
          <h2 style={{ color: '#F47216' }}>{t.s14title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s14p1}</p>

          {/* Section 15 */}
          <h2 style={{ color: '#F47216' }}>{t.s15title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s15p1}</p>

          {/* Section 16 */}
          <h2 style={{ color: '#F47216' }}>{t.s16title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s16p1}</p>

          {/* Section 17 */}
          <h2 style={{ color: '#F47216' }}>{t.s17title}</h2>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s17p1}</p>
          <p style={{ marginLeft: '2rem' }}>
            <strong>{t.s17name}</strong><br />
            {t.s17designation}<br />
            {t.s17dept}
          </p>
          <p style={{ textAlign: 'justify' }}>&emsp;{t.s17contact}</p>
          <p style={{ marginLeft: '2rem' }}>
            {t.s17email}<br />
            {t.s17helpline}
          </p>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.localization.language,
});

export default connect(mapStateToProps)(PrivacyPolicy);
