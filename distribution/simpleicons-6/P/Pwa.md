# Pwa


```text
simpleicons-6/P/Pwa
```

```text
include('simpleicons-6/P/Pwa')
```



| Illustration | Pwa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pwa.png) | ![illustration for Pwa](../../simpleicons-6/P/Pwa.Local.png) |




## Pwa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pwa
include('simpleicons-6/P/Pwa')

' renders the element
Pwa('Pwa', 'Pwa', 'an optional tech label')
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

' loads the Item which embeds the element Pwa
include('simpleicons-6/P/Pwa')

' renders the element
Pwa('Pwa', 'Pwa', 'an optional tech label')
@enduml
```

