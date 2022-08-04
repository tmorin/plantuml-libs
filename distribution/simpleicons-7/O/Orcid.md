# Orcid


```text
simpleicons-7/O/Orcid
```

```text
include('simpleicons-7/O/Orcid')
```



| Illustration | Orcid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Orcid.png) | ![illustration for Orcid](../../simpleicons-7/O/Orcid.Local.png) |




## Orcid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Orcid
include('simpleicons-7/O/Orcid')

' renders the element
Orcid('Orcid', 'Orcid', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Orcid
include('simpleicons-7/O/Orcid')

' renders the element
Orcid('Orcid', 'Orcid', 'an optional tech label', 'an optional description')
@enduml
```

