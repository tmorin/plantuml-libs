# TextRotationAngleup


```text
material-4/Action/TextRotationAngleup
```

```text
include('material-4/Action/TextRotationAngleup')
```



| Illustration | TextRotationAngleup |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TextRotationAngleup.png) | ![illustration for TextRotationAngleup](../../material-4/Action/TextRotationAngleup.Local.png) |




## TextRotationAngleup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TextRotationAngleup
include('material-4/Action/TextRotationAngleup')

' renders the element
TextRotationAngleup('TextRotationAngleup', 'Text Rotation Angleup', 'an optional tech label')
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

' loads the Item which embeds the element TextRotationAngleup
include('material-4/Action/TextRotationAngleup')

' renders the element
TextRotationAngleup('TextRotationAngleup', 'Text Rotation Angleup', 'an optional tech label')
@enduml
```

