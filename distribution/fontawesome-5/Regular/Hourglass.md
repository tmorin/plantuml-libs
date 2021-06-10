# Hourglass


```text
fontawesome-5/Regular/Hourglass
```

```text
include('fontawesome-5/Regular/Hourglass')
```



| Illustration | Hourglass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Hourglass.png) | ![illustration for Hourglass](../../fontawesome-5/Regular/Hourglass.Local.png) |




## Hourglass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hourglass
include('fontawesome-5/Regular/Hourglass')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hourglass
include('fontawesome-5/Regular/Hourglass')

' renders the element
Hourglass('Hourglass', 'Hourglass', 'an optional tech label')
@enduml
```

