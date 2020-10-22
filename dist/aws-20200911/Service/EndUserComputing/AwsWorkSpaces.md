# Aws Work Spaces

```text
aws-20200911/Service/EndUserComputing/AwsWorkSpaces
```

```text
include('aws-20200911/Service/EndUserComputing/AwsWorkSpaces')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsWorkSpaces.png)|![](AwsWorkSpaces.card.png)|![](AwsWorkSpaces.element.png)|![](AwsWorkSpaces.group.png)|



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
' loads the AwsWorkSpaces element
include('aws-20200911/Service/EndUserComputing/AwsWorkSpaces')
AwsWorkSpacesCard('aws_work_spaces', 'Aws Work Spaces', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsWorkSpaces element
include('aws-20200911/Service/EndUserComputing/AwsWorkSpaces')
AwsWorkSpacesCard('aws_work_spaces', 'Aws Work Spaces', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsWorkSpaces element
include('aws-20200911/Service/EndUserComputing/AwsWorkSpaces')
AwsWorkSpaces('aws_work_spaces', 'Aws Work Spaces', 'an optional tech field')
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
' loads the AwsWorkSpaces element
include('aws-20200911/Service/EndUserComputing/AwsWorkSpaces')
AwsWorkSpaces('aws_work_spaces', 'Aws Work Spaces', 'an optional tech field')
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
' loads the AwsWorkSpaces element
include('aws-20200911/Service/EndUserComputing/AwsWorkSpaces')
AwsWorkSpacesGroup('aws_work_spaces', 'Aws Work Spaces', 'an optional tech field'){
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
' loads the AwsWorkSpaces element
include('aws-20200911/Service/EndUserComputing/AwsWorkSpaces')
AwsWorkSpacesGroup('aws_work_spaces', 'Aws Work Spaces', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

