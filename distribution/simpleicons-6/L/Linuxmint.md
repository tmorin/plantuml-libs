# Linuxmint


```text
simpleicons-6/L/Linuxmint
```

```text
include('simpleicons-6/L/Linuxmint')
```



| Illustration | Linuxmint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Linuxmint.png) | ![illustration for Linuxmint](../../simpleicons-6/L/Linuxmint.Local.png) |




## Linuxmint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Linuxmint
include('simpleicons-6/L/Linuxmint')

' renders the element
Linuxmint('Linuxmint', 'Linuxmint', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Linuxmint
include('simpleicons-6/L/Linuxmint')

' renders the element
Linuxmint('Linuxmint', 'Linuxmint', 'an optional tech label')
@enduml
```

