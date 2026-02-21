# Victronenergy


```text
simpleicons/V/Victronenergy
```

```text
include('simpleicons/V/Victronenergy')
```



| Illustration | Victronenergy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Victronenergy.png) | ![illustration for Victronenergy](../../simpleicons/V/Victronenergy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VictronenergyXs>`
- `<$VictronenergySm>`
- `<$VictronenergyMd>`
- `<$VictronenergyLg>`





## Victronenergy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Victronenergy
include('simpleicons/V/Victronenergy')

' renders the element
Victronenergy('Victronenergy', 'Victronenergy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Victronenergy
include('simpleicons/V/Victronenergy')

' renders the element
Victronenergy('Victronenergy', 'Victronenergy', 'an optional tech label', 'an optional description')
@enduml
```

