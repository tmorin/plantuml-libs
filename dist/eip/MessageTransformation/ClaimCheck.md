# Claim Check

```text
eip/MessageTransformation/ClaimCheck
```

```text
include('eip/MessageTransformation/ClaimCheck')
```

|icon|element|
|---|---|
|![](ClaimCheck.png)|![](ClaimCheck.element.png)|



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
' loads the ClaimCheck element
include('eip/MessageTransformation/ClaimCheck')
ClaimCheck('claim_check', 'Claim Check', 'an optional tech field')
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
' loads the ClaimCheck element
include('eip/MessageTransformation/ClaimCheck')
ClaimCheck('claim_check', 'Claim Check', 'an optional tech field')
@enduml
```

