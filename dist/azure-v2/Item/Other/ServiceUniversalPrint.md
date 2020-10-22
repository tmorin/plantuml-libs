# Service Universal Print

```text
azure-v2/Item/Other/ServiceUniversalPrint
```

```text
include('azure-v2/Item/Other/ServiceUniversalPrint')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceUniversalPrint.png)|![](ServiceUniversalPrint.card.png)|![](ServiceUniversalPrint.element.png)|![](ServiceUniversalPrint.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceUniversalPrint element
include('azure-v2/Item/Other/ServiceUniversalPrint')
ServiceUniversalPrintCard('service_universal_print', 'Service Universal Print', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceUniversalPrint element
include('azure-v2/Item/Other/ServiceUniversalPrint')
ServiceUniversalPrintCard('service_universal_print', 'Service Universal Print', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceUniversalPrint element
include('azure-v2/Item/Other/ServiceUniversalPrint')
ServiceUniversalPrint('service_universal_print', 'Service Universal Print', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceUniversalPrint element
include('azure-v2/Item/Other/ServiceUniversalPrint')
ServiceUniversalPrint('service_universal_print', 'Service Universal Print', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceUniversalPrint element
include('azure-v2/Item/Other/ServiceUniversalPrint')
ServiceUniversalPrintGroup('service_universal_print', 'Service Universal Print', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceUniversalPrint element
include('azure-v2/Item/Other/ServiceUniversalPrint')
ServiceUniversalPrintGroup('service_universal_print', 'Service Universal Print', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

