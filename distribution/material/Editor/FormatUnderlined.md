# FormatUnderlined


```text
material/Editor/FormatUnderlined
```

```text
include('material/Editor/FormatUnderlined')
```



| Illustration | FormatUnderlined |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatUnderlined.png) | ![illustration for FormatUnderlined](../../material/Editor/FormatUnderlined.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element FormatUnderlined
include('material/Editor/FormatUnderlined')

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
include('material/bootstrap')

' loads the Item which embeds the element FormatUnderlined
include('material/Editor/FormatUnderlined')

' renders the element
FormatUnderlined('FormatUnderlined', 'Format Underlined', 'an optional tech label', 'an optional description')
@enduml
```

