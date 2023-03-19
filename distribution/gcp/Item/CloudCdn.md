# CloudCdn


```text
gcp/Item/CloudCdn
```

```text
include('gcp/Item/CloudCdn')
```



| Illustration | CloudCdn | CloudCdnCard | CloudCdnGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/CloudCdn.png) | ![illustration for CloudCdn](../../gcp/Item/CloudCdn.Local.png) | ![illustration for CloudCdnCard](../../gcp/Item/CloudCdnCard.Local.png) | ![illustration for CloudCdnGroup](../../gcp/Item/CloudCdnGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudCdnXs>`
- `<$CloudCdnSm>`
- `<$CloudCdnMd>`
- `<$CloudCdnLg>`





## CloudCdn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudCdn
include('gcp/Item/CloudCdn')

' renders the element
CloudCdn('CloudCdn', 'Cloud Cdn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudCdn
include('gcp/Item/CloudCdn')

' renders the element
CloudCdn('CloudCdn', 'Cloud Cdn', 'an optional tech label', 'an optional description')
@enduml
```

## CloudCdnCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudCdnCard
include('gcp/Item/CloudCdn')

' renders the element
CloudCdnCard('CloudCdnCard', 'Cloud Cdn Card', 'an optional description')
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

' loads the Item which embeds the element CloudCdnCard
include('gcp/Item/CloudCdn')

' renders the element
CloudCdnCard('CloudCdnCard', 'Cloud Cdn Card', 'an optional description')
@enduml
```

## CloudCdnGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudCdnGroup
include('gcp/Item/CloudCdn')

' renders the element
CloudCdnGroup('CloudCdnGroup', 'Cloud Cdn Group', 'an optional tech label') {
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

' loads the Item which embeds the element CloudCdnGroup
include('gcp/Item/CloudCdn')

' renders the element
CloudCdnGroup('CloudCdnGroup', 'Cloud Cdn Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

