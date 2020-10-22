# Aurora Instance

```text
aws-20200911/Resource/Database/AuroraInstance
```

```text
include('aws-20200911/Resource/Database/AuroraInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AuroraInstance.png)|![](AuroraInstance.card.png)|![](AuroraInstance.element.png)|![](AuroraInstance.group.png)|



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
' loads the AuroraInstance element
include('aws-20200911/Resource/Database/AuroraInstance')
AuroraInstanceCard('aurora_instance', 'Aurora Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraInstance element
include('aws-20200911/Resource/Database/AuroraInstance')
AuroraInstanceCard('aurora_instance', 'Aurora Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraInstance element
include('aws-20200911/Resource/Database/AuroraInstance')
AuroraInstance('aurora_instance', 'Aurora Instance', 'an optional tech field')
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
' loads the AuroraInstance element
include('aws-20200911/Resource/Database/AuroraInstance')
AuroraInstance('aurora_instance', 'Aurora Instance', 'an optional tech field')
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
' loads the AuroraInstance element
include('aws-20200911/Resource/Database/AuroraInstance')
AuroraInstanceGroup('aurora_instance', 'Aurora Instance', 'an optional tech field'){
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
' loads the AuroraInstance element
include('aws-20200911/Resource/Database/AuroraInstance')
AuroraInstanceGroup('aurora_instance', 'Aurora Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

