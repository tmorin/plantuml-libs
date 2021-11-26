# Airchina


```text
simpleicons-5/A/Airchina
```

```text
include('simpleicons-5/A/Airchina')
```



| Illustration | Airchina |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Airchina.png) | ![illustration for Airchina](../../simpleicons-5/A/Airchina.Local.png) |




## Airchina

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Airchina
include('simpleicons-5/A/Airchina')

' renders the element
Airchina('Airchina', 'Airchina', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Airchina
include('simpleicons-5/A/Airchina')

' renders the element
Airchina('Airchina', 'Airchina', 'an optional tech label')
@enduml
```

