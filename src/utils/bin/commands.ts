import * as bin from './index';
import config from '../../../config.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'Summary' to display summary.
`;
};

// Github profile
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
return `Hi, I am ${config.name}. \n
I am a 4th year Electrical Engineering student at NIT Silchar.\n
Welcome to my website!
More about me:
'Summary' - short summary.
'Resume' - my latest resume.
'Readme' - my github readme.`;
};
//Resume
export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening Resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening Gmail:${config.email}...`;
};
//Github
export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};
//linkedin
export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};
//misellaneous
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const youtube = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com', '_blank'); // ...I'm sorry
  return `Safe browsing`;
};

//Display my name
export const banner = (args?: string[]): string => {
  return `

░███████   ░██                                                       ░██             ░██████                           ░██               
░██   ░██                                                            ░██            ░██   ░██                          ░██               
░██    ░██ ░██░██    ░██ ░██    ░██  ░██████   ░████████   ░███████  ░████████     ░██        ░██    ░██ ░████████  ░████████  ░██████   
░██    ░██ ░██░██    ░██ ░██    ░██       ░██  ░██    ░██ ░██        ░██    ░██    ░██  █████ ░██    ░██ ░██    ░██    ░██          ░██  
░██    ░██ ░██ ░██  ░██  ░██    ░██  ░███████  ░██    ░██  ░███████  ░██    ░██    ░██     ██ ░██    ░██ ░██    ░██    ░██     ░███████  
░██   ░██  ░██  ░██░██   ░██   ░███ ░██   ░██  ░██    ░██        ░██ ░██    ░██     ░██  ░███ ░██   ░███ ░███   ░██    ░██    ░██   ░██  
░███████   ░██   ░███     ░█████░██  ░█████░██ ░██    ░██  ░███████  ░██    ░██      ░█████░█  ░█████░██ ░██░█████      ░████  ░█████░██ 
                                ░██                                                                      ░██                             
                          ░███████                                                                       ░██                             
                                                                                                                                         


Type 'help' to see the list of links.
Type 'Summary' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
