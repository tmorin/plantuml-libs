# Smart Proxy

```text
eip/SystemManagement/SmartProxy
```

```text
include('eip/SystemManagement/SmartProxy')
```

|icon|element|
|---|---|
|![](SmartProxy.png)|![](SmartProxy.element.png)|



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
' loads the SmartProxy element
include('eip/SystemManagement/SmartProxy')
SmartProxy('smart_proxy', 'Smart Proxy', 'an optional tech field')
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
' loads the SmartProxy element
include('eip/SystemManagement/SmartProxy')
SmartProxy('smart_proxy', 'Smart Proxy', 'an optional tech field')
@enduml
```

