# Behance


```text
simpleicons-5/B/Behance
```

```text
include('simpleicons-5/B/Behance')
```



| Illustration | Behance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Behance.png) | ![illustration for Behance](../../simpleicons-5/B/Behance.Local.png) |




## Behance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Behance
include('simpleicons-5/B/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label')
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

' loads the Item which embeds the element Behance
include('simpleicons-5/B/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label')
@enduml
```

