# Zap


```text
fontawesome/Solid/Zap
```

```text
include('fontawesome/Solid/Zap')
```



| Illustration | Zap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Zap.png) | ![illustration for Zap](../../fontawesome/Solid/Zap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZapXs>`
- `<$ZapSm>`
- `<$ZapMd>`
- `<$ZapLg>`





## Zap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Zap
include('fontawesome/Solid/Zap')

' renders the element
Zap('Zap', 'Zap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zap
include('fontawesome/Solid/Zap')

' renders the element
Zap('Zap', 'Zap', 'an optional tech label', 'an optional description')
@enduml
```

