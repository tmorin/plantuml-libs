# PartnerPortal


```text
gcp/Item/PartnerPortal
```

```text
include('gcp/Item/PartnerPortal')
```



| Illustration | PartnerPortal | PartnerPortalCard | PartnerPortalGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/PartnerPortal.png) | ![illustration for PartnerPortal](../../gcp/Item/PartnerPortal.Local.png) | ![illustration for PartnerPortalCard](../../gcp/Item/PartnerPortalCard.Local.png) | ![illustration for PartnerPortalGroup](../../gcp/Item/PartnerPortalGroup.Local.png) |




## PartnerPortal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerPortal
include('gcp/Item/PartnerPortal')

' renders the element
PartnerPortal('PartnerPortal', 'Partner Portal', 'an optional tech label')
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

' loads the Item which embeds the element PartnerPortal
include('gcp/Item/PartnerPortal')

' renders the element
PartnerPortal('PartnerPortal', 'Partner Portal', 'an optional tech label')
@enduml
```

## PartnerPortalCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerPortalCard
include('gcp/Item/PartnerPortal')

' renders the element
PartnerPortalCard('PartnerPortalCard', 'Partner Portal Card', 'an optional description')
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

' loads the Item which embeds the element PartnerPortalCard
include('gcp/Item/PartnerPortal')

' renders the element
PartnerPortalCard('PartnerPortalCard', 'Partner Portal Card', 'an optional description')
@enduml
```

## PartnerPortalGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PartnerPortalGroup
include('gcp/Item/PartnerPortal')

' renders the element
PartnerPortalGroup('PartnerPortalGroup', 'Partner Portal Group', 'an optional tech label') {
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

' loads the Item which embeds the element PartnerPortalGroup
include('gcp/Item/PartnerPortal')

' renders the element
PartnerPortalGroup('PartnerPortalGroup', 'Partner Portal Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

