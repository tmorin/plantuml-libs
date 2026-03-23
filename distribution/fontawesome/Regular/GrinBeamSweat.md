# GrinBeamSweat


```text
fontawesome/Regular/GrinBeamSweat
```

```text
include('fontawesome/Regular/GrinBeamSweat')
```



| Illustration | GrinBeamSweat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/GrinBeamSweat.png) | ![illustration for GrinBeamSweat](../../fontawesome/Regular/GrinBeamSweat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinBeamSweatXs>`
- `<$GrinBeamSweatSm>`
- `<$GrinBeamSweatMd>`
- `<$GrinBeamSweatLg>`





## GrinBeamSweat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinBeamSweat
include('fontawesome/Regular/GrinBeamSweat')

' renders the element
GrinBeamSweat('GrinBeamSweat', 'Grin Beam Sweat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinBeamSweat
include('fontawesome/Regular/GrinBeamSweat')

' renders the element
GrinBeamSweat('GrinBeamSweat', 'Grin Beam Sweat', 'an optional tech label', 'an optional description')
@enduml
```

