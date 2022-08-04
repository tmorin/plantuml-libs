# Contao


```text
fontawesome-6/Brands/Contao
```

```text
include('fontawesome-6/Brands/Contao')
```



| Illustration | Contao |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Contao.png) | ![illustration for Contao](../../fontawesome-6/Brands/Contao.Local.png) |




## Contao

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Contao
include('fontawesome-6/Brands/Contao')

' renders the element
Contao('Contao', 'Contao', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contao
include('fontawesome-6/Brands/Contao')

' renders the element
Contao('Contao', 'Contao', 'an optional tech label', 'an optional description')
@enduml
```

