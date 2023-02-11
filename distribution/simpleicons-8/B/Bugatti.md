# Bugatti


```text
simpleicons-8/B/Bugatti
```

```text
include('simpleicons-8/B/Bugatti')
```



| Illustration | Bugatti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bugatti.png) | ![illustration for Bugatti](../../simpleicons-8/B/Bugatti.Local.png) |




## Bugatti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bugatti
include('simpleicons-8/B/Bugatti')

' renders the element
Bugatti('Bugatti', 'Bugatti', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bugatti
include('simpleicons-8/B/Bugatti')

' renders the element
Bugatti('Bugatti', 'Bugatti', 'an optional tech label', 'an optional description')
@enduml
```

