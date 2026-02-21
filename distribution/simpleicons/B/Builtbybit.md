# Builtbybit


```text
simpleicons/B/Builtbybit
```

```text
include('simpleicons/B/Builtbybit')
```



| Illustration | Builtbybit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Builtbybit.png) | ![illustration for Builtbybit](../../simpleicons/B/Builtbybit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuiltbybitXs>`
- `<$BuiltbybitSm>`
- `<$BuiltbybitMd>`
- `<$BuiltbybitLg>`





## Builtbybit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Builtbybit
include('simpleicons/B/Builtbybit')

' renders the element
Builtbybit('Builtbybit', 'Builtbybit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Builtbybit
include('simpleicons/B/Builtbybit')

' renders the element
Builtbybit('Builtbybit', 'Builtbybit', 'an optional tech label', 'an optional description')
@enduml
```

