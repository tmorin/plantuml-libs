# HeartCircleMinus


```text
fontawesome-6/Solid/HeartCircleMinus
```

```text
include('fontawesome-6/Solid/HeartCircleMinus')
```



| Illustration | HeartCircleMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HeartCircleMinus.png) | ![illustration for HeartCircleMinus](../../fontawesome-6/Solid/HeartCircleMinus.Local.png) |




## HeartCircleMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeartCircleMinus
include('fontawesome-6/Solid/HeartCircleMinus')

' renders the element
HeartCircleMinus('HeartCircleMinus', 'Heart Circle Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeartCircleMinus
include('fontawesome-6/Solid/HeartCircleMinus')

' renders the element
HeartCircleMinus('HeartCircleMinus', 'Heart Circle Minus', 'an optional tech label', 'an optional description')
@enduml
```

