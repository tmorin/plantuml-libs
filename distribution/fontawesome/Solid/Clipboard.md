# Clipboard


```text
fontawesome/Solid/Clipboard
```

```text
include('fontawesome/Solid/Clipboard')
```



| Illustration | Clipboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Clipboard.png) | ![illustration for Clipboard](../../fontawesome/Solid/Clipboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClipboardXs>`
- `<$ClipboardSm>`
- `<$ClipboardMd>`
- `<$ClipboardLg>`





## Clipboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Clipboard
include('fontawesome/Solid/Clipboard')

' renders the element
Clipboard('Clipboard', 'Clipboard', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Clipboard
include('fontawesome/Solid/Clipboard')

' renders the element
Clipboard('Clipboard', 'Clipboard', 'an optional tech label', 'an optional description')
@enduml
```

