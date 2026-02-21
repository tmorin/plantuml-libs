# ListUl


```text
fontawesome/Solid/ListUl
```

```text
include('fontawesome/Solid/ListUl')
```



| Illustration | ListUl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ListUl.png) | ![illustration for ListUl](../../fontawesome/Solid/ListUl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ListUlXs>`
- `<$ListUlSm>`
- `<$ListUlMd>`
- `<$ListUlLg>`





## ListUl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ListUl
include('fontawesome/Solid/ListUl')

' renders the element
ListUl('ListUl', 'List Ul', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ListUl
include('fontawesome/Solid/ListUl')

' renders the element
ListUl('ListUl', 'List Ul', 'an optional tech label', 'an optional description')
@enduml
```

