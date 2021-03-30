# Amazon Detective

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AmazonDetective
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonDetective')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonDetective.png)|![](AmazonDetective.card.png)|![](AmazonDetective.element.png)|![](AmazonDetective.group.png)|



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
' loads the AmazonDetective element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonDetective')
AmazonDetectiveCard('amazon_detective', 'Amazon Detective', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDetective element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonDetective')
AmazonDetectiveCard('amazon_detective', 'Amazon Detective', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDetective element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonDetective')
AmazonDetective('amazon_detective', 'Amazon Detective', 'an optional tech field')
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
' loads the AmazonDetective element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonDetective')
AmazonDetective('amazon_detective', 'Amazon Detective', 'an optional tech field')
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
' loads the AmazonDetective element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonDetective')
AmazonDetectiveGroup('amazon_detective', 'Amazon Detective', 'an optional tech field'){
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
' loads the AmazonDetective element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AmazonDetective')
AmazonDetectiveGroup('amazon_detective', 'Amazon Detective', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

