# FormatColorReset


```text
material/Editor/FormatColorReset
```

```text
include('material/Editor/FormatColorReset')
```



| Illustration | FormatColorReset |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatColorReset.png) | ![illustration for FormatColorReset](../../material/Editor/FormatColorReset.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatColorResetXs>`
- `<$FormatColorResetSm>`
- `<$FormatColorResetMd>`
- `<$FormatColorResetLg>`





## FormatColorReset

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatColorReset
include('material/Editor/FormatColorReset')

' renders the element
FormatColorReset('FormatColorReset', 'Format Color Reset', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatColorReset
include('material/Editor/FormatColorReset')

' renders the element
FormatColorReset('FormatColorReset', 'Format Color Reset', 'an optional tech label', 'an optional description')
@enduml
```

