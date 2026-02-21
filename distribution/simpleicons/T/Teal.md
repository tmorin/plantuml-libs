# Teal


```text
simpleicons/T/Teal
```

```text
include('simpleicons/T/Teal')
```



| Illustration | Teal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Teal.png) | ![illustration for Teal](../../simpleicons/T/Teal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TealXs>`
- `<$TealSm>`
- `<$TealMd>`
- `<$TealLg>`





## Teal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Teal
include('simpleicons/T/Teal')

' renders the element
Teal('Teal', 'Teal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teal
include('simpleicons/T/Teal')

' renders the element
Teal('Teal', 'Teal', 'an optional tech label', 'an optional description')
@enduml
```

