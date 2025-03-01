import {spawnSync, SpawnSyncReturns} from 'child_process'
import {IDependencyManager} from './'

export class Npm implements IDependencyManager {
  public path: string

  constructor(path: string = process.cwd()) {
    this.path = path
  }

  install(
    dev: boolean,
    dependency: string,
  ): SpawnSyncReturns<string> {
    const args = ['install'].concat(dependency, [
      '--prefix',
      this.path,
      '--production=false',
      dev ? '--save-dev' : '--save',
      '-',
    ])

    return spawnSync('npm', args)
  }

  uninstall(dependency: string): SpawnSyncReturns<string> {
    const args = ['uninstall'].concat(dependency, [
      '--prefix',
      this.path,
    ])
    return spawnSync('npm', args)
  }
}
