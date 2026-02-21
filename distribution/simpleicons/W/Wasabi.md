# Wasabi


```text
simpleicons/W/Wasabi
```

```text
include('simpleicons/W/Wasabi')
```



| Illustration | Wasabi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wasabi.png) | ![illustration for Wasabi](../../simpleicons/W/Wasabi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WasabiXs>`
- `<$WasabiSm>`
- `<$WasabiMd>`
- `<$WasabiLg>`





## Wasabi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wasabi
include('simpleicons/W/Wasabi')

' renders the element
Wasabi('Wasabi', 'Wasabi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wasabi
include('simpleicons/W/Wasabi')

' renders the element
Wasabi('Wasabi', 'Wasabi', 'an optional tech label', 'an optional description')
@enduml
```

