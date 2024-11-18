import OfferDetail from '@/components/page/rfq/details'
import React from 'react'

function Page({ params }: { params: { id: string } }) {
  return (
    <OfferDetail params={params} />
  )
}

export default Page