# CarBurst


```text
fontawesome/Solid/CarBurst
```

```text
include('fontawesome/Solid/CarBurst')
```



| Illustration | CarBurst |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CarBurst.png) | ![illustration for CarBurst](../../fontawesome/Solid/CarBurst.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarBurstXs>`
- `<$CarBurstSm>`
- `<$CarBurstMd>`
- `<$CarBurstLg>`





## CarBurst

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarBurst
include('fontawesome/Solid/CarBurst')

' renders the element
CarBurst('CarBurst', 'Car Burst', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CarBurst
include('fontawesome/Solid/CarBurst')

' renders the element
CarBurst('CarBurst', 'Car Burst', 'an optional tech label', 'an optional description')
@enduml
```

