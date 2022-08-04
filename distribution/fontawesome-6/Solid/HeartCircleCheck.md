# HeartCircleCheck


```text
fontawesome-6/Solid/HeartCircleCheck
```

```text
include('fontawesome-6/Solid/HeartCircleCheck')
```



| Illustration | HeartCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HeartCircleCheck.png) | ![illustration for HeartCircleCheck](../../fontawesome-6/Solid/HeartCircleCheck.Local.png) |




## HeartCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeartCircleCheck
include('fontawesome-6/Solid/HeartCircleCheck')

' renders the element
HeartCircleCheck('HeartCircleCheck', 'Heart Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeartCircleCheck
include('fontawesome-6/Solid/HeartCircleCheck')

' renders the element
HeartCircleCheck('HeartCircleCheck', 'Heart Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

