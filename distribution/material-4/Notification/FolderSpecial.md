# FolderSpecial


```text
material-4/Notification/FolderSpecial
```

```text
include('material-4/Notification/FolderSpecial')
```



| Illustration | FolderSpecial |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/FolderSpecial.png) | ![illustration for FolderSpecial](../../material-4/Notification/FolderSpecial.Local.png) |




## FolderSpecial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FolderSpecial
include('material-4/Notification/FolderSpecial')

' renders the element
FolderSpecial('FolderSpecial', 'Folder Special', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FolderSpecial
include('material-4/Notification/FolderSpecial')

' renders the element
FolderSpecial('FolderSpecial', 'Folder Special', 'an optional tech label', 'an optional description')
@enduml
```

