# FlagUsa


```text
fontawesome/Solid/FlagUsa
```

```text
include('fontawesome/Solid/FlagUsa')
```



| Illustration | FlagUsa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FlagUsa.png) | ![illustration for FlagUsa](../../fontawesome/Solid/FlagUsa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlagUsaXs>`
- `<$FlagUsaSm>`
- `<$FlagUsaMd>`
- `<$FlagUsaLg>`





## FlagUsa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FlagUsa
include('fontawesome/Solid/FlagUsa')

' renders the element
FlagUsa('FlagUsa', 'Flag Usa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlagUsa
include('fontawesome/Solid/FlagUsa')

' renders the element
FlagUsa('FlagUsa', 'Flag Usa', 'an optional tech label', 'an optional description')
@enduml
```

