# Slackware


```text
simpleicons-6/S/Slackware
```

```text
include('simpleicons-6/S/Slackware')
```



| Illustration | Slackware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Slackware.png) | ![illustration for Slackware](../../simpleicons-6/S/Slackware.Local.png) |




## Slackware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Slackware
include('simpleicons-6/S/Slackware')

' renders the element
Slackware('Slackware', 'Slackware', 'an optional tech label')
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

' loads the Item which embeds the element Slackware
include('simpleicons-6/S/Slackware')

' renders the element
Slackware('Slackware', 'Slackware', 'an optional tech label')
@enduml
```

