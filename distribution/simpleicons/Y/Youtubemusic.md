# Youtubemusic


```text
simpleicons/Y/Youtubemusic
```

```text
include('simpleicons/Y/Youtubemusic')
```



| Illustration | Youtubemusic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Y/Youtubemusic.png) | ![illustration for Youtubemusic](../../simpleicons/Y/Youtubemusic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoutubemusicXs>`
- `<$YoutubemusicSm>`
- `<$YoutubemusicMd>`
- `<$YoutubemusicLg>`





## Youtubemusic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Youtubemusic
include('simpleicons/Y/Youtubemusic')

' renders the element
Youtubemusic('Youtubemusic', 'Youtubemusic', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Youtubemusic
include('simpleicons/Y/Youtubemusic')

' renders the element
Youtubemusic('Youtubemusic', 'Youtubemusic', 'an optional tech label', 'an optional description')
@enduml
```

