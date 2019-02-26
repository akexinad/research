### Some extra useful commands

$ touch app/views/planets/{home,numbers,text,assets,url}.html.erb


$ curl https://images.spot.im/v1/production/pnvfn46zndcnd7uh1bwa > app/assets/images/funny.jpg


# __GETTING STARTED__


```$ rails new solar_system -T --skip-git```

Once you have made the sql table type in the command:

```$ cd db/ ```

```$ rails db:create```

```$ sqlite3 development.sqlite3 < create_planets.sql```

  - The above means "with this database import these commands."

```$ cd ..```

```$ rails db```

  - this will bring you into SQLITE3 to see if the table was correctly made.

```SQL> .schema```

```SQL> ctrl-d```

```$ touch app/models/planet.rb```

In this file connect your Planet class to Active Record:

```ruby
class Planet < ActiveRecord::Base
end
```

Once you add pry-rails to your gemfile list enter the command:

```$ rails console```

And check if the class ```Mountain``` exists:

```pry> Planet```

Put in your first entry

```pry> Planet.new```

```pry> ctrl-d```

```$ annotate```

- This will copy a commented sql table in the planets.rb file.

```$ rails console```

```pry> p = Planet.new```

```pry> p.name = Earth```

```pry> p.moons = 1```

```pry> p.save```

```pry> ctrl-d```

```$ rails routes```

 - This command shows you your current routes on your terminal.

 - Good luck
