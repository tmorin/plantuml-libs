# Microstrategy


```text
simpleicons-14/M/Microstrategy
```

```text
include('simpleicons-14/M/Microstrategy')
```



| Illustration | Microstrategy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Microstrategy.png) | ![illustration for Microstrategy](../../simpleicons-14/M/Microstrategy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrostrategyXs>`
- `<$MicrostrategySm>`
- `<$MicrostrategyMd>`
- `<$MicrostrategyLg>`





## Microstrategy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Microstrategy
include('simpleicons-14/M/Microstrategy')

' renders the element
Microstrategy('Microstrategy', 'Microstrategy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microstrategy
include('simpleicons-14/M/Microstrategy')

' renders the element
Microstrategy('Microstrategy', 'Microstrategy', 'an optional tech label', 'an optional description')
@enduml
```

