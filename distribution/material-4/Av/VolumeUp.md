# VolumeUp


```text
material-4/Av/VolumeUp
```

```text
include('material-4/Av/VolumeUp')
```



| Illustration | VolumeUp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/VolumeUp.png) | ![illustration for VolumeUp](../../material-4/Av/VolumeUp.Local.png) |




## VolumeUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VolumeUp
include('material-4/Av/VolumeUp')

' renders the element
VolumeUp('VolumeUp', 'Volume Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeUp
include('material-4/Av/VolumeUp')

' renders the element
VolumeUp('VolumeUp', 'Volume Up', 'an optional tech label', 'an optional description')
@enduml
```

