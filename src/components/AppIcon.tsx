type LooseStyles = { [key: string]: string | number }
const linkStyle: LooseStyles = {
    position: 'relative', width: '170px', height: '170px', overflow: 'hidden', display: 'inline-block', verticalAlign: 'middle', '--app-icon-mask': "url('data:image/svg+xml,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20viewBox%3D%220%200%20230.5%20230.5%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%221.4%22%20clip-rule%3D%22evenodd%22%20d%3D%22M158.2%20230H64.1a320%20320%200%200%201-7-.1c-5%200-10-.5-15-1.3a50.8%2050.8%200%200%201-14.4-4.8%2048.2%2048.2%200%200%201-21-21%2050.9%2050.9%200%200%201-4.8-14.4%20100.7%20100.7%200%200%201-1.3-15v-7l-.1-8.2V64.1a320%20320%200%200%201%20.1-7c0-5%20.5-10%201.3-15a50.7%2050.7%200%200%201%204.8-14.4%2048.2%2048.2%200%200%201%2021-21%2051%2051%200%200%201%2014.4-4.8c5-.8%2010-1.2%2015-1.3a320%20320%200%200%201%207%200l8.2-.1h94.1a320%20320%200%200%201%207%20.1c5%200%2010%20.5%2015%201.3a52%2052%200%200%201%2014.4%204.8%2048.2%2048.2%200%200%201%2021%2021%2050.9%2050.9%200%200%201%204.8%2014.4c.8%205%201.2%2010%201.3%2015a320%20320%200%200%201%20.1%207v102.3l-.1%207c0%205-.5%2010-1.3%2015a50.7%2050.7%200%200%201-4.8%2014.4%2048.2%2048.2%200%200%201-21%2021%2050.8%2050.8%200%200%201-14.4%204.8c-5%20.8-10%201.2-15%201.3a320%20320%200%200%201-7%200l-8.2.1z%22%2F%3E%0A%3C%2Fsvg%3E%0A')"
}
const imgStyle: LooseStyles = {
    width: '100%', height: '100%', objectFit: 'contain', maskImage: 'var(--app-icon-mask)', '-webkit-mask-image': 'var(--app-icon-mask)'
}
const svgStyle: LooseStyles = {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', boxSizing: 'border-box'
}
export default function AppIcon() {
    return (
        <a href="https://apps.apple.com/us/app/lev-bible/id6502670095?itscg=30200&itsct=apps_box_artwork&mttnsubad=6502670095" style={linkStyle}>

            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c6/57/4e/c6574ea6-7fb1-aa07-6422-f480d7cd23f0/AppIcon-0-0-1x_U007epad-0-1-85-220.png/540x540bb.jpg" alt="Lev Bible"
                style={imgStyle} />
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.5 230.5" style={svgStyle}>
        <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="1.4" stroke-opacity=".1" stroke-width="1" d="M158.2 230H64.1a320 320 0 0 1-7-.1c-5 0-10-.5-15-1.3a50.8 50.8 0 0 1-14.4-4.8 48.2 48.2 0 0 1-21-21 50.9 50.9 0 0 1-4.8-14.4 100.7 100.7 0 0 1-1.3-15v-7l-.1-8.2V64.1a320 320 0 0 1 .1-7c0-5 .5-10 1.3-15a50.7 50.7 0 0 1 4.8-14.4 48.2 48.2 0 0 1 21-21 51 51 0 0 1 14.4-4.8c5-.8 10-1.2 15-1.3a320 320 0 0 1 7 0l8.2-.1h94.1a320 320 0 0 1 7 .1c5 0 10 .5 15 1.3a52 52 0 0 1 14.4 4.8 48.2 48.2 0 0 1 21 21 50.9 50.9 0 0 1 4.8 14.4c.8 5 1.2 10 1.3 15a320 320 0 0 1 .1 7v102.3l-.1 7c0 5-.5 10-1.3 15a50.7 50.7 0 0 1-4.8 14.4 48.2 48.2 0 0 1-21 21 50.8 50.8 0 0 1-14.4 4.8c-5 .8-10 1.2-15 1.3a320 320 0 0 1-7 0l-8.2.1z" clip-rule="evenodd" vector-effect="non-scaling-stroke"/>
        </svg>
        </a>
    )
}
