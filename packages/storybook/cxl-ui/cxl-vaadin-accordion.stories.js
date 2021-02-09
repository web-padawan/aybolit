import { CXLVaadinAccordionThemeArchive } from './cxl-vaadin-accordion/cxl-accordion-card.story';
import { CXLVaadinAccordionThemeFaq } from './cxl-vaadin-accordion/theme=cxl-faq.story';
import { CXLVaadinAccordionThemeMinidegreeTrack } from './cxl-vaadin-accordion/theme=cxl-minidegree-track.story';

export default {
  title: 'CXL UI/cxl-vaadin-accordion',
};

// @todo localStorage data panel?
CXLVaadinAccordionThemeArchive.storyName = 'cxl-accordion-card';
CXLVaadinAccordionThemeFaq.storyName = '[theme=cxl-faq]';
CXLVaadinAccordionThemeMinidegreeTrack.storyName = '[theme=cxl-minidegree-track]';

export {
  CXLVaadinAccordionThemeArchive,
  CXLVaadinAccordionThemeFaq,
  CXLVaadinAccordionThemeMinidegreeTrack,
};
