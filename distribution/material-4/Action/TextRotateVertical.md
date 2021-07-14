# TextRotateVertical


```text
material-4/Action/TextRotateVertical
```

```text
include('material-4/Action/TextRotateVertical')
```



| Illustration | TextRotateVertical |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TextRotateVertical.png) | ![illustration for TextRotateVertical](../../material-4/Action/TextRotateVertical.Local.png) |




## TextRotateVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TextRotateVertical
include('material-4/Action/TextRotateVertical')

' renders the element
TextRotateVertical('TextRotateVertical', 'Text Rotate Vertical', 'an optional tech label')
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

' loads the Item which embeds the element TextRotateVertical
include('material-4/Action/TextRotateVertical')

' renders the element
TextRotateVertical('TextRotateVertical', 'Text Rotate Vertical', 'an optional tech label')
@enduml
```

