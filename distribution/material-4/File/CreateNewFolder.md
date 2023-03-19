# CreateNewFolder


```text
material-4/File/CreateNewFolder
```

```text
include('material-4/File/CreateNewFolder')
```



| Illustration | CreateNewFolder |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/CreateNewFolder.png) | ![illustration for CreateNewFolder](../../material-4/File/CreateNewFolder.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element CreateNewFolder
include('material-4/File/CreateNewFolder')

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
include('material-4/bootstrap')

' loads the Item which embeds the element CreateNewFolder
include('material-4/File/CreateNewFolder')

' renders the element
CreateNewFolder('CreateNewFolder', 'Create New Folder', 'an optional tech label', 'an optional description')
@enduml
```

