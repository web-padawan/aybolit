import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';

export default {
  decorators: [withKnobs],
  title: 'CXL UI/cxl-app-layout',
};

export const CXLAppLayout2cr = () => {
  const hasPanelsScroll = boolean('Has panels scroll?', true);
  const hasWidgetBackground = boolean('Has widget background?', false);

  return html`
    <style>
      .widget.has-background {
        background-color: var(--lumo-shade-5pct);
      }

      [slot='action-bar'] > * {
        margin-left: var(--lumo-space-xs);
      }

      [slot='action-bar'] > *:first-child {
        flex: 1;
        margin-left: unset;
      }

      cxl-app-layout[wide] [slot='action-bar'] > *:first-child {
        flex: unset;
      }
    </style>

    <cxl-app-layout
      id="container"
      layout="2c-r"
      scroll="${hasPanelsScroll ? 'panels' : 'document'}"
    >
      ${CXLMarketingNav()}

      <section
        id="sensei_course_progress-2"
        class="widget-odd widget-last widget-first widget-1 widget widget_sensei_course_progress ${hasWidgetBackground
          ? 'has-background'
          : ''}"
        slot="sidebar"
      >
        <label>Course</label>
        <h3 class="widget-title">
          <a href="https://conversionxli.warmpress.com/course/the-persuasion-slide/"
            >The Persuasion Slide</a
          >
        </h3>

        <label>Lessons</label>

        <article
          class="entry author-susie has-excerpt post-3671 lesson type-lesson status-publish has-post-thumbnail post course membership-content access-granted "
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3671"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="vaadin:play-circle-o"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/persuasion-slide-introduction/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>Why Market to the Brain?</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie has-excerpt post-3686 lesson type-lesson status-publish post course membership-content access-granted "
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3686"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="lumo:angle-right"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/2-persuasion-psychology-brief-introduction/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>Persuasion Psychology: A Brief
                Introduction</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie post-3693 lesson type-lesson status-publish has-post-thumbnail post course membership-content access-granted current-menu-item"
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3693"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="vaadin:play-circle-o"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/3-persuasion-slide/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>The Persuasion Slide</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie has-excerpt post-3695 lesson type-lesson status-publish has-post-thumbnail post course membership-content access-granted "
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3695"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="lumo:angle-right"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/4-gravity/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>Gravity</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie post-3701 lesson type-lesson status-publish has-post-thumbnail post course membership-content access-granted "
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3701"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="vaadin:play-circle-o"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/5-nudge/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>Nudge</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie post-3706 lesson type-lesson status-publish post course lesson-completed membership-content access-granted user-status-completed"
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3706"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="vaadin:check-circle"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/6-angle-conscious-motivation/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>The Angle: Conscious Motivation</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie post-3717 lesson type-lesson status-publish post course lesson-completed membership-content access-granted user-status-completed"
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3717"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="vaadin:check-circle"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/7-angle-unconscious-motivation/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>The Angle: Non-Conscious Motivation</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie post-3719 lesson type-lesson status-publish post course lesson-completed membership-content access-granted user-status-completed"
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3719"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="vaadin:check-circle"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/8-friction-real-difficulty/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>Friction: Real Difficulty</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie post-3721 lesson type-lesson status-publish post course lesson-completed membership-content access-granted user-status-completed"
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3721"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="vaadin:check-circle"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/9-friction-imaginary-friction-cognitive-fluency/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>Friction: Imaginary Friction &amp;
                Cognitive Fluency</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->

        <article
          class="entry author-susie post-3723 lesson type-lesson status-publish post course membership-content access-granted "
          itemscope="itemscope"
          itemtype="http://schema.org/CreativeWork"
          id="post-3723"
        >
          <header class="entry-header">
            <h4 class="entry-title no-anchor" itemprop="headline">
              <iron-icon class="iron-icon" icon="lumo:angle-right"></iron-icon>
              <a
                href="https://conversionxli.warmpress.com/lesson/10-build-slide/"
                rel="bookmark"
                itemprop="url"
                ><span data-post-status="publish"></span>Build Your Slide</a
              >
            </h4>
          </header>
          <!-- .entry-header -->
        </article>
        <!-- .entry -->
      </section>

      <article
        class="entry author-sensei-teacher post-3923 course type-course status-publish has-post-thumbnail category-general category-video-courses-30-min-or-less tag-marketing tag-optimization post membership-content access-granted user-status-active"
        itemscope="itemscope"
        itemtype="https://schema.org/CreativeWork"
        id="post-3923"
      >
        <header class="entry-header">
          <label>Lesson</label>
          <h1 class="entry-title">The Persuasion Slide</h1>
          <div class="entry-byline">
            <span class="progress statement course-completion-rate"
              >Completed 4 lessons of 8 in total</span
            >
            <vaadin-progress-bar value="0.50"
              >Completed 4 lessons of 8 in total</vaadin-progress-bar
            >
            <section class="course-meta course-enrolment">
              <div class="status in-progress">In Progress</div>
            </section>
          </div>
        </header>

        <div class="entry-media">
          <iframe src="https://player.vimeo.com/video/321840987" width="100%"></iframe>
        </div>

        <div class="entry-content" itemprop="text">
          <p><strong>Total time:</strong> 18 min</p>
          <p>
            Too many websites pour all of their time, money, and energy into acquiring leads. But
            without a dependable strategy to convert this traffic to paying customers, all this
            effort would be in vain.<br />
            In this video course, Justin Rondeau introduces Digital Marketer’s Customer Value
            Optimization Model. This is an original 5-step framework which has&nbsp;been
            consistently proven&nbsp;to convert prospects across a range of industries,
            from&nbsp;e-commerce to b2b.
          </p>
          <span id="more-3923"></span>
          <p>
            Throughout the course, Rondeau will detail and give examples for each of these 5 steps:
          </p>
          <ol>
            <li>Determining market fit</li>
            <li>Generating leads</li>
            <li>Turning lead into a buyer</li>
            <li>Turning that buyer into a multiple purchaser</li>
            <li>Re-engaging lost customers</li>
          </ol>
          <h2 id="about-your-instructor">
            About your instructor<a
              class="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#about-your-instructor"
              style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"
            ></a>
          </h2>

          <p>
            Justin Rondeau is the Director of Optimization at Digital Marketer and runs all of the
            optimization efforts and split tests at DM and is active among our other properties.
          </p>
          <p>
            A top-rated domestic and international speaker, Rondeau has spent his entire career
            working on optimization campaigns and has helped train some of the leading optimization
            teams at Fortune 500 companies.
          </p>
          <p>
            Rondeau has run hundreds of tests for both B2B and eCommerce brands and has analyzed
            3,000+ tests across virtually every industry.
          </p>
          <p>
            <a
              href="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2016/04/rondeau-portrait.jpg"
              data-featherlight="image"
              ><img
                loading="lazy"
                class="alignnone size-medium wp-image-3934"
                src="//conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2016/04/rondeau-portrait-426x426.jpg"
                alt="rondeau portrait"
                width="426"
                height="426"
            /></a>
          </p>

          <h2 id="overview-video">
            Overview video<a
              class="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#overview-video"
              style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"
            ></a>
          </h2>
          <p>Ending paragraph here.</p>
        </div>
      </article>

      <div slot="action-bar">
        <!--
        <vaadin-button
          theme="contrast"
          onclick="window.location.href='https://conversionxli.warmpress.com/lesson/persuasion-slide-introduction/'"
          tabindex="0"
          role="button"
        >Prev<iron-icon slot="prefix" icon="lumo:arrow-left"></iron-icon
        ></vaadin-button>
        <vaadin-button
          theme="secondary"
          onclick="window.location.href='https://conversionxli.warmpress.com/lesson/3-persuasion-slide/'"
          tabindex="0"
          role="button"
        >Next<iron-icon slot="suffix" icon="lumo:arrow-right"></iron-icon
        ></vaadin-button>
        -->
        <vaadin-button theme="primary"
          >Complete lesson <iron-icon icon="vaadin:check-circle" slot="suffix"></iron-icon
        ></vaadin-button>
        <vaadin-button>Secondary action</vaadin-button>
        <vaadin-context-menu selector="vaadin-button" open-on="click" theme="cxl-marketing-nav">
          <template>
            <vaadin-context-menu-list-box theme="cxl-marketing-nav">
              <vaadin-context-menu-item class="vaadin-menu-item" theme="cxl-marketing-nav"
                >Next lesson <iron-icon icon="lumo:arrow-right"></iron-icon
              ></vaadin-context-menu-item>
              <vaadin-context-menu-item class="vaadin-menu-item" theme="cxl-marketing-nav"
                ><iron-icon icon="lumo:arrow-left"></iron-icon> Previous
                lesson</vaadin-context-menu-item
              >
              <hr />
              <vaadin-context-menu-item class="vaadin-menu-item" theme="cxl-marketing-nav"
                >Go to course</vaadin-context-menu-item
              >
            </vaadin-context-menu-list-box>
          </template>
          <vaadin-button theme="icon contrast" aria-label="More actions"
            ><iron-icon icon="vaadin:ellipsis-dots-v"></iron-icon
          ></vaadin-button>
        </vaadin-context-menu>
      </div>
    </cxl-app-layout>
  `;
};

CXLAppLayout2cr.storyName = '[layout=2c-r]';
