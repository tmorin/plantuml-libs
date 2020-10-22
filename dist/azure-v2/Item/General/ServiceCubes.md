# Service Cubes

```text
azure-v2/Item/General/ServiceCubes
```

```text
include('azure-v2/Item/General/ServiceCubes')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceCubes.png)|![](ServiceCubes.card.png)|![](ServiceCubes.element.png)|![](ServiceCubes.group.png)|



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
' loads the ServiceCubes element
include('azure-v2/Item/General/ServiceCubes')
ServiceCubesCard('service_cubes', 'Service Cubes', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCubes element
include('azure-v2/Item/General/ServiceCubes')
ServiceCubesCard('service_cubes', 'Service Cubes', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCubes element
include('azure-v2/Item/General/ServiceCubes')
ServiceCubes('service_cubes', 'Service Cubes', 'an optional tech field')
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
' loads the ServiceCubes element
include('azure-v2/Item/General/ServiceCubes')
ServiceCubes('service_cubes', 'Service Cubes', 'an optional tech field')
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
' loads the ServiceCubes element
include('azure-v2/Item/General/ServiceCubes')
ServiceCubesGroup('service_cubes', 'Service Cubes', 'an optional tech field'){
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
' loads the ServiceCubes element
include('azure-v2/Item/General/ServiceCubes')
ServiceCubesGroup('service_cubes', 'Service Cubes', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

