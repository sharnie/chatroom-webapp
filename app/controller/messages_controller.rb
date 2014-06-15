class MessagesController < ApplicationController
  get '/' do
    haml :'messages/index'
  end

  get '/entry' do
    content_type= 'text/html'
    @messages = Message.all.limit(15).order('created_at DESC').reverse
    haml :'messages/entry', layout: false
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