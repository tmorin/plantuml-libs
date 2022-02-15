# ListUl


```text
fontawesome-6/Solid/ListUl
```

```text
include('fontawesome-6/Solid/ListUl')
```



| Illustration | ListUl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ListUl.png) | ![illustration for ListUl](../../fontawesome-6/Solid/ListUl.Local.png) |




## ListUl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ListUl
include('fontawesome-6/Solid/ListUl')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ListUl
include('fontawesome-6/Solid/ListUl')

' renders the element
ListUl('ListUl', 'List Ul', 'an optional tech label')
@enduml
```

