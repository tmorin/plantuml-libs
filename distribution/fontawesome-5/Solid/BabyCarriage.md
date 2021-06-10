# BabyCarriage


```text
fontawesome-5/Solid/BabyCarriage
```

```text
include('fontawesome-5/Solid/BabyCarriage')
```



| Illustration | BabyCarriage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BabyCarriage.png) | ![illustration for BabyCarriage](../../fontawesome-5/Solid/BabyCarriage.Local.png) |




## BabyCarriage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BabyCarriage
include('fontawesome-5/Solid/BabyCarriage')

' renders the element
BabyCarriage('BabyCarriage', 'Baby Carriage', 'an optional tech label')
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

' loads the Item which embeds the element BabyCarriage
include('fontawesome-5/Solid/BabyCarriage')

' renders the element
BabyCarriage('BabyCarriage', 'Baby Carriage', 'an optional tech label')
@enduml
```

