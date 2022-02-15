# Markdown


```text
fontawesome-6/Brands/Markdown
```

```text
include('fontawesome-6/Brands/Markdown')
```



| Illustration | Markdown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Markdown.png) | ![illustration for Markdown](../../fontawesome-6/Brands/Markdown.Local.png) |




## Markdown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Markdown
include('fontawesome-6/Brands/Markdown')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Markdown
include('fontawesome-6/Brands/Markdown')

' renders the element
Markdown('Markdown', 'Markdown', 'an optional tech label')
@enduml
```

