import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const textMessage = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.text,
    methodName: Prop.Text,
    propSetterPropName: Prop.Text,
    slackDtoParamName: SlackDto.mapParam(Prop.Text),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
