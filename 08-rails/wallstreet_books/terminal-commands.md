This command will create all the necessary rails file.

```$ rails new file_name -T --skip-git```

- where ```-T``` = no tests
- and ```--skip-git``` will stop from the command from making another git repo which already comes with the files.

To upload additional gems, go first to the __Gemfile__ file found under the main file that you name for the project [you can see 5 files above this one]:

If you want to install the ```pry-rails``` gem, put it inside:

```ruby
group :development do```

and other gems like ```stock_quote``` and ```httparty``` can go before:
```ruby
group :development do
```
