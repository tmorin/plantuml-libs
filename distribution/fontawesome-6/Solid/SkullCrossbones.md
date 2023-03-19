# SkullCrossbones


```text
fontawesome-6/Solid/SkullCrossbones
```

```text
include('fontawesome-6/Solid/SkullCrossbones')
```



| Illustration | SkullCrossbones |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SkullCrossbones.png) | ![illustration for SkullCrossbones](../../fontawesome-6/Solid/SkullCrossbones.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkullCrossbonesXs>`
- `<$SkullCrossbonesSm>`
- `<$SkullCrossbonesMd>`
- `<$SkullCrossbonesLg>`





## SkullCrossbones

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SkullCrossbones
include('fontawesome-6/Solid/SkullCrossbones')

' renders the element
SkullCrossbones('SkullCrossbones', 'Skull Crossbones', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SkullCrossbones
include('fontawesome-6/Solid/SkullCrossbones')

' renders the element
SkullCrossbones('SkullCrossbones', 'Skull Crossbones', 'an optional tech label', 'an optional description')
@enduml
```

