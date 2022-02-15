# Carrot


```text
fontawesome-6/Solid/Carrot
```

```text
include('fontawesome-6/Solid/Carrot')
```



| Illustration | Carrot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Carrot.png) | ![illustration for Carrot](../../fontawesome-6/Solid/Carrot.Local.png) |




## Carrot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Carrot
include('fontawesome-6/Solid/Carrot')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Carrot
include('fontawesome-6/Solid/Carrot')

' renders the element
Carrot('Carrot', 'Carrot', 'an optional tech label')
@enduml
```

