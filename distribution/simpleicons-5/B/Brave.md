# Brave


```text
simpleicons-5/B/Brave
```

```text
include('simpleicons-5/B/Brave')
```



| Illustration | Brave |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Brave.png) | ![illustration for Brave](../../simpleicons-5/B/Brave.Local.png) |




## Brave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Brave
include('simpleicons-5/B/Brave')

' renders the element
Brave('Brave', 'Brave', 'an optional tech label')
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

' loads the Item which embeds the element Brave
include('simpleicons-5/B/Brave')

' renders the element
Brave('Brave', 'Brave', 'an optional tech label')
@enduml
```

