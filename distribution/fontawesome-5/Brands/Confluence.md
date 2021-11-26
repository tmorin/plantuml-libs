# Confluence


```text
fontawesome-5/Brands/Confluence
```

```text
include('fontawesome-5/Brands/Confluence')
```



| Illustration | Confluence |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Confluence.png) | ![illustration for Confluence](../../fontawesome-5/Brands/Confluence.Local.png) |




## Confluence

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Confluence
include('fontawesome-5/Brands/Confluence')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Confluence
include('fontawesome-5/Brands/Confluence')

' renders the element
Confluence('Confluence', 'Confluence', 'an optional tech label')
@enduml
```

