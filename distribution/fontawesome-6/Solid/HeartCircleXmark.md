# HeartCircleXmark


```text
fontawesome-6/Solid/HeartCircleXmark
```

```text
include('fontawesome-6/Solid/HeartCircleXmark')
```



| Illustration | HeartCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HeartCircleXmark.png) | ![illustration for HeartCircleXmark](../../fontawesome-6/Solid/HeartCircleXmark.Local.png) |




## HeartCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeartCircleXmark
include('fontawesome-6/Solid/HeartCircleXmark')

' renders the element
HeartCircleXmark('HeartCircleXmark', 'Heart Circle Xmark', 'an optional tech label')
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

' loads the Item which embeds the element HeartCircleXmark
include('fontawesome-6/Solid/HeartCircleXmark')

' renders the element
HeartCircleXmark('HeartCircleXmark', 'Heart Circle Xmark', 'an optional tech label')
@enduml
```

