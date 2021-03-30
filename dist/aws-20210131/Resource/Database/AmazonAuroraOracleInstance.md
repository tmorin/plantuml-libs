# Amazon Aurora Oracle Instance

```text
aws-20210131/Resource/Database/AmazonAuroraOracleInstance
```

```text
include('aws-20210131/Resource/Database/AmazonAuroraOracleInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonAuroraOracleInstance.png)|![](AmazonAuroraOracleInstance.card.png)|![](AmazonAuroraOracleInstance.element.png)|![](AmazonAuroraOracleInstance.group.png)|



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
' loads the AmazonAuroraOracleInstance element
include('aws-20210131/Resource/Database/AmazonAuroraOracleInstance')
AmazonAuroraOracleInstanceCard('amazon_aurora_oracle_instance', 'Amazon Aurora Oracle Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAuroraOracleInstance element
include('aws-20210131/Resource/Database/AmazonAuroraOracleInstance')
AmazonAuroraOracleInstanceCard('amazon_aurora_oracle_instance', 'Amazon Aurora Oracle Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAuroraOracleInstance element
include('aws-20210131/Resource/Database/AmazonAuroraOracleInstance')
AmazonAuroraOracleInstance('amazon_aurora_oracle_instance', 'Amazon Aurora Oracle Instance', 'an optional tech field')
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
' loads the AmazonAuroraOracleInstance element
include('aws-20210131/Resource/Database/AmazonAuroraOracleInstance')
AmazonAuroraOracleInstance('amazon_aurora_oracle_instance', 'Amazon Aurora Oracle Instance', 'an optional tech field')
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
' loads the AmazonAuroraOracleInstance element
include('aws-20210131/Resource/Database/AmazonAuroraOracleInstance')
AmazonAuroraOracleInstanceGroup('amazon_aurora_oracle_instance', 'Amazon Aurora Oracle Instance', 'an optional tech field'){
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
' loads the AmazonAuroraOracleInstance element
include('aws-20210131/Resource/Database/AmazonAuroraOracleInstance')
AmazonAuroraOracleInstanceGroup('amazon_aurora_oracle_instance', 'Amazon Aurora Oracle Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

