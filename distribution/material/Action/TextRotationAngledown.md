# TextRotationAngledown


```text
material/Action/TextRotationAngledown
```

```text
include('material/Action/TextRotationAngledown')
```



| Illustration | TextRotationAngledown |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/TextRotationAngledown.png) | ![illustration for TextRotationAngledown](../../material/Action/TextRotationAngledown.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element TextRotationAngledown
include('material/Action/TextRotationAngledown')

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
include('material/bootstrap')

' loads the Item which embeds the element TextRotationAngledown
include('material/Action/TextRotationAngledown')

' renders the element
TextRotationAngledown('TextRotationAngledown', 'Text Rotation Angledown', 'an optional tech label', 'an optional description')
@enduml
```

