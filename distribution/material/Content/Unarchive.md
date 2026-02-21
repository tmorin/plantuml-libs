# Unarchive


```text
material/Content/Unarchive
```

```text
include('material/Content/Unarchive')
```



| Illustration | Unarchive |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Unarchive.png) | ![illustration for Unarchive](../../material/Content/Unarchive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnarchiveXs>`
- `<$UnarchiveSm>`
- `<$UnarchiveMd>`
- `<$UnarchiveLg>`





## Unarchive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Unarchive
include('material/Content/Unarchive')

' renders the element
Unarchive('Unarchive', 'Unarchive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unarchive
include('material/Content/Unarchive')

' renders the element
Unarchive('Unarchive', 'Unarchive', 'an optional tech label', 'an optional description')
@enduml
```

