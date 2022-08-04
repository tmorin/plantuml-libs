# CloudHealthcareMarketplace


```text
gcp/Item/CloudHealthcareMarketplace
```

```text
include('gcp/Item/CloudHealthcareMarketplace')
```



| Illustration | CloudHealthcareMarketplace | CloudHealthcareMarketplaceCard | CloudHealthcareMarketplaceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/CloudHealthcareMarketplace.png) | ![illustration for CloudHealthcareMarketplace](../../gcp/Item/CloudHealthcareMarketplace.Local.png) | ![illustration for CloudHealthcareMarketplaceCard](../../gcp/Item/CloudHealthcareMarketplaceCard.Local.png) | ![illustration for CloudHealthcareMarketplaceGroup](../../gcp/Item/CloudHealthcareMarketplaceGroup.Local.png) |




## CloudHealthcareMarketplace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudHealthcareMarketplace
include('gcp/Item/CloudHealthcareMarketplace')

' renders the element
CloudHealthcareMarketplace('CloudHealthcareMarketplace', 'Cloud Healthcare Marketplace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudHealthcareMarketplace
include('gcp/Item/CloudHealthcareMarketplace')

' renders the element
CloudHealthcareMarketplace('CloudHealthcareMarketplace', 'Cloud Healthcare Marketplace', 'an optional tech label', 'an optional description')
@enduml
```

## CloudHealthcareMarketplaceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudHealthcareMarketplaceCard
include('gcp/Item/CloudHealthcareMarketplace')

' renders the element
CloudHealthcareMarketplaceCard('CloudHealthcareMarketplaceCard', 'Cloud Healthcare Marketplace Card', 'an optional description')
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

' loads the Item which embeds the element CloudHealthcareMarketplaceCard
include('gcp/Item/CloudHealthcareMarketplace')

' renders the element
CloudHealthcareMarketplaceCard('CloudHealthcareMarketplaceCard', 'Cloud Healthcare Marketplace Card', 'an optional description')
@enduml
```

## CloudHealthcareMarketplaceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudHealthcareMarketplaceGroup
include('gcp/Item/CloudHealthcareMarketplace')

' renders the element
CloudHealthcareMarketplaceGroup('CloudHealthcareMarketplaceGroup', 'Cloud Healthcare Marketplace Group', 'an optional tech label') {
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

' loads the Item which embeds the element CloudHealthcareMarketplaceGroup
include('gcp/Item/CloudHealthcareMarketplace')

' renders the element
CloudHealthcareMarketplaceGroup('CloudHealthcareMarketplaceGroup', 'Cloud Healthcare Marketplace Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

