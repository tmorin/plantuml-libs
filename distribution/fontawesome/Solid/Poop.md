# Poop


```text
fontawesome/Solid/Poop
```

```text
include('fontawesome/Solid/Poop')
```



| Illustration | Poop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Poop.png) | ![illustration for Poop](../../fontawesome/Solid/Poop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PoopXs>`
- `<$PoopSm>`
- `<$PoopMd>`
- `<$PoopLg>`





## Poop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Poop
include('fontawesome/Solid/Poop')

' renders the element
Poop('Poop', 'Poop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Poop
include('fontawesome/Solid/Poop')

' renders the element
Poop('Poop', 'Poop', 'an optional tech label', 'an optional description')
@enduml
```

