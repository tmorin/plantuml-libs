# Apachegroovy


```text
simpleicons-5/A/Apachegroovy
```

```text
include('simpleicons-5/A/Apachegroovy')
```



| Illustration | Apachegroovy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apachegroovy.png) | ![illustration for Apachegroovy](../../simpleicons-5/A/Apachegroovy.Local.png) |




## Apachegroovy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachegroovy
include('simpleicons-5/A/Apachegroovy')

' renders the element
Apachegroovy('Apachegroovy', 'Apachegroovy', 'an optional tech label')
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

' loads the Item which embeds the element Apachegroovy
include('simpleicons-5/A/Apachegroovy')

' renders the element
Apachegroovy('Apachegroovy', 'Apachegroovy', 'an optional tech label')
@enduml
```

