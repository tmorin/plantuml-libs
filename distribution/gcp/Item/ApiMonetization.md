# ApiMonetization


```text
gcp/Item/ApiMonetization
```

```text
include('gcp/Item/ApiMonetization')
```



| Illustration | ApiMonetization | ApiMonetizationCard | ApiMonetizationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/ApiMonetization.png) | ![illustration for ApiMonetization](../../gcp/Item/ApiMonetization.Local.png) | ![illustration for ApiMonetizationCard](../../gcp/Item/ApiMonetizationCard.Local.png) | ![illustration for ApiMonetizationGroup](../../gcp/Item/ApiMonetizationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApiMonetizationXs>`
- `<$ApiMonetizationSm>`
- `<$ApiMonetizationMd>`
- `<$ApiMonetizationLg>`





## ApiMonetization

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ApiMonetization
include('gcp/Item/ApiMonetization')

' renders the element
ApiMonetization('ApiMonetization', 'Api Monetization', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ApiMonetization
include('gcp/Item/ApiMonetization')

' renders the element
ApiMonetization('ApiMonetization', 'Api Monetization', 'an optional tech label', 'an optional description')
@enduml
```

## ApiMonetizationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ApiMonetizationCard
include('gcp/Item/ApiMonetization')

' renders the element
ApiMonetizationCard('ApiMonetizationCard', 'Api Monetization Card', 'an optional description')
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

' loads the Item which embeds the element ApiMonetizationCard
include('gcp/Item/ApiMonetization')

' renders the element
ApiMonetizationCard('ApiMonetizationCard', 'Api Monetization Card', 'an optional description')
@enduml
```

## ApiMonetizationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ApiMonetizationGroup
include('gcp/Item/ApiMonetization')

' renders the element
ApiMonetizationGroup('ApiMonetizationGroup', 'Api Monetization Group', 'an optional tech label') {
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

' loads the Item which embeds the element ApiMonetizationGroup
include('gcp/Item/ApiMonetization')

' renders the element
ApiMonetizationGroup('ApiMonetizationGroup', 'Api Monetization Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

