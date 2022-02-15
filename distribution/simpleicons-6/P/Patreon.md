# Patreon


```text
simpleicons-6/P/Patreon
```

```text
include('simpleicons-6/P/Patreon')
```



| Illustration | Patreon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Patreon.png) | ![illustration for Patreon](../../simpleicons-6/P/Patreon.Local.png) |




## Patreon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Patreon
include('simpleicons-6/P/Patreon')

' renders the element
Patreon('Patreon', 'Patreon', 'an optional tech label')
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

' loads the Item which embeds the element Patreon
include('simpleicons-6/P/Patreon')

' renders the element
Patreon('Patreon', 'Patreon', 'an optional tech label')
@enduml
```

