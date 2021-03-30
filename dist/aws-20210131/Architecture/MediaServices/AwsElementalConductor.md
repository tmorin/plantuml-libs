# Aws Elemental Conductor

```text
aws-20210131/Architecture/MediaServices/AwsElementalConductor
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsElementalConductor.png)|![](AwsElementalConductor.card.png)|![](AwsElementalConductor.element.png)|![](AwsElementalConductor.group.png)|



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
' loads the AwsElementalConductor element
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')
AwsElementalConductorCard('aws_elemental_conductor', 'Aws Elemental Conductor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalConductor element
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')
AwsElementalConductorCard('aws_elemental_conductor', 'Aws Elemental Conductor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsElementalConductor element
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')
AwsElementalConductor('aws_elemental_conductor', 'Aws Elemental Conductor', 'an optional tech field')
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
' loads the AwsElementalConductor element
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')
AwsElementalConductor('aws_elemental_conductor', 'Aws Elemental Conductor', 'an optional tech field')
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
' loads the AwsElementalConductor element
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')
AwsElementalConductorGroup('aws_elemental_conductor', 'Aws Elemental Conductor', 'an optional tech field'){
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
' loads the AwsElementalConductor element
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')
AwsElementalConductorGroup('aws_elemental_conductor', 'Aws Elemental Conductor', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

