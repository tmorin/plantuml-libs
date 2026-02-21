# Victoriametrics


```text
simpleicons-14/V/Victoriametrics
```

```text
include('simpleicons-14/V/Victoriametrics')
```



| Illustration | Victoriametrics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Victoriametrics.png) | ![illustration for Victoriametrics](../../simpleicons-14/V/Victoriametrics.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Victoriametrics
include('simpleicons-14/V/Victoriametrics')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Victoriametrics
include('simpleicons-14/V/Victoriametrics')

' renders the element
Victoriametrics('Victoriametrics', 'Victoriametrics', 'an optional tech label', 'an optional description')
@enduml
```

