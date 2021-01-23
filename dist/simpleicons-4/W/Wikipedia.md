# Wikipedia

```text
simpleicons-4/W/Wikipedia
```

```text
include('simpleicons-4/W/Wikipedia')
```

|icon|element|
|---|---|
|![](Wikipedia.png)|![](Wikipedia.element.png)|



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
' loads the Wikipedia element
include('simpleicons-4/W/Wikipedia')
Wikipedia('wikipedia', 'Wikipedia', 'an optional tech field')
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
' loads the Wikipedia element
include('simpleicons-4/W/Wikipedia')
Wikipedia('wikipedia', 'Wikipedia', 'an optional tech field')
@enduml
```

