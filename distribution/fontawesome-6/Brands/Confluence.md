# Confluence


```text
fontawesome-6/Brands/Confluence
```

```text
include('fontawesome-6/Brands/Confluence')
```



| Illustration | Confluence |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Confluence.png) | ![illustration for Confluence](../../fontawesome-6/Brands/Confluence.Local.png) |




## Confluence

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Confluence
include('fontawesome-6/Brands/Confluence')

' renders the element
Confluence('Confluence', 'Confluence', 'an optional tech label')
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

' loads the Item which embeds the element Confluence
include('fontawesome-6/Brands/Confluence')

' renders the element
Confluence('Confluence', 'Confluence', 'an optional tech label')
@enduml
```

