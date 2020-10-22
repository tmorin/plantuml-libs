# Aws Io T Button

```text
aws-20200430/Item/InternetOfThings/AwsIoTButton
```

```text
include('aws-20200430/Item/InternetOfThings/AwsIoTButton')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsIoTButton.png)|![](AwsIoTButton.card.png)|![](AwsIoTButton.element.png)|![](AwsIoTButton.group.png)|



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
' loads the AwsIoTButton element
include('aws-20200430/Item/InternetOfThings/AwsIoTButton')
AwsIoTButtonCard('aws_io_t_button', 'Aws Io T Button', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTButton element
include('aws-20200430/Item/InternetOfThings/AwsIoTButton')
AwsIoTButtonCard('aws_io_t_button', 'Aws Io T Button', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTButton element
include('aws-20200430/Item/InternetOfThings/AwsIoTButton')
AwsIoTButton('aws_io_t_button', 'Aws Io T Button', 'an optional tech field')
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
' loads the AwsIoTButton element
include('aws-20200430/Item/InternetOfThings/AwsIoTButton')
AwsIoTButton('aws_io_t_button', 'Aws Io T Button', 'an optional tech field')
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
' loads the AwsIoTButton element
include('aws-20200430/Item/InternetOfThings/AwsIoTButton')
AwsIoTButtonGroup('aws_io_t_button', 'Aws Io T Button', 'an optional tech field'){
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
' loads the AwsIoTButton element
include('aws-20200430/Item/InternetOfThings/AwsIoTButton')
AwsIoTButtonGroup('aws_io_t_button', 'Aws Io T Button', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

