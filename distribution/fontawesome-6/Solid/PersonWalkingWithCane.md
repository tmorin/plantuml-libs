# PersonWalkingWithCane


```text
fontawesome-6/Solid/PersonWalkingWithCane
```

```text
include('fontawesome-6/Solid/PersonWalkingWithCane')
```



| Illustration | PersonWalkingWithCane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonWalkingWithCane.png) | ![illustration for PersonWalkingWithCane](../../fontawesome-6/Solid/PersonWalkingWithCane.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonWalkingWithCane
include('fontawesome-6/Solid/PersonWalkingWithCane')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonWalkingWithCane
include('fontawesome-6/Solid/PersonWalkingWithCane')

' renders the element
PersonWalkingWithCane('PersonWalkingWithCane', 'Person Walking With Cane', 'an optional tech label', 'an optional description')
@enduml
```

