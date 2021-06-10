# Hdd


```text
fontawesome-5/Solid/Hdd
```

```text
include('fontawesome-5/Solid/Hdd')
```



| Illustration | Hdd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hdd.png) | ![illustration for Hdd](../../fontawesome-5/Solid/Hdd.Local.png) |




## Hdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hdd
include('fontawesome-5/Solid/Hdd')

' renders the element
Hdd('Hdd', 'Hdd', 'an optional tech label')
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

' loads the Item which embeds the element Hdd
include('fontawesome-5/Solid/Hdd')

' renders the element
Hdd('Hdd', 'Hdd', 'an optional tech label')
@enduml
```

