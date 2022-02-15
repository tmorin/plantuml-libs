# SnapchatSquare


```text
fontawesome-6/Brands/SnapchatSquare
```

```text
include('fontawesome-6/Brands/SnapchatSquare')
```



| Illustration | SnapchatSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SnapchatSquare.png) | ![illustration for SnapchatSquare](../../fontawesome-6/Brands/SnapchatSquare.Local.png) |




## SnapchatSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SnapchatSquare
include('fontawesome-6/Brands/SnapchatSquare')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SnapchatSquare
include('fontawesome-6/Brands/SnapchatSquare')

' renders the element
SnapchatSquare('SnapchatSquare', 'Snapchat Square', 'an optional tech label')
@enduml
```

