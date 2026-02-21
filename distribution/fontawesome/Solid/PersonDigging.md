# PersonDigging


```text
fontawesome/Solid/PersonDigging
```

```text
include('fontawesome/Solid/PersonDigging')
```



| Illustration | PersonDigging |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonDigging.png) | ![illustration for PersonDigging](../../fontawesome/Solid/PersonDigging.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonDiggingXs>`
- `<$PersonDiggingSm>`
- `<$PersonDiggingMd>`
- `<$PersonDiggingLg>`





## PersonDigging

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonDigging
include('fontawesome/Solid/PersonDigging')

' renders the element
PersonDigging('PersonDigging', 'Person Digging', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonDigging
include('fontawesome/Solid/PersonDigging')

' renders the element
PersonDigging('PersonDigging', 'Person Digging', 'an optional tech label', 'an optional description')
@enduml
```

