# FolderPlus


```text
fontawesome-5/Solid/FolderPlus
```

```text
include('fontawesome-5/Solid/FolderPlus')
```



| Illustration | FolderPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FolderPlus.png) | ![illustration for FolderPlus](../../fontawesome-5/Solid/FolderPlus.Local.png) |




## FolderPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FolderPlus
include('fontawesome-5/Solid/FolderPlus')

' renders the element
FolderPlus('FolderPlus', 'Folder Plus', 'an optional tech label')
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

' loads the Item which embeds the element FolderPlus
include('fontawesome-5/Solid/FolderPlus')

' renders the element
FolderPlus('FolderPlus', 'Folder Plus', 'an optional tech label')
@enduml
```

