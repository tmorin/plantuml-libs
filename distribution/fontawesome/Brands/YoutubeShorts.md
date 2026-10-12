# YoutubeShorts


```text
fontawesome/Brands/YoutubeShorts
```

```text
include('fontawesome/Brands/YoutubeShorts')
```



| Illustration | YoutubeShorts |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/YoutubeShorts.png) | ![illustration for YoutubeShorts](../../fontawesome/Brands/YoutubeShorts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoutubeShortsXs>`
- `<$YoutubeShortsSm>`
- `<$YoutubeShortsMd>`
- `<$YoutubeShortsLg>`





## YoutubeShorts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element YoutubeShorts
include('fontawesome/Brands/YoutubeShorts')

' renders the element
YoutubeShorts('YoutubeShorts', 'Youtube Shorts', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element YoutubeShorts
include('fontawesome/Brands/YoutubeShorts')

' renders the element
YoutubeShorts('YoutubeShorts', 'Youtube Shorts', 'an optional tech label', 'an optional description')
@enduml
```

