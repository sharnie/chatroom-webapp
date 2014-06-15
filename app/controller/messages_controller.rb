class MessagesController < ApplicationController
  get '/' do
    haml :"messages/index"
  end

  get '/entry' do
    content_type= 'text/html'
    @messages = Message.all
    haml :"messages/entry", layout: false
  end

  get '/messages.json' do
    content_type :json
    @messages = Message.all.limit(10).order('created_at DESC').reverse.to_json
  end

  post '/new' do
    @message = Message.new(params[:message])

    if @message.save
      redirect '/'
    else
      redirect '/new'
    end
  end
end