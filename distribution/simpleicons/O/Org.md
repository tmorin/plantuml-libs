# Org


```text
simpleicons/O/Org
```

```text
include('simpleicons/O/Org')
```



| Illustration | Org |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Org.png) | ![illustration for Org](../../simpleicons/O/Org.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OrgXs>`
- `<$OrgSm>`
- `<$OrgMd>`
- `<$OrgLg>`





## Org

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Org
include('simpleicons/O/Org')

' renders the element
Org('Org', 'Org', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Org
include('simpleicons/O/Org')

' renders the element
Org('Org', 'Org', 'an optional tech label', 'an optional description')
@enduml
```

