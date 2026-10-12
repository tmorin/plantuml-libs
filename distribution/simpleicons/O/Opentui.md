# Opentui


```text
simpleicons/O/Opentui
```

```text
include('simpleicons/O/Opentui')
```



| Illustration | Opentui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opentui.png) | ![illustration for Opentui](../../simpleicons/O/Opentui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpentuiXs>`
- `<$OpentuiSm>`
- `<$OpentuiMd>`
- `<$OpentuiLg>`





## Opentui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opentui
include('simpleicons/O/Opentui')

' renders the element
Opentui('Opentui', 'Opentui', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opentui
include('simpleicons/O/Opentui')

' renders the element
Opentui('Opentui', 'Opentui', 'an optional tech label', 'an optional description')
@enduml
```

