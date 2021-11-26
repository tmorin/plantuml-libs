# Bacteria


```text
fontawesome-5/Solid/Bacteria
```

```text
include('fontawesome-5/Solid/Bacteria')
```



| Illustration | Bacteria |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bacteria.png) | ![illustration for Bacteria](../../fontawesome-5/Solid/Bacteria.Local.png) |




## Bacteria

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bacteria
include('fontawesome-5/Solid/Bacteria')

' renders the element
Bacteria('Bacteria', 'Bacteria', 'an optional tech label')
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

' loads the Item which embeds the element Bacteria
include('fontawesome-5/Solid/Bacteria')

' renders the element
Bacteria('Bacteria', 'Bacteria', 'an optional tech label')
@enduml
```

