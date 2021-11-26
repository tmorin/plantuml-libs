# SnapchatGhost


```text
fontawesome-5/Brands/SnapchatGhost
```

```text
include('fontawesome-5/Brands/SnapchatGhost')
```



| Illustration | SnapchatGhost |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/SnapchatGhost.png) | ![illustration for SnapchatGhost](../../fontawesome-5/Brands/SnapchatGhost.Local.png) |




## SnapchatGhost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SnapchatGhost
include('fontawesome-5/Brands/SnapchatGhost')

' renders the element
SnapchatGhost('SnapchatGhost', 'Snapchat Ghost', 'an optional tech label')
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

' loads the Item which embeds the element SnapchatGhost
include('fontawesome-5/Brands/SnapchatGhost')

' renders the element
SnapchatGhost('SnapchatGhost', 'Snapchat Ghost', 'an optional tech label')
@enduml
```

