# SnippetFolder


```text
material-4/File/SnippetFolder
```

```text
include('material-4/File/SnippetFolder')
```



| Illustration | SnippetFolder |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/SnippetFolder.png) | ![illustration for SnippetFolder](../../material-4/File/SnippetFolder.Local.png) |




## SnippetFolder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SnippetFolder
include('material-4/File/SnippetFolder')

' renders the element
SnippetFolder('SnippetFolder', 'Snippet Folder', 'an optional tech label')
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

' loads the Item which embeds the element SnippetFolder
include('material-4/File/SnippetFolder')

' renders the element
SnippetFolder('SnippetFolder', 'Snippet Folder', 'an optional tech label')
@enduml
```

