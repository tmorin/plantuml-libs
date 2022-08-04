# DynamicFeed


```text
material-4/Content/DynamicFeed
```

```text
include('material-4/Content/DynamicFeed')
```



| Illustration | DynamicFeed |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/DynamicFeed.png) | ![illustration for DynamicFeed](../../material-4/Content/DynamicFeed.Local.png) |




## DynamicFeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DynamicFeed
include('material-4/Content/DynamicFeed')

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
include('material-4/bootstrap')

' loads the Item which embeds the element DynamicFeed
include('material-4/Content/DynamicFeed')

' renders the element
DynamicFeed('DynamicFeed', 'Dynamic Feed', 'an optional tech label', 'an optional description')
@enduml
```

