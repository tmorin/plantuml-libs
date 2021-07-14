# Lastdotfm


```text
simpleicons-5/L/Lastdotfm
```

```text
include('simpleicons-5/L/Lastdotfm')
```



| Illustration | Lastdotfm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lastdotfm.png) | ![illustration for Lastdotfm](../../simpleicons-5/L/Lastdotfm.Local.png) |




## Lastdotfm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lastdotfm
include('simpleicons-5/L/Lastdotfm')

' renders the element
Lastdotfm('Lastdotfm', 'Lastdotfm', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lastdotfm
include('simpleicons-5/L/Lastdotfm')

' renders the element
Lastdotfm('Lastdotfm', 'Lastdotfm', 'an optional tech label')
@enduml
```

