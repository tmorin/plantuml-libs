# Spot Fleet

```text
aws-20200430/Item/Groups/SpotFleet
```

```text
include('aws-20200430/Item/Groups/SpotFleet')
```

|icon|card|element|group|
|---|---|---|---|
|![](SpotFleet.png)|![](SpotFleet.card.png)|![](SpotFleet.element.png)|![](SpotFleet.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SpotFleet element
include('aws-20200430/Item/Groups/SpotFleet')
SpotFleetCard('spot_fleet', 'Spot Fleet', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SpotFleet element
include('aws-20200430/Item/Groups/SpotFleet')
SpotFleetCard('spot_fleet', 'Spot Fleet', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SpotFleet element
include('aws-20200430/Item/Groups/SpotFleet')
SpotFleet('spot_fleet', 'Spot Fleet', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SpotFleet element
include('aws-20200430/Item/Groups/SpotFleet')
SpotFleet('spot_fleet', 'Spot Fleet', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SpotFleet element
include('aws-20200430/Item/Groups/SpotFleet')
SpotFleetGroup('spot_fleet', 'Spot Fleet', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SpotFleet element
include('aws-20200430/Item/Groups/SpotFleet')
SpotFleetGroup('spot_fleet', 'Spot Fleet', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

