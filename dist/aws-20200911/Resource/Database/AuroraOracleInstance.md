# Aurora Oracle Instance

```text
aws-20200911/Resource/Database/AuroraOracleInstance
```

```text
include('aws-20200911/Resource/Database/AuroraOracleInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AuroraOracleInstance.png)|![](AuroraOracleInstance.card.png)|![](AuroraOracleInstance.element.png)|![](AuroraOracleInstance.group.png)|



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
' loads the AuroraOracleInstance element
include('aws-20200911/Resource/Database/AuroraOracleInstance')
AuroraOracleInstanceCard('aurora_oracle_instance', 'Aurora Oracle Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraOracleInstance element
include('aws-20200911/Resource/Database/AuroraOracleInstance')
AuroraOracleInstanceCard('aurora_oracle_instance', 'Aurora Oracle Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraOracleInstance element
include('aws-20200911/Resource/Database/AuroraOracleInstance')
AuroraOracleInstance('aurora_oracle_instance', 'Aurora Oracle Instance', 'an optional tech field')
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
' loads the AuroraOracleInstance element
include('aws-20200911/Resource/Database/AuroraOracleInstance')
AuroraOracleInstance('aurora_oracle_instance', 'Aurora Oracle Instance', 'an optional tech field')
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
' loads the AuroraOracleInstance element
include('aws-20200911/Resource/Database/AuroraOracleInstance')
AuroraOracleInstanceGroup('aurora_oracle_instance', 'Aurora Oracle Instance', 'an optional tech field'){
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
' loads the AuroraOracleInstance element
include('aws-20200911/Resource/Database/AuroraOracleInstance')
AuroraOracleInstanceGroup('aurora_oracle_instance', 'Aurora Oracle Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

