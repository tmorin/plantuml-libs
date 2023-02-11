# SpringCreators


```text
simpleicons-8/S/SpringCreators
```

```text
include('simpleicons-8/S/SpringCreators')
```



| Illustration | SpringCreators |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/SpringCreators.png) | ![illustration for SpringCreators](../../simpleicons-8/S/SpringCreators.Local.png) |




## SpringCreators

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element SpringCreators
include('simpleicons-8/S/SpringCreators')

' renders the element
SpringCreators('SpringCreators', 'Spring Creators', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SpringCreators
include('simpleicons-8/S/SpringCreators')

' renders the element
SpringCreators('SpringCreators', 'Spring Creators', 'an optional tech label', 'an optional description')
@enduml
```

