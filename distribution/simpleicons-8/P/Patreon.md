# Patreon


```text
simpleicons-8/P/Patreon
```

```text
include('simpleicons-8/P/Patreon')
```



| Illustration | Patreon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Patreon.png) | ![illustration for Patreon](../../simpleicons-8/P/Patreon.Local.png) |




## Patreon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Patreon
include('simpleicons-8/P/Patreon')

' renders the element
Patreon('Patreon', 'Patreon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Patreon
include('simpleicons-8/P/Patreon')

' renders the element
Patreon('Patreon', 'Patreon', 'an optional tech label', 'an optional description')
@enduml
```

