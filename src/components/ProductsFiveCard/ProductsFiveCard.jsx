import Image from "next/image";

export default function ProductsFiveCard() {
  return (
    <div className="bg-white py-16 sm:py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Everything you need to deploy your app
        </p>

        {/* Bento Grid Container */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-16">
          
          {/* Row 1: 2 Columns */}
          <div className="grid gap-4 lg:grid-cols-2">
            
            {/* Card 1: Performance */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-80">
              <div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 text-center">Lightning-fast builds</h3>
                
                <Image width={1000} height={1000} className="w-full" src="/images/cms/displayLab CMS.png" alt="" />
              </div>
              
              <div className="mt-6 flex gap-8 bg-white p-4 rounded-xl border border-slate-200 w-fit shadow-sm">
                <div>
                  <span className="block text-xs text-slate-500">Number of deploys</span>
                  <span className="text-3xl font-bold text-slate-900">405</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Avg deploy time</span>
                  <span className="text-3xl font-bold text-slate-900">3.65<span className="text-sm font-normal text-slate-500"> mins</span></span>
                </div>
              </div>
            </div>

            {/* Card 2: Releases */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-80">
              <div>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 text-center ">Push to deploy</h3>
                
              </div>
              <div className="">
                <Image width={1000} height={1000} className="w-full" src="/images/cms/displayLab CMS.png" alt="" />
              </div>
            </div>

          </div>

          {/* Row 2: 3 Columns */}
          <div className="grid gap-4 lg:grid-cols-3">
            
            {/* Card 3: Shortcuts */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-medium text-slate-900">Keyboard Shortcuts</h4>
                <p className="mt-1 text-sm text-slate-600">Manage workflows entirely from your keyboard.</p>
                <Image width={1000} height={1000} className="w-full" src="/images/cms/displayLab CMS.png" alt="" />
              </div>
             
            </div>

            {/* Card 4: Integrations */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-medium text-slate-900">Connected Ecosystem</h4>
                <p className="mt-1 text-sm text-slate-600">Integrates seamlessly with all your favorite dev tools.</p>
              </div>
              <Image width={1000} height={1000} className="w-full" src="/images/cms/displayLab CMS.png" alt="" />
            </div>

            {/* Card 5: Infrastructure */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-medium text-slate-900">Global Infrastructure</h4>
                <p className="mt-1 text-sm text-slate-600">Deploy close to your users around the globe instantly.</p>
              </div>
              <Image width={1000} height={1000} className="w-full" src="/images/cms/displayLab CMS.png" alt="" />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}