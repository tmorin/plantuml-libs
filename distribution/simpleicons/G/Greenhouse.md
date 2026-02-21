# Greenhouse


```text
simpleicons/G/Greenhouse
```

```text
include('simpleicons/G/Greenhouse')
```



| Illustration | Greenhouse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Greenhouse.png) | ![illustration for Greenhouse](../../simpleicons/G/Greenhouse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GreenhouseXs>`
- `<$GreenhouseSm>`
- `<$GreenhouseMd>`
- `<$GreenhouseLg>`





## Greenhouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Greenhouse
include('simpleicons/G/Greenhouse')

' renders the element
Greenhouse('Greenhouse', 'Greenhouse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Greenhouse
include('simpleicons/G/Greenhouse')

' renders the element
Greenhouse('Greenhouse', 'Greenhouse', 'an optional tech label', 'an optional description')
@enduml
```

