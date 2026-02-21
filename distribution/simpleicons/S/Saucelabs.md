# Saucelabs


```text
simpleicons/S/Saucelabs
```

```text
include('simpleicons/S/Saucelabs')
```



| Illustration | Saucelabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Saucelabs.png) | ![illustration for Saucelabs](../../simpleicons/S/Saucelabs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SaucelabsXs>`
- `<$SaucelabsSm>`
- `<$SaucelabsMd>`
- `<$SaucelabsLg>`





## Saucelabs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Saucelabs
include('simpleicons/S/Saucelabs')

' renders the element
Saucelabs('Saucelabs', 'Saucelabs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Saucelabs
include('simpleicons/S/Saucelabs')

' renders the element
Saucelabs('Saucelabs', 'Saucelabs', 'an optional tech label', 'an optional description')
@enduml
```

