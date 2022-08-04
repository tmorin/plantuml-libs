# Skypeforbusiness


```text
simpleicons-7/S/Skypeforbusiness
```

```text
include('simpleicons-7/S/Skypeforbusiness')
```



| Illustration | Skypeforbusiness |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Skypeforbusiness.png) | ![illustration for Skypeforbusiness](../../simpleicons-7/S/Skypeforbusiness.Local.png) |




## Skypeforbusiness

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Skypeforbusiness
include('simpleicons-7/S/Skypeforbusiness')

' renders the element
Skypeforbusiness('Skypeforbusiness', 'Skypeforbusiness', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skypeforbusiness
include('simpleicons-7/S/Skypeforbusiness')

' renders the element
Skypeforbusiness('Skypeforbusiness', 'Skypeforbusiness', 'an optional tech label', 'an optional description')
@enduml
```

