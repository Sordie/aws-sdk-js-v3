import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
 */
export interface ResourceNotFoundException extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
    name: 'ResourceNotFoundException';
}

export interface _ResourceNotFoundExceptionDetails {
    /**
     * <p>The message returned by a ResourceNotFoundException.</p>
     */
    message?: string;
}