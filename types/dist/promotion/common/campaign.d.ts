import { BaseFilterable } from "../../dal";
import { CampaignBudgetDTO } from "./campaign-budget";
/**
 * The campaign details.
 */
export interface CampaignDTO {
    /**
     * The ID of the campaign.
     */
    id: string;
    /**
     * The name of the campaign.
     */
    name?: string;
    /**
     * The description of the campaign.
     */
    description?: string;
    /**
     * The currency of the campaign.
     */
    currency?: string;
    /**
     * The campaign identifier of the campaign.
     */
    campaign_identifier?: string;
    /**
     * The start date of the campaign.
     */
    starts_at?: Date;
    /**
     * The end date of the campaign.
     */
    ends_at?: Date;
    /**
     * The associated campaign budget.
     */
    budget?: CampaignBudgetDTO;
}
/**
 * The filters to apply on the retrieved campaigns.
 */
export interface FilterableCampaignProps extends BaseFilterable<FilterableCampaignProps> {
    /**
     * Find campaigns by their name or description through this search term.
     */
    q?: string;
    /**
     * The IDs to filter the campaigns by.
     */
    id?: string[];
    /**
     * Filters the campaigns by their campaign identifier.
     */
    campaign_identifier?: string[];
}
//# sourceMappingURL=campaign.d.ts.map