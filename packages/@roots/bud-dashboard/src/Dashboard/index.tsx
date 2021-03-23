import {Framework} from '@roots/bud-framework'
import {Dashboard as IDashboard} from '../interface'

import React, {FunctionComponent, useEffect} from 'react'
import {Box, useApp, useInput, Static, Text} from 'ink'
import {
  Assets,
  DevStatus,
  Time,
  Git,
  Screen,
  Progress,
  Module,
} from '../components'
import {useStyle} from '@roots/ink-use-style'
import {useCompilation, usePackageJson} from '../hooks'

export const Dashboard: FunctionComponent<{bud: Framework}> = ({
  bud,
}) => {
  const {
    stats,
    progress,
    errors,
    hasErrors,
    warnings,
    hasWarnings,
  } = useCompilation(bud)

  const app = useApp()

  useInput(input => {
    if (input == 'q') {
      console.clear()
      app.exit()
      process.exit()
    }
  })

  const theme = useStyle(bud.store.get('options.theme'))
  const pkg = usePackageJson(bud)

  useEffect(() => {
    if (!bud.isProduction) return

    const isComplete = progress?.decimal >= 1
    const shouldExit = isComplete || hasErrors

    shouldExit && setTimeout(() => process.exit(), 1000)
  }, [stats, progress, errors])

  const appProps: IDashboard.AppProps = {
    bud,
    theme,
    pkg,
    progress,
    stats,
    errors,
    hasErrors,
    warnings,
    hasWarnings,
  }

  return (
    <Screen>
      <Box flexDirection="column">
        {/** Static: errors */}
        {appProps.hasErrors && appProps.errors && (
          <Static
            marginBottom={1}
            items={appProps.errors.map((body, id) => ({
              id,
              body,
            }))}>
            {error => (
              <Module
                key={error.id}
                color={appProps.theme.colors.error}
                label="Error">
                <Text>{error.body}</Text>
              </Module>
            )}
          </Static>
        )}

        {/** Static: warnings */}
        {appProps.hasWarnings && appProps.warnings && (
          <Static
            marginBottom={1}
            items={appProps.warnings.map((body, id) => ({
              id,
              body,
            }))}>
            {warning => (
              <Module
                key={warning.id}
                color={appProps.theme.colors.warning}
                label="Warning">
                <Text>{warning.body}</Text>
              </Module>
            )}
          </Static>
        )}

        {/** Main  */}
        <Box flexDirection="column">
          {/** Assets */}
          <Module
            label="Assets"
            marginBottom={1}
            color={theme.colors.faded}>
            <Assets {...appProps} />
          </Module>

          {/** Server info */}
          {bud.isDevelopment &&
            bud.server.config.isTrue('middleware.dev') && (
              <Module
                label="Dev Server"
                marginBottom={1}
                color={theme.colors.faded}>
                <DevStatus {...appProps} />
              </Module>
            )}

          {/** Progrss Bar */}
          <Box marginBottom={1}>
            <Progress {...appProps} />
          </Box>

          <Box marginBottom={1}>
            <Git theme={appProps.theme} />
          </Box>

          {/** Git Repo */}
          <Box flexDirection="row" marginBottom={1}>
            <Time {...appProps} />
          </Box>
        </Box>
      </Box>
    </Screen>
  )
}
