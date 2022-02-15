# Ellipsis


```text
fontawesome-6/Solid/Ellipsis
```

```text
include('fontawesome-6/Solid/Ellipsis')
```



| Illustration | Ellipsis |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Ellipsis.png) | ![illustration for Ellipsis](../../fontawesome-6/Solid/Ellipsis.Local.png) |




## Ellipsis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ellipsis
include('fontawesome-6/Solid/Ellipsis')

' renders the element
Ellipsis('Ellipsis', 'Ellipsis', 'an optional tech label')
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

' loads the Item which embeds the element Ellipsis
include('fontawesome-6/Solid/Ellipsis')

' renders the element
Ellipsis('Ellipsis', 'Ellipsis', 'an optional tech label')
@enduml
```

