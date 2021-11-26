# Camera


```text
fontawesome-5/Solid/Camera
```

```text
include('fontawesome-5/Solid/Camera')
```



| Illustration | Camera |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Camera.png) | ![illustration for Camera](../../fontawesome-5/Solid/Camera.Local.png) |




## Camera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Camera
include('fontawesome-5/Solid/Camera')

' renders the element
Camera('Camera', 'Camera', 'an optional tech label')
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

' loads the Item which embeds the element Camera
include('fontawesome-5/Solid/Camera')

' renders the element
Camera('Camera', 'Camera', 'an optional tech label')
@enduml
```

