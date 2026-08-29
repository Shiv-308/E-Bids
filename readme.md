-- Schema Plan --

users
  id
  name
  email

tenders
  id
  buyer_id        → users.id
  title
  description
  deadline

bids
  id
  tender_id      → tenders.id
  seller_id      → users.id
  amount
  created_at