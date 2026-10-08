# The Official Hasan Fan Club

An over-the-top, fully accessible fan club website for Hasan, featuring an ever-rising fan counter and a raccoon barista premiere.

**Live demo:** https://2three1y.github.io/hasan-fanclub/

## Features

- Breaking-news ticker
- Ever-rising fan counter
- Hasan Facts
- Fan testimonials
- Platinum membership card with a confetti join button
- Hype button
- Exclusive premiere: a raccoon barista video

## Accessibility

- Skip link straight to the main content
- Fully keyboard operable, with a clearly visible focus ring
- Respects `prefers-reduced-motion` (motion and confetti calm down)
- Video never autoplays and uses native, keyboard-friendly controls
- Screen-reader-friendly fan counter and news ticker (no announcement spam)
- Semantic HTML and high-contrast colors

## About the video

The raccoon barista premiere lives right in this repo as `raccoon-coffee.mp4` (480p H.264 + AAC, about 2.8 MB, set up to start playing before it finishes downloading). It never autoplays and uses the browser's native, keyboard-friendly controls.

## Run it locally

It's a plain static site: no build step, no dependencies. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Credits

Commissioned by Hasan ([@2three1y](https://github.com/2three1y)). Built with [Tab](https://tab.bot).

## License

[MIT](LICENSE) © 2026 Hasan (2three1y)
