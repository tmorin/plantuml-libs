# P5 Dot Js

```text
simpleicons-4/P/P5DotJs
```

```text
include('simpleicons-4/P/P5DotJs')
```

|icon|element|
|---|---|
|![](P5DotJs.png)|![](P5DotJs.element.png)|



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
' loads the P5DotJs element
include('simpleicons-4/P/P5DotJs')
P5DotJs('p_5_dot_js', 'P5 Dot Js', 'an optional tech field')
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
' loads the P5DotJs element
include('simpleicons-4/P/P5DotJs')
P5DotJs('p_5_dot_js', 'P5 Dot Js', 'an optional tech field')
@enduml
```

