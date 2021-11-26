# TextSnippet


```text
material-4/File/TextSnippet
```

```text
include('material-4/File/TextSnippet')
```



| Illustration | TextSnippet |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/TextSnippet.png) | ![illustration for TextSnippet](../../material-4/File/TextSnippet.Local.png) |




## TextSnippet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TextSnippet
include('material-4/File/TextSnippet')

' renders the element
TextSnippet('TextSnippet', 'Text Snippet', 'an optional tech label')
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

' loads the Item which embeds the element TextSnippet
include('material-4/File/TextSnippet')

' renders the element
TextSnippet('TextSnippet', 'Text Snippet', 'an optional tech label')
@enduml
```

