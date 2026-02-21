# CreateNewFolder


```text
material/File/CreateNewFolder
```

```text
include('material/File/CreateNewFolder')
```



| Illustration | CreateNewFolder |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/CreateNewFolder.png) | ![illustration for CreateNewFolder](../../material/File/CreateNewFolder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreateNewFolderXs>`
- `<$CreateNewFolderSm>`
- `<$CreateNewFolderMd>`
- `<$CreateNewFolderLg>`





## CreateNewFolder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CreateNewFolder
include('material/File/CreateNewFolder')

' renders the element
CreateNewFolder('CreateNewFolder', 'Create New Folder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreateNewFolder
include('material/File/CreateNewFolder')

' renders the element
CreateNewFolder('CreateNewFolder', 'Create New Folder', 'an optional tech label', 'an optional description')
@enduml
```

