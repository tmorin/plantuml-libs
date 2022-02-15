# Makerbot


```text
simpleicons-6/M/Makerbot
```

```text
include('simpleicons-6/M/Makerbot')
```



| Illustration | Makerbot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Makerbot.png) | ![illustration for Makerbot](../../simpleicons-6/M/Makerbot.Local.png) |




## Makerbot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Makerbot
include('simpleicons-6/M/Makerbot')

' renders the element
Makerbot('Makerbot', 'Makerbot', 'an optional tech label')
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

' loads the Item which embeds the element Makerbot
include('simpleicons-6/M/Makerbot')

' renders the element
Makerbot('Makerbot', 'Makerbot', 'an optional tech label')
@enduml
```

