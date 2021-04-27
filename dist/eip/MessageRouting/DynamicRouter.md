# Dynamic Router

```text
eip/MessageRouting/DynamicRouter
```

```text
include('eip/MessageRouting/DynamicRouter')
```

|icon|element|
|---|---|
|![](DynamicRouter.png)|![](DynamicRouter.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the DynamicRouter element
include('eip/MessageRouting/DynamicRouter')
DynamicRouter('dynamic_router', 'Dynamic Router', 'an optional tech field')
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
' loads the eip bootstrap
include('eip/bootstrap')
' loads the DynamicRouter element
include('eip/MessageRouting/DynamicRouter')
DynamicRouter('dynamic_router', 'Dynamic Router', 'an optional tech field')
@enduml
```

