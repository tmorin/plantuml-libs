# _42Group


```text
fontawesome-6/Brands/_42Group
```

```text
include('fontawesome-6/Brands/_42Group')
```



| Illustration | _42Group |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/_42Group.png) | ![illustration for _42Group](../../fontawesome-6/Brands/_42Group.Local.png) |




## _42Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element _42Group
include('fontawesome-6/Brands/_42Group')

' renders the element
_42Group('42group', '42group', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _42Group
include('fontawesome-6/Brands/_42Group')

' renders the element
_42Group('42group', '42group', 'an optional tech label', 'an optional description')
@enduml
```

