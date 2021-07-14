# ControlPoint


```text
material-4/Image/ControlPoint
```

```text
include('material-4/Image/ControlPoint')
```



| Illustration | ControlPoint |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ControlPoint.png) | ![illustration for ControlPoint](../../material-4/Image/ControlPoint.Local.png) |




## ControlPoint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ControlPoint
include('material-4/Image/ControlPoint')

' renders the element
ControlPoint('ControlPoint', 'Control Point', 'an optional tech label')
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

' loads the Item which embeds the element ControlPoint
include('material-4/Image/ControlPoint')

' renders the element
ControlPoint('ControlPoint', 'Control Point', 'an optional tech label')
@enduml
```

