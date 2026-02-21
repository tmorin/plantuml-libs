# Asterisk


```text
fontawesome/Solid/Asterisk
```

```text
include('fontawesome/Solid/Asterisk')
```



| Illustration | Asterisk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Asterisk.png) | ![illustration for Asterisk](../../fontawesome/Solid/Asterisk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsteriskXs>`
- `<$AsteriskSm>`
- `<$AsteriskMd>`
- `<$AsteriskLg>`





## Asterisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Asterisk
include('fontawesome/Solid/Asterisk')

' renders the element
Asterisk('Asterisk', 'Asterisk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Asterisk
include('fontawesome/Solid/Asterisk')

' renders the element
Asterisk('Asterisk', 'Asterisk', 'an optional tech label', 'an optional description')
@enduml
```

