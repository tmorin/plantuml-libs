# ListOl


```text
fontawesome-5/Solid/ListOl
```

```text
include('fontawesome-5/Solid/ListOl')
```



| Illustration | ListOl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ListOl.png) | ![illustration for ListOl](../../fontawesome-5/Solid/ListOl.Local.png) |




## ListOl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ListOl
include('fontawesome-5/Solid/ListOl')

' renders the element
ListOl('ListOl', 'List Ol', 'an optional tech label')
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

' loads the Item which embeds the element ListOl
include('fontawesome-5/Solid/ListOl')

' renders the element
ListOl('ListOl', 'List Ol', 'an optional tech label')
@enduml
```

