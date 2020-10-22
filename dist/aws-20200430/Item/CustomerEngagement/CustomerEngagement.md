# Customer Engagement

```text
aws-20200430/Item/CustomerEngagement/CustomerEngagement
```

```text
include('aws-20200430/Item/CustomerEngagement/CustomerEngagement')
```

|icon|card|element|group|
|---|---|---|---|
|![](CustomerEngagement.png)|![](CustomerEngagement.card.png)|![](CustomerEngagement.element.png)|![](CustomerEngagement.group.png)|



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
' loads the CustomerEngagement element
include('aws-20200430/Item/CustomerEngagement/CustomerEngagement')
CustomerEngagementCard('customer_engagement', 'Customer Engagement', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CustomerEngagement element
include('aws-20200430/Item/CustomerEngagement/CustomerEngagement')
CustomerEngagementCard('customer_engagement', 'Customer Engagement', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CustomerEngagement element
include('aws-20200430/Item/CustomerEngagement/CustomerEngagement')
CustomerEngagement('customer_engagement', 'Customer Engagement', 'an optional tech field')
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
' loads the CustomerEngagement element
include('aws-20200430/Item/CustomerEngagement/CustomerEngagement')
CustomerEngagement('customer_engagement', 'Customer Engagement', 'an optional tech field')
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
' loads the CustomerEngagement element
include('aws-20200430/Item/CustomerEngagement/CustomerEngagement')
CustomerEngagementGroup('customer_engagement', 'Customer Engagement', 'an optional tech field'){
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
' loads the CustomerEngagement element
include('aws-20200430/Item/CustomerEngagement/CustomerEngagement')
CustomerEngagementGroup('customer_engagement', 'Customer Engagement', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

