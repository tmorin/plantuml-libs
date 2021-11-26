# SpringCreators


```text
simpleicons-5/S/SpringCreators
```

```text
include('simpleicons-5/S/SpringCreators')
```



| Illustration | SpringCreators |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/SpringCreators.png) | ![illustration for SpringCreators](../../simpleicons-5/S/SpringCreators.Local.png) |




## SpringCreators

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element SpringCreators
include('simpleicons-5/S/SpringCreators')

' renders the element
SpringCreators('SpringCreators', 'Spring Creators', 'an optional tech label')
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

' loads the Item which embeds the element SpringCreators
include('simpleicons-5/S/SpringCreators')

' renders the element
SpringCreators('SpringCreators', 'Spring Creators', 'an optional tech label')
@enduml
```

