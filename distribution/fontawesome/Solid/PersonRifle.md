# PersonRifle


```text
fontawesome/Solid/PersonRifle
```

```text
include('fontawesome/Solid/PersonRifle')
```



| Illustration | PersonRifle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonRifle.png) | ![illustration for PersonRifle](../../fontawesome/Solid/PersonRifle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonRifleXs>`
- `<$PersonRifleSm>`
- `<$PersonRifleMd>`
- `<$PersonRifleLg>`





## PersonRifle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonRifle
include('fontawesome/Solid/PersonRifle')

' renders the element
PersonRifle('PersonRifle', 'Person Rifle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonRifle
include('fontawesome/Solid/PersonRifle')

' renders the element
PersonRifle('PersonRifle', 'Person Rifle', 'an optional tech label', 'an optional description')
@enduml
```

