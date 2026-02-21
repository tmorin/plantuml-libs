# MarsAndVenusBurst


```text
fontawesome/Solid/MarsAndVenusBurst
```

```text
include('fontawesome/Solid/MarsAndVenusBurst')
```



| Illustration | MarsAndVenusBurst |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MarsAndVenusBurst.png) | ![illustration for MarsAndVenusBurst](../../fontawesome/Solid/MarsAndVenusBurst.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarsAndVenusBurstXs>`
- `<$MarsAndVenusBurstSm>`
- `<$MarsAndVenusBurstMd>`
- `<$MarsAndVenusBurstLg>`





## MarsAndVenusBurst

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MarsAndVenusBurst
include('fontawesome/Solid/MarsAndVenusBurst')

' renders the element
MarsAndVenusBurst('MarsAndVenusBurst', 'Mars And Venus Burst', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MarsAndVenusBurst
include('fontawesome/Solid/MarsAndVenusBurst')

' renders the element
MarsAndVenusBurst('MarsAndVenusBurst', 'Mars And Venus Burst', 'an optional tech label', 'an optional description')
@enduml
```

