# Orcid


```text
simpleicons-14/O/Orcid
```

```text
include('simpleicons-14/O/Orcid')
```



| Illustration | Orcid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Orcid.png) | ![illustration for Orcid](../../simpleicons-14/O/Orcid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OrcidXs>`
- `<$OrcidSm>`
- `<$OrcidMd>`
- `<$OrcidLg>`





## Orcid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Orcid
include('simpleicons-14/O/Orcid')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Orcid
include('simpleicons-14/O/Orcid')

' renders the element
Orcid('Orcid', 'Orcid', 'an optional tech label', 'an optional description')
@enduml
```

