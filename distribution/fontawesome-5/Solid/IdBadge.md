# IdBadge


```text
fontawesome-5/Solid/IdBadge
```

```text
include('fontawesome-5/Solid/IdBadge')
```



| Illustration | IdBadge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/IdBadge.png) | ![illustration for IdBadge](../../fontawesome-5/Solid/IdBadge.Local.png) |




## IdBadge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element IdBadge
include('fontawesome-5/Solid/IdBadge')

' renders the element
IdBadge('IdBadge', 'Id Badge', 'an optional tech label')
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

' loads the Item which embeds the element IdBadge
include('fontawesome-5/Solid/IdBadge')

' renders the element
IdBadge('IdBadge', 'Id Badge', 'an optional tech label')
@enduml
```

