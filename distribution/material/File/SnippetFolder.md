# SnippetFolder


```text
material/File/SnippetFolder
```

```text
include('material/File/SnippetFolder')
```



| Illustration | SnippetFolder |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/SnippetFolder.png) | ![illustration for SnippetFolder](../../material/File/SnippetFolder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnippetFolderXs>`
- `<$SnippetFolderSm>`
- `<$SnippetFolderMd>`
- `<$SnippetFolderLg>`





## SnippetFolder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SnippetFolder
include('material/File/SnippetFolder')

' renders the element
SnippetFolder('SnippetFolder', 'Snippet Folder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SnippetFolder
include('material/File/SnippetFolder')

' renders the element
SnippetFolder('SnippetFolder', 'Snippet Folder', 'an optional tech label', 'an optional description')
@enduml
```

