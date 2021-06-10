# Contao


```text
fontawesome-5/Brands/Contao
```

```text
include('fontawesome-5/Brands/Contao')
```



| Illustration | Contao |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Contao.png) | ![illustration for Contao](../../fontawesome-5/Brands/Contao.Local.png) |




## Contao

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Contao
include('fontawesome-5/Brands/Contao')

' renders the element
Contao('Contao', 'Contao', 'an optional tech label')
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

' loads the Item which embeds the element Contao
include('fontawesome-5/Brands/Contao')

' renders the element
Contao('Contao', 'Contao', 'an optional tech label')
@enduml
```

