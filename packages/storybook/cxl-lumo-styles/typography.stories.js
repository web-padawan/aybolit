import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles/Typography'
};

// @see https://github.com/vaadin/vaadin-lumo-styles/blob/v1.5.0/demo/typography.html
export const Base = () => {
  return html`
    <h1>Heading 1</h1>
    <h1>Heading 1 with <strong>highlight</strong></h1>
    <h2>Heading 2</h2>
    <h2>Heading 2 with <strong>highlight</strong></h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Paragraph text.</p>
    <p><a href>Paragraph link</a></p>
    <p><strong>Paragraph strong text.</strong></p>
    <p><em>Paragraph italic text.</em></p>
    <p><small>Paragraph small text.</small></p>
    <div><span>Element text.</span></div>
    <div class="font-light"><span>Light element text.</span></div>
    <div><a href>Element link</a></div>
    <div><em>Element italic text.</em></div>
    <div><small>Element small text.</small></div>
    <blockquote><p>I am a simple blockquote.</p></blockquote>
  `;
};

export const Examples = () => {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nam hendrerit pharetra neque, non gravida neque interdum ac.
    Donec porttitor quis velit nec tempor. Sed arcu est, molestie ut aliquet at, egestas eu augue. Nunc lobortis imperdiet massa sed pharetra.
  `;

  return html`
    <h1>Become great at <strong>content marketing research</strong></h1>
    <h2>Produce relevant, authoritative content that hits money-making KPIs</h2>
    <h3>Online Course</h3>
    <p>By <strong>Derek Gleason</strong>, Content Lead @ CXL</p>
    <p><strong>Course Length:</strong> 1h 07min</p>

    <h1>Digital psychology & behavioral design training</h1>
    <p>${loremIpsum}</p>

    <h1>How to Design, Roll Out, & Scale an Optimization Program</h1>
    <p>${loremIpsum}</p>

    <h1>Heuristic Analysis frameworks for conversion optimization audits</h1>
    <p>${loremIpsum}</p>

    <h1>Implementing Urgency on eCommerce Product Pages For a 27.1% Lift [Case Study]</h1>
    <p>${loremIpsum}</p>

    <h1>
      Checkout Optimization: How Do Trust Seals Affect Security Perception? [Original Research]
    </h1>
    <p>${loremIpsum}</p>
  `;
};
