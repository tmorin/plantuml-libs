# TextRotationAngledown


```text
material-4/Action/TextRotationAngledown
```

```text
include('material-4/Action/TextRotationAngledown')
```



| Illustration | TextRotationAngledown |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TextRotationAngledown.png) | ![illustration for TextRotationAngledown](../../material-4/Action/TextRotationAngledown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextRotationAngledownXs>`
- `<$TextRotationAngledownSm>`
- `<$TextRotationAngledownMd>`
- `<$TextRotationAngledownLg>`





## TextRotationAngledown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TextRotationAngledown
include('material-4/Action/TextRotationAngledown')

' renders the element
TextRotationAngledown('TextRotationAngledown', 'Text Rotation Angledown', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TextRotationAngledown
include('material-4/Action/TextRotationAngledown')

' renders the element
TextRotationAngledown('TextRotationAngledown', 'Text Rotation Angledown', 'an optional tech label', 'an optional description')
@enduml
```

