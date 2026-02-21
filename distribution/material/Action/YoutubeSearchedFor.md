# YoutubeSearchedFor


```text
material/Action/YoutubeSearchedFor
```

```text
include('material/Action/YoutubeSearchedFor')
```



| Illustration | YoutubeSearchedFor |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/YoutubeSearchedFor.png) | ![illustration for YoutubeSearchedFor](../../material/Action/YoutubeSearchedFor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoutubeSearchedForXs>`
- `<$YoutubeSearchedForSm>`
- `<$YoutubeSearchedForMd>`
- `<$YoutubeSearchedForLg>`





## YoutubeSearchedFor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element YoutubeSearchedFor
include('material/Action/YoutubeSearchedFor')

' renders the element
YoutubeSearchedFor('YoutubeSearchedFor', 'Youtube Searched For', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element YoutubeSearchedFor
include('material/Action/YoutubeSearchedFor')

' renders the element
YoutubeSearchedFor('YoutubeSearchedFor', 'Youtube Searched For', 'an optional tech label', 'an optional description')
@enduml
```

