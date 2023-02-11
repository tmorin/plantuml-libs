# Circleci


```text
simpleicons-8/C/Circleci
```

```text
include('simpleicons-8/C/Circleci')
```



| Illustration | Circleci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Circleci.png) | ![illustration for Circleci](../../simpleicons-8/C/Circleci.Local.png) |




## Circleci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Circleci
include('simpleicons-8/C/Circleci')

' renders the element
Circleci('Circleci', 'Circleci', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Circleci
include('simpleicons-8/C/Circleci')

' renders the element
Circleci('Circleci', 'Circleci', 'an optional tech label', 'an optional description')
@enduml
```

