# Aurora Amazon Rds Instance

```text
aws-20200911/Resource/Database/AuroraAmazonRdsInstance
```

```text
include('aws-20200911/Resource/Database/AuroraAmazonRdsInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AuroraAmazonRdsInstance.png)|![](AuroraAmazonRdsInstance.card.png)|![](AuroraAmazonRdsInstance.element.png)|![](AuroraAmazonRdsInstance.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraAmazonRdsInstance element
include('aws-20200911/Resource/Database/AuroraAmazonRdsInstance')
AuroraAmazonRdsInstanceCard('aurora_amazon_rds_instance', 'Aurora Amazon Rds Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraAmazonRdsInstance element
include('aws-20200911/Resource/Database/AuroraAmazonRdsInstance')
AuroraAmazonRdsInstanceCard('aurora_amazon_rds_instance', 'Aurora Amazon Rds Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraAmazonRdsInstance element
include('aws-20200911/Resource/Database/AuroraAmazonRdsInstance')
AuroraAmazonRdsInstance('aurora_amazon_rds_instance', 'Aurora Amazon Rds Instance', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraAmazonRdsInstance element
include('aws-20200911/Resource/Database/AuroraAmazonRdsInstance')
AuroraAmazonRdsInstance('aurora_amazon_rds_instance', 'Aurora Amazon Rds Instance', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraAmazonRdsInstance element
include('aws-20200911/Resource/Database/AuroraAmazonRdsInstance')
AuroraAmazonRdsInstanceGroup('aurora_amazon_rds_instance', 'Aurora Amazon Rds Instance', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraAmazonRdsInstance element
include('aws-20200911/Resource/Database/AuroraAmazonRdsInstance')
AuroraAmazonRdsInstanceGroup('aurora_amazon_rds_instance', 'Aurora Amazon Rds Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

