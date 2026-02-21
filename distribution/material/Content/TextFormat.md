# TextFormat


```text
material/Content/TextFormat
```

```text
include('material/Content/TextFormat')
```



| Illustration | TextFormat |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/TextFormat.png) | ![illustration for TextFormat](../../material/Content/TextFormat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextFormatXs>`
- `<$TextFormatSm>`
- `<$TextFormatMd>`
- `<$TextFormatLg>`





## TextFormat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TextFormat
include('material/Content/TextFormat')

' renders the element
TextFormat('TextFormat', 'Text Format', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TextFormat
include('material/Content/TextFormat')

' renders the element
TextFormat('TextFormat', 'Text Format', 'an optional tech label', 'an optional description')
@enduml
```

