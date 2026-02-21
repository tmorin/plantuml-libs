# Telefonica


```text
simpleicons/T/Telefonica
```

```text
include('simpleicons/T/Telefonica')
```



| Illustration | Telefonica |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Telefonica.png) | ![illustration for Telefonica](../../simpleicons/T/Telefonica.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TelefonicaXs>`
- `<$TelefonicaSm>`
- `<$TelefonicaMd>`
- `<$TelefonicaLg>`





## Telefonica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Telefonica
include('simpleicons/T/Telefonica')

' renders the element
Telefonica('Telefonica', 'Telefonica', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Telefonica
include('simpleicons/T/Telefonica')

' renders the element
Telefonica('Telefonica', 'Telefonica', 'an optional tech label', 'an optional description')
@enduml
```

