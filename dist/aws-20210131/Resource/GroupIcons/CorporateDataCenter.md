# Corporate Data Center

```text
aws-20210131/Resource/GroupIcons/CorporateDataCenter
```

```text
include('aws-20210131/Resource/GroupIcons/CorporateDataCenter')
```

|icon|card|element|group|
|---|---|---|---|
|![](CorporateDataCenter.png)|![](CorporateDataCenter.card.png)|![](CorporateDataCenter.element.png)|![](CorporateDataCenter.group.png)|



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
' loads the CorporateDataCenter element
include('aws-20210131/Resource/GroupIcons/CorporateDataCenter')
CorporateDataCenterCard('corporate_data_center', 'Corporate Data Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CorporateDataCenter element
include('aws-20210131/Resource/GroupIcons/CorporateDataCenter')
CorporateDataCenterCard('corporate_data_center', 'Corporate Data Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CorporateDataCenter element
include('aws-20210131/Resource/GroupIcons/CorporateDataCenter')
CorporateDataCenter('corporate_data_center', 'Corporate Data Center', 'an optional tech field')
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
' loads the CorporateDataCenter element
include('aws-20210131/Resource/GroupIcons/CorporateDataCenter')
CorporateDataCenter('corporate_data_center', 'Corporate Data Center', 'an optional tech field')
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
' loads the CorporateDataCenter element
include('aws-20210131/Resource/GroupIcons/CorporateDataCenter')
CorporateDataCenterGroup('corporate_data_center', 'Corporate Data Center', 'an optional tech field'){
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
' loads the CorporateDataCenter element
include('aws-20210131/Resource/GroupIcons/CorporateDataCenter')
CorporateDataCenterGroup('corporate_data_center', 'Corporate Data Center', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

