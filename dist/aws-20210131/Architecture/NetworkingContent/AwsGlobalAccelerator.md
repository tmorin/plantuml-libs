# Aws Global Accelerator

```text
aws-20210131/Architecture/NetworkingContent/AwsGlobalAccelerator
```

```text
include('aws-20210131/Architecture/NetworkingContent/AwsGlobalAccelerator')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsGlobalAccelerator.png)|![](AwsGlobalAccelerator.card.png)|![](AwsGlobalAccelerator.element.png)|![](AwsGlobalAccelerator.group.png)|



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
' loads the AwsGlobalAccelerator element
include('aws-20210131/Architecture/NetworkingContent/AwsGlobalAccelerator')
AwsGlobalAcceleratorCard('aws_global_accelerator', 'Aws Global Accelerator', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGlobalAccelerator element
include('aws-20210131/Architecture/NetworkingContent/AwsGlobalAccelerator')
AwsGlobalAcceleratorCard('aws_global_accelerator', 'Aws Global Accelerator', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGlobalAccelerator element
include('aws-20210131/Architecture/NetworkingContent/AwsGlobalAccelerator')
AwsGlobalAccelerator('aws_global_accelerator', 'Aws Global Accelerator', 'an optional tech field')
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
' loads the AwsGlobalAccelerator element
include('aws-20210131/Architecture/NetworkingContent/AwsGlobalAccelerator')
AwsGlobalAccelerator('aws_global_accelerator', 'Aws Global Accelerator', 'an optional tech field')
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
' loads the AwsGlobalAccelerator element
include('aws-20210131/Architecture/NetworkingContent/AwsGlobalAccelerator')
AwsGlobalAcceleratorGroup('aws_global_accelerator', 'Aws Global Accelerator', 'an optional tech field'){
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
' loads the AwsGlobalAccelerator element
include('aws-20210131/Architecture/NetworkingContent/AwsGlobalAccelerator')
AwsGlobalAcceleratorGroup('aws_global_accelerator', 'Aws Global Accelerator', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

