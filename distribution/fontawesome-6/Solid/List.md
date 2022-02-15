# List


```text
fontawesome-6/Solid/List
```

```text
include('fontawesome-6/Solid/List')
```



| Illustration | List |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/List.png) | ![illustration for List](../../fontawesome-6/Solid/List.Local.png) |




## List

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element List
include('fontawesome-6/Solid/List')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element List
include('fontawesome-6/Solid/List')

' renders the element
List('List', 'List', 'an optional tech label')
@enduml
```

