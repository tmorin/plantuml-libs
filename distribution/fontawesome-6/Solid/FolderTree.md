# FolderTree


```text
fontawesome-6/Solid/FolderTree
```

```text
include('fontawesome-6/Solid/FolderTree')
```



| Illustration | FolderTree |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FolderTree.png) | ![illustration for FolderTree](../../fontawesome-6/Solid/FolderTree.Local.png) |




## FolderTree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FolderTree
include('fontawesome-6/Solid/FolderTree')

' renders the element
FolderTree('FolderTree', 'Folder Tree', 'an optional tech label')
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

' loads the Item which embeds the element FolderTree
include('fontawesome-6/Solid/FolderTree')

' renders the element
FolderTree('FolderTree', 'Folder Tree', 'an optional tech label')
@enduml
```

