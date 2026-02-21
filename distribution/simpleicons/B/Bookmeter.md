# Bookmeter


```text
simpleicons/B/Bookmeter
```

```text
include('simpleicons/B/Bookmeter')
```



| Illustration | Bookmeter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bookmeter.png) | ![illustration for Bookmeter](../../simpleicons/B/Bookmeter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookmeterXs>`
- `<$BookmeterSm>`
- `<$BookmeterMd>`
- `<$BookmeterLg>`





## Bookmeter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bookmeter
include('simpleicons/B/Bookmeter')

' renders the element
Bookmeter('Bookmeter', 'Bookmeter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bookmeter
include('simpleicons/B/Bookmeter')

' renders the element
Bookmeter('Bookmeter', 'Bookmeter', 'an optional tech label', 'an optional description')
@enduml
```

