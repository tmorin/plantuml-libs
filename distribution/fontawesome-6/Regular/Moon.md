# Moon


```text
fontawesome-6/Regular/Moon
```

```text
include('fontawesome-6/Regular/Moon')
```



| Illustration | Moon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Moon.png) | ![illustration for Moon](../../fontawesome-6/Regular/Moon.Local.png) |




## Moon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Moon
include('fontawesome-6/Regular/Moon')

' renders the element
Moon('Moon', 'Moon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moon
include('fontawesome-6/Regular/Moon')

' renders the element
Moon('Moon', 'Moon', 'an optional tech label', 'an optional description')
@enduml
```

