# Aws Service Catalog

```text
aws-20210131/Architecture/ManagementGovernance/AwsServiceCatalog
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsServiceCatalog')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsServiceCatalog.png)|![](AwsServiceCatalog.card.png)|![](AwsServiceCatalog.element.png)|![](AwsServiceCatalog.group.png)|



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
' loads the AwsServiceCatalog element
include('aws-20210131/Architecture/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalogCard('aws_service_catalog', 'Aws Service Catalog', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsServiceCatalog element
include('aws-20210131/Architecture/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalogCard('aws_service_catalog', 'Aws Service Catalog', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsServiceCatalog element
include('aws-20210131/Architecture/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalog('aws_service_catalog', 'Aws Service Catalog', 'an optional tech field')
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
' loads the AwsServiceCatalog element
include('aws-20210131/Architecture/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalog('aws_service_catalog', 'Aws Service Catalog', 'an optional tech field')
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
' loads the AwsServiceCatalog element
include('aws-20210131/Architecture/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalogGroup('aws_service_catalog', 'Aws Service Catalog', 'an optional tech field'){
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
' loads the AwsServiceCatalog element
include('aws-20210131/Architecture/ManagementGovernance/AwsServiceCatalog')
AwsServiceCatalogGroup('aws_service_catalog', 'Aws Service Catalog', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

