# Hourglass


```text
fontawesome-6/Regular/Hourglass
```

```text
include('fontawesome-6/Regular/Hourglass')
```



| Illustration | Hourglass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Hourglass.png) | ![illustration for Hourglass](../../fontawesome-6/Regular/Hourglass.Local.png) |




## Hourglass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hourglass
include('fontawesome-6/Regular/Hourglass')

' renders the element
Hourglass('Hourglass', 'Hourglass', 'an optional tech label')
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

' loads the Item which embeds the element Hourglass
include('fontawesome-6/Regular/Hourglass')

' renders the element
Hourglass('Hourglass', 'Hourglass', 'an optional tech label')
@enduml
```

