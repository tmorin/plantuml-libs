# Toolkit

```text
aws-20210131/Resource/GeneralIcons/Toolkit
```

```text
include('aws-20210131/Resource/GeneralIcons/Toolkit')
```

|icon|card|element|group|
|---|---|---|---|
|![](Toolkit.png)|![](Toolkit.card.png)|![](Toolkit.element.png)|![](Toolkit.group.png)|



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
' loads the Toolkit element
include('aws-20210131/Resource/GeneralIcons/Toolkit')
ToolkitCard('toolkit', 'Toolkit', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Toolkit element
include('aws-20210131/Resource/GeneralIcons/Toolkit')
ToolkitCard('toolkit', 'Toolkit', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Toolkit element
include('aws-20210131/Resource/GeneralIcons/Toolkit')
Toolkit('toolkit', 'Toolkit', 'an optional tech field')
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
' loads the Toolkit element
include('aws-20210131/Resource/GeneralIcons/Toolkit')
Toolkit('toolkit', 'Toolkit', 'an optional tech field')
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
' loads the Toolkit element
include('aws-20210131/Resource/GeneralIcons/Toolkit')
ToolkitGroup('toolkit', 'Toolkit', 'an optional tech field'){
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
' loads the Toolkit element
include('aws-20210131/Resource/GeneralIcons/Toolkit')
ToolkitGroup('toolkit', 'Toolkit', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

