# Highlighter


```text
fontawesome-5/Solid/Highlighter
```

```text
include('fontawesome-5/Solid/Highlighter')
```



| Illustration | Highlighter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Highlighter.png) | ![illustration for Highlighter](../../fontawesome-5/Solid/Highlighter.Local.png) |




## Highlighter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Highlighter
include('fontawesome-5/Solid/Highlighter')

' renders the element
Highlighter('Highlighter', 'Highlighter', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Highlighter
include('fontawesome-5/Solid/Highlighter')

' renders the element
Highlighter('Highlighter', 'Highlighter', 'an optional tech label')
@enduml
```

