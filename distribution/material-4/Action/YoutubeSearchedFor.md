# YoutubeSearchedFor


```text
material-4/Action/YoutubeSearchedFor
```

```text
include('material-4/Action/YoutubeSearchedFor')
```



| Illustration | YoutubeSearchedFor |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/YoutubeSearchedFor.png) | ![illustration for YoutubeSearchedFor](../../material-4/Action/YoutubeSearchedFor.Local.png) |




## YoutubeSearchedFor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element YoutubeSearchedFor
include('material-4/Action/YoutubeSearchedFor')

' renders the element
YoutubeSearchedFor('YoutubeSearchedFor', 'Youtube Searched For', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element YoutubeSearchedFor
include('material-4/Action/YoutubeSearchedFor')

' renders the element
YoutubeSearchedFor('YoutubeSearchedFor', 'Youtube Searched For', 'an optional tech label')
@enduml
```

