# Asterisk


```text
simpleicons/A/Asterisk
```

```text
include('simpleicons/A/Asterisk')
```



| Illustration | Asterisk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Asterisk.png) | ![illustration for Asterisk](../../simpleicons/A/Asterisk.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Asterisk
include('simpleicons/A/Asterisk')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Asterisk
include('simpleicons/A/Asterisk')

' renders the element
Asterisk('Asterisk', 'Asterisk', 'an optional tech label', 'an optional description')
@enduml
```

