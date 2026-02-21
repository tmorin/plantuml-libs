# FormatTextdirectionLToR


```text
material/Editor/FormatTextdirectionLToR
```

```text
include('material/Editor/FormatTextdirectionLToR')
```



| Illustration | FormatTextdirectionLToR |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatTextdirectionLToR.png) | ![illustration for FormatTextdirectionLToR](../../material/Editor/FormatTextdirectionLToR.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatTextdirectionLToRXs>`
- `<$FormatTextdirectionLToRSm>`
- `<$FormatTextdirectionLToRMd>`
- `<$FormatTextdirectionLToRLg>`





## FormatTextdirectionLToR

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatTextdirectionLToR
include('material/Editor/FormatTextdirectionLToR')

' renders the element
FormatTextdirectionLToR('FormatTextdirectionLToR', 'Format Textdirection L To R', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatTextdirectionLToR
include('material/Editor/FormatTextdirectionLToR')

' renders the element
FormatTextdirectionLToR('FormatTextdirectionLToR', 'Format Textdirection L To R', 'an optional tech label', 'an optional description')
@enduml
```

