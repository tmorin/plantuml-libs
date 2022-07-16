# Eljueves


```text
simpleicons-7/E/Eljueves
```

```text
include('simpleicons-7/E/Eljueves')
```



| Illustration | Eljueves |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Eljueves.png) | ![illustration for Eljueves](../../simpleicons-7/E/Eljueves.Local.png) |




## Eljueves

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Eljueves
include('simpleicons-7/E/Eljueves')

' renders the element
Eljueves('Eljueves', 'Eljueves', 'an optional tech label')
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

' loads the Item which embeds the element Eljueves
include('simpleicons-7/E/Eljueves')

' renders the element
Eljueves('Eljueves', 'Eljueves', 'an optional tech label')
@enduml
```

