# Efs Standard

```text
aws-20200430/Item/Storage/EfsStandard
```

```text
include('aws-20200430/Item/Storage/EfsStandard')
```

|icon|card|element|group|
|---|---|---|---|
|![](EfsStandard.png)|![](EfsStandard.card.png)|![](EfsStandard.element.png)|![](EfsStandard.group.png)|



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
' loads the EfsStandard element
include('aws-20200430/Item/Storage/EfsStandard')
EfsStandardCard('efs_standard', 'Efs Standard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the EfsStandard element
include('aws-20200430/Item/Storage/EfsStandard')
EfsStandardCard('efs_standard', 'Efs Standard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the EfsStandard element
include('aws-20200430/Item/Storage/EfsStandard')
EfsStandard('efs_standard', 'Efs Standard', 'an optional tech field')
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
' loads the EfsStandard element
include('aws-20200430/Item/Storage/EfsStandard')
EfsStandard('efs_standard', 'Efs Standard', 'an optional tech field')
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
' loads the EfsStandard element
include('aws-20200430/Item/Storage/EfsStandard')
EfsStandardGroup('efs_standard', 'Efs Standard', 'an optional tech field'){
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
' loads the EfsStandard element
include('aws-20200430/Item/Storage/EfsStandard')
EfsStandardGroup('efs_standard', 'Efs Standard', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

