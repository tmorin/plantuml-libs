# FormatTextdirectionRToL


```text
material/Editor/FormatTextdirectionRToL
```

```text
include('material/Editor/FormatTextdirectionRToL')
```



| Illustration | FormatTextdirectionRToL |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatTextdirectionRToL.png) | ![illustration for FormatTextdirectionRToL](../../material/Editor/FormatTextdirectionRToL.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatTextdirectionRToLXs>`
- `<$FormatTextdirectionRToLSm>`
- `<$FormatTextdirectionRToLMd>`
- `<$FormatTextdirectionRToLLg>`





## FormatTextdirectionRToL

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatTextdirectionRToL
include('material/Editor/FormatTextdirectionRToL')

' renders the element
FormatTextdirectionRToL('FormatTextdirectionRToL', 'Format Textdirection R To L', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatTextdirectionRToL
include('material/Editor/FormatTextdirectionRToL')

' renders the element
FormatTextdirectionRToL('FormatTextdirectionRToL', 'Format Textdirection R To L', 'an optional tech label', 'an optional description')
@enduml
```

