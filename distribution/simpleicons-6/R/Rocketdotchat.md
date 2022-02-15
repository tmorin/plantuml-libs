# Rocketdotchat


```text
simpleicons-6/R/Rocketdotchat
```

```text
include('simpleicons-6/R/Rocketdotchat')
```



| Illustration | Rocketdotchat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rocketdotchat.png) | ![illustration for Rocketdotchat](../../simpleicons-6/R/Rocketdotchat.Local.png) |




## Rocketdotchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rocketdotchat
include('simpleicons-6/R/Rocketdotchat')

' renders the element
Rocketdotchat('Rocketdotchat', 'Rocketdotchat', 'an optional tech label')
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

' loads the Item which embeds the element Rocketdotchat
include('simpleicons-6/R/Rocketdotchat')

' renders the element
Rocketdotchat('Rocketdotchat', 'Rocketdotchat', 'an optional tech label')
@enduml
```

