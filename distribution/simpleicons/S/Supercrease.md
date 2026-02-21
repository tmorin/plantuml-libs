# Supercrease


```text
simpleicons/S/Supercrease
```

```text
include('simpleicons/S/Supercrease')
```



| Illustration | Supercrease |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Supercrease.png) | ![illustration for Supercrease](../../simpleicons/S/Supercrease.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SupercreaseXs>`
- `<$SupercreaseSm>`
- `<$SupercreaseMd>`
- `<$SupercreaseLg>`





## Supercrease

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Supercrease
include('simpleicons/S/Supercrease')

' renders the element
Supercrease('Supercrease', 'Supercrease', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Supercrease
include('simpleicons/S/Supercrease')

' renders the element
Supercrease('Supercrease', 'Supercrease', 'an optional tech label', 'an optional description')
@enduml
```

