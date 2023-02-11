# Dependabot


```text
simpleicons-8/D/Dependabot
```

```text
include('simpleicons-8/D/Dependabot')
```



| Illustration | Dependabot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Dependabot.png) | ![illustration for Dependabot](../../simpleicons-8/D/Dependabot.Local.png) |




## Dependabot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dependabot
include('simpleicons-8/D/Dependabot')

' renders the element
Dependabot('Dependabot', 'Dependabot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dependabot
include('simpleicons-8/D/Dependabot')

' renders the element
Dependabot('Dependabot', 'Dependabot', 'an optional tech label', 'an optional description')
@enduml
```

