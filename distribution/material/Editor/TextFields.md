# TextFields


```text
material/Editor/TextFields
```

```text
include('material/Editor/TextFields')
```



| Illustration | TextFields |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/TextFields.png) | ![illustration for TextFields](../../material/Editor/TextFields.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextFieldsXs>`
- `<$TextFieldsSm>`
- `<$TextFieldsMd>`
- `<$TextFieldsLg>`





## TextFields

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TextFields
include('material/Editor/TextFields')

' renders the element
TextFields('TextFields', 'Text Fields', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TextFields
include('material/Editor/TextFields')

' renders the element
TextFields('TextFields', 'Text Fields', 'an optional tech label', 'an optional description')
@enduml
```

