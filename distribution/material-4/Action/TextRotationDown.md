# TextRotationDown


```text
material-4/Action/TextRotationDown
```

```text
include('material-4/Action/TextRotationDown')
```



| Illustration | TextRotationDown |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TextRotationDown.png) | ![illustration for TextRotationDown](../../material-4/Action/TextRotationDown.Local.png) |




## TextRotationDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TextRotationDown
include('material-4/Action/TextRotationDown')

' renders the element
TextRotationDown('TextRotationDown', 'Text Rotation Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TextRotationDown
include('material-4/Action/TextRotationDown')

' renders the element
TextRotationDown('TextRotationDown', 'Text Rotation Down', 'an optional tech label', 'an optional description')
@enduml
```

