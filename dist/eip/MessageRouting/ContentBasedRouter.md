# Content Based Router

```text
eip/MessageRouting/ContentBasedRouter
```

```text
include('eip/MessageRouting/ContentBasedRouter')
```

|icon|element|
|---|---|
|![](ContentBasedRouter.png)|![](ContentBasedRouter.element.png)|



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
' loads the ContentBasedRouter element
include('eip/MessageRouting/ContentBasedRouter')
ContentBasedRouter('content_based_router', 'Content Based Router', 'an optional tech field')
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
' loads the ContentBasedRouter element
include('eip/MessageRouting/ContentBasedRouter')
ContentBasedRouter('content_based_router', 'Content Based Router', 'an optional tech field')
@enduml
```

