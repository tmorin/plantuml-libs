# ChildRifle


```text
fontawesome/Solid/ChildRifle
```

```text
include('fontawesome/Solid/ChildRifle')
```



| Illustration | ChildRifle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChildRifle.png) | ![illustration for ChildRifle](../../fontawesome/Solid/ChildRifle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChildRifleXs>`
- `<$ChildRifleSm>`
- `<$ChildRifleMd>`
- `<$ChildRifleLg>`





## ChildRifle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChildRifle
include('fontawesome/Solid/ChildRifle')

' renders the element
ChildRifle('ChildRifle', 'Child Rifle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChildRifle
include('fontawesome/Solid/ChildRifle')

' renders the element
ChildRifle('ChildRifle', 'Child Rifle', 'an optional tech label', 'an optional description')
@enduml
```

