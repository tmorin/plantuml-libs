# Aws Command Line Interface

```text
aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsCommandLineInterface.png)|![](AwsCommandLineInterface.card.png)|![](AwsCommandLineInterface.element.png)|![](AwsCommandLineInterface.group.png)|



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
' loads the AwsCommandLineInterface element
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')
AwsCommandLineInterfaceCard('aws_command_line_interface', 'Aws Command Line Interface', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCommandLineInterface element
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')
AwsCommandLineInterfaceCard('aws_command_line_interface', 'Aws Command Line Interface', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsCommandLineInterface element
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')
AwsCommandLineInterface('aws_command_line_interface', 'Aws Command Line Interface', 'an optional tech field')
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
' loads the AwsCommandLineInterface element
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')
AwsCommandLineInterface('aws_command_line_interface', 'Aws Command Line Interface', 'an optional tech field')
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
' loads the AwsCommandLineInterface element
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')
AwsCommandLineInterfaceGroup('aws_command_line_interface', 'Aws Command Line Interface', 'an optional tech field'){
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
' loads the AwsCommandLineInterface element
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')
AwsCommandLineInterfaceGroup('aws_command_line_interface', 'Aws Command Line Interface', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

