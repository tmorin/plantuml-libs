# Vest


```text
fontawesome-6/Solid/Vest
```

```text
include('fontawesome-6/Solid/Vest')
```



| Illustration | Vest |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Vest.png) | ![illustration for Vest](../../fontawesome-6/Solid/Vest.Local.png) |




## Vest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Vest
include('fontawesome-6/Solid/Vest')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Vest
include('fontawesome-6/Solid/Vest')

' renders the element
Vest('Vest', 'Vest', 'an optional tech label')
@enduml
```

