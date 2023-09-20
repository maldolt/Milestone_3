import React from 'react';
import './styles/styles.scss';

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <div className="resource-links">
      <div className="resource">
          <a href="https://www.getepic.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://play-lh.googleusercontent.com/4C7CwtFYnqg_nlr9djM7EH0uZHq2iqpad3K1LEBTD0471EuTqKIZZp-dPf3YmseaPN4" alt="Get Epic" />
          </a>
        </div>
        <div className="resource">
          <a href="https://storylineonline.net/" target="_blank" rel="noopener noreferrer">
            <img src="https://libapps-au.s3-ap-southeast-2.amazonaws.com/accounts/203715/images/Screen_Shot_2020-06-01_at_8.07.28_PM.png" alt="Story Online" />
          </a>
        </div>

        <div className="resource">
          <a href="https://www.vooks.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bbnmzvhs4sxzp4vqxquq" alt="Resource 3" />
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Reading Log App | <a href={'https://github.com/maldolt/milestone_3.git'} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
    </div>
  );
}

export default Resources;
