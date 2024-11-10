import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse2Icon } from './Ellipse2Icon';
import { ExportButtonIcon } from './ExportButtonIcon';
import { FlatColorIconsNextIcon } from './FlatColorIconsNextIcon';
import { FlatColorIconsNextIcon2 } from './FlatColorIconsNextIcon2';
import { FlatColorIconsNextIcon3 } from './FlatColorIconsNextIcon3';
import { FlatColorIconsNextIcon4 } from './FlatColorIconsNextIcon4';
import { FlatColorIconsNextIcon5 } from './FlatColorIconsNextIcon5';
import { FlatColorIconsNextIcon6 } from './FlatColorIconsNextIcon6';
import { Group2Icon } from './Group2Icon';
import { Group2Icon2 } from './Group2Icon2';
import { Group2Icon3 } from './Group2Icon3';
import { Group2Icon4 } from './Group2Icon4';
import { Group2Icon5 } from './Group2Icon5';
import { Group2Icon6 } from './Group2Icon6';
import { Group2Icon7 } from './Group2Icon7';
import { Group2Icon8 } from './Group2Icon8';
import { Group3Icon } from './Group3Icon';
import { Group3Icon2 } from './Group3Icon2';
import { Group3Icon3 } from './Group3Icon3';
import { Group3Icon4 } from './Group3Icon4';
import { Group3Icon5 } from './Group3Icon5';
import { Group13Icon } from './Group13Icon';
import { Group13Icon2 } from './Group13Icon2';
import { Group13Icon3 } from './Group13Icon3';
import { Inputs_StyleBackgroundIconIcon } from './Inputs_StyleBackgroundIconIcon/Inputs_StyleBackgroundIconIcon';
import classes from './Screen4.module.css';
import { SearchIcon } from './SearchIcon';
import { Star1Icon } from './Star1Icon';
import { Star1Icon2 } from './Star1Icon2';
import { Vector1Icon } from './Vector1Icon';
import { Vector2Icon } from './Vector2Icon';
import { Vector6Icon } from './Vector6Icon';

