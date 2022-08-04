# HeartCirclePlus


```text
fontawesome-6/Solid/HeartCirclePlus
```

```text
include('fontawesome-6/Solid/HeartCirclePlus')
```



| Illustration | HeartCirclePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HeartCirclePlus.png) | ![illustration for HeartCirclePlus](../../fontawesome-6/Solid/HeartCirclePlus.Local.png) |




## HeartCirclePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeartCirclePlus
include('fontawesome-6/Solid/HeartCirclePlus')

' renders the element
HeartCirclePlus('HeartCirclePlus', 'Heart Circle Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeartCirclePlus
include('fontawesome-6/Solid/HeartCirclePlus')

' renders the element
HeartCirclePlus('HeartCirclePlus', 'Heart Circle Plus', 'an optional tech label', 'an optional description')
@enduml
```

