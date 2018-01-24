import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetCommentsForComparedCommit} from '../model/GetCommentsForComparedCommit';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCommentsForComparedCommitInput} from '../types/GetCommentsForComparedCommitInput';
import {GetCommentsForComparedCommitOutput} from '../types/GetCommentsForComparedCommitOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetCommentsForComparedCommitCommand implements __aws_types.Command<
    InputTypesUnion,
    GetCommentsForComparedCommitInput,
    OutputTypesUnion,
    GetCommentsForComparedCommitOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput, _stream.Readable>();

    constructor(readonly input: GetCommentsForComparedCommitInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetCommentsForComparedCommit
        };

        return stack.resolve(
            handler<GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}