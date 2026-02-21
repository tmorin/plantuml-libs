# CallMissed


```text
material/Communication/CallMissed
```

```text
include('material/Communication/CallMissed')
```



| Illustration | CallMissed |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/CallMissed.png) | ![illustration for CallMissed](../../material/Communication/CallMissed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CallMissedXs>`
- `<$CallMissedSm>`
- `<$CallMissedMd>`
- `<$CallMissedLg>`





## CallMissed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CallMissed
include('material/Communication/CallMissed')

' renders the element
CallMissed('CallMissed', 'Call Missed', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element CallMissed
include('material/Communication/CallMissed')

' renders the element
CallMissed('CallMissed', 'Call Missed', 'an optional tech label', 'an optional description')
@enduml
```

