# Nat


```text
material-4/Communication/Nat
```

```text
include('material-4/Communication/Nat')
```



| Illustration | Nat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Nat.png) | ![illustration for Nat](../../material-4/Communication/Nat.Local.png) |




## Nat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Nat
include('material-4/Communication/Nat')

' renders the element
Nat('Nat', 'Nat', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Nat
include('material-4/Communication/Nat')

' renders the element
Nat('Nat', 'Nat', 'an optional tech label')
@enduml
```

