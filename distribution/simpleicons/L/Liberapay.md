# Liberapay


```text
simpleicons/L/Liberapay
```

```text
include('simpleicons/L/Liberapay')
```



| Illustration | Liberapay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Liberapay.png) | ![illustration for Liberapay](../../simpleicons/L/Liberapay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LiberapayXs>`
- `<$LiberapaySm>`
- `<$LiberapayMd>`
- `<$LiberapayLg>`





## Liberapay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Liberapay
include('simpleicons/L/Liberapay')

' renders the element
Liberapay('Liberapay', 'Liberapay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Liberapay
include('simpleicons/L/Liberapay')

' renders the element
Liberapay('Liberapay', 'Liberapay', 'an optional tech label', 'an optional description')
@enduml
```

