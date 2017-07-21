<?php

use App\Blog;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $articles = [
        ['title' => 'Article 1', 'content' => 'Lorem ipsum dolor sit amet'],
        ['title' => 'Article 2', 'content' => 'Lorem ipsum dolor sit amet'],
        ['title' => 'Article 3', 'content' => 'Lorem ipsum dolor sit amet'],
        ['title' => 'Article 4', 'content' => 'Lorem ipsum dolor sit amet'],
        ['title' => 'Article 5', 'content' => 'Lorem ipsum dolor sit amet']
    ];
    public function run()
    {
        if (Blog::all()->count() > 0) {
            return;
        }
        foreach ($this->articles as $article) {
            $new = new Blog;
            $new->title = $article['title'];
            $new->content = $article['content'];
            $new->save();
        }        
    }
}
