# OfflineShare


```text
material/Navigation/OfflineShare
```

```text
include('material/Navigation/OfflineShare')
```



| Illustration | OfflineShare |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/OfflineShare.png) | ![illustration for OfflineShare](../../material/Navigation/OfflineShare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OfflineShareXs>`
- `<$OfflineShareSm>`
- `<$OfflineShareMd>`
- `<$OfflineShareLg>`





## OfflineShare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element OfflineShare
include('material/Navigation/OfflineShare')

' renders the element
OfflineShare('OfflineShare', 'Offline Share', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OfflineShare
include('material/Navigation/OfflineShare')

' renders the element
OfflineShare('OfflineShare', 'Offline Share', 'an optional tech label', 'an optional description')
@enduml
```

