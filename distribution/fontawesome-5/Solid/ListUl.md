# ListUl


```text
fontawesome-5/Solid/ListUl
```

```text
include('fontawesome-5/Solid/ListUl')
```



| Illustration | ListUl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ListUl.png) | ![illustration for ListUl](../../fontawesome-5/Solid/ListUl.Local.png) |




## ListUl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ListUl
include('fontawesome-5/Solid/ListUl')

' renders the element
ListUl('ListUl', 'List Ul', 'an optional tech label')
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

' loads the Item which embeds the element ListUl
include('fontawesome-5/Solid/ListUl')

' renders the element
ListUl('ListUl', 'List Ul', 'an optional tech label')
@enduml
```

