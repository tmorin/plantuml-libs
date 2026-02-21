# Lastdotfm


```text
simpleicons/L/Lastdotfm
```

```text
include('simpleicons/L/Lastdotfm')
```



| Illustration | Lastdotfm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lastdotfm.png) | ![illustration for Lastdotfm](../../simpleicons/L/Lastdotfm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LastdotfmXs>`
- `<$LastdotfmSm>`
- `<$LastdotfmMd>`
- `<$LastdotfmLg>`





## Lastdotfm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lastdotfm
include('simpleicons/L/Lastdotfm')

' renders the element
Lastdotfm('Lastdotfm', 'Lastdotfm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lastdotfm
include('simpleicons/L/Lastdotfm')

' renders the element
Lastdotfm('Lastdotfm', 'Lastdotfm', 'an optional tech label', 'an optional description')
@enduml
```

