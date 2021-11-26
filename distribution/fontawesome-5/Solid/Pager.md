# Pager


```text
fontawesome-5/Solid/Pager
```

```text
include('fontawesome-5/Solid/Pager')
```



| Illustration | Pager |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Pager.png) | ![illustration for Pager](../../fontawesome-5/Solid/Pager.Local.png) |




## Pager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Pager
include('fontawesome-5/Solid/Pager')

' renders the element
Pager('Pager', 'Pager', 'an optional tech label')
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

' loads the Item which embeds the element Pager
include('fontawesome-5/Solid/Pager')

' renders the element
Pager('Pager', 'Pager', 'an optional tech label')
@enduml
```

