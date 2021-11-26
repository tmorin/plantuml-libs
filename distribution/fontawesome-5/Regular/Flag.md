# Flag


```text
fontawesome-5/Regular/Flag
```

```text
include('fontawesome-5/Regular/Flag')
```



| Illustration | Flag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Flag.png) | ![illustration for Flag](../../fontawesome-5/Regular/Flag.Local.png) |




## Flag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Flag
include('fontawesome-5/Regular/Flag')

' renders the element
Flag('Flag', 'Flag', 'an optional tech label')
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

' loads the Item which embeds the element Flag
include('fontawesome-5/Regular/Flag')

' renders the element
Flag('Flag', 'Flag', 'an optional tech label')
@enduml
```

