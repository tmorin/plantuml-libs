# Viruses


```text
fontawesome-5/Solid/Viruses
```

```text
include('fontawesome-5/Solid/Viruses')
```



| Illustration | Viruses |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Viruses.png) | ![illustration for Viruses](../../fontawesome-5/Solid/Viruses.Local.png) |




## Viruses

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Viruses
include('fontawesome-5/Solid/Viruses')

' renders the element
Viruses('Viruses', 'Viruses', 'an optional tech label')
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

' loads the Item which embeds the element Viruses
include('fontawesome-5/Solid/Viruses')

' renders the element
Viruses('Viruses', 'Viruses', 'an optional tech label')
@enduml
```

