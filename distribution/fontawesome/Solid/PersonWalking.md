# PersonWalking


```text
fontawesome/Solid/PersonWalking
```

```text
include('fontawesome/Solid/PersonWalking')
```



| Illustration | PersonWalking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonWalking.png) | ![illustration for PersonWalking](../../fontawesome/Solid/PersonWalking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonWalkingXs>`
- `<$PersonWalkingSm>`
- `<$PersonWalkingMd>`
- `<$PersonWalkingLg>`





## PersonWalking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonWalking
include('fontawesome/Solid/PersonWalking')

' renders the element
PersonWalking('PersonWalking', 'Person Walking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonWalking
include('fontawesome/Solid/PersonWalking')

' renders the element
PersonWalking('PersonWalking', 'Person Walking', 'an optional tech label', 'an optional description')
@enduml
```

