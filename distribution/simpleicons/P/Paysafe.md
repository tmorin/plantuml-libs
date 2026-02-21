# Paysafe


```text
simpleicons/P/Paysafe
```

```text
include('simpleicons/P/Paysafe')
```



| Illustration | Paysafe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Paysafe.png) | ![illustration for Paysafe](../../simpleicons/P/Paysafe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaysafeXs>`
- `<$PaysafeSm>`
- `<$PaysafeMd>`
- `<$PaysafeLg>`





## Paysafe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paysafe
include('simpleicons/P/Paysafe')

' renders the element
Paysafe('Paysafe', 'Paysafe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paysafe
include('simpleicons/P/Paysafe')

' renders the element
Paysafe('Paysafe', 'Paysafe', 'an optional tech label', 'an optional description')
@enduml
```

