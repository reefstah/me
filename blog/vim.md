# Vim as an IDE

Setting up vim dir
```sh
echo 'Creating vim dir'
mkdir ~/.vim/repo -p
```

Theme Solarized Colorscheme
```sh
echo 'Installing theme'
git clone https://github.com/altercation/vim-colors-solarized.git ~/.vim/repo/vim-colors-solarized
mkdir ~/.vim/colors
cp ~/.vim/repo/vim-colors-solarized/colors/solarized.vim ~/.vim/colors/
echo -e '\n' \
     'let g:solarized_termcolors=256 \n' \
     'syntax enable \n' \
     'set background=dark \n' \
     'colorscheme solarized \n' >> ~/.vimrc
```

Installing [vim-airline](https://github.com/vim-airline/vim-airline)
```sh
echo 'Installing airline...'
git clone https://github.com/vim-airline/vim-airline ~/.vim/pack/dist/start/vim-airline

echo 'Installing airline themes...'
git clone https://github.com/vim-airline/vim-airline-themes.git ~/.vim/repo/vim-airline
cp -r ~/.vim/repo/vim-airline/** ~/.vim/
echo -e '\n' \
	"let g:airline_theme='solarized' \n" \
	"let g:airline_solarized_bg='dark' \n" >> ~/.vimrc
```
