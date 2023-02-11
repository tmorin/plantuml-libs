# Rocketdotchat


```text
simpleicons-8/R/Rocketdotchat
```

```text
include('simpleicons-8/R/Rocketdotchat')
```



| Illustration | Rocketdotchat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rocketdotchat.png) | ![illustration for Rocketdotchat](../../simpleicons-8/R/Rocketdotchat.Local.png) |




## Rocketdotchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rocketdotchat
include('simpleicons-8/R/Rocketdotchat')

' renders the element
Rocketdotchat('Rocketdotchat', 'Rocketdotchat', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rocketdotchat
include('simpleicons-8/R/Rocketdotchat')

' renders the element
Rocketdotchat('Rocketdotchat', 'Rocketdotchat', 'an optional tech label', 'an optional description')
@enduml
```

