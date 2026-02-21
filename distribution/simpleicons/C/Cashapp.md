# Cashapp


```text
simpleicons/C/Cashapp
```

```text
include('simpleicons/C/Cashapp')
```



| Illustration | Cashapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cashapp.png) | ![illustration for Cashapp](../../simpleicons/C/Cashapp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CashappXs>`
- `<$CashappSm>`
- `<$CashappMd>`
- `<$CashappLg>`





## Cashapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cashapp
include('simpleicons/C/Cashapp')

' renders the element
Cashapp('Cashapp', 'Cashapp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cashapp
include('simpleicons/C/Cashapp')

' renders the element
Cashapp('Cashapp', 'Cashapp', 'an optional tech label', 'an optional description')
@enduml
```

