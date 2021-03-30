# Front End Web Mobile

```text
aws-20210131/Category/FrontEndWebMobile
```

```text
include('aws-20210131/Category/FrontEndWebMobile')
```

|icon|card|element|group|
|---|---|---|---|
|![](FrontEndWebMobile.png)|![](FrontEndWebMobile.card.png)|![](FrontEndWebMobile.element.png)|![](FrontEndWebMobile.group.png)|



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
' loads the FrontEndWebMobile element
include('aws-20210131/Category/FrontEndWebMobile')
FrontEndWebMobileCard('front_end_web_mobile', 'Front End Web Mobile', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the FrontEndWebMobile element
include('aws-20210131/Category/FrontEndWebMobile')
FrontEndWebMobileCard('front_end_web_mobile', 'Front End Web Mobile', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the FrontEndWebMobile element
include('aws-20210131/Category/FrontEndWebMobile')
FrontEndWebMobile('front_end_web_mobile', 'Front End Web Mobile', 'an optional tech field')
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
' loads the FrontEndWebMobile element
include('aws-20210131/Category/FrontEndWebMobile')
FrontEndWebMobile('front_end_web_mobile', 'Front End Web Mobile', 'an optional tech field')
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
' loads the FrontEndWebMobile element
include('aws-20210131/Category/FrontEndWebMobile')
FrontEndWebMobileGroup('front_end_web_mobile', 'Front End Web Mobile', 'an optional tech field'){
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
' loads the FrontEndWebMobile element
include('aws-20210131/Category/FrontEndWebMobile')
FrontEndWebMobileGroup('front_end_web_mobile', 'Front End Web Mobile', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

