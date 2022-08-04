# RotateRight


```text
material-4/Image/RotateRight
```

```text
include('material-4/Image/RotateRight')
```



| Illustration | RotateRight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/RotateRight.png) | ![illustration for RotateRight](../../material-4/Image/RotateRight.Local.png) |




## RotateRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RotateRight
include('material-4/Image/RotateRight')

' renders the element
RotateRight('RotateRight', 'Rotate Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RotateRight
include('material-4/Image/RotateRight')

' renders the element
RotateRight('RotateRight', 'Rotate Right', 'an optional tech label', 'an optional description')
@enduml
```

