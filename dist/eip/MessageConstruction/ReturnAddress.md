# Return Address

```text
eip/MessageConstruction/ReturnAddress
```

```text
include('eip/MessageConstruction/ReturnAddress')
```

|icon|element|
|---|---|
|![](ReturnAddress.png)|![](ReturnAddress.element.png)|



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
' loads the ReturnAddress element
include('eip/MessageConstruction/ReturnAddress')
ReturnAddress('return_address', 'Return Address', 'an optional tech field')
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
' loads the ReturnAddress element
include('eip/MessageConstruction/ReturnAddress')
ReturnAddress('return_address', 'Return Address', 'an optional tech field')
@enduml
```

