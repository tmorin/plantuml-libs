# IdBadge


```text
fontawesome-6/Regular/IdBadge
```

```text
include('fontawesome-6/Regular/IdBadge')
```



| Illustration | IdBadge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/IdBadge.png) | ![illustration for IdBadge](../../fontawesome-6/Regular/IdBadge.Local.png) |




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
include('fontawesome-6/Regular/IdBadge')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element IdBadge
include('fontawesome-6/Regular/IdBadge')

' renders the element
IdBadge('IdBadge', 'Id Badge', 'an optional tech label')
@enduml
```

