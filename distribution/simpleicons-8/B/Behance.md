# Behance


```text
simpleicons-8/B/Behance
```

```text
include('simpleicons-8/B/Behance')
```



| Illustration | Behance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Behance.png) | ![illustration for Behance](../../simpleicons-8/B/Behance.Local.png) |




## Behance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Behance
include('simpleicons-8/B/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Behance
include('simpleicons-8/B/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label', 'an optional description')
@enduml
```

