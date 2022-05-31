import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We make it simple to start bidding jobs right away. Use pre-configured
        systems and get takeoffs, shop drawings, and bids quick.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        WinBidPro will let you focus on the features you care about. Nearly
        everything is flexible and optional. Just need Shop Drawings? Just want
        cut lists optimized? Have your own way to calculate labor? WinBidPro
        won't get in your way.
      </>
    ),
  },
  {
    title: 'Stored in the Cloud',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        WinBidPro16 is cloud-based. Get your data anywhere where there is internet
        from any machine with the app installed! Users in a company account
        automatically share everything.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
