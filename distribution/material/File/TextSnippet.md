# TextSnippet


```text
material/File/TextSnippet
```

```text
include('material/File/TextSnippet')
```



| Illustration | TextSnippet |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/TextSnippet.png) | ![illustration for TextSnippet](../../material/File/TextSnippet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextSnippetXs>`
- `<$TextSnippetSm>`
- `<$TextSnippetMd>`
- `<$TextSnippetLg>`





## TextSnippet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TextSnippet
include('material/File/TextSnippet')

' renders the element
TextSnippet('TextSnippet', 'Text Snippet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TextSnippet
include('material/File/TextSnippet')

' renders the element
TextSnippet('TextSnippet', 'Text Snippet', 'an optional tech label', 'an optional description')
@enduml
```

