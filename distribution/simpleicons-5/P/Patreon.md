# Patreon


```text
simpleicons-5/P/Patreon
```

```text
include('simpleicons-5/P/Patreon')
```



| Illustration | Patreon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Patreon.png) | ![illustration for Patreon](../../simpleicons-5/P/Patreon.Local.png) |




## Patreon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Patreon
include('simpleicons-5/P/Patreon')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Patreon
include('simpleicons-5/P/Patreon')

' renders the element
Patreon('Patreon', 'Patreon', 'an optional tech label')
@enduml
```

