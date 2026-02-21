# Things


```text
simpleicons/T/Things
```

```text
include('simpleicons/T/Things')
```



| Illustration | Things |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Things.png) | ![illustration for Things](../../simpleicons/T/Things.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThingsXs>`
- `<$ThingsSm>`
- `<$ThingsMd>`
- `<$ThingsLg>`





## Things

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Things
include('simpleicons/T/Things')

' renders the element
Things('Things', 'Things', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Things
include('simpleicons/T/Things')

' renders the element
Things('Things', 'Things', 'an optional tech label', 'an optional description')
@enduml
```

