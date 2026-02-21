# GraphiteEditor


```text
simpleicons-14/G/GraphiteEditor
```

```text
include('simpleicons-14/G/GraphiteEditor')
```



| Illustration | GraphiteEditor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/GraphiteEditor.png) | ![illustration for GraphiteEditor](../../simpleicons-14/G/GraphiteEditor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GraphiteEditorXs>`
- `<$GraphiteEditorSm>`
- `<$GraphiteEditorMd>`
- `<$GraphiteEditorLg>`





## GraphiteEditor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element GraphiteEditor
include('simpleicons-14/G/GraphiteEditor')

' renders the element
GraphiteEditor('GraphiteEditor', 'Graphite Editor', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element GraphiteEditor
include('simpleicons-14/G/GraphiteEditor')

' renders the element
GraphiteEditor('GraphiteEditor', 'Graphite Editor', 'an optional tech label', 'an optional description')
@enduml
```

