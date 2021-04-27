# Recipient List

```text
eip/MessageRouting/RecipientList
```

```text
include('eip/MessageRouting/RecipientList')
```

|icon|element|
|---|---|
|![](RecipientList.png)|![](RecipientList.element.png)|



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
' loads the RecipientList element
include('eip/MessageRouting/RecipientList')
RecipientList('recipient_list', 'Recipient List', 'an optional tech field')
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
' loads the RecipientList element
include('eip/MessageRouting/RecipientList')
RecipientList('recipient_list', 'Recipient List', 'an optional tech field')
@enduml
```

