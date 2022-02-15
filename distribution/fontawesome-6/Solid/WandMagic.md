# WandMagic


```text
fontawesome-6/Solid/WandMagic
```

```text
include('fontawesome-6/Solid/WandMagic')
```



| Illustration | WandMagic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WandMagic.png) | ![illustration for WandMagic](../../fontawesome-6/Solid/WandMagic.Local.png) |




## WandMagic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WandMagic
include('fontawesome-6/Solid/WandMagic')

' renders the element
WandMagic('WandMagic', 'Wand Magic', 'an optional tech label')
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

' loads the Item which embeds the element WandMagic
include('fontawesome-6/Solid/WandMagic')

' renders the element
WandMagic('WandMagic', 'Wand Magic', 'an optional tech label')
@enduml
```

