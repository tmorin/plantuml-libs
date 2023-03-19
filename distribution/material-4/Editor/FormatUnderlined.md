# FormatUnderlined


```text
material-4/Editor/FormatUnderlined
```

```text
include('material-4/Editor/FormatUnderlined')
```



| Illustration | FormatUnderlined |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatUnderlined.png) | ![illustration for FormatUnderlined](../../material-4/Editor/FormatUnderlined.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatUnderlinedXs>`
- `<$FormatUnderlinedSm>`
- `<$FormatUnderlinedMd>`
- `<$FormatUnderlinedLg>`





## FormatUnderlined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatUnderlined
include('material-4/Editor/FormatUnderlined')

' renders the element
FormatUnderlined('FormatUnderlined', 'Format Underlined', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatUnderlined
include('material-4/Editor/FormatUnderlined')

' renders the element
FormatUnderlined('FormatUnderlined', 'Format Underlined', 'an optional tech label', 'an optional description')
@enduml
```

