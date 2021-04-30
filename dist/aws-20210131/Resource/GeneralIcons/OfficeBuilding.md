# Office Building

```text
aws-20210131/Resource/GeneralIcons/OfficeBuilding
```

```text
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')
```

|icon|card|element|group|
|---|---|---|---|
|![](OfficeBuilding.png)|![](OfficeBuilding.card.png)|![](OfficeBuilding.element.png)|![](OfficeBuilding.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the OfficeBuilding element
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')
OfficeBuildingCard('office_building', 'Office Building', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the OfficeBuilding element
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')
OfficeBuildingCard('office_building', 'Office Building', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the OfficeBuilding element
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')
OfficeBuilding('office_building', 'Office Building', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the OfficeBuilding element
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')
OfficeBuilding('office_building', 'Office Building', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the OfficeBuilding element
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')
OfficeBuildingGroup('office_building', 'Office Building', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the OfficeBuilding element
include('aws-20210131/Resource/GeneralIcons/OfficeBuilding')
OfficeBuildingGroup('office_building', 'Office Building', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

