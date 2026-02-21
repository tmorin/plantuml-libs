# Refresh


```text
material/Navigation/Refresh
```

```text
include('material/Navigation/Refresh')
```



| Illustration | Refresh |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/Refresh.png) | ![illustration for Refresh](../../material/Navigation/Refresh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RefreshXs>`
- `<$RefreshSm>`
- `<$RefreshMd>`
- `<$RefreshLg>`





## Refresh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Refresh
include('material/Navigation/Refresh')

' renders the element
Refresh('Refresh', 'Refresh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Refresh
include('material/Navigation/Refresh')

' renders the element
Refresh('Refresh', 'Refresh', 'an optional tech label', 'an optional description')
@enduml
```

