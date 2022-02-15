# Probot


```text
simpleicons-6/P/Probot
```

```text
include('simpleicons-6/P/Probot')
```



| Illustration | Probot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Probot.png) | ![illustration for Probot](../../simpleicons-6/P/Probot.Local.png) |




## Probot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Probot
include('simpleicons-6/P/Probot')

' renders the element
Probot('Probot', 'Probot', 'an optional tech label')
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

' loads the Item which embeds the element Probot
include('simpleicons-6/P/Probot')

' renders the element
Probot('Probot', 'Probot', 'an optional tech label')
@enduml
```

