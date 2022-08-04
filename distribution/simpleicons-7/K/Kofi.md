# Kofi


```text
simpleicons-7/K/Kofi
```

```text
include('simpleicons-7/K/Kofi')
```



| Illustration | Kofi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Kofi.png) | ![illustration for Kofi](../../simpleicons-7/K/Kofi.Local.png) |




## Kofi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kofi
include('simpleicons-7/K/Kofi')

' renders the element
Kofi('Kofi', 'Kofi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kofi
include('simpleicons-7/K/Kofi')

' renders the element
Kofi('Kofi', 'Kofi', 'an optional tech label', 'an optional description')
@enduml
```

