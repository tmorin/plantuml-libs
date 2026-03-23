# YoutubeSquare


```text
fontawesome/Brands/YoutubeSquare
```

```text
include('fontawesome/Brands/YoutubeSquare')
```



| Illustration | YoutubeSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/YoutubeSquare.png) | ![illustration for YoutubeSquare](../../fontawesome/Brands/YoutubeSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoutubeSquareXs>`
- `<$YoutubeSquareSm>`
- `<$YoutubeSquareMd>`
- `<$YoutubeSquareLg>`





## YoutubeSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element YoutubeSquare
include('fontawesome/Brands/YoutubeSquare')

' renders the element
YoutubeSquare('YoutubeSquare', 'Youtube Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element YoutubeSquare
include('fontawesome/Brands/YoutubeSquare')

' renders the element
YoutubeSquare('YoutubeSquare', 'Youtube Square', 'an optional tech label', 'an optional description')
@enduml
```

