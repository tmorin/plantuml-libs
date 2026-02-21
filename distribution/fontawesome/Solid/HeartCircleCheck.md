# HeartCircleCheck


```text
fontawesome/Solid/HeartCircleCheck
```

```text
include('fontawesome/Solid/HeartCircleCheck')
```



| Illustration | HeartCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HeartCircleCheck.png) | ![illustration for HeartCircleCheck](../../fontawesome/Solid/HeartCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeartCircleCheckXs>`
- `<$HeartCircleCheckSm>`
- `<$HeartCircleCheckMd>`
- `<$HeartCircleCheckLg>`





## HeartCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeartCircleCheck
include('fontawesome/Solid/HeartCircleCheck')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeartCircleCheck
include('fontawesome/Solid/HeartCircleCheck')

' renders the element
HeartCircleCheck('HeartCircleCheck', 'Heart Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

