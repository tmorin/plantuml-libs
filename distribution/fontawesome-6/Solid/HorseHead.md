# HorseHead


```text
fontawesome-6/Solid/HorseHead
```

```text
include('fontawesome-6/Solid/HorseHead')
```



| Illustration | HorseHead |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HorseHead.png) | ![illustration for HorseHead](../../fontawesome-6/Solid/HorseHead.Local.png) |




## HorseHead

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HorseHead
include('fontawesome-6/Solid/HorseHead')

' renders the element
HorseHead('HorseHead', 'Horse Head', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HorseHead
include('fontawesome-6/Solid/HorseHead')

' renders the element
HorseHead('HorseHead', 'Horse Head', 'an optional tech label', 'an optional description')
@enduml
```

