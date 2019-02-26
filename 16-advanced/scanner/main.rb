require 'sinatra'
require 'sinatra/reloader'

puts "Please run the following command in another terminal"
puts "sudo nmap -Pn -sS -oA scan -p 80 -iR 0 -vvv --open"

get '/' do
  # open the scan log
  scanlog = File.open 'scan.gnmap'

  @hosts = [] # This is where we store the IP addresses

  scanlog.each do |line|
   next if line =~ /^#/ # The ^ is an anchor for the start of the line.

   m = line.match /Host: ([0-9.]+)/ # Here we capture the dotted quad IP address
   @hosts << m[1] # m[1] is the first parenthesized/captured group.
  end

  # Scrape out the IP addresses
  @hosts.uniq!

  # Render the IP addresses in a view
  erb :results
end
