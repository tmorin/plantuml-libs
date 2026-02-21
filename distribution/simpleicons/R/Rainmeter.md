# Rainmeter


```text
simpleicons/R/Rainmeter
```

```text
include('simpleicons/R/Rainmeter')
```



| Illustration | Rainmeter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rainmeter.png) | ![illustration for Rainmeter](../../simpleicons/R/Rainmeter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RainmeterXs>`
- `<$RainmeterSm>`
- `<$RainmeterMd>`
- `<$RainmeterLg>`





## Rainmeter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rainmeter
include('simpleicons/R/Rainmeter')

' renders the element
Rainmeter('Rainmeter', 'Rainmeter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rainmeter
include('simpleicons/R/Rainmeter')

' renders the element
Rainmeter('Rainmeter', 'Rainmeter', 'an optional tech label', 'an optional description')
@enduml
```

