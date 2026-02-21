# Suitest


```text
simpleicons/S/Suitest
```

```text
include('simpleicons/S/Suitest')
```



| Illustration | Suitest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Suitest.png) | ![illustration for Suitest](../../simpleicons/S/Suitest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SuitestXs>`
- `<$SuitestSm>`
- `<$SuitestMd>`
- `<$SuitestLg>`





## Suitest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Suitest
include('simpleicons/S/Suitest')

' renders the element
Suitest('Suitest', 'Suitest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Suitest
include('simpleicons/S/Suitest')

' renders the element
Suitest('Suitest', 'Suitest', 'an optional tech label', 'an optional description')
@enduml
```

