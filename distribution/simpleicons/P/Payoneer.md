# Payoneer


```text
simpleicons/P/Payoneer
```

```text
include('simpleicons/P/Payoneer')
```



| Illustration | Payoneer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Payoneer.png) | ![illustration for Payoneer](../../simpleicons/P/Payoneer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PayoneerXs>`
- `<$PayoneerSm>`
- `<$PayoneerMd>`
- `<$PayoneerLg>`





## Payoneer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Payoneer
include('simpleicons/P/Payoneer')

' renders the element
Payoneer('Payoneer', 'Payoneer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Payoneer
include('simpleicons/P/Payoneer')

' renders the element
Payoneer('Payoneer', 'Payoneer', 'an optional tech label', 'an optional description')
@enduml
```

