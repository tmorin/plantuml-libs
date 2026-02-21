# Speedypage


```text
simpleicons/S/Speedypage
```

```text
include('simpleicons/S/Speedypage')
```



| Illustration | Speedypage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Speedypage.png) | ![illustration for Speedypage](../../simpleicons/S/Speedypage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpeedypageXs>`
- `<$SpeedypageSm>`
- `<$SpeedypageMd>`
- `<$SpeedypageLg>`





## Speedypage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Speedypage
include('simpleicons/S/Speedypage')

' renders the element
Speedypage('Speedypage', 'Speedypage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Speedypage
include('simpleicons/S/Speedypage')

' renders the element
Speedypage('Speedypage', 'Speedypage', 'an optional tech label', 'an optional description')
@enduml
```

