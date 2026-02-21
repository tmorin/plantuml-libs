# Victoriametrics


```text
simpleicons/V/Victoriametrics
```

```text
include('simpleicons/V/Victoriametrics')
```



| Illustration | Victoriametrics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Victoriametrics.png) | ![illustration for Victoriametrics](../../simpleicons/V/Victoriametrics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VictoriametricsXs>`
- `<$VictoriametricsSm>`
- `<$VictoriametricsMd>`
- `<$VictoriametricsLg>`





## Victoriametrics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Victoriametrics
include('simpleicons/V/Victoriametrics')

' renders the element
Victoriametrics('Victoriametrics', 'Victoriametrics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Victoriametrics
include('simpleicons/V/Victoriametrics')

' renders the element
Victoriametrics('Victoriametrics', 'Victoriametrics', 'an optional tech label', 'an optional description')
@enduml
```

