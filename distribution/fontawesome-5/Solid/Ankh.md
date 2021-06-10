# Ankh


```text
fontawesome-5/Solid/Ankh
```

```text
include('fontawesome-5/Solid/Ankh')
```



| Illustration | Ankh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Ankh.png) | ![illustration for Ankh](../../fontawesome-5/Solid/Ankh.Local.png) |




## Ankh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ankh
include('fontawesome-5/Solid/Ankh')

' renders the element
Ankh('Ankh', 'Ankh', 'an optional tech label')
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

' loads the Item which embeds the element Ankh
include('fontawesome-5/Solid/Ankh')

' renders the element
Ankh('Ankh', 'Ankh', 'an optional tech label')
@enduml
```

