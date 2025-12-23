import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground text-sm">T</span>
              </div>
              <span className="text-foreground">Tzylo</span>
            </div>
            <p className="text-muted-foreground text-sm">Open authentication infrastructure.</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/auth-ce"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Auth CE
                </Link>
              </li>
              <li>
                <Link
                  href="/products/flux"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Flux
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.tzylo.com"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tzylo"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm text-center">
            Copyright © {new Date().getFullYear()} Tzylo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
