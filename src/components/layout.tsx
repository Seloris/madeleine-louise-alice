import Header from './header'

export default function Layout({ children }: any) {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header></Header>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  )
}
