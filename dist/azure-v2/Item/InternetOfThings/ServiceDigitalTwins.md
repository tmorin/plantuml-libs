# Service Digital Twins

```text
azure-v2/Item/InternetOfThings/ServiceDigitalTwins
```

```text
include('azure-v2/Item/InternetOfThings/ServiceDigitalTwins')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDigitalTwins.png)|![](ServiceDigitalTwins.card.png)|![](ServiceDigitalTwins.element.png)|![](ServiceDigitalTwins.group.png)|



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
' loads the ServiceDigitalTwins element
include('azure-v2/Item/InternetOfThings/ServiceDigitalTwins')
ServiceDigitalTwinsCard('service_digital_twins', 'Service Digital Twins', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDigitalTwins element
include('azure-v2/Item/InternetOfThings/ServiceDigitalTwins')
ServiceDigitalTwinsCard('service_digital_twins', 'Service Digital Twins', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDigitalTwins element
include('azure-v2/Item/InternetOfThings/ServiceDigitalTwins')
ServiceDigitalTwins('service_digital_twins', 'Service Digital Twins', 'an optional tech field')
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
' loads the ServiceDigitalTwins element
include('azure-v2/Item/InternetOfThings/ServiceDigitalTwins')
ServiceDigitalTwins('service_digital_twins', 'Service Digital Twins', 'an optional tech field')
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
' loads the ServiceDigitalTwins element
include('azure-v2/Item/InternetOfThings/ServiceDigitalTwins')
ServiceDigitalTwinsGroup('service_digital_twins', 'Service Digital Twins', 'an optional tech field'){
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
' loads the ServiceDigitalTwins element
include('azure-v2/Item/InternetOfThings/ServiceDigitalTwins')
ServiceDigitalTwinsGroup('service_digital_twins', 'Service Digital Twins', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

