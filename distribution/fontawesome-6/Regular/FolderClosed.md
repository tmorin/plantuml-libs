# FolderClosed


```text
fontawesome-6/Regular/FolderClosed
```

```text
include('fontawesome-6/Regular/FolderClosed')
```



| Illustration | FolderClosed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FolderClosed.png) | ![illustration for FolderClosed](../../fontawesome-6/Regular/FolderClosed.Local.png) |




## FolderClosed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FolderClosed
include('fontawesome-6/Regular/FolderClosed')

' renders the element
FolderClosed('FolderClosed', 'Folder Closed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FolderClosed
include('fontawesome-6/Regular/FolderClosed')

' renders the element
FolderClosed('FolderClosed', 'Folder Closed', 'an optional tech label', 'an optional description')
@enduml
```

