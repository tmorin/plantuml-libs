# Niri


```text
simpleicons-14/N/Niri
```

```text
include('simpleicons-14/N/Niri')
```



| Illustration | Niri |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Niri.png) | ![illustration for Niri](../../simpleicons-14/N/Niri.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NiriXs>`
- `<$NiriSm>`
- `<$NiriMd>`
- `<$NiriLg>`





## Niri

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Niri
include('simpleicons-14/N/Niri')

' renders the element
Niri('Niri', 'Niri', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Niri
include('simpleicons-14/N/Niri')

' renders the element
Niri('Niri', 'Niri', 'an optional tech label', 'an optional description')
@enduml
```

