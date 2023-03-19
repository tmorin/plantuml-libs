# CloudSpanner


```text
gcp/Item/CloudSpanner
```

```text
include('gcp/Item/CloudSpanner')
```



| Illustration | CloudSpanner | CloudSpannerCard | CloudSpannerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/CloudSpanner.png) | ![illustration for CloudSpanner](../../gcp/Item/CloudSpanner.Local.png) | ![illustration for CloudSpannerCard](../../gcp/Item/CloudSpannerCard.Local.png) | ![illustration for CloudSpannerGroup](../../gcp/Item/CloudSpannerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudSpannerXs>`
- `<$CloudSpannerSm>`
- `<$CloudSpannerMd>`
- `<$CloudSpannerLg>`





## CloudSpanner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudSpanner
include('gcp/Item/CloudSpanner')

' renders the element
CloudSpanner('CloudSpanner', 'Cloud Spanner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudSpanner
include('gcp/Item/CloudSpanner')

' renders the element
CloudSpanner('CloudSpanner', 'Cloud Spanner', 'an optional tech label', 'an optional description')
@enduml
```

## CloudSpannerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudSpannerCard
include('gcp/Item/CloudSpanner')

' renders the element
CloudSpannerCard('CloudSpannerCard', 'Cloud Spanner Card', 'an optional description')
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

' loads the Item which embeds the element CloudSpannerCard
include('gcp/Item/CloudSpanner')

' renders the element
CloudSpannerCard('CloudSpannerCard', 'Cloud Spanner Card', 'an optional description')
@enduml
```

## CloudSpannerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudSpannerGroup
include('gcp/Item/CloudSpanner')

' renders the element
CloudSpannerGroup('CloudSpannerGroup', 'Cloud Spanner Group', 'an optional tech label') {
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

' loads the Item which embeds the element CloudSpannerGroup
include('gcp/Item/CloudSpanner')

' renders the element
CloudSpannerGroup('CloudSpannerGroup', 'Cloud Spanner Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

