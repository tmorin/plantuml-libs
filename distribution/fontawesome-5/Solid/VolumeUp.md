# VolumeUp


```text
fontawesome-5/Solid/VolumeUp
```

```text
include('fontawesome-5/Solid/VolumeUp')
```



| Illustration | VolumeUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VolumeUp.png) | ![illustration for VolumeUp](../../fontawesome-5/Solid/VolumeUp.Local.png) |




## VolumeUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VolumeUp
include('fontawesome-5/Solid/VolumeUp')

' renders the element
VolumeUp('VolumeUp', 'Volume Up', 'an optional tech label')
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

' loads the Item which embeds the element VolumeUp
include('fontawesome-5/Solid/VolumeUp')

' renders the element
VolumeUp('VolumeUp', 'Volume Up', 'an optional tech label')
@enduml
```

