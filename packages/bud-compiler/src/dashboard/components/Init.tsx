import React, {FunctionComponent} from 'react'
import {Box, Text, Spacer} from 'ink'
import Screen from './UI/Screen'

interface InitProps {
  bud: any
  config: any
}

const Init: FunctionComponent<InitProps> = ({bud, config}) => {
  return (
    <Screen title="Build information">
      <Box flexDirection="column">
        <Box
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignSelf="flex-start">
          <Text color="green">Host:</Text>
          <Spacer />
          <Text>
            {' '}
            {bud.options.get('webpack.devServer.proxy.host')}
          </Text>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignSelf="flex-start">
          <Text color="green">Proxied to:</Text>
          <Spacer />
          <Text>
            {' '}
            {bud.options.get('webpack.devServer.host')}:
            {bud.options.get('webpack.devServer.port')}
          </Text>
        </Box>
        <Box
          marginTop={1}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignSelf="flex-start">
          <Text color="green">Entrypoints:</Text>
          <Spacer />
          {Object.entries(bud.options.get('webpack.entry')).map(
            ([name, files], id) => (
              <Box flexDirection="row" marginTop={1} key={id}>
                <Text dimColor wrap="truncate">
                  <Text bold>
                    ✨{'  '}
                    {name}
                    {'  '}
                  </Text>
                  {(files as string[]).map(
                    file => `▶ ${file.split('/').pop()} `,
                  )}
                </Text>
              </Box>
            ),
          )}
        </Box>
        <Box
          marginTop={1}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignSelf="flex-start">
          <Text color="green">Filetypes supported:</Text>
          <Spacer />
          <Text>
            {' '}
            {config.resolve.extensions.map(ext => `${ext} `)}
          </Text>
        </Box>
        <Box
          marginTop={1}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignSelf="flex-start">
          <Text color="green">Features:</Text>
          <Spacer />
          <Text>
            {' '}
            {bud.features
              .entries()
              .filter(([name, enabled]) => enabled)
              .map(([name, enabled]) => `${name} `)}
          </Text>
        </Box>
      </Box>
    </Screen>
  )
}

export {Init}
