# FistRaised


```text
fontawesome/Solid/FistRaised
```

```text
include('fontawesome/Solid/FistRaised')
```



| Illustration | FistRaised |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FistRaised.png) | ![illustration for FistRaised](../../fontawesome/Solid/FistRaised.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FistRaisedXs>`
- `<$FistRaisedSm>`
- `<$FistRaisedMd>`
- `<$FistRaisedLg>`





## FistRaised

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FistRaised
include('fontawesome/Solid/FistRaised')

' renders the element
FistRaised('FistRaised', 'Fist Raised', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FistRaised
include('fontawesome/Solid/FistRaised')

' renders the element
FistRaised('FistRaised', 'Fist Raised', 'an optional tech label', 'an optional description')
@enduml
```

