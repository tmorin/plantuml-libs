# MusicOff


```text
material-4/Image/MusicOff
```

```text
include('material-4/Image/MusicOff')
```



| Illustration | MusicOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MusicOff.png) | ![illustration for MusicOff](../../material-4/Image/MusicOff.Local.png) |




## MusicOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MusicOff
include('material-4/Image/MusicOff')

' renders the element
MusicOff('MusicOff', 'Music Off', 'an optional tech label')
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

' loads the Item which embeds the element MusicOff
include('material-4/Image/MusicOff')

' renders the element
MusicOff('MusicOff', 'Music Off', 'an optional tech label')
@enduml
```

