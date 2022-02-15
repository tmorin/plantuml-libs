# Orcid


```text
simpleicons-6/O/Orcid
```

```text
include('simpleicons-6/O/Orcid')
```



| Illustration | Orcid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Orcid.png) | ![illustration for Orcid](../../simpleicons-6/O/Orcid.Local.png) |




## Orcid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Orcid
include('simpleicons-6/O/Orcid')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Orcid
include('simpleicons-6/O/Orcid')

' renders the element
Orcid('Orcid', 'Orcid', 'an optional tech label')
@enduml
```

