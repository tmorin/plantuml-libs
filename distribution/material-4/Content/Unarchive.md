# Unarchive


```text
material-4/Content/Unarchive
```

```text
include('material-4/Content/Unarchive')
```



| Illustration | Unarchive |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Unarchive.png) | ![illustration for Unarchive](../../material-4/Content/Unarchive.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element Unarchive
include('material-4/Content/Unarchive')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Unarchive
include('material-4/Content/Unarchive')

' renders the element
Unarchive('Unarchive', 'Unarchive', 'an optional tech label', 'an optional description')
@enduml
```

