# StarAndCrescent


```text
fontawesome/Solid/StarAndCrescent
```

```text
include('fontawesome/Solid/StarAndCrescent')
```



| Illustration | StarAndCrescent |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/StarAndCrescent.png) | ![illustration for StarAndCrescent](../../fontawesome/Solid/StarAndCrescent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarAndCrescentXs>`
- `<$StarAndCrescentSm>`
- `<$StarAndCrescentMd>`
- `<$StarAndCrescentLg>`





## StarAndCrescent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StarAndCrescent
include('fontawesome/Solid/StarAndCrescent')

' renders the element
StarAndCrescent('StarAndCrescent', 'Star And Crescent', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element StarAndCrescent
include('fontawesome/Solid/StarAndCrescent')

' renders the element
StarAndCrescent('StarAndCrescent', 'Star And Crescent', 'an optional tech label', 'an optional description')
@enduml
```

