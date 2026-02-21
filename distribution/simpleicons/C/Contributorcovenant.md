# Contributorcovenant


```text
simpleicons/C/Contributorcovenant
```

```text
include('simpleicons/C/Contributorcovenant')
```



| Illustration | Contributorcovenant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Contributorcovenant.png) | ![illustration for Contributorcovenant](../../simpleicons/C/Contributorcovenant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContributorcovenantXs>`
- `<$ContributorcovenantSm>`
- `<$ContributorcovenantMd>`
- `<$ContributorcovenantLg>`





## Contributorcovenant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Contributorcovenant
include('simpleicons/C/Contributorcovenant')

' renders the element
Contributorcovenant('Contributorcovenant', 'Contributorcovenant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contributorcovenant
include('simpleicons/C/Contributorcovenant')

' renders the element
Contributorcovenant('Contributorcovenant', 'Contributorcovenant', 'an optional tech label', 'an optional description')
@enduml
```

