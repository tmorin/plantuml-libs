# Dependabot


```text
simpleicons-5/D/Dependabot
```

```text
include('simpleicons-5/D/Dependabot')
```



| Illustration | Dependabot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dependabot.png) | ![illustration for Dependabot](../../simpleicons-5/D/Dependabot.Local.png) |




## Dependabot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dependabot
include('simpleicons-5/D/Dependabot')

' renders the element
Dependabot('Dependabot', 'Dependabot', 'an optional tech label')
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

' loads the Item which embeds the element Dependabot
include('simpleicons-5/D/Dependabot')

' renders the element
Dependabot('Dependabot', 'Dependabot', 'an optional tech label')
@enduml
```

