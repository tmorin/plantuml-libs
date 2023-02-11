# Snyk


```text
simpleicons-8/S/Snyk
```

```text
include('simpleicons-8/S/Snyk')
```



| Illustration | Snyk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Snyk.png) | ![illustration for Snyk](../../simpleicons-8/S/Snyk.Local.png) |




## Snyk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Snyk
include('simpleicons-8/S/Snyk')

' renders the element
Snyk('Snyk', 'Snyk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Snyk
include('simpleicons-8/S/Snyk')

' renders the element
Snyk('Snyk', 'Snyk', 'an optional tech label', 'an optional description')
@enduml
```

