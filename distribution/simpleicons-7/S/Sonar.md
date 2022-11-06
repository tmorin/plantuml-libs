# Sonar


```text
simpleicons-7/S/Sonar
```

```text
include('simpleicons-7/S/Sonar')
```



| Illustration | Sonar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sonar.png) | ![illustration for Sonar](../../simpleicons-7/S/Sonar.Local.png) |




## Sonar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sonar
include('simpleicons-7/S/Sonar')

' renders the element
Sonar('Sonar', 'Sonar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonar
include('simpleicons-7/S/Sonar')

' renders the element
Sonar('Sonar', 'Sonar', 'an optional tech label', 'an optional description')
@enduml
```

