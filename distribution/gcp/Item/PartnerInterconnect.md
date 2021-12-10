# PartnerInterconnect


```text
gcp/Item/PartnerInterconnect
```

```text
include('gcp/Item/PartnerInterconnect')
```



| Illustration | PartnerInterconnect | PartnerInterconnectCard | PartnerInterconnectGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/PartnerInterconnect.png) | ![illustration for PartnerInterconnect](../../gcp/Item/PartnerInterconnect.Local.png) | ![illustration for PartnerInterconnectCard](../../gcp/Item/PartnerInterconnectCard.Local.png) | ![illustration for PartnerInterconnectGroup](../../gcp/Item/PartnerInterconnectGroup.Local.png) |




## PartnerInterconnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerInterconnect
include('gcp/Item/PartnerInterconnect')

' renders the element
PartnerInterconnect('PartnerInterconnect', 'Partner Interconnect', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerInterconnect
include('gcp/Item/PartnerInterconnect')

' renders the element
PartnerInterconnect('PartnerInterconnect', 'Partner Interconnect', 'an optional tech label')
@enduml
```

## PartnerInterconnectCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerInterconnectCard
include('gcp/Item/PartnerInterconnect')

' renders the element
PartnerInterconnectCard('PartnerInterconnectCard', 'Partner Interconnect Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerInterconnectCard
include('gcp/Item/PartnerInterconnect')

' renders the element
PartnerInterconnectCard('PartnerInterconnectCard', 'Partner Interconnect Card', 'an optional description')
@enduml
```

## PartnerInterconnectGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerInterconnectGroup
include('gcp/Item/PartnerInterconnect')

' renders the element
PartnerInterconnectGroup('PartnerInterconnectGroup', 'Partner Interconnect Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerInterconnectGroup
include('gcp/Item/PartnerInterconnect')

' renders the element
PartnerInterconnectGroup('PartnerInterconnectGroup', 'Partner Interconnect Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

