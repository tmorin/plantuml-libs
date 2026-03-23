# SortAlphaDesc


```text
fontawesome/Solid/SortAlphaDesc
```

```text
include('fontawesome/Solid/SortAlphaDesc')
```



| Illustration | SortAlphaDesc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SortAlphaDesc.png) | ![illustration for SortAlphaDesc](../../fontawesome/Solid/SortAlphaDesc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortAlphaDescXs>`
- `<$SortAlphaDescSm>`
- `<$SortAlphaDescMd>`
- `<$SortAlphaDescLg>`





## SortAlphaDesc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAlphaDesc
include('fontawesome/Solid/SortAlphaDesc')

' renders the element
SortAlphaDesc('SortAlphaDesc', 'Sort Alpha Desc', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SortAlphaDesc
include('fontawesome/Solid/SortAlphaDesc')

' renders the element
SortAlphaDesc('SortAlphaDesc', 'Sort Alpha Desc', 'an optional tech label', 'an optional description')
@enduml
```

