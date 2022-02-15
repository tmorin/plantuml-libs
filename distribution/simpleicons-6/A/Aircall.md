# Aircall


```text
simpleicons-6/A/Aircall
```

```text
include('simpleicons-6/A/Aircall')
```



| Illustration | Aircall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aircall.png) | ![illustration for Aircall](../../simpleicons-6/A/Aircall.Local.png) |




## Aircall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aircall
include('simpleicons-6/A/Aircall')

' renders the element
Aircall('Aircall', 'Aircall', 'an optional tech label')
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

' loads the Item which embeds the element Aircall
include('simpleicons-6/A/Aircall')

' renders the element
Aircall('Aircall', 'Aircall', 'an optional tech label')
@enduml
```

