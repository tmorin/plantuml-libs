# Brave


```text
simpleicons-6/B/Brave
```

```text
include('simpleicons-6/B/Brave')
```



| Illustration | Brave |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Brave.png) | ![illustration for Brave](../../simpleicons-6/B/Brave.Local.png) |




## Brave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Brave
include('simpleicons-6/B/Brave')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Brave
include('simpleicons-6/B/Brave')

' renders the element
Brave('Brave', 'Brave', 'an optional tech label')
@enduml
```

