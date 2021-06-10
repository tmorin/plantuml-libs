# YoutubeSquare


```text
fontawesome-5/Brands/YoutubeSquare
```

```text
include('fontawesome-5/Brands/YoutubeSquare')
```



| Illustration | YoutubeSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/YoutubeSquare.png) | ![illustration for YoutubeSquare](../../fontawesome-5/Brands/YoutubeSquare.Local.png) |




## YoutubeSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element YoutubeSquare
include('fontawesome-5/Brands/YoutubeSquare')

' renders the element
YoutubeSquare('YoutubeSquare', 'Youtube Square', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element YoutubeSquare
include('fontawesome-5/Brands/YoutubeSquare')

' renders the element
YoutubeSquare('YoutubeSquare', 'Youtube Square', 'an optional tech label')
@enduml
```

