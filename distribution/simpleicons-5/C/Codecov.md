# Codecov


```text
simpleicons-5/C/Codecov
```

```text
include('simpleicons-5/C/Codecov')
```



| Illustration | Codecov |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codecov.png) | ![illustration for Codecov](../../simpleicons-5/C/Codecov.Local.png) |




## Codecov

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codecov
include('simpleicons-5/C/Codecov')

' renders the element
Codecov('Codecov', 'Codecov', 'an optional tech label')
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

' loads the Item which embeds the element Codecov
include('simpleicons-5/C/Codecov')

' renders the element
Codecov('Codecov', 'Codecov', 'an optional tech label')
@enduml
```

