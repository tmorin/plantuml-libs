# Markdown


```text
simpleicons-5/M/Markdown
```

```text
include('simpleicons-5/M/Markdown')
```



| Illustration | Markdown |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Markdown.png) | ![illustration for Markdown](../../simpleicons-5/M/Markdown.Local.png) |




## Markdown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Markdown
include('simpleicons-5/M/Markdown')

' renders the element
Markdown('Markdown', 'Markdown', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Markdown
include('simpleicons-5/M/Markdown')

' renders the element
Markdown('Markdown', 'Markdown', 'an optional tech label')
@enduml
```

