# Ankh


```text
fontawesome-6/Solid/Ankh
```

```text
include('fontawesome-6/Solid/Ankh')
```



| Illustration | Ankh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Ankh.png) | ![illustration for Ankh](../../fontawesome-6/Solid/Ankh.Local.png) |




## Ankh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ankh
include('fontawesome-6/Solid/Ankh')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ankh
include('fontawesome-6/Solid/Ankh')

' renders the element
Ankh('Ankh', 'Ankh', 'an optional tech label')
@enduml
```

