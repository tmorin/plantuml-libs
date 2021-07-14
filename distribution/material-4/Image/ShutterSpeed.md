# ShutterSpeed


```text
material-4/Image/ShutterSpeed
```

```text
include('material-4/Image/ShutterSpeed')
```



| Illustration | ShutterSpeed |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ShutterSpeed.png) | ![illustration for ShutterSpeed](../../material-4/Image/ShutterSpeed.Local.png) |




## ShutterSpeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ShutterSpeed
include('material-4/Image/ShutterSpeed')

' renders the element
ShutterSpeed('ShutterSpeed', 'Shutter Speed', 'an optional tech label')
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

' loads the Item which embeds the element ShutterSpeed
include('material-4/Image/ShutterSpeed')

' renders the element
ShutterSpeed('ShutterSpeed', 'Shutter Speed', 'an optional tech label')
@enduml
```

