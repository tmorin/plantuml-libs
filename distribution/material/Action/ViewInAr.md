# ViewInAr


```text
material/Action/ViewInAr
```

```text
include('material/Action/ViewInAr')
```



| Illustration | ViewInAr |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ViewInAr.png) | ![illustration for ViewInAr](../../material/Action/ViewInAr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewInArXs>`
- `<$ViewInArSm>`
- `<$ViewInArMd>`
- `<$ViewInArLg>`





## ViewInAr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ViewInAr
include('material/Action/ViewInAr')

' renders the element
ViewInAr('ViewInAr', 'View In Ar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewInAr
include('material/Action/ViewInAr')

' renders the element
ViewInAr('ViewInAr', 'View In Ar', 'an optional tech label', 'an optional description')
@enduml
```

