# IdBadge


```text
fontawesome-6/Solid/IdBadge
```

```text
include('fontawesome-6/Solid/IdBadge')
```



| Illustration | IdBadge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/IdBadge.png) | ![illustration for IdBadge](../../fontawesome-6/Solid/IdBadge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IdBadgeXs>`
- `<$IdBadgeSm>`
- `<$IdBadgeMd>`
- `<$IdBadgeLg>`





## IdBadge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element IdBadge
include('fontawesome-6/Solid/IdBadge')

' renders the element
IdBadge('IdBadge', 'Id Badge', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element IdBadge
include('fontawesome-6/Solid/IdBadge')

' renders the element
IdBadge('IdBadge', 'Id Badge', 'an optional tech label', 'an optional description')
@enduml
```

