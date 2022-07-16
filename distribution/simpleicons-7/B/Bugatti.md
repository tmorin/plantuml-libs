# Bugatti


```text
simpleicons-7/B/Bugatti
```

```text
include('simpleicons-7/B/Bugatti')
```



| Illustration | Bugatti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bugatti.png) | ![illustration for Bugatti](../../simpleicons-7/B/Bugatti.Local.png) |




## Bugatti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bugatti
include('simpleicons-7/B/Bugatti')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bugatti
include('simpleicons-7/B/Bugatti')

' renders the element
Bugatti('Bugatti', 'Bugatti', 'an optional tech label')
@enduml
```

