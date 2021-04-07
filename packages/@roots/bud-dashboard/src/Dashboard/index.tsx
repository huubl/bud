import {Service as Base} from '@roots/bud-framework'
import {
  React,
  render,
  Instance,
  Text,
  isString,
} from '@roots/bud-support'

import {Dashboard as DashboardComponent} from './components'
import {Error} from '../Error'
import {Write} from '../Write'
import {Screen} from '../components/Screen'
import {Mark} from '../Mark'

/**
 * Dashboard
 */
export class Dashboard extends Base {
  /**
   * Service ident
   */
  public name = 'dashboard'

  /**
   * Ink CLI instance
   */
  public dashboard: Instance

  /**
   * CI mode getter
   */
  public get ci() {
    return this.app.store.isTrue('options.ci')
  }

  /**
   * Register service
   */
  public register(): void {
    Object.assign(this.app, {
      write: Write,
      error: Error,
    })

    this.run = this.run.bind(this)
    this.kill = this.kill.bind(this)
    this.render = this.render.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  /**
   * Mount CLI
   */
  public run(): void {
    if (this.app.store.get('options.ci')) {
      return
    }

    this.info('Initializing dashboard')

    if (this.ci) {
      return
    }

    this.render(<DashboardComponent bud={this.app} />)
  }

  /**
   * Render error
   */
  public renderError(body: string, title: string): Instance {
    return (this.dashboard = render(
      <Screen>
        <Mark text={this.app.name} />
        <Error body={body} title={title} />
      </Screen>,
    ))
  }

  /**
   * Render
   */
  public render(Component: any): Instance {
    if (this.ci) return

    const Output = () =>
      isString(Component) ? (
        <Text>{Component}</Text>
      ) : Array.isArray(Component) ? (
        Component.map((c, id) => <Text key={id}>{c}</Text>)
      ) : (
        Component
      )

    return (this.dashboard = render(
      <Screen>
        <Mark text={this.app.name} />
        <Output />
      </Screen>,
    ))
  }

  /**
   * Unmount CLI
   */
  public kill(): void {
    this.dashboard.unmount()
  }
}
