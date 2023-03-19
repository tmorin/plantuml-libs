# LinkSlash


```text
fontawesome-6/Solid/LinkSlash
```

```text
include('fontawesome-6/Solid/LinkSlash')
```



| Illustration | LinkSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LinkSlash.png) | ![illustration for LinkSlash](../../fontawesome-6/Solid/LinkSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkSlashXs>`
- `<$LinkSlashSm>`
- `<$LinkSlashMd>`
- `<$LinkSlashLg>`





## LinkSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LinkSlash
include('fontawesome-6/Solid/LinkSlash')

' renders the element
LinkSlash('LinkSlash', 'Link Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LinkSlash
include('fontawesome-6/Solid/LinkSlash')

' renders the element
LinkSlash('LinkSlash', 'Link Slash', 'an optional tech label', 'an optional description')
@enduml
```

