# Aws Console Mobile Application

```text
aws-20210131/Architecture/AppIntegration/AwsConsoleMobileApplication
```

```text
include('aws-20210131/Architecture/AppIntegration/AwsConsoleMobileApplication')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsConsoleMobileApplication.png)|![](AwsConsoleMobileApplication.card.png)|![](AwsConsoleMobileApplication.element.png)|![](AwsConsoleMobileApplication.group.png)|



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
' loads the AwsConsoleMobileApplication element
include('aws-20210131/Architecture/AppIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplicationCard('aws_console_mobile_application', 'Aws Console Mobile Application', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsConsoleMobileApplication element
include('aws-20210131/Architecture/AppIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplicationCard('aws_console_mobile_application', 'Aws Console Mobile Application', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsConsoleMobileApplication element
include('aws-20210131/Architecture/AppIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplication('aws_console_mobile_application', 'Aws Console Mobile Application', 'an optional tech field')
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
' loads the AwsConsoleMobileApplication element
include('aws-20210131/Architecture/AppIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplication('aws_console_mobile_application', 'Aws Console Mobile Application', 'an optional tech field')
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
' loads the AwsConsoleMobileApplication element
include('aws-20210131/Architecture/AppIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplicationGroup('aws_console_mobile_application', 'Aws Console Mobile Application', 'an optional tech field'){
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
' loads the AwsConsoleMobileApplication element
include('aws-20210131/Architecture/AppIntegration/AwsConsoleMobileApplication')
AwsConsoleMobileApplicationGroup('aws_console_mobile_application', 'Aws Console Mobile Application', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

