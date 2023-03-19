# BabyCarriage


```text
fontawesome-6/Solid/BabyCarriage
```

```text
include('fontawesome-6/Solid/BabyCarriage')
```



| Illustration | BabyCarriage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BabyCarriage.png) | ![illustration for BabyCarriage](../../fontawesome-6/Solid/BabyCarriage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BabyCarriageXs>`
- `<$BabyCarriageSm>`
- `<$BabyCarriageMd>`
- `<$BabyCarriageLg>`





## BabyCarriage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BabyCarriage
include('fontawesome-6/Solid/BabyCarriage')

' renders the element
BabyCarriage('BabyCarriage', 'Baby Carriage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BabyCarriage
include('fontawesome-6/Solid/BabyCarriage')

' renders the element
BabyCarriage('BabyCarriage', 'Baby Carriage', 'an optional tech label', 'an optional description')
@enduml
```

