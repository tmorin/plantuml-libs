# VolumeDown


```text
fontawesome-5/Solid/VolumeDown
```

```text
include('fontawesome-5/Solid/VolumeDown')
```



| Illustration | VolumeDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VolumeDown.png) | ![illustration for VolumeDown](../../fontawesome-5/Solid/VolumeDown.Local.png) |




## VolumeDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VolumeDown
include('fontawesome-5/Solid/VolumeDown')

' renders the element
VolumeDown('VolumeDown', 'Volume Down', 'an optional tech label')
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

' loads the Item which embeds the element VolumeDown
include('fontawesome-5/Solid/VolumeDown')

' renders the element
VolumeDown('VolumeDown', 'Volume Down', 'an optional tech label')
@enduml
```

