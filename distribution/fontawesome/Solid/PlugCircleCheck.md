# PlugCircleCheck


```text
fontawesome/Solid/PlugCircleCheck
```

```text
include('fontawesome/Solid/PlugCircleCheck')
```



| Illustration | PlugCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlugCircleCheck.png) | ![illustration for PlugCircleCheck](../../fontawesome/Solid/PlugCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlugCircleCheckXs>`
- `<$PlugCircleCheckSm>`
- `<$PlugCircleCheckMd>`
- `<$PlugCircleCheckLg>`





## PlugCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlugCircleCheck
include('fontawesome/Solid/PlugCircleCheck')

' renders the element
PlugCircleCheck('PlugCircleCheck', 'Plug Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlugCircleCheck
include('fontawesome/Solid/PlugCircleCheck')

' renders the element
PlugCircleCheck('PlugCircleCheck', 'Plug Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

