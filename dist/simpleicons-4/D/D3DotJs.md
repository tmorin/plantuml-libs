# D3 Dot Js

```text
simpleicons-4/D/D3DotJs
```

```text
include('simpleicons-4/D/D3DotJs')
```

|icon|element|
|---|---|
|![](D3DotJs.png)|![](D3DotJs.element.png)|



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
' loads the D3DotJs element
include('simpleicons-4/D/D3DotJs')
D3DotJs('d_3_dot_js', 'D3 Dot Js', 'an optional tech field')
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
' loads the D3DotJs element
include('simpleicons-4/D/D3DotJs')
D3DotJs('d_3_dot_js', 'D3 Dot Js', 'an optional tech field')
@enduml
```

