# FormatColorText


```text
material/Editor/FormatColorText
```

```text
include('material/Editor/FormatColorText')
```



| Illustration | FormatColorText |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatColorText.png) | ![illustration for FormatColorText](../../material/Editor/FormatColorText.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatColorTextXs>`
- `<$FormatColorTextSm>`
- `<$FormatColorTextMd>`
- `<$FormatColorTextLg>`





## FormatColorText

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatColorText
include('material/Editor/FormatColorText')

' renders the element
FormatColorText('FormatColorText', 'Format Color Text', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatColorText
include('material/Editor/FormatColorText')

' renders the element
FormatColorText('FormatColorText', 'Format Color Text', 'an optional tech label', 'an optional description')
@enduml
```

