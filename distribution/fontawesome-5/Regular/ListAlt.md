# ListAlt


```text
fontawesome-5/Regular/ListAlt
```

```text
include('fontawesome-5/Regular/ListAlt')
```



| Illustration | ListAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/ListAlt.png) | ![illustration for ListAlt](../../fontawesome-5/Regular/ListAlt.Local.png) |




## ListAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ListAlt
include('fontawesome-5/Regular/ListAlt')

' renders the element
ListAlt('ListAlt', 'List Alt', 'an optional tech label')
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

' loads the Item which embeds the element ListAlt
include('fontawesome-5/Regular/ListAlt')

' renders the element
ListAlt('ListAlt', 'List Alt', 'an optional tech label')
@enduml
```

