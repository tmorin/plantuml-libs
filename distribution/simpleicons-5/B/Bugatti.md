# Bugatti


```text
simpleicons-5/B/Bugatti
```

```text
include('simpleicons-5/B/Bugatti')
```



| Illustration | Bugatti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bugatti.png) | ![illustration for Bugatti](../../simpleicons-5/B/Bugatti.Local.png) |




## Bugatti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bugatti
include('simpleicons-5/B/Bugatti')

' renders the element
Bugatti('Bugatti', 'Bugatti', 'an optional tech label')
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

' loads the Item which embeds the element Bugatti
include('simpleicons-5/B/Bugatti')

' renders the element
Bugatti('Bugatti', 'Bugatti', 'an optional tech label')
@enduml
```

