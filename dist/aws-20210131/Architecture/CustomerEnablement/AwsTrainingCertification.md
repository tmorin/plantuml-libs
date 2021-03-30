# Aws Training Certification

```text
aws-20210131/Architecture/CustomerEnablement/AwsTrainingCertification
```

```text
include('aws-20210131/Architecture/CustomerEnablement/AwsTrainingCertification')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsTrainingCertification.png)|![](AwsTrainingCertification.card.png)|![](AwsTrainingCertification.element.png)|![](AwsTrainingCertification.group.png)|



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
' loads the AwsTrainingCertification element
include('aws-20210131/Architecture/CustomerEnablement/AwsTrainingCertification')
AwsTrainingCertificationCard('aws_training_certification', 'Aws Training Certification', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsTrainingCertification element
include('aws-20210131/Architecture/CustomerEnablement/AwsTrainingCertification')
AwsTrainingCertificationCard('aws_training_certification', 'Aws Training Certification', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsTrainingCertification element
include('aws-20210131/Architecture/CustomerEnablement/AwsTrainingCertification')
AwsTrainingCertification('aws_training_certification', 'Aws Training Certification', 'an optional tech field')
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
' loads the AwsTrainingCertification element
include('aws-20210131/Architecture/CustomerEnablement/AwsTrainingCertification')
AwsTrainingCertification('aws_training_certification', 'Aws Training Certification', 'an optional tech field')
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
' loads the AwsTrainingCertification element
include('aws-20210131/Architecture/CustomerEnablement/AwsTrainingCertification')
AwsTrainingCertificationGroup('aws_training_certification', 'Aws Training Certification', 'an optional tech field'){
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
' loads the AwsTrainingCertification element
include('aws-20210131/Architecture/CustomerEnablement/AwsTrainingCertification')
AwsTrainingCertificationGroup('aws_training_certification', 'Aws Training Certification', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

