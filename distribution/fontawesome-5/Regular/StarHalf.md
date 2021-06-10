# StarHalf


```text
fontawesome-5/Regular/StarHalf
```

```text
include('fontawesome-5/Regular/StarHalf')
```



| Illustration | StarHalf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/StarHalf.png) | ![illustration for StarHalf](../../fontawesome-5/Regular/StarHalf.Local.png) |




## StarHalf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StarHalf
include('fontawesome-5/Regular/StarHalf')

' renders the element
StarHalf('StarHalf', 'Star Half', 'an optional tech label')
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

' loads the Item which embeds the element StarHalf
include('fontawesome-5/Regular/StarHalf')

' renders the element
StarHalf('StarHalf', 'Star Half', 'an optional tech label')
@enduml
```

