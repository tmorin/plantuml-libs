# DynamicFeed


```text
material/Content/DynamicFeed
```

```text
include('material/Content/DynamicFeed')
```



| Illustration | DynamicFeed |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/DynamicFeed.png) | ![illustration for DynamicFeed](../../material/Content/DynamicFeed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DynamicFeedXs>`
- `<$DynamicFeedSm>`
- `<$DynamicFeedMd>`
- `<$DynamicFeedLg>`





## DynamicFeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DynamicFeed
include('material/Content/DynamicFeed')

' renders the element
DynamicFeed('DynamicFeed', 'Dynamic Feed', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element DynamicFeed
include('material/Content/DynamicFeed')

' renders the element
DynamicFeed('DynamicFeed', 'Dynamic Feed', 'an optional tech label', 'an optional description')
@enduml
```

