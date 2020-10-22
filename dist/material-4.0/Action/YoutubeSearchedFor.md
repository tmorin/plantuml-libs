# Youtube Searched For

```text
material-4.0/Action/YoutubeSearchedFor
```

```text
include('material-4.0/Action/YoutubeSearchedFor')
```

|icon|element|
|---|---|
|![](YoutubeSearchedFor.png)|![](YoutubeSearchedFor.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the YoutubeSearchedFor element
include('material-4.0/Action/YoutubeSearchedFor')
YoutubeSearchedFor('youtube_searched_for', 'Youtube Searched For', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the YoutubeSearchedFor element
include('material-4.0/Action/YoutubeSearchedFor')
YoutubeSearchedFor('youtube_searched_for', 'Youtube Searched For', 'an optional tech field')
@enduml
```

