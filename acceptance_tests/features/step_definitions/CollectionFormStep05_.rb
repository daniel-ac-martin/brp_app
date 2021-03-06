When(/^I go to Step Five of the collection form$/) do
  visit config['collection_host']
  choose('collection-where-radio-Post office')
  click_button('Continue')
  choose('reason-radio-under-age')
  click_button('Continue')
  fill_in('nominated-fullname', :with => 'Mister Resonable')
  fill_in('nominated-date-day', :with => '17')
  fill_in('nominated-date-month', :with => '08')
  fill_in('nominated-date-year', :with => '1988')
  fill_in('nominated-nationality', :with => 'China')
  fill_in('nominated-id-number', :with => '1234567890')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
end

Then(/^I am on Step Five of the collection form$/) do
  page.should have_content('Step 5 of 6')
  page.should have_content('Where can we contact you to let you know about your BRP?')
  page.should have_content('Email address')
  find_by_id('email')
  find_by_id('no-email')
  page.should have_content('I do not have an email address')
  page.should have_content('Phone number (optional)')
  find_field('phone')
  find_button('Continue')
  delete_cookie('hmbrp.sid')
end