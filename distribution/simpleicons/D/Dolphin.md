# Dolphin


```text
simpleicons/D/Dolphin
```

```text
include('simpleicons/D/Dolphin')
```



| Illustration | Dolphin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dolphin.png) | ![illustration for Dolphin](../../simpleicons/D/Dolphin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DolphinXs>`
- `<$DolphinSm>`
- `<$DolphinMd>`
- `<$DolphinLg>`





## Dolphin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dolphin
include('simpleicons/D/Dolphin')

' renders the element
Dolphin('Dolphin', 'Dolphin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dolphin
include('simpleicons/D/Dolphin')

' renders the element
Dolphin('Dolphin', 'Dolphin', 'an optional tech label', 'an optional description')
@enduml
```

