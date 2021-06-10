# Carrot


```text
fontawesome-5/Solid/Carrot
```

```text
include('fontawesome-5/Solid/Carrot')
```



| Illustration | Carrot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Carrot.png) | ![illustration for Carrot](../../fontawesome-5/Solid/Carrot.Local.png) |




## Carrot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Carrot
include('fontawesome-5/Solid/Carrot')

' renders the element
Carrot('Carrot', 'Carrot', 'an optional tech label')
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

' loads the Item which embeds the element Carrot
include('fontawesome-5/Solid/Carrot')

' renders the element
Carrot('Carrot', 'Carrot', 'an optional tech label')
@enduml
```

