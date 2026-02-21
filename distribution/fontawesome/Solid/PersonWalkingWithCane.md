# PersonWalkingWithCane


```text
fontawesome/Solid/PersonWalkingWithCane
```

```text
include('fontawesome/Solid/PersonWalkingWithCane')
```



| Illustration | PersonWalkingWithCane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonWalkingWithCane.png) | ![illustration for PersonWalkingWithCane](../../fontawesome/Solid/PersonWalkingWithCane.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonWalkingWithCaneXs>`
- `<$PersonWalkingWithCaneSm>`
- `<$PersonWalkingWithCaneMd>`
- `<$PersonWalkingWithCaneLg>`





## PersonWalkingWithCane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonWalkingWithCane
include('fontawesome/Solid/PersonWalkingWithCane')

' renders the element
PersonWalkingWithCane('PersonWalkingWithCane', 'Person Walking With Cane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonWalkingWithCane
include('fontawesome/Solid/PersonWalkingWithCane')

' renders the element
PersonWalkingWithCane('PersonWalkingWithCane', 'Person Walking With Cane', 'an optional tech label', 'an optional description')
@enduml
```

