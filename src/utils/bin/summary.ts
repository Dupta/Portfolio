import config from '../../../config.json';

const summary = async (): Promise<string> => {
  return `     
   
 ${config.name}      
 <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
 <u><a href="mailto:${config.email}">${config.email}</a></u>
   

`;
};
export default summary;
