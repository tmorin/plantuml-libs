# Taichilang


```text
simpleicons-7/T/Taichilang
```

```text
include('simpleicons-7/T/Taichilang')
```



| Illustration | Taichilang |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Taichilang.png) | ![illustration for Taichilang](../../simpleicons-7/T/Taichilang.Local.png) |




## Taichilang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Taichilang
include('simpleicons-7/T/Taichilang')

' renders the element
Taichilang('Taichilang', 'Taichilang', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Taichilang
include('simpleicons-7/T/Taichilang')

' renders the element
Taichilang('Taichilang', 'Taichilang', 'an optional tech label', 'an optional description')
@enduml
```

