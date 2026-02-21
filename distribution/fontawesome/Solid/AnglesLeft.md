# AnglesLeft


```text
fontawesome/Solid/AnglesLeft
```

```text
include('fontawesome/Solid/AnglesLeft')
```



| Illustration | AnglesLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AnglesLeft.png) | ![illustration for AnglesLeft](../../fontawesome/Solid/AnglesLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnglesLeftXs>`
- `<$AnglesLeftSm>`
- `<$AnglesLeftMd>`
- `<$AnglesLeftLg>`





## AnglesLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AnglesLeft
include('fontawesome/Solid/AnglesLeft')

' renders the element
AnglesLeft('AnglesLeft', 'Angles Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AnglesLeft
include('fontawesome/Solid/AnglesLeft')

' renders the element
AnglesLeft('AnglesLeft', 'Angles Left', 'an optional tech label', 'an optional description')
@enduml
```

