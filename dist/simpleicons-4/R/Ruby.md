# Ruby

```text
simpleicons-4/R/Ruby
```

```text
include('simpleicons-4/R/Ruby')
```

|icon|element|
|---|---|
|![](Ruby.png)|![](Ruby.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Ruby element
include('simpleicons-4/R/Ruby')
Ruby('ruby', 'Ruby', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Ruby element
include('simpleicons-4/R/Ruby')
Ruby('ruby', 'Ruby', 'an optional tech field')
@enduml
```

