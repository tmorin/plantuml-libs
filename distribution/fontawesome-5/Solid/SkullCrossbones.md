# SkullCrossbones


```text
fontawesome-5/Solid/SkullCrossbones
```

```text
include('fontawesome-5/Solid/SkullCrossbones')
```



| Illustration | SkullCrossbones |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SkullCrossbones.png) | ![illustration for SkullCrossbones](../../fontawesome-5/Solid/SkullCrossbones.Local.png) |




## SkullCrossbones

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SkullCrossbones
include('fontawesome-5/Solid/SkullCrossbones')

' renders the element
SkullCrossbones('SkullCrossbones', 'Skull Crossbones', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SkullCrossbones
include('fontawesome-5/Solid/SkullCrossbones')

' renders the element
SkullCrossbones('SkullCrossbones', 'Skull Crossbones', 'an optional tech label')
@enduml
```

