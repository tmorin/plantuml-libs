# Sdk

```text
aws-20210131/Resource/GeneralIcons/Sdk
```

```text
include('aws-20210131/Resource/GeneralIcons/Sdk')
```

|icon|card|element|group|
|---|---|---|---|
|![](Sdk.png)|![](Sdk.card.png)|![](Sdk.element.png)|![](Sdk.group.png)|



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
' loads the Sdk element
include('aws-20210131/Resource/GeneralIcons/Sdk')
SdkCard('sdk', 'Sdk', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Sdk element
include('aws-20210131/Resource/GeneralIcons/Sdk')
SdkCard('sdk', 'Sdk', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Sdk element
include('aws-20210131/Resource/GeneralIcons/Sdk')
Sdk('sdk', 'Sdk', 'an optional tech field')
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
' loads the Sdk element
include('aws-20210131/Resource/GeneralIcons/Sdk')
Sdk('sdk', 'Sdk', 'an optional tech field')
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
' loads the Sdk element
include('aws-20210131/Resource/GeneralIcons/Sdk')
SdkGroup('sdk', 'Sdk', 'an optional tech field'){
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
' loads the Sdk element
include('aws-20210131/Resource/GeneralIcons/Sdk')
SdkGroup('sdk', 'Sdk', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

