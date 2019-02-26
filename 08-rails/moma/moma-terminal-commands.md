```$ ```

# Building the Database

```$ rails new moma -T --skip-git -d postgresql```

```$ cd moma```

Add pry-rails to the gemfile

```$ bundle```

Create the connection to your upcoming databases

```$ rails db:create```

```$ tree db```

Create the migration

```$ rails generate migration create_artists```

Go to db>migrate and start working on your new table

Now back to your bash and create the migration

```$ rails db:migrate```

IF you make an error, you can roll it back and fix your code:
You can roll back as far as you need:

```$ rails db:rollback```

The equivalent of .schema in postgresql is:

```$ rails db```

```# \d```

To see your table:

```# \d artists```

You can also run SQL from in here:

```# SELECT * FROM artists```

Create the model

```$ touch app/models/artist.rb```

Create class and install ActiveRecord:

```ruby
class Dish < ActiveRecord::Base
end
```


Now you can your console if your table is there:

```$ rails console```

```> Artist.new```

```> ctrl-d```

And annotate:

```$ annotate```

Go to your seeds.rb file and populate your table.

Now seed your database:

```$ rails db:seed```

Now check rails console if it's there

```$ rails console```

```> Artist.all```

__NOTE__ by adding the Artist.destroy in the seeds file will reset the database for you every time you run ```rails db:seed```

## __RESETTING__

__This will reset and refresh everything, including the id numbers__

```$ rails db:drop```

```$ rails db:create```

```$ rails db:migrate```

```$ rails db:seed```

# ===================================================

## Time to make the CRUD

Now open the routes file.

Start the server!

Now open a new bash:

```$ touch app/controllers/artists_controller.rb```

```$ mkdir app/views/artists```

```$ touch ...{..}..```

Now you start working on the controllers and the site as usual

# =======================================================

## Second Database Table


```$ rails generate migration create_works```

It will now be in your db folder. Make your table. Then:

```$ rails db:migrate```

```$ touch app/models/work.rb```

Go to the above file and create the Work class

```$ rails console```

```> Work.new```

```> ctl-d```

To fix the mediuw fuck up:

```$ rails db:rollback```

```$ rails console```

And have a look if the error is fixed.

```> Work.new```

Now go to your seed.rb file and populate

```$ rails db:seed```

Now go to routes

=======================================================

## Connecting the databases

```$ rails generate migration add_artist_id_to_works artist_id:integer```

```$ rails db:migrate```

go to work.rb and artist.rb and add your associations:

```belongs_to and has_many```
