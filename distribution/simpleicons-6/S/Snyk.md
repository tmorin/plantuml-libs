# Snyk


```text
simpleicons-6/S/Snyk
```

```text
include('simpleicons-6/S/Snyk')
```



| Illustration | Snyk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Snyk.png) | ![illustration for Snyk](../../simpleicons-6/S/Snyk.Local.png) |




## Snyk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Snyk
include('simpleicons-6/S/Snyk')

' renders the element
Snyk('Snyk', 'Snyk', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Snyk
include('simpleicons-6/S/Snyk')

' renders the element
Snyk('Snyk', 'Snyk', 'an optional tech label')
@enduml
```

