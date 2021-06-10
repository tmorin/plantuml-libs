# Moon


```text
fontawesome-5/Solid/Moon
```

```text
include('fontawesome-5/Solid/Moon')
```



| Illustration | Moon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Moon.png) | ![illustration for Moon](../../fontawesome-5/Solid/Moon.Local.png) |




## Moon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Moon
include('fontawesome-5/Solid/Moon')

' renders the element
Moon('Moon', 'Moon', 'an optional tech label')
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

' loads the Item which embeds the element Moon
include('fontawesome-5/Solid/Moon')

' renders the element
Moon('Moon', 'Moon', 'an optional tech label')
@enduml
```

