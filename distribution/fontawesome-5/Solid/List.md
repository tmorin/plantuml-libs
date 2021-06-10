# List


```text
fontawesome-5/Solid/List
```

```text
include('fontawesome-5/Solid/List')
```



| Illustration | List |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/List.png) | ![illustration for List](../../fontawesome-5/Solid/List.Local.png) |




## List

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element List
include('fontawesome-5/Solid/List')

' renders the element
List('List', 'List', 'an optional tech label')
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

' loads the Item which embeds the element List
include('fontawesome-5/Solid/List')

' renders the element
List('List', 'List', 'an optional tech label')
@enduml
```

