# General Alternate

```text
aws-20200911/Resource/GeneralIcons/GeneralAlternate
```

```text
include('aws-20200911/Resource/GeneralIcons/GeneralAlternate')
```

|icon|card|element|group|
|---|---|---|---|
|![](GeneralAlternate.png)|![](GeneralAlternate.card.png)|![](GeneralAlternate.element.png)|![](GeneralAlternate.group.png)|



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
' loads the GeneralAlternate element
include('aws-20200911/Resource/GeneralIcons/GeneralAlternate')
GeneralAlternateCard('general_alternate', 'General Alternate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the GeneralAlternate element
include('aws-20200911/Resource/GeneralIcons/GeneralAlternate')
GeneralAlternateCard('general_alternate', 'General Alternate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the GeneralAlternate element
include('aws-20200911/Resource/GeneralIcons/GeneralAlternate')
GeneralAlternate('general_alternate', 'General Alternate', 'an optional tech field')
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
' loads the GeneralAlternate element
include('aws-20200911/Resource/GeneralIcons/GeneralAlternate')
GeneralAlternate('general_alternate', 'General Alternate', 'an optional tech field')
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
' loads the GeneralAlternate element
include('aws-20200911/Resource/GeneralIcons/GeneralAlternate')
GeneralAlternateGroup('general_alternate', 'General Alternate', 'an optional tech field'){
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
' loads the GeneralAlternate element
include('aws-20200911/Resource/GeneralIcons/GeneralAlternate')
GeneralAlternateGroup('general_alternate', 'General Alternate', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

