import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned in response to a successful GetOpenIdToken request.</p>
 */
export interface GetOpenIdTokenOutput {
    /**
     * <p>A unique identifier in the format REGION:GUID. Note that the IdentityId returned may not match the one passed on input.</p>
     */
    IdentityId?: string;

    /**
     * <p>An OpenID token, valid for 15 minutes.</p>
     */
    Token?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}