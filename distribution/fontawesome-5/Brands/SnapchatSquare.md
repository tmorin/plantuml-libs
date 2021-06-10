# SnapchatSquare


```text
fontawesome-5/Brands/SnapchatSquare
```

```text
include('fontawesome-5/Brands/SnapchatSquare')
```



| Illustration | SnapchatSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/SnapchatSquare.png) | ![illustration for SnapchatSquare](../../fontawesome-5/Brands/SnapchatSquare.Local.png) |




## SnapchatSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SnapchatSquare
include('fontawesome-5/Brands/SnapchatSquare')

' renders the element
SnapchatSquare('SnapchatSquare', 'Snapchat Square', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SnapchatSquare
include('fontawesome-5/Brands/SnapchatSquare')

' renders the element
SnapchatSquare('SnapchatSquare', 'Snapchat Square', 'an optional tech label')
@enduml
```

