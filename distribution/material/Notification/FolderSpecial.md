# FolderSpecial


```text
material/Notification/FolderSpecial
```

```text
include('material/Notification/FolderSpecial')
```



| Illustration | FolderSpecial |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/FolderSpecial.png) | ![illustration for FolderSpecial](../../material/Notification/FolderSpecial.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FolderSpecialXs>`
- `<$FolderSpecialSm>`
- `<$FolderSpecialMd>`
- `<$FolderSpecialLg>`





## FolderSpecial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FolderSpecial
include('material/Notification/FolderSpecial')

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
include('material/bootstrap')

' loads the Item which embeds the element FolderSpecial
include('material/Notification/FolderSpecial')

' renders the element
FolderSpecial('FolderSpecial', 'Folder Special', 'an optional tech label', 'an optional description')
@enduml
```

