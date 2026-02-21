# LifeRing


```text
fontawesome/Solid/LifeRing
```

```text
include('fontawesome/Solid/LifeRing')
```



| Illustration | LifeRing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LifeRing.png) | ![illustration for LifeRing](../../fontawesome/Solid/LifeRing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LifeRingXs>`
- `<$LifeRingSm>`
- `<$LifeRingMd>`
- `<$LifeRingLg>`





## LifeRing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LifeRing
include('fontawesome/Solid/LifeRing')

' renders the element
LifeRing('LifeRing', 'Life Ring', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LifeRing
include('fontawesome/Solid/LifeRing')

' renders the element
LifeRing('LifeRing', 'Life Ring', 'an optional tech label', 'an optional description')
@enduml
```

