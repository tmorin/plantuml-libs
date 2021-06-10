# Vest


```text
fontawesome-5/Solid/Vest
```

```text
include('fontawesome-5/Solid/Vest')
```



| Illustration | Vest |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Vest.png) | ![illustration for Vest](../../fontawesome-5/Solid/Vest.Local.png) |




## Vest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Vest
include('fontawesome-5/Solid/Vest')

' renders the element
Vest('Vest', 'Vest', 'an optional tech label')
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

' loads the Item which embeds the element Vest
include('fontawesome-5/Solid/Vest')

' renders the element
Vest('Vest', 'Vest', 'an optional tech label')
@enduml
```

