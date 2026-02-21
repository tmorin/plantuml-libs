# Pingdom


```text
simpleicons/P/Pingdom
```

```text
include('simpleicons/P/Pingdom')
```



| Illustration | Pingdom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pingdom.png) | ![illustration for Pingdom](../../simpleicons/P/Pingdom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PingdomXs>`
- `<$PingdomSm>`
- `<$PingdomMd>`
- `<$PingdomLg>`





## Pingdom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pingdom
include('simpleicons/P/Pingdom')

' renders the element
Pingdom('Pingdom', 'Pingdom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pingdom
include('simpleicons/P/Pingdom')

' renders the element
Pingdom('Pingdom', 'Pingdom', 'an optional tech label', 'an optional description')
@enduml
```

