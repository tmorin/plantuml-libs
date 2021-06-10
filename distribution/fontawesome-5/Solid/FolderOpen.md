# FolderOpen


```text
fontawesome-5/Solid/FolderOpen
```

```text
include('fontawesome-5/Solid/FolderOpen')
```



| Illustration | FolderOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FolderOpen.png) | ![illustration for FolderOpen](../../fontawesome-5/Solid/FolderOpen.Local.png) |




## FolderOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FolderOpen
include('fontawesome-5/Solid/FolderOpen')

' renders the element
FolderOpen('FolderOpen', 'Folder Open', 'an optional tech label')
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

' loads the Item which embeds the element FolderOpen
include('fontawesome-5/Solid/FolderOpen')

' renders the element
FolderOpen('FolderOpen', 'Folder Open', 'an optional tech label')
@enduml
```

