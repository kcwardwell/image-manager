'use strict';

import { stringifyMessage } from "./lib/returnStringifyMessage";

export async function hello() {
  return stringifyMessage(200,'Go Serverless v1.0! Your function executed successfully!')
}

