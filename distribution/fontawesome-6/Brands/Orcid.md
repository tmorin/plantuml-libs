# Orcid


```text
fontawesome-6/Brands/Orcid
```

```text
include('fontawesome-6/Brands/Orcid')
```



| Illustration | Orcid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Orcid.png) | ![illustration for Orcid](../../fontawesome-6/Brands/Orcid.Local.png) |




## Orcid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Orcid
include('fontawesome-6/Brands/Orcid')

' renders the element
Orcid('Orcid', 'Orcid', 'an optional tech label')
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

' loads the Item which embeds the element Orcid
include('fontawesome-6/Brands/Orcid')

' renders the element
Orcid('Orcid', 'Orcid', 'an optional tech label')
@enduml
```