interface Props {
  className?: string;
}
/* @figmaId 34:2931 */
export const Screen4: FC<Props> = memo(function Screen4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.body}>
        <div className={classes.sidebar}>
          <Inputs_StyleBackgroundIconIcon
            className={classes.inputs}
            classes={{ search: classes.search, icons: classes.icons }}
            swap={{
              search: (
                <div className={classes.search}>
                  <SearchIcon className={classes.icon} />
                </div>
              ),
            }}
            text={{
              typeSomething: <div className={classes.typeSomething}>Type your prompt...</div>,
            }}
          />
          <div className={classes.datasets}>
            <div className={classes.datasetsReferenced}>Datasets referenced</div>
            <div className={classes.frame925}>
              <div className={classes.dataset1}></div>
              <div className={classes.dataset2}></div>
              <div className={classes.dataset3}></div>
              <div className={classes.dataset4}></div>
              <div className={classes.dataset5}></div>
              <div className={classes.dataset6}></div>
            </div>
          </div>
          <div className={classes.summary}>
            <div className={classes.summary2}>Summary</div>
            <div className={classes.droughtsInCaliforniaIntensifyP}>
              Droughts in California intensify poverty, especially in agricultural communities where water scarcity
              reduces crop yields, jobs, and wages. As water costs rise, families face higher living expenses, job
              losses, and health challenges due to compromised sanitation and air quality. This cycle of economic strain
              deepens poverty in vulnerable communities, making it harder for them to achieve financial stability.
            </div>
          </div>
          <div className={classes.summary3}>
            <div className={classes.visualizations}>Visualizations</div>
            <div className={classes.frame928}>
              <div className={classes.graph7}>
                <div className={classes.rectangle1}></div>
                <div className={classes.m}>M</div>
                <div className={classes.t}>T</div>
                <div className={classes.w}>W</div>
                <div className={classes.t2}>T</div>
                <div className={classes.f}>F</div>
                <div className={classes.s}>S</div>
                <div className={classes.s2}>S</div>
                <div className={classes.line3}></div>
                <div className={classes.rectangle2}></div>
                <div className={classes.rectangle9}></div>
                <div className={classes.rectangle10}></div>
                <div className={classes.rectangle3}></div>
                <div className={classes.rectangle11}></div>
                <div className={classes.rectangle12}></div>
                <div className={classes.rectangle4}></div>
                <div className={classes.rectangle13}></div>
                <div className={classes.rectangle14}></div>
                <div className={classes.rectangle5}></div>
                <div className={classes.rectangle15}></div>
                <div className={classes.rectangle16}></div>
                <div className={classes.rectangle6}></div>
                <div className={classes.rectangle17}></div>
                <div className={classes.rectangle18}></div>
                <div className={classes.rectangle7}></div>
                <div className={classes.rectangle19}></div>
                <div className={classes.rectangle20}></div>
                <div className={classes.rectangle8}></div>
                <div className={classes.rectangle21}></div>
                <div className={classes.rectangle22}></div>
                <div className={classes._2h20m}>2h 20m</div>
                <div className={classes.dailyAverage}>Daily Average</div>
                <div className={classes._30m}>+30m</div>
                <div className={classes.thisWeek}>this week</div>
                <div className={classes.frame7}>
                  <div className={classes.group2}>
                    <Group2Icon className={classes.icon2} />
                  </div>
                  <div className={classes.news}>News</div>
                  <div className={classes._2h}>2h</div>
                </div>
                <div className={classes.frame9}>
                  <div className={classes.group22}>
                    <Group2Icon2 className={classes.icon3} />
                  </div>
                  <div className={classes.socialMedia}>Social Media</div>
                  <div className={classes._5h}>5h</div>
                </div>
                <div className={classes.frame8}>
                  <div className={classes.group3}>
                    <Group3Icon className={classes.icon4} />
                  </div>
                  <div className={classes.games}>Games</div>
                  <div className={classes._20m}>20m</div>
                </div>
              </div>
              <div className={classes.graph4}>
                <div className={classes.rectangle110}></div>
                <div className={classes._10}>10</div>
                <div className={classes.mon}>Mon</div>
                <div className={classes.frame1}>
                  <div className={classes.today}>Today</div>
                  <div className={classes._450}>$45.00</div>
                </div>
                <div className={classes.frame2}>
                  <div className={classes.best}>Best</div>
                  <div className={classes._900}>$90.00</div>
                </div>
                <div className={classes._11}>11</div>
                <div className={classes.tue}>Tue</div>
                <div className={classes._12}>12</div>
                <div className={classes.wed}>Wed</div>
                <div className={classes._13}>13</div>
                <div className={classes.thu}>Thu</div>
                <div className={classes._14}>14</div>
                <div className={classes.fri}>Fri</div>
                <div className={classes._15}>15</div>
                <div className={classes.sat}>Sat</div>
                <div className={classes.line1}></div>
                <div className={classes.line4}></div>
                <div className={classes.line2}></div>
                <div className={classes.line5}></div>
                <div className={classes.line32}></div>
                <div className={classes.line6}></div>
                <div className={classes.overallPerformance}>Overall Performance</div>
                <div className={classes.vector1}>
                  <Vector1Icon className={classes.icon5} />
                </div>
                <div className={classes.vector2}>
                  <Vector2Icon className={classes.icon6} />
                </div>
                <div className={classes.ellipse2}>
                  <Ellipse2Icon className={classes.icon7} />
                </div>
                <div className={classes.rectangle102}></div>
                <div className={classes._4500LowSalesInMay}>
                  <p className={classes.labelWrapper}>
                    <span className={classes.label}>4500:</span>
                    <span className={classes.label2}> Low sales in May</span>
                  </p>
                </div>
              </div>
              <div className={classes.graph13}>
                <div className={classes.rectangle111}></div>
                <div className={classes.rectangle23}></div>
                <div className={classes.rectangle112}></div>
                <div className={classes.rectangle32}></div>
                <div className={classes.rectangle122}></div>
                <div className={classes.rectangle42}></div>
                <div className={classes.rectangle52}></div>
                <div className={classes.rectangle62}></div>
                <div className={classes.frame4}>
                  <div className={classes.salesPerformance}>Sales Performance</div>
                </div>
                <div className={classes.frame6}>
                  <div className={classes._30}>30%</div>
                  <div className={classes.yourSalesPerformanceIs30Better}>
                    <div className={classes.textBlock}>Your sales performance is 30%</div>
                    <div className={classes.textBlock2}>better compare to last month</div>
                  </div>
                </div>
                <div className={classes.frame5}>
                  <div className={classes.details}>Details</div>
                </div>
                <div className={classes.jan}>Jan</div>
                <div className={classes.mar}>Mar</div>
                <div className={classes.may}>May</div>
                <div className={classes.jul}>Jul</div>
                <div className={classes.vector6}>
                  <Vector6Icon className={classes.icon8} />
                </div>
                <div className={classes.rectangle103}></div>
                <div className={classes._4500LowSalesInMay2}>
                  <p className={classes.labelWrapper2}>
                    <span className={classes.label3}>4500:</span>
                    <span className={classes.label4}> Low sales in May</span>
                  </p>
                </div>
              </div>
              <div className={classes.graph2}>
                <div className={classes.rectangle113}></div>
                <div className={classes.m2}>M</div>
                <div className={classes.t3}>T</div>
                <div className={classes.w2}>W</div>
                <div className={classes.t4}>T</div>
                <div className={classes.f2}>F</div>
                <div className={classes.s3}>S</div>
                <div className={classes.s4}>S</div>
                <div className={classes.line33}></div>
                <div className={classes.rectangle24}></div>
                <div className={classes.rectangle33}></div>
                <div className={classes.rectangle43}></div>
                <div className={classes.rectangle53}></div>
                <div className={classes.star1}>
                  <Star1Icon className={classes.icon9} />
                </div>
                <div className={classes.rectangle63}></div>
                <div className={classes.rectangle72}></div>
                <div className={classes.rectangle82}></div>
                <div className={classes.weeklyOverview}>Weekly Overview</div>
                <div className={classes.apr10Apr17}>Apr 10 - Apr 17</div>
                <div className={classes.youAreDoingGood}>You are doing good!</div>
                <div className={classes.youAlmostReachedYourGoal}>You almost reached your goal</div>
                <div className={classes.rectangle92}></div>
                <div className={classes._100}>100</div>
                <div className={classes.star12}>
                  <Star1Icon2 className={classes.icon10} />
                </div>
                <div className={classes.group23}>
                  <Group2Icon3 className={classes.icon11} />
                </div>
              </div>
              <div className={classes.graph35}>
                <div className={classes.rectangle114}></div>
                <div className={classes.frame92}>
                  <div className={classes.group24}>
                    <Group2Icon4 className={classes.icon12} />
                  </div>
                  <div className={classes.optionC}>OptionC</div>
                  <div className={classes._55K}>5.5K</div>
                </div>
                <div className={classes.frame10}>
                  <div className={classes.group32}>
                    <Group3Icon2 className={classes.icon13} />
                  </div>
                  <div className={classes.optionD}>Option D</div>
                  <div className={classes._53K}>53K</div>
                </div>
                <div className={classes.group13}>
                  <Group13Icon className={classes.icon14} />
                </div>
                <div className={classes.flatColorIconsNext}>
                  <FlatColorIconsNextIcon className={classes.icon15} />
                </div>
                <div className={classes.flatColorIconsNext2}>
                  <FlatColorIconsNextIcon2 className={classes.icon16} />
                </div>
                <div className={classes._2024}>2024</div>
                <div className={classes.frame72}>
                  <div className={classes.group25}>
                    <Group2Icon5 className={classes.icon17} />
                  </div>
                  <div className={classes.opti}>Opti</div>
                  <div className={classes._23K}>2.3K</div>
                </div>
                <div className={classes.frame82}>
                  <div className={classes.group33}>
                    <Group3Icon3 className={classes.icon18} />
                  </div>
                  <div className={classes.optionB}>Option B</div>
                  <div className={classes._192K}>19.2K</div>
                </div>
              </div>
              <div className={classes.graph24}>
                <div className={classes.rectangle115}></div>
                <div className={classes.group132}>
                  <Group13Icon2 className={classes.icon19} />
                </div>
                <div className={classes.flatColorIconsNext3}>
                  <FlatColorIconsNextIcon3 className={classes.icon20} />
                </div>
                <div className={classes.flatColorIconsNext4}>
                  <FlatColorIconsNextIcon4 className={classes.icon21} />
                </div>
                <div className={classes.march2023}>March 2023</div>
                <div className={classes._45623}>45623</div>
                <div className={classes.visitorsThisMonth}>visitors this month</div>
                <div className={classes.line34}></div>
                <div className={classes.youAreDoingGood2}>You are doing good!</div>
                <div className={classes.youAlmostReachedYourGoal2}>You almost reached your goal</div>
                <div className={classes.group26}>
                  <Group2Icon6 className={classes.icon22} />
                </div>
              </div>
              <div className={classes.graph38}>
                <div className={classes.rectangle116}></div>
                <div className={classes.frame93}>
                  <div className={classes.group27}>
                    <Group2Icon7 className={classes.icon23} />
                  </div>
                  <div className={classes.optionC2}>OptionC</div>
                  <div className={classes._55K2}>5.5K</div>
                </div>
                <div className={classes.frame102}>
                  <div className={classes.group34}>
                    <Group3Icon4 className={classes.icon24} />
                  </div>
                  <div className={classes.optionD2}>Option D</div>
                  <div className={classes._53K2}>53K</div>
                </div>
                <div className={classes.group133}>
                  <Group13Icon3 className={classes.icon25} />
                </div>
                <div className={classes.flatColorIconsNext5}>
                  <FlatColorIconsNextIcon5 className={classes.icon26} />
                </div>
                <div className={classes.flatColorIconsNext6}>
                  <FlatColorIconsNextIcon6 className={classes.icon27} />
                </div>
                <div className={classes._20242}>2024</div>
                <div className={classes.frame73}>
                  <div className={classes.group28}>
                    <Group2Icon8 className={classes.icon28} />
                  </div>
                  <div className={classes.opti2}>Opti</div>
                  <div className={classes._23K2}>2.3K</div>
                </div>
                <div className={classes.frame83}>
                  <div className={classes.group35}>
                    <Group3Icon5 className={classes.icon29} />
                  </div>
                  <div className={classes.optionB2}>Option B</div>
                  <div className={classes._192K2}>19.2K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.output}>
          <div className={classes.impactOfDroughtOnPovertyInCali}>
            <div className={classes.textBlock3}>Impact of Drought on Poverty in California: A Five-Year Analysis</div>
            <div className={classes.textBlock4}>
              <p className={classes.labelWrapper3}></p>
            </div>
            <div className={classes.textBlock5}>
              <p className={classes.labelWrapper4}></p>
            </div>
            <div className={classes.textBlock6}>
              <p className={classes.labelWrapper5}>
                <span className={classes.label5}>1. Introduction</span>
              </p>
            </div>
            <div className={classes.textBlock7}>
              <p className={classes.labelWrapper6}></p>
            </div>
            <div className={classes.textBlock8}>
              <p className={classes.labelWrapper7}>
                <span className={classes.label6}>
                  This report examines the correlation between drought conditions and poverty in California over the
                  past five years, analyzing how persistent droughts have deepened socioeconomic challenges for
                  low-income communities. The report seeks to highlight the multifaceted impacts of drought on
                  vulnerable populations and provide recommendations for addressing these issues through policy and
                  resource management.
                </span>
              </p>
            </div>
            <div className={classes.textBlock9}>
              <p></p>
            </div>
            <div className={classes.textBlock10}>
              <p className={classes.labelWrapper8}>
                <span className={classes.label7}>2. Findings on Drought and Poverty Correlation</span>
              </p>
            </div>
            <div className={classes.textBlock11}>
              <p className={classes.labelWrapper9}></p>
            </div>
            <div className={classes.textBlock12}>
              <p className={classes.labelWrapper10}>
                <span className={classes.label8}>Data Analysis</span>
              </p>
            </div>
            <div className={classes.textBlock13}>
              <p></p>
            </div>
            <div className={classes.textBlock14}>
              California has experienced severe drought conditions over the last five years, driven by fluctuating
              rainfall patterns and rising temperatures. Recent data indicates that water reservoirs have reached
              critically low levels, leading to state-enforced water restrictions. This scarcity has directly affected
              agriculture, which relies heavily on consistent water supply, particularly in the Central Valley, a major
              hub for fruit, vegetable, and nut production.
            </div>
            <div className={classes.textBlock15}>
              <p></p>
            </div>
            <div className={classes.textBlock16}>
              The correlation between drought and poverty is pronounced in California’s agricultural communities. As
              drought reduces crop yields, farmers face financial losses that trickle down to low-wage farmworkers, who
              often rely on seasonal employment. Counties in the Central Valley, where agriculture is the main economic
              driver, have seen higher rates of unemployment and poverty as drought persists. Statistical analyses
              indicate that regions with severe drought conditions show a notable increase in poverty rates compared to
              regions less affected by drought.
            </div>
            <div className={classes.textBlock17}>
              <p></p>
            </div>
            <div className={classes.textBlock18}>
              <p className={classes.labelWrapper11}>
                <span className={classes.label9}>Economic Impact</span>
              </p>
            </div>
            <div className={classes.textBlock19}>
              <p className={classes.labelWrapper12}></p>
            </div>
            <div className={classes.textBlock20}>
              The economic strain on California’s agricultural sector has been substantial. For many smallholder farmers
              and agricultural laborers, reduced income from crop production has led to financial instability. With
              fewer jobs and reduced hours, farmworkers are increasingly affected by poverty, particularly in rural and
              agricultural counties. Water scarcity has further driven up costs for essential goods, disproportionately
              impacting low-income households who spend a higher percentage of their income on food and water.
            </div>
            <div className={classes.textBlock21}>
              <p></p>
            </div>
            <div className={classes.textBlock22}>
              The state’s economy also faces pressure from the increased costs associated with drought response
              measures. Emergency water deliveries, fire prevention efforts, and support programs for affected
              populations have placed a significant financial burden on the state budget. Low-income communities,
              particularly those reliant on agriculture, are struggling to absorb these additional costs, which has
              intensified the cycle of poverty and economic hardship in drought-stricken areas.
            </div>
            <div className={classes.textBlock23}>
              <p></p>
            </div>
            <div className={classes.textBlock24}>
              <p className={classes.labelWrapper13}>
                <span className={classes.label10}>Social Impact</span>
              </p>
            </div>
            <div className={classes.textBlock25}>
              <p></p>
            </div>
            <div className={classes.textBlock26}>
              <p className={classes.labelWrapper14}>
                <span className={classes.label11}>
                  The social implications of drought and poverty are far-reaching. Limited access to clean water has
                  affected sanitation, health, and overall quality of life, especially in low-income and rural areas. In
                  many drought-affected counties, residents report higher rates of food insecurity, with limited access
                  to fresh, affordable produce. Rising costs for food and water due to reduced supply have led to
                  significant hardship among low-income families, who are forced to allocate more of their already
                  limited resources to basic necessities.
                </span>
              </p>
            </div>
            <div className={classes.textBlock27}>
              <p></p>
            </div>
            <div className={classes.textBlock28}>
              Furthermore, educational attainment in these regions has been impacted as children from low-income
              families take on additional responsibilities to support household income. These dynamics create a barrier
              to escaping poverty, perpetuating socioeconomic challenges that extend beyond the immediate effects of
              drought.
            </div>
            <div className={classes.textBlock29}>
              <p></p>
            </div>
            <div className={classes.textBlock30}>
              <p className={classes.labelWrapper15}>
                <span className={classes.label12}>3. Conclusions and Recommendations</span>
              </p>
            </div>
            <div className={classes.textBlock31}>
              <p className={classes.labelWrapper16}></p>
            </div>
            <div className={classes.textBlock32}>
              <p className={classes.labelWrapper17}>
                <span className={classes.label13}>Conclusions</span>
              </p>
            </div>
            <div className={classes.textBlock33}>
              <p></p>
            </div>
            <div className={classes.textBlock34}>
              <p></p>
            </div>
            <div className={classes.textBlock35}>
              The findings indicate a clear link between drought and increased poverty in California. The drought’s
              impact on agriculture, employment, and the cost of living has exacerbated poverty, especially in rural
              communities. Without strategic interventions, these conditions will likely worsen, impacting both economic
              resilience and social stability in California’s most vulnerable regions.
            </div>
            <div className={classes.textBlock36}>
              <p></p>
            </div>
            <div className={classes.textBlock37}>
              <p className={classes.labelWrapper18}>
                <span className={classes.label14}>Recommendations</span>
              </p>
            </div>
            <div className={classes.textBlock38}>
              <p></p>
            </div>
            <div className={classes.textBlock39}>
              1. Sustainable Water Management**: Implement and expand sustainable water management practices, such as
              groundwater replenishment, water recycling, and drip irrigation, to mitigate the impact of drought on
              agriculture.
            </div>
            <div className={classes.textBlock40}>
              2. Economic Support for Affected Communities**: Provide targeted economic support to smallholder farmers
              and farmworkers through subsidies, low-interest loans, and direct financial aid to help offset income
              losses due to drought.
            </div>
            <div className={classes.textBlock41}>
              3. Investment in Social Safety Nets**: Strengthen social safety nets, such as food assistance programs and
              affordable housing initiatives, to support low-income families struggling with rising living costs
              exacerbated by drought.
            </div>
            <div className={classes.textBlock42}>
              4. Public Awareness and Community Engagement**: Promote public awareness campaigns about water
              conservation and provide resources to encourage community-led water-saving initiatives, focusing on the
              hardest-hit communities.
            </div>
            <div className={classes.textBlock43}>
              <p></p>
            </div>
            <div className={classes.textBlock44}>
              <p className={classes.labelWrapper19}>
                <span className={classes.label15}>4. References</span>
              </p>
            </div>
            <div className={classes.textBlock45}>
              <p className={classes.labelWrapper20}></p>
            </div>
            <div className={classes.textBlock46}>
              <p></p>
            </div>
            <div className={classes.textBlock47}>
              1. California Department of Water Resources. (2023). *State Water Project Supply Allocations and Drought
              Response Report*.
            </div>
            <div className={classes.textBlock48}>
              2. U.S. Bureau of Economic Analysis. (2023). *Agricultural Income Statistics in the Central Valley*.
            </div>
            <div className={classes.textBlock49}>
              3. California Department of Social Services. (2022). *Food Security and Poverty Indicators by County*.
            </div>
            <div className={classes.textBlock50}>
              4. National Oceanic and Atmospheric Administration. (2023). *Climate Data on Drought Patterns in the
              Western United States*.
            </div>
            <div className={classes.textBlock51}>
              <p></p>
            </div>
            <div className={classes.textBlock52}>
              <p></p>
            </div>
          </div>
          <div className={classes.exportButton}>
            <ExportButtonIcon className={classes.icon30} />
          </div>
          <div className={classes.scrollbar}></div>
        </div>
      </div>
    </div>
  );
});
