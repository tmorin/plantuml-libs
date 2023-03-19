# Eclipsemosquitto


```text
simpleicons-8/E/Eclipsemosquitto
```

```text
include('simpleicons-8/E/Eclipsemosquitto')
```



| Illustration | Eclipsemosquitto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Eclipsemosquitto.png) | ![illustration for Eclipsemosquitto](../../simpleicons-8/E/Eclipsemosquitto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EclipsemosquittoXs>`
- `<$EclipsemosquittoSm>`
- `<$EclipsemosquittoMd>`
- `<$EclipsemosquittoLg>`





## Eclipsemosquitto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Eclipsemosquitto
include('simpleicons-8/E/Eclipsemosquitto')

' renders the element
Eclipsemosquitto('Eclipsemosquitto', 'Eclipsemosquitto', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Eclipsemosquitto
include('simpleicons-8/E/Eclipsemosquitto')

' renders the element
Eclipsemosquitto('Eclipsemosquitto', 'Eclipsemosquitto', 'an optional tech label', 'an optional description')
@enduml
```

