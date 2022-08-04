# ListOl


```text
fontawesome-6/Solid/ListOl
```

```text
include('fontawesome-6/Solid/ListOl')
```



| Illustration | ListOl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ListOl.png) | ![illustration for ListOl](../../fontawesome-6/Solid/ListOl.Local.png) |




## ListOl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ListOl
include('fontawesome-6/Solid/ListOl')

' renders the element
ListOl('ListOl', 'List Ol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ListOl
include('fontawesome-6/Solid/ListOl')

' renders the element
ListOl('ListOl', 'List Ol', 'an optional tech label', 'an optional description')
@enduml
```

