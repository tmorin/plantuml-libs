# EllipsisV


```text
fontawesome-5/Solid/EllipsisV
```

```text
include('fontawesome-5/Solid/EllipsisV')
```



| Illustration | EllipsisV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/EllipsisV.png) | ![illustration for EllipsisV](../../fontawesome-5/Solid/EllipsisV.Local.png) |




## EllipsisV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element EllipsisV
include('fontawesome-5/Solid/EllipsisV')

' renders the element
EllipsisV('EllipsisV', 'Ellipsis V', 'an optional tech label')
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

' loads the Item which embeds the element EllipsisV
include('fontawesome-5/Solid/EllipsisV')

' renders the element
EllipsisV('EllipsisV', 'Ellipsis V', 'an optional tech label')
@enduml
```

