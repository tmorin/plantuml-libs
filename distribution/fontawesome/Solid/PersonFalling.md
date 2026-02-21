# PersonFalling


```text
fontawesome/Solid/PersonFalling
```

```text
include('fontawesome/Solid/PersonFalling')
```



| Illustration | PersonFalling |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonFalling.png) | ![illustration for PersonFalling](../../fontawesome/Solid/PersonFalling.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonFallingXs>`
- `<$PersonFallingSm>`
- `<$PersonFallingMd>`
- `<$PersonFallingLg>`





## PersonFalling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonFalling
include('fontawesome/Solid/PersonFalling')

' renders the element
PersonFalling('PersonFalling', 'Person Falling', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonFalling
include('fontawesome/Solid/PersonFalling')

' renders the element
PersonFalling('PersonFalling', 'Person Falling', 'an optional tech label', 'an optional description')
@enduml
```

