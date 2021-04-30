# Aws Cloud Development Kit

```text
aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCloudDevelopmentKit.png)|![](AwsCloudDevelopmentKit.card.png)|![](AwsCloudDevelopmentKit.element.png)|![](AwsCloudDevelopmentKit.group.png)|



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
' loads the AwsCloudDevelopmentKit element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKitCard('aws_cloud_development_kit', 'Aws Cloud Development Kit', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCloudDevelopmentKit element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKitCard('aws_cloud_development_kit', 'Aws Cloud Development Kit', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCloudDevelopmentKit element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKit('aws_cloud_development_kit', 'Aws Cloud Development Kit', 'an optional tech field')
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
' loads the AwsCloudDevelopmentKit element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKit('aws_cloud_development_kit', 'Aws Cloud Development Kit', 'an optional tech field')
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
' loads the AwsCloudDevelopmentKit element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKitGroup('aws_cloud_development_kit', 'Aws Cloud Development Kit', 'an optional tech field'){
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
' loads the AwsCloudDevelopmentKit element
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKitGroup('aws_cloud_development_kit', 'Aws Cloud Development Kit', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

