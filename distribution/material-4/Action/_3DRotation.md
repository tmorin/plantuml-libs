# _3DRotation


```text
material-4/Action/_3DRotation
```

```text
include('material-4/Action/_3DRotation')
```



| Illustration | _3DRotation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/_3DRotation.png) | ![illustration for _3DRotation](../../material-4/Action/_3DRotation.Local.png) |




## _3DRotation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _3DRotation
include('material-4/Action/_3DRotation')

' renders the element
_3DRotation('3dRotation', '3d Rotation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _3DRotation
include('material-4/Action/_3DRotation')

' renders the element
_3DRotation('3dRotation', '3d Rotation', 'an optional tech label', 'an optional description')
@enduml
```

