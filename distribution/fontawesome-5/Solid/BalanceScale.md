# BalanceScale


```text
fontawesome-5/Solid/BalanceScale
```

```text
include('fontawesome-5/Solid/BalanceScale')
```



| Illustration | BalanceScale |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BalanceScale.png) | ![illustration for BalanceScale](../../fontawesome-5/Solid/BalanceScale.Local.png) |




## BalanceScale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BalanceScale
include('fontawesome-5/Solid/BalanceScale')

' renders the element
BalanceScale('BalanceScale', 'Balance Scale', 'an optional tech label')
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

' loads the Item which embeds the element BalanceScale
include('fontawesome-5/Solid/BalanceScale')

' renders the element
BalanceScale('BalanceScale', 'Balance Scale', 'an optional tech label')
@enduml
```

