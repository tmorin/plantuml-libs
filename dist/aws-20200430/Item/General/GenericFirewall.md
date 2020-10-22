# Generic Firewall

```text
aws-20200430/Item/General/GenericFirewall
```

```text
include('aws-20200430/Item/General/GenericFirewall')
```

|icon|card|element|group|
|---|---|---|---|
|![](GenericFirewall.png)|![](GenericFirewall.card.png)|![](GenericFirewall.element.png)|![](GenericFirewall.group.png)|



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
' loads the GenericFirewall element
include('aws-20200430/Item/General/GenericFirewall')
GenericFirewallCard('generic_firewall', 'Generic Firewall', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the GenericFirewall element
include('aws-20200430/Item/General/GenericFirewall')
GenericFirewallCard('generic_firewall', 'Generic Firewall', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the GenericFirewall element
include('aws-20200430/Item/General/GenericFirewall')
GenericFirewall('generic_firewall', 'Generic Firewall', 'an optional tech field')
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
' loads the GenericFirewall element
include('aws-20200430/Item/General/GenericFirewall')
GenericFirewall('generic_firewall', 'Generic Firewall', 'an optional tech field')
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
' loads the GenericFirewall element
include('aws-20200430/Item/General/GenericFirewall')
GenericFirewallGroup('generic_firewall', 'Generic Firewall', 'an optional tech field'){
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
' loads the GenericFirewall element
include('aws-20200430/Item/General/GenericFirewall')
GenericFirewallGroup('generic_firewall', 'Generic Firewall', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

