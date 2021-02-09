import { css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { registerGlobalStyles } from './utils.js';
import '@vaadin/vaadin-lumo-styles/font-icons.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

registerGlobalStyles(
  css`
    iron-icon[icon='vaadin:play-circle-o'] {
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% 75%); /* "In-progress". */
    }
  `,
  {
    moduleId: 'cxl-lumo-styles-icons',
  }
);

const $documentContainer = document.createElement('template');

/**
 * Vaadin iconset and font build process. They ship 600 icons, we only need some.
 *
 * 1. `conversionxl/vaadin-icons` fork has a custom `gulpfile.js`, clone, install deps.
 * 2. vaadin-icons/gulpfile.js: modify `const cxlVaadinIconset`
 * 3. vaadin-icons: run `npx gulp icons iconfont`
 * 4. iron-iconset-svg[name="vaadin"]: copy-paste vaadin-icons/iconset.html `<g>` elements
 * 5. iron-iconset-svg[name="vaadin"]: copy-paste vaadin-icons/vaadin-icons.woff2 base64 encoding
 * 6. style#cxl-lumo-styles-vaadin-icons: add / change CSS custom properties, get unicode values from `gulp iconfont` task output
 */
$documentContainer.innerHTML = `
  <iron-iconset-svg size="25" name="cxl">
    <svg>
      <defs>
        <g id="logo" width="60" height="24" viewBox="0 0 60 24">
          <path d="M18.314 15.7267C18.175 17.3617 17.6354 18.815 16.695 20.0867C15.7653 21.3584 14.5364 22.3361 13.0082 23.0201C11.4908 23.704 9.84513 24.0299 8.07122 23.9978C5.63476 23.9444 3.71659 23.159 2.31669 21.6415C0.916797 20.1241 0.152732 18.067 0.0244976 15.4702C-0.0716783 13.7391 0.115331 11.853 0.585524 9.8119C1.0664 7.77083 1.84115 5.99692 2.90978 4.49016C3.98908 2.97272 5.2554 1.83998 6.70873 1.09194C8.17274 0.333222 9.77033 -0.0301091 11.5015 0.00194951C14.0448 0.0446944 16.0538 0.808759 17.5285 2.29414C19.0139 3.77953 19.8207 5.82594 19.9489 8.43337L14.4829 8.41734C14.5043 6.99608 14.2479 5.98089 13.7135 5.37177C13.1792 4.76266 12.335 4.43673 11.1809 4.39398C8.29563 4.29781 6.53775 6.54191 5.90726 11.1263C5.61873 13.1994 5.47447 14.6795 5.47447 15.5664C5.42104 18.1952 6.39348 19.547 8.3918 19.6218C9.68484 19.6646 10.7161 19.3493 11.4855 18.6761C12.2549 17.9922 12.7464 17.0304 12.9602 15.7908L18.314 15.7267Z" fill="var(--lumo-primary-color, #D61F2C)"/>
          <path d="M30.7679 8.09676L34.5829 0.338565H41.0107L34.4867 11.9117L41.187 23.6773H34.6951L30.7679 15.7748L26.8407 23.6773H20.3649L27.0491 11.9117L20.5412 0.338565H26.9529L30.7679 8.09676Z" fill="var(--lumo-primary-color, #D61F2C)"/>
          <path d="M49.2541 19.3493H59.048V23.6773H43.6278V0.338565H49.2541V19.3493Z" fill="var(--lumo-primary-color, #D61F2C)"/>
        </g>
        <g id="live" width="19" height="25" viewBox="0 0 19 25">
          <path d="M18.7 8.092l-.005.136s-.422-2.115-1.184-.438a.078.078 0 00.002-.027c.02-.157.027-.304.022-.442V7.31c.028-.74.04-2.127-.213-2.674l.002.001.007.008.034.04a6.848 6.848 0 01.972 1.652c.186.489.332 1.071.36 1.733.003.007.002.015.003.022z"/>
          <path d="M18.339 6.336c.208.513.364 1.11.36 1.733a5.541 5.541 0 00-.36-1.733zM17.512 7.79s-.085 2.944-4.03 7.265l-.001.001s.226-2.416-2.435-.784c.042-.079 2.712-5.106 3.583-7.902 0 0 .501-1.368 1.651-.966 0 0 1.195.503 1.256 1.907v.01c-.01.22-.02.382-.022.443 0 .008 0 .017-.002.026z"/>
          <path d="M17.514 7.764c.002-.061.012-.224.021-.443.006.137-.001.286-.021.443zM18.303 6.25a6.852 6.852 0 00-.937-1.565c.146.161.6.713.937 1.565zM17.332 4.645a.34.34 0 01.034.04l-.034-.04zM14.589 15.088l-.008.067s-1.328 1.28-2.815 2.562l-.145.125c-.049.044-.099.084-.15.127l-.17.143c-.945.777-1.899 1.49-2.748 1.994H8.55a4.108 4.108 0 00-.273-.164c.672-.573 4.4-3.78 5.024-4.64l.003-.007c.026-.017.108-.091.225-.181.314-.242.855-.6 1.019-.348.008.015.017.03.023.05l.009.03a.18.18 0 01.008.042.076.076 0 01.003.026c.003.01.002.02.002.03a.241.241 0 010 .047V15c.002.028 0 .058-.005.088z"/>
          <path d="M14.55 14.767c-.164-.253-.705.106-1.019.348l-.05-.059.001-.001a.18.18 0 00.018-.016c.317-.242.885-.561 1.05-.272z"/>
          <path d="M13.48 15.056l.051.059c-.117.09-.2.164-.226.18a.73.73 0 01.175-.24zM14.113 2.045c.754 1.259.516 4.324.516 4.324-1.909-4.09-4.668-1.484-4.668-1.484l.885-3.83.074.016c.39-.165 2.107-.77 3.167.971 0 0 .008.002.026.003z"/>
          <path d="M14.113 2.045a.377.377 0 01-.026-.003C13.027.301 11.31.906 10.92 1.071l-.074-.017c2.401-.9 3.245.953 3.245.953l.022.038zM8.553 20.107c.848-.505 1.803-1.217 2.748-1.994-1.018.856-2.05 1.653-2.744 1.997h-.004v-.003zM10.929 14.375L7.65 19.641a5.808 5.808 0 00-.97-.295l1.321-5.777s.016-.03.05-.078c.198-.29.991-1.26 2.373-.688 0 0 .717.389.528 1.454-.006.04-.015.077-.024.118zM8.552 20.109v.002h-.004l.003-.005.002.001v.002z"/>
          <path d="M8.55 20.11l-.002.002v-.002h.002zM9.96 4.885l-1.947 8.558s-.477-1.53-1.622-1.59c0 0-1.122-.093-1.414 1.093 0 0-.526-6.498.139-8.738l.003-.004c.127-.12 3.068-2.831 4.842.68z"/>
          <path d="M5.64 20.946c.142.055.314.11.504.16.057.017.118.031.179.046.125.029.25.053.363.073.157.025.299.041.421.047.17.008.301-.001.366-.032.027-.012.043-.026.048-.046.028-.124-.464-.343-1.095-.488-.635-.146-1.172-.166-1.2-.042-.004.018.003.037.019.057.05.066.193.145.395.225zm.968.436a3.88 3.88 0 01-.505-.108l-.03-.006.001-.002a3.847 3.847 0 01-.44-.148l-.056-.005.002-.016-.003-.001a3.557 3.557 0 01-.379-.177l.074 1.622-.054.003-.076-1.656a.617.617 0 00-.038-.022l-.015-.007-.516-1.65.007.003.001-.004v-.003c.036-.008.174-.016.384-.023v-.002a7.56 7.56 0 01.7.018c.301.022.648.065 1.016.148.313.067.64.162.97.295.21.084.419.183.627.302.09.05.183.104.272.163l-.002.004-.001.002.003-.001h.001v-.002h.002l.003.001-1.01 1.323s-.004.002-.013.002l-.037.002-.05-.024-.013.026a3.854 3.854 0 01-.347-.002h-.008l.01-.027-.02-.007-.032-.013-.016.042a5.458 5.458 0 01-.36-.04l.01-.03-.02-.007-.033-.01-.01.037z"/>
          <path d="M6.949 23.055s-.004-.058-.158-.144l.706-1.475-.05-.024-.012.027-.693 1.446a2.077 2.077 0 00-.173-.074l.511-1.375.01-.027-.02-.007-.032-.013-.016.042-.505 1.361a4.492 4.492 0 00-.253-.077l.4-1.324.009-.031-.021-.007-.032-.01-.012.037-.397 1.32a4.36 4.36 0 00-.356-.081l.273-1.339a.143.143 0 01-.024-.006l-.03-.006-.273 1.34a4.19 4.19 0 00-.296-.048l.13-1.442-.057-.005-.13 1.441a1.848 1.848 0 00-.176-.011v-.002l-.054.003c-.202.006-.222.059-.222.059l-.286 1.24-.006.011c-.02.087.403.26.943.384.54.126.996.156 1.016.07v-.013l.286-1.24zM5.666 19.198a7.808 7.808 0 00-.7-.018c-.296-.696-.574-1.359-.838-1.985l-.38-.91-.002-.007a64.747 64.747 0 01-1.096-2.823c-.04-.121-.081-.238-.121-.354-.071-.225-.141-.437-.205-.643l-.002-.01c-.002-.005-.002-.011-.005-.018 1.11-1.76 2.354.053 2.603.533l.054.11v-.023c.003.012.01.025.015.038.244 2.973.603 5.572.677 6.11zM7.438.502l.078.022c-1.398.916-2.354 3.55-2.397 3.68l-.003.003c.202-.875-.368-1.431-.368-1.431-1.55-.693-2.533.903-2.768 1.341.585-1.648 1.464-2.653 1.491-2.685A4.452 4.452 0 015.24.492c.038-.008.075-.018.113-.027l.12-.024c.048-.01.096-.02.141-.025a4.538 4.538 0 011.824.086z"/>
          <path d="M5.614.416a4.538 4.538 0 011.824.086A4.259 4.259 0 005.614.416zM2.322 12.449l.002.009c-.747-1.19-.94-.39-.97-.224-.587-1.581-.96-2.743-.96-2.743a10.93 10.93 0 01-.15-.61L.22 8.77c-.034-.168-.063-.33-.09-.484v-.003a16.671 16.671 0 01-.077-.583C-.04 6.725.04 5.89.23 5.176c.011-.039.02-.08.034-.117.01-.034.02-.07.033-.102.335-1.039.72-1.273.72-1.273 1-.892.963.434.963.434-1.05 2.304.227 7.84.338 8.312.003.006.003.013.005.019zM3.472 1.432A4.452 4.452 0 015.24.492a4.102 4.102 0 00-1.768.94z"/>
          <path d="M1.355 12.234l-.006.029A17.108 17.108 0 01.243 8.88c.043.2.094.403.15.61 0 0 .374 1.16.962 2.743zM.054 7.7C-.064 6.576.05 5.967.05 5.967c.055-.3.116-.563.18-.79-.19.714-.269 1.549-.175 2.525z"/>
        </g>
      </defs>
    </svg>
  </iron-iconset-svg>
  <iron-iconset-svg size="16" name="vaadin">
    <svg>
      <defs>
        <g id="check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"/></g>
        <g id="play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"/><path d="M6 4v8l6-4z"/></g>
        <g id="quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"/><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"/></g>
      </defs>
    </svg>
  </iron-iconset-svg>
  <style id="cxl-lumo-styles-vaadin-icons">
    @font-face {
      font-family: vaadin-icons;
      font-style: normal;
      font-weight: initial;
      src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOwAAsAAAAACAAAAANiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGVgCDHAqDSIMcATYCJAMQCwoABCAFhEYHVBsFB8gusG3YkyQS1jYY98cnsgDemEQ8/P/a//a5d2a+YSrRo5g2MY8sQqJq+w1f3SzxSCT6zDuXnxGqKc5YtTcgUgi5NAVKlmYEbmzxeRBmjkADuX1QgPZP3bQH2o0xDPoA40zaOBaXpdTVYoqsuGAiB+bNA7B25E9cThvTPrD5swBgzI3T2raoLJvW5s7XxjHPE+wCKfCErAd4hgm8cI9AqymqBC5c3NENYg9tFy6IF8ypDvLkOLRfQyBcNit6GKFZV7XsTP/igZJ0Kp3iTvz++G1qJJIycw5atqdRATV/XjZe5xU1BnOXnfWCIMXJmHAea+xrde8QlEYmCNJqhILNAjjULLFW36RGdc3Sa1E3u395ZEkQFSexA5hBxuyOSXw+mcYkPonGa+kTOKQAzWjCFbwn8oCVSZZ6gp44D2OnN1a9uMCl4hW4W74Dl/lb1ib6erSe+c0W1YU+1S1UXcSya8euaF2V8OGgmHRhwBTtnkufLSaEa7KPJoWXOgqD0GDcpXfQqodVj2gcPXhB5+qRBlZbyxpErCeIBrNa0RBbO+P8a1WvXXv8eHa+thekLIibIeX+kpId5eQfCUiQOUjZPxLVcGWkeU2XT1eu+rTVM///e3mDX9zts95zge+guj7fejX46xObF0wOfsx4VK/3Q0dHl+ayTp72q0v7KrvgypfR/vm2j4VePBkfcnTr9gHAANTkb3lljJs1ffhGP2PMoaeWrZ0r/ua2/Be+den5A2XjJV+LxBB/fxowUhhWCI62aJP70v+Ed76gJ+2k1bXxrcXo4n4Nf+jw1sSSJh1yZU613RFfkAeDpTbjwUoHs8BW49Xtb9OdI0gULUIfKwAmnTwEsz4O8QX5HCz18gZW+vgFtloTwV9rMyo2HENIMVzJwNT1Ook2aSNezcFXegn3DOrC3ElTms5rJi7hSBAF+mehN6XlCaFClVMHNlEXDrJtChmnJsFC1oVgZb7Je8QfTsbUAVMQRGFwSQwY5fJ0IjSTbAgfURSiexGcJzKHB+WS5YzEN6vd0WhEIJSI3yy4+jpNHkFQQSoOEQfUNE/ESttVUkPN2qeZCEyQ6TNCTBkfl1LHquWdtc672QKtnIeKSJGjiFKHnfsItiRscGyTGHYIzeYbJRo1cZQKInFD0wUAAAA=") format("woff2");
    }

    html {
      --vaadin-icons-check-circle: "\\e7c5";
      --vaadin-icons-play-circle-o: "\\e72e";
      --vaadin-icons-quote-right: "\\e6c3";
    }
  </style>
`;

document.head.appendChild($documentContainer.content);
