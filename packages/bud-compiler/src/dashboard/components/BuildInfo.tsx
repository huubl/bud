import React, {FunctionComponent} from 'react'
import {Box, Text} from 'ink'
import {Loading} from './Loading'

interface InfoProps {
  build: any
  width: number
}

const BuildInfo: FunctionComponent<InfoProps> = ({build, width}) => (
  <Box flexDirection="column" paddingTop={1} width={width}>
    {build?.percentage == 1 && build?.hash && (
      <Text color="#6C758F">
        Build {build?.hash}. Finished in {build?.time / 1000}s.
      </Text>
    )}

    <Loading build={build} />
  </Box>
)

export {BuildInfo}
