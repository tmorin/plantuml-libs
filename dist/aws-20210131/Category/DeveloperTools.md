# Developer Tools

```text
aws-20210131/Category/DeveloperTools
```

```text
include('aws-20210131/Category/DeveloperTools')
```

|icon|card|element|group|
|---|---|---|---|
|![](DeveloperTools.png)|![](DeveloperTools.card.png)|![](DeveloperTools.element.png)|![](DeveloperTools.group.png)|



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
' loads the DeveloperTools element
include('aws-20210131/Category/DeveloperTools')
DeveloperToolsCard('developer_tools', 'Developer Tools', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the DeveloperTools element
include('aws-20210131/Category/DeveloperTools')
DeveloperToolsCard('developer_tools', 'Developer Tools', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the DeveloperTools element
include('aws-20210131/Category/DeveloperTools')
DeveloperTools('developer_tools', 'Developer Tools', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the DeveloperTools element
include('aws-20210131/Category/DeveloperTools')
DeveloperTools('developer_tools', 'Developer Tools', 'an optional tech field')
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
' loads the DeveloperTools element
include('aws-20210131/Category/DeveloperTools')
DeveloperToolsGroup('developer_tools', 'Developer Tools', 'an optional tech field'){
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
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the DeveloperTools element
include('aws-20210131/Category/DeveloperTools')
DeveloperToolsGroup('developer_tools', 'Developer Tools', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

