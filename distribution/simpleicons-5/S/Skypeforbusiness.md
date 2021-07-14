# Skypeforbusiness


```text
simpleicons-5/S/Skypeforbusiness
```

```text
include('simpleicons-5/S/Skypeforbusiness')
```



| Illustration | Skypeforbusiness |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Skypeforbusiness.png) | ![illustration for Skypeforbusiness](../../simpleicons-5/S/Skypeforbusiness.Local.png) |




## Skypeforbusiness

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Skypeforbusiness
include('simpleicons-5/S/Skypeforbusiness')

' renders the element
Skypeforbusiness('Skypeforbusiness', 'Skypeforbusiness', 'an optional tech label')
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

' loads the Item which embeds the element Skypeforbusiness
include('simpleicons-5/S/Skypeforbusiness')

' renders the element
Skypeforbusiness('Skypeforbusiness', 'Skypeforbusiness', 'an optional tech label')
@enduml
```

