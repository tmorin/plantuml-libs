# PersonBurst


```text
fontawesome/Solid/PersonBurst
```

```text
include('fontawesome/Solid/PersonBurst')
```



| Illustration | PersonBurst |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonBurst.png) | ![illustration for PersonBurst](../../fontawesome/Solid/PersonBurst.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonBurstXs>`
- `<$PersonBurstSm>`
- `<$PersonBurstMd>`
- `<$PersonBurstLg>`





## PersonBurst

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonBurst
include('fontawesome/Solid/PersonBurst')

' renders the element
PersonBurst('PersonBurst', 'Person Burst', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonBurst
include('fontawesome/Solid/PersonBurst')

' renders the element
PersonBurst('PersonBurst', 'Person Burst', 'an optional tech label', 'an optional description')
@enduml
```

