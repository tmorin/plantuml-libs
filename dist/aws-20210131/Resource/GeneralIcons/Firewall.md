# Firewall

```text
aws-20210131/Resource/GeneralIcons/Firewall
```

```text
include('aws-20210131/Resource/GeneralIcons/Firewall')
```

|icon|card|element|group|
|---|---|---|---|
|![](Firewall.png)|![](Firewall.card.png)|![](Firewall.element.png)|![](Firewall.group.png)|



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
' loads the Firewall element
include('aws-20210131/Resource/GeneralIcons/Firewall')
FirewallCard('firewall', 'Firewall', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Firewall element
include('aws-20210131/Resource/GeneralIcons/Firewall')
FirewallCard('firewall', 'Firewall', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Firewall element
include('aws-20210131/Resource/GeneralIcons/Firewall')
Firewall('firewall', 'Firewall', 'an optional tech field')
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
' loads the Firewall element
include('aws-20210131/Resource/GeneralIcons/Firewall')
Firewall('firewall', 'Firewall', 'an optional tech field')
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
' loads the Firewall element
include('aws-20210131/Resource/GeneralIcons/Firewall')
FirewallGroup('firewall', 'Firewall', 'an optional tech field'){
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
' loads the Firewall element
include('aws-20210131/Resource/GeneralIcons/Firewall')
FirewallGroup('firewall', 'Firewall', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

