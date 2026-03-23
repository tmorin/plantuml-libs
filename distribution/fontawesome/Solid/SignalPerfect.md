# SignalPerfect


```text
fontawesome/Solid/SignalPerfect
```

```text
include('fontawesome/Solid/SignalPerfect')
```



| Illustration | SignalPerfect |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SignalPerfect.png) | ![illustration for SignalPerfect](../../fontawesome/Solid/SignalPerfect.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalPerfectXs>`
- `<$SignalPerfectSm>`
- `<$SignalPerfectMd>`
- `<$SignalPerfectLg>`





## SignalPerfect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SignalPerfect
include('fontawesome/Solid/SignalPerfect')

' renders the element
SignalPerfect('SignalPerfect', 'Signal Perfect', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignalPerfect
include('fontawesome/Solid/SignalPerfect')

' renders the element
SignalPerfect('SignalPerfect', 'Signal Perfect', 'an optional tech label', 'an optional description')
@enduml
```

