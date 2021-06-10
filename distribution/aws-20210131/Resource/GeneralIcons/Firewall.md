# Firewall


```text
aws-20210131/Resource/GeneralIcons/Firewall
```

```text
include('aws-20210131/Resource/GeneralIcons/Firewall')
```



| Illustration | Firewall | FirewallCard | FirewallGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/GeneralIcons/Firewall.png) | ![illustration for Firewall](../../../aws-20210131/Resource/GeneralIcons/Firewall.Local.png) | ![illustration for FirewallCard](../../../aws-20210131/Resource/GeneralIcons/FirewallCard.Local.png) | ![illustration for FirewallGroup](../../../aws-20210131/Resource/GeneralIcons/FirewallGroup.Local.png) |




## Firewall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Firewall
include('aws-20210131/Resource/GeneralIcons/Firewall')

' renders the element
Firewall('Firewall', 'Firewall', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Firewall
include('aws-20210131/Resource/GeneralIcons/Firewall')

' renders the element
Firewall('Firewall', 'Firewall', 'an optional tech label')
@enduml
```

## FirewallCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element FirewallCard
include('aws-20210131/Resource/GeneralIcons/Firewall')

' renders the element
FirewallCard('FirewallCard', 'Firewall Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element FirewallCard
include('aws-20210131/Resource/GeneralIcons/Firewall')

' renders the element
FirewallCard('FirewallCard', 'Firewall Card', 'an optional description')
@enduml
```

## FirewallGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element FirewallGroup
include('aws-20210131/Resource/GeneralIcons/Firewall')

' renders the element
FirewallGroup('FirewallGroup', 'Firewall Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element FirewallGroup
include('aws-20210131/Resource/GeneralIcons/Firewall')

' renders the element
FirewallGroup('FirewallGroup', 'Firewall Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

