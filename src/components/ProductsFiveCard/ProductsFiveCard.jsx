import Image from "next/image";

export default function ProductsFiveCard() {
  return (
    <div className="bg-white py-16 sm:py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Bento Grid Container */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-16">
          
          {/* Row 1: 2 Columns */}
          <div className="grid gap-4 lg:grid-cols-2">
            
            {/* Card 1: Performance */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-80">
              <div>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 text-center ">Push to deploy</h3>
                
              </div>
              <div className="">
                <Image width={1000} height={1000} className="w-full" src="/images/products/1.png" alt="" />
              </div>
            </div>

            {/* Card 2: Releases */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-80">
              <div>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 text-center ">Push to deploy</h3>
                
              </div>
              <div className="">
                <Image width={1000} height={1000} className="w-full" src="/images/products/2.png" alt="" />
              </div>
            </div>

          </div>

          {/* Row 2: 3 Columns */}
          <div className="grid gap-4 lg:grid-cols-3">
            
            {/* Card 3: Shortcuts */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 text-center">Push to deploy</h4>
                <Image width={1000} height={1000} className="w-full" src="/images/products/3.png" alt="Push to deploy" />
                {/* <Image width={1000} height={1000} className="w-full" src="/images/cms/displayLab CMS.png" alt="Push to deploy" /> */}

              </div>
             
            </div>

            {/* Card 4: Integrations */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 text-center">Push to deploy</h4>
                <Image width={1000} height={1000} className="w-full" src="/images/products/4.png" alt="Push to deploy" />
              </div>
             
            </div>

            {/* Card 5: Infrastructure */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-65">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 text-center">Push to deploy</h4>
                <Image width={1000} height={1000} className="w-full" src="/images/products/1.png" alt="Push to deploy" />
              </div>
             
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}