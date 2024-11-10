import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowUpCircleIcon } from './ArrowUpCircleIcon';
import { Ellipse2Icon } from './Ellipse2Icon';
import { ExportButtonIcon } from './ExportButtonIcon';
import { FlatColorIconsNextIcon } from './FlatColorIconsNextIcon';
import { FlatColorIconsNextIcon2 } from './FlatColorIconsNextIcon2';
import { Group2Icon } from './Group2Icon';
import { Group2Icon2 } from './Group2Icon2';
import { Group2Icon3 } from './Group2Icon3';
import { Group2Icon4 } from './Group2Icon4';
import { Group3Icon } from './Group3Icon';
import { Group3Icon2 } from './Group3Icon2';
import { Group3Icon3 } from './Group3Icon3';
import { Group13Icon } from './Group13Icon';
import { GroupIcon } from './GroupIcon';
import { GroupIcon2 } from './GroupIcon2';
import { GroupIcon3 } from './GroupIcon3';
import { GroupIcon4 } from './GroupIcon4';
import { Icons_iconSearchCornersRounded } from './Icons_iconSearchCornersRounded/Icons_iconSearchCornersRounded';
import { SearchIcon } from './SearchIcon';
import { Vector1Icon } from './Vector1Icon';
import { Vector2Icon } from './Vector2Icon';
import { Vector6Icon } from './Vector6Icon';
import classes from './Xyra.module.css';

interface Props {
  className?: string;
}
/* @figmaId 64:1949 */
export const Xyra: FC<Props> = memo(function Xyra(props = {}) {
  const [showingData, setShowingData] = useState(false)
  const [userQuestion, setUserQuestion] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuestion(event.target.value)
  }

  const handleSearchClick = () => {
    if (userQuestion.trim()) {
      setLoading(true); // Show loading indicator

      // Delay showing data by 3 seconds
      setTimeout(() => {
        setLoading(false); // Hide loading indicator
        setShowingData(true); // Show the report or content
      }, 3000);
    }
  };

  const Report = () => {
    return (
      <div className={classes.report}>
        <div className={classes.impactOfDroughtOnPovertyInCali}>
          <div className={classes.textBlock}>Impact of Drought on Poverty in California: A Five-Year Analysis</div>
          <div className={classes.textBlock2}>
            <p className={classes.labelWrapper}></p>
          </div>
          <div className={classes.textBlock3}>
            <p className={classes.labelWrapper2}></p>
          </div>
          <div className={classes.textBlock4}>
            <p className={classes.labelWrapper3}>
              <span className={classes.label}>1. Introduction</span>
            </p>
          </div>
          <div className={classes.textBlock5}>
            <p className={classes.labelWrapper4}></p>
          </div>
          <div className={classes.textBlock6}>
            This report examines the correlation between drought conditions and poverty in California over the past
            five years, analyzing how persistent droughts have deepened socioeconomic challenges for low-income
            communities. The report seeks to highlight the multifaceted impacts of drought on vulnerable populations
            and provide recommendations for addressing these issues through policy and resource management.
          </div>
          <div className={classes.textBlock7}>
            <p className={classes.labelWrapper5}></p>
          </div>
          <div className={classes.textBlock8}>
            <p className={classes.labelWrapper6}>
              <span className={classes.label2}>2. Findings on Drought and Poverty Correlation</span>
            </p>
          </div>
          <div className={classes.textBlock9}>
            <p className={classes.labelWrapper7}></p>
          </div>
          <div className={classes.textBlock10}>
            <p className={classes.labelWrapper8}>
              <span className={classes.label3}>Data Analysis</span>
            </p>
          </div>
          <div className={classes.textBlock11}>
            <p></p>
          </div>
          <div className={classes.textBlock12}>
            <p className={classes.labelWrapper9}>
              <span className={classes.label4}>
                California has experienced severe drought conditions over the last five years, driven by fluctuating
                rainfall patterns and rising temperatures. Recent data indicates that water reservoirs have reached
                critically low levels, leading to state-enforced water restrictions. This scarcity has directly
                affected agriculture, which relies heavily on consistent water supply, particularly in the Central
                Valley, a major hub for fruit, vegetable, and nut production.
              </span>
            </p>
          </div>
          <div className={classes.textBlock13}>
            <p className={classes.labelWrapper10}></p>
          </div>
          <div className={classes.textBlock14}>
            <p className={classes.labelWrapper11}>
              <span className={classes.label5}>
                The correlation between drought and poverty is pronounced in California’s agricultural communities. As
                drought reduces crop yields, farmers face financial losses that trickle down to low-wage farmworkers,
                who often rely on seasonal employment. Counties in the Central Valley, where agriculture is the main
                economic driver, have seen higher rates of unemployment and poverty as drought persists. Statistical
                analyses indicate that regions with severe drought conditions show a notable increase in poverty rates
                compared to regions less affected by drought.
              </span>
            </p>
          </div>
          <div className={classes.textBlock15}>
            <p className={classes.labelWrapper12}></p>
          </div>
          <div className={classes.textBlock16}>
            <p className={classes.labelWrapper13}>
              <span className={classes.label6}>Economic Impact</span>
            </p>
          </div>
          <div className={classes.textBlock17}>
            <p className={classes.labelWrapper14}></p>
          </div>
          <div className={classes.textBlock18}>
            The economic strain on California’s agricultural sector has been substantial. For many smallholder farmers
            and agricultural laborers, reduced income from crop production has led to financial instability. With
            fewer jobs and reduced hours, farmworkers are increasingly affected by poverty, particularly in rural and
            agricultural counties. Water scarcity has further driven up costs for essential goods, disproportionately
            impacting low-income households who spend a higher percentage of their income on food and water.
          </div>
          <div className={classes.textBlock19}>
            <p></p>
          </div>
          <div className={classes.textBlock20}>
            The state’s economy also faces pressure from the increased costs associated with drought response
            measures. Emergency water deliveries, fire prevention efforts, and support programs for affected
            populations have placed a significant financial burden on the state budget. Low-income communities,
            particularly those reliant on agriculture, are struggling to absorb these additional costs, which has
            intensified the cycle of poverty and economic hardship in drought-stricken areas.
          </div>
          <div className={classes.textBlock21}>
            <p className={classes.labelWrapper15}></p>
          </div>
          <div className={classes.textBlock22}>
            <p className={classes.labelWrapper16}>
              <span className={classes.label7}>Social Impact</span>
            </p>
          </div>
          <div className={classes.textBlock23}>
            <p></p>
          </div>
          <div className={classes.textBlock24}>
            <p className={classes.labelWrapper17}>
              <span className={classes.label8}>
                The social implications of drought and poverty are far-reaching. Limited access to clean water has
                affected sanitation, health, and overall quality of life, especially in low-income and rural areas. In
                many drought-affected counties, residents report higher rates of food insecurity, with limited access
                to fresh, affordable produce. Rising costs for food and water due to reduced supply have led to
                significant hardship among low-income families, who are forced to allocate more of their already
                limited resources to basic necessities.
              </span>
            </p>
          </div>
          <div className={classes.textBlock25}>
            <p className={classes.labelWrapper18}></p>
          </div>
          <div className={classes.textBlock26}>
            <p className={classes.labelWrapper19}>
              <span className={classes.label9}>
                Furthermore, educational attainment in these regions has been impacted as children from low-income
                families take on additional responsibilities to support household income. These dynamics create a
                barrier to escaping poverty, perpetuating socioeconomic challenges that extend beyond the immediate
                effects of drought.
              </span>
            </p>
          </div>
          <div className={classes.textBlock27}>
            <p className={classes.labelWrapper20}></p>
          </div>
          <div className={classes.textBlock28}>
            <p className={classes.labelWrapper21}>
              <span className={classes.label10}>3. Conclusions and Recommendations</span>
            </p>
          </div>
          <div className={classes.textBlock29}>
            <p className={classes.labelWrapper22}></p>
          </div>
          <div className={classes.textBlock30}>
            <p className={classes.labelWrapper23}>
              <span className={classes.label11}>Conclusions</span>
            </p>
          </div>
          <div className={classes.textBlock31}>
            <p></p>
          </div>
          <div className={classes.textBlock32}>
            <p></p>
          </div>
          <div className={classes.textBlock33}>
            <p className={classes.labelWrapper24}>
              <span className={classes.label12}>
                The findings indicate a clear link between drought and increased poverty in California. The drought’s
                impact on agriculture, employment, and the cost of living has exacerbated poverty, especially in rural
                communities. Without strategic interventions, these conditions will likely worsen, impacting both
                economic resilience and social stability in California’s most vulnerable regions.
              </span>
            </p>
          </div>
          <div className={classes.textBlock34}>
            <p className={classes.labelWrapper25}></p>
          </div>
          <div className={classes.textBlock35}>
            <p className={classes.labelWrapper26}>
              <span className={classes.label13}>Recommendations</span>
            </p>
          </div>
          <div className={classes.textBlock36}>
            <p></p>
          </div>
          <div className={classes.textBlock37}>
            <p className={classes.labelWrapper27}>
              <span className={classes.label14}>
                1. Sustainable Water Management**: Implement and expand sustainable water management practices, such
                as groundwater replenishment, water recycling, and drip irrigation, to mitigate the impact of drought
                on agriculture.
              </span>
            </p>
          </div>
          <div className={classes.textBlock38}>
            2. Economic Support for Affected Communities**: Provide targeted economic support to smallholder farmers
            and farmworkers through subsidies, low-interest loans, and direct financial aid to help offset income
            losses due to drought.
          </div>
          <div className={classes.textBlock39}>
            3. Investment in Social Safety Nets**: Strengthen social safety nets, such as food assistance programs and
            affordable housing initiatives, to support low-income families struggling with rising living costs
            exacerbated by drought.
          </div>
          <div className={classes.textBlock40}>
            4. Public Awareness and Community Engagement**: Promote public awareness campaigns about water
            conservation and provide resources to encourage community-led water-saving initiatives, focusing on the
            hardest-hit communities.
          </div>
          <div className={classes.textBlock41}>
            <p className={classes.labelWrapper28}></p>
          </div>
          <div className={classes.textBlock42}>
            <p className={classes.labelWrapper29}>
              <span className={classes.label15}>4. References</span>
            </p>
          </div>
          <div className={classes.textBlock43}>
            <p className={classes.labelWrapper30}></p>
          </div>
          <div className={classes.textBlock44}>
            <p></p>
          </div>
          <div className={classes.textBlock45}>
            <p className={classes.labelWrapper31}>
              <span className={classes.label16}>
                1. California Department of Water Resources. (2023). *State Water Project Supply Allocations and
                Drought Response Report*.
              </span>
            </p>
          </div>
          <div className={classes.textBlock46}>
            2. U.S. Bureau of Economic Analysis. (2023). *Agricultural Income Statistics in the Central Valley*.
          </div>
          <div className={classes.textBlock47}>
            3. California Department of Social Services. (2022). *Food Security and Poverty Indicators by County*.
          </div>
          <div className={classes.textBlock48}>
            4. National Oceanic and Atmospheric Administration. (2023). *Climate Data on Drought Patterns in the
            Western United States*.
          </div>
          <div className={classes.textBlock49}>
            <p className={classes.labelWrapper32}></p>
          </div>
          <div className={classes.textBlock50}>
            <p></p>
          </div>
        </div>
      </div>
    )
  }

  const ReferencedDatasets = () => {
    return (
      <div className={classes.dataReferences}>
        <div className={classes.referencedDatasets}>Referenced datasets</div>
        <div className={classes.datasets}>
          <div className={classes.dataset1}>
            <div className={classes.image10}></div>
            <div className={classes.group}>
              <GroupIcon className={classes.icon3} />
            </div>
          </div>
          <div className={classes.dataset2}>
            <div className={classes.image102}></div>
            <div className={classes.group2}>
              <GroupIcon2 className={classes.icon4} />
            </div>
          </div>
          <div className={classes.dataset3}>
            <div className={classes.phFileCsvDuotone}>
              <div className={classes.file_15678991}></div>
              <div className={classes.group3}>
                <GroupIcon3 className={classes.icon5} />
              </div>
            </div>
          </div>
          <div className={classes.dataset4}>
            <div className={classes.phFileCsvDuotone2}>
              <div className={classes.file_156789912}></div>
              <div className={classes.group4}>
                <GroupIcon4 className={classes.icon6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Summary = () => {
    return (
      <>
      <div className={classes.summary2}>Summary</div>
      <div className={classes.droughtsInCaliforniaIntensifyP}>
        Droughts in California intensify poverty, especially in agricultural communities where water scarcity
        reduces crop yields, jobs, and wages. As water costs rise, families face higher living expenses, job losses,
        and health challenges due to compromised sanitation and air quality. This cycle of economic strain deepens
        poverty in vulnerable communities, making it harder for them to achieve financial stability.
      </div>
      </>
    )
  }

  const Visualizations = () => {
    return (
      <>
        <div className={classes.group183}>
          <div className={classes.visualizations2}>Visualizations</div>
        </div>
        <div className={classes.group184}>
          <div className={classes.rectangle1}></div>
          <div className={classes.frame9}>
            <div className={classes.group22}>
              <Group2Icon className={classes.icon7} />
            </div>
            <div className={classes.c}>C</div>
            <div className={classes._55K}>5.5K</div>
          </div>
          <div className={classes.frame10}>
            <div className={classes.group32}>
              <Group3Icon className={classes.icon8} />
            </div>
            <div className={classes.d}>D</div>
            <div className={classes._53K}>53K</div>
          </div>
          <div className={classes.group13}>
            <Group13Icon className={classes.icon9} />
          </div>
          <div className={classes.flatColorIconsNext}>
            <FlatColorIconsNextIcon className={classes.icon10} />
          </div>
          <div className={classes.flatColorIconsNext2}>
            <FlatColorIconsNextIcon2 className={classes.icon11} />
          </div>
          <div className={classes._2024}>2024</div>
          <div className={classes.frame7}>
            <div className={classes.group23}>
              <Group2Icon2 className={classes.icon12} />
            </div>
            <div className={classes.a}>A</div>
            <div className={classes._23K}>2.3K</div>
          </div>
          <div className={classes.frame8}>
            <div className={classes.group33}>
              <Group3Icon2 className={classes.icon13} />
            </div>
            <div className={classes.b}>B</div>
            <div className={classes._192K}>19.2K</div>
          </div>
          <div className={classes.rectangle12}></div>
          <div className={classes._10}>10</div>
          <div className={classes.mon}>Mon</div>
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
          <div className={classes.line3}></div>
          <div className={classes.line6}></div>
          <div className={classes.energyPrices}>Energy Prices</div>
          <div className={classes.vector1}>
            <Vector1Icon className={classes.icon14} />
          </div>
          <div className={classes.vector2}>
            <Vector2Icon className={classes.icon15} />
          </div>
          <div className={classes.ellipse2}>
            <Ellipse2Icon className={classes.icon16} />
          </div>
          <div className={classes.rectangle10}></div>
          <div className={classes._4500LowSalesInMay}>
            <p className={classes.labelWrapper33}>
              <span className={classes.label17}>4500:</span>
              <span className={classes.label18}> Low sales in May</span>
            </p>
          </div>
          <div className={classes.rectangle13}></div>
          <div className={classes.rectangle2}></div>
          <div className={classes.rectangle11}></div>
          <div className={classes.rectangle3}></div>
          <div className={classes.rectangle122}></div>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.rectangle6}></div>
          <div className={classes.frame4}>
            <div className={classes.povertyRates}>Poverty Rates</div>
          </div>
          <div className={classes.frame6}>
            <div className={classes._30}>30%</div>
            <div className={classes.povertyRateIs30LowerCompareToL}>
              <div className={classes.textBlock51}>Poverty rate is 30%</div>
              <div className={classes.textBlock52}>lower compare to last decade</div>
            </div>
          </div>
          <div className={classes._1980}>1980</div>
          <div className={classes._1990}>1990</div>
          <div className={classes._2000}>2000</div>
          <div className={classes._2010}>2010</div>
          <div className={classes.vector6}>
            <Vector6Icon className={classes.icon17} />
          </div>
          <div className={classes.rectangle102}></div>
          <div className={classes._4500LowIn1995}>
            <p className={classes.labelWrapper34}>
              <span className={classes.label19}>4500:</span>
              <span className={classes.label20}> Low in 1995</span>
            </p>
          </div>
          <div className={classes.rectangle14}></div>
          <div className={classes.feb}>Feb</div>
          <div className={classes.mar}>Mar</div>
          <div className={classes.apr}>Apr</div>
          <div className={classes.may}>May</div>
          <div className={classes.jun}>Jun</div>
          <div className={classes.jul}>Jul</div>
          <div className={classes.aug}>Aug</div>
          <div className={classes.line32}></div>
          <div className={classes.rectangle22}></div>
          <div className={classes.rectangle9}></div>
          <div className={classes.rectangle103}></div>
          <div className={classes.rectangle32}></div>
          <div className={classes.rectangle112}></div>
          <div className={classes.rectangle123}></div>
          <div className={classes.rectangle42}></div>
          <div className={classes.rectangle132}></div>
          <div className={classes.rectangle142}></div>
          <div className={classes.rectangle52}></div>
          <div className={classes.rectangle15}></div>
          <div className={classes.rectangle16}></div>
          <div className={classes.rectangle62}></div>
          <div className={classes.rectangle17}></div>
          <div className={classes.rectangle18}></div>
          <div className={classes.rectangle7}></div>
          <div className={classes.rectangle19}></div>
          <div className={classes.rectangle20}></div>
          <div className={classes.rectangle8}></div>
          <div className={classes.rectangle21}></div>
          <div className={classes.rectangle222}></div>
          <div className={classes.rainfallAverage}>Rainfall Average</div>
          <div className={classes._30m}>+30m</div>
          <div className={classes.thisWeek}>this week</div>
          <div className={classes.frame72}>
            <div className={classes.group24}>
              <Group2Icon3 className={classes.icon18} />
            </div>
            <div className={classes.a2}>A</div>
            <div className={classes._2h}>2h</div>
          </div>
          <div className={classes.frame92}>
            <div className={classes.group25}>
              <Group2Icon4 className={classes.icon19} />
            </div>
            <div className={classes.c2}>C</div>
            <div className={classes._5h}>5h</div>
          </div>
          <div className={classes.frame82}>
            <div className={classes.group34}>
              <Group3Icon3 className={classes.icon20} />
            </div>
            <div className={classes.b2}>B</div>
            <div className={classes._20m}>20m</div>
          </div>
        </div>
      </>
    )
  }

  
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.output}>
      {loading ? (
        <div className={classes.loadingIndicator}>
          <div className={classes.spinner}></div>
          <div className={classes.loadingText}>Loading</div>
        </div>
      ) : (
        showingData && <Report />
    )}
      </div>
      <div className={classes.sidebar}>
        <div className={classes.promptInput}>
          <div className={classes.group180}>
            <Icons_iconSearchCornersRounded
              className={classes.icons}
              classes={{ search: classes.search }}
              swap={{
                search: (
                  <div className={classes.search}>
                    <SearchIcon className={classes.icon} />
                  </div>
                ),
              }}
            />
            <input
              type='text'
              placeholder='Type your question...'
              className={classes.typeYourResearchQuestion}
              value={userQuestion}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.send}>
            <button className={classes.arrowButton} onClick={handleSearchClick}>
              <ArrowUpCircleIcon className={classes.icon2} />
            </button>
          </div>
        </div>
        {showingData && <ReferencedDatasets />}
        <div className={classes.summary}>
          {showingData && <Summary />}
        </div>
        <div className={classes.visualizations}>
          {showingData && <Visualizations />}
        </div>
      </div>
      <div className={classes.exportButton}>
        <ExportButtonIcon className={classes.icon21} />
      </div>
    </div>
  );
});
