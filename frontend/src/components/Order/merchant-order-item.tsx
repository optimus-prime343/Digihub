import Image from 'next/image'
import React, { FC } from 'react'

import NextLink from '~shared/next-link'
import { IOrder } from '~types/order'
import { getProductImageUrl } from '~utils/getImageUrl'

interface IMercantOrderItemProperties {
  order: IOrder
}

const MerchantOrderItem: FC<IMercantOrderItemProperties> = ({ order }) => {
  return (
    <div className='space-y-2'>
      <Image
        alt={order.product.name}
        className='rounded-md'
        height={300}
        objectFit='cover'
        src={getProductImageUrl(order.product.images[1])}
        width={300}
      />
      <p className='text-2xl font-medium'>
        {order.quantity} - {order.product.name}
      </p>
      <NextLink
        className='block text-lg font-medium text-indigo-600'
        href={`/user/${order.user.id}`}
      >
        {`By ${order.user.username}`}
      </NextLink>
    </div>
  )
}

export default MerchantOrderItem
