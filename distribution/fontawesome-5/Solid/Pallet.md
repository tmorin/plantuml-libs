# Pallet


```text
fontawesome-5/Solid/Pallet
```

```text
include('fontawesome-5/Solid/Pallet')
```



| Illustration | Pallet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Pallet.png) | ![illustration for Pallet](../../fontawesome-5/Solid/Pallet.Local.png) |




## Pallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Pallet
include('fontawesome-5/Solid/Pallet')

' renders the element
Pallet('Pallet', 'Pallet', 'an optional tech label')
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

' loads the Item which embeds the element Pallet
include('fontawesome-5/Solid/Pallet')

' renders the element
Pallet('Pallet', 'Pallet', 'an optional tech label')
@enduml
```

