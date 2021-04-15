import React from 'react'
import {Box, Text} from 'ink'
import {useGit} from '../../hooks/useGit'

export const Git = ({theme}) => {
  const {branch, status, head} = useGit()
  const {flavor, warning, accent, success} = theme.colors

  const guard = branch && head && status
  if (!guard) return null

  const gitProps = [
    {key: 'branch', data: branch, color: flavor},
    {
      key: 'head',
      data: head,
      color: status ? warning : success,
    },
    {key: 'status', data: status, color: accent},
  ]

  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      flexGrow={1}>
      {gitProps.map(({key, data, color}) => (
        <Text key={key} backgroundColor={color}>
          {' '}
          {data}{' '}
        </Text>
      ))}
    </Box>
  )
}
