import { green } from 'console-log-colors';

import { isClient } from 'src/constants/client';

export const sayHelloInASCII = () => {
  if (isClient) {
    console.log(
      green(`
          ███▄ ▄███▓▓█████▄     ██▓ ██▀███    ██████  ██░ ██  ▄▄▄      ▓█████▄ 
          ▓██▒▀█▀ ██▒▒██▀ ██▌   ▓██▒▓██ ▒ ██▒▒██    ▒ ▓██░ ██▒▒████▄    ▒██▀ ██▌
          ▓██    ▓██░░██   █▌   ▒██▒▓██ ░▄█ ▒░ ▓██▄   ▒██▀▀██░▒██  ▀█▄  ░██   █▌
          ▒██    ▒██ ░▓█▄   ▌   ░██░▒██▀▀█▄    ▒   ██▒░▓█ ░██ ░██▄▄▄▄██ ░▓█▄   ▌
          ▒██▒   ░██▒░▒████▓    ░██░░██▓ ▒██▒▒██████▒▒░▓█▒░██▓ ▓█   ▓██▒░▒████▓ 
          ░ ▒░   ░  ░ ▒▒▓  ▒    ░▓  ░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒ ▒▒   ▓▒█░ ▒▒▓  ▒ 
          ░  ░      ░ ░ ▒  ▒     ▒ ░  ░▒ ░ ▒░░ ░▒  ░ ░ ▒ ░▒░ ░  ▒   ▒▒ ░ ░ ▒  ▒ 
          ░      ░    ░ ░  ░     ▒ ░  ░░   ░ ░  ░  ░   ░  ░░ ░  ░   ▒    ░ ░  ░ 
                ░      ░        ░     ░           ░   ░  ░  ░      ░  ░   ░    
                      ░                                                  ░      
      `)
    );
    console.log(
      green(`                                                                   
                      /           /          /   /            _/_ /       /      
          ______  __/ o __  _   /_  __.  __/ __/ _ , _ _,  o /  /_  . . /__ o __
          / / / <_(_/_<_/ (_/_)_/ /_(_/|_(_/_(_/_</_\/o(_)_<_<__/ /_(_/_/_)o<_(_)
                                                        /|                       
                                                      |/                        
      `)
    );
    console.log(
      '%cLooking for code 👀\nHere is the repo to fulfill your curiosity ' +
        '%chttps://github.com/mdirshaddev/mdirshaddev.github.io\n\n' +
        "%cDon't forget to give it a star! 🌟",
      'font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500;',
      'font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500; color: #4ee5ae;',
      'font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500;'
    );
  }
};
