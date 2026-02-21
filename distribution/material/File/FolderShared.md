# FolderShared


```text
material/File/FolderShared
```

```text
include('material/File/FolderShared')
```



| Illustration | FolderShared |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/FolderShared.png) | ![illustration for FolderShared](../../material/File/FolderShared.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FolderSharedXs>`
- `<$FolderSharedSm>`
- `<$FolderSharedMd>`
- `<$FolderSharedLg>`





## FolderShared

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FolderShared
include('material/File/FolderShared')

' renders the element
FolderShared('FolderShared', 'Folder Shared', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FolderShared
include('material/File/FolderShared')

' renders the element
FolderShared('FolderShared', 'Folder Shared', 'an optional tech label', 'an optional description')
@enduml
```

