# Simple Ad

```text
aws-20200430/Item/SecurityIdentityCompliance/SimpleAd
```

```text
include('aws-20200430/Item/SecurityIdentityCompliance/SimpleAd')
```

|icon|card|element|group|
|---|---|---|---|
|![](SimpleAd.png)|![](SimpleAd.card.png)|![](SimpleAd.element.png)|![](SimpleAd.group.png)|



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
' loads the SimpleAd element
include('aws-20200430/Item/SecurityIdentityCompliance/SimpleAd')
SimpleAdCard('simple_ad', 'Simple Ad', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleAd element
include('aws-20200430/Item/SecurityIdentityCompliance/SimpleAd')
SimpleAdCard('simple_ad', 'Simple Ad', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleAd element
include('aws-20200430/Item/SecurityIdentityCompliance/SimpleAd')
SimpleAd('simple_ad', 'Simple Ad', 'an optional tech field')
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
' loads the SimpleAd element
include('aws-20200430/Item/SecurityIdentityCompliance/SimpleAd')
SimpleAd('simple_ad', 'Simple Ad', 'an optional tech field')
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
' loads the SimpleAd element
include('aws-20200430/Item/SecurityIdentityCompliance/SimpleAd')
SimpleAdGroup('simple_ad', 'Simple Ad', 'an optional tech field'){
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
' loads the SimpleAd element
include('aws-20200430/Item/SecurityIdentityCompliance/SimpleAd')
SimpleAdGroup('simple_ad', 'Simple Ad', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

