# ControlPointDuplicate


```text
material-4/Image/ControlPointDuplicate
```

```text
include('material-4/Image/ControlPointDuplicate')
```



| Illustration | ControlPointDuplicate |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ControlPointDuplicate.png) | ![illustration for ControlPointDuplicate](../../material-4/Image/ControlPointDuplicate.Local.png) |




## ControlPointDuplicate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ControlPointDuplicate
include('material-4/Image/ControlPointDuplicate')

' renders the element
ControlPointDuplicate('ControlPointDuplicate', 'Control Point Duplicate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ControlPointDuplicate
include('material-4/Image/ControlPointDuplicate')

' renders the element
ControlPointDuplicate('ControlPointDuplicate', 'Control Point Duplicate', 'an optional tech label', 'an optional description')
@enduml
```

