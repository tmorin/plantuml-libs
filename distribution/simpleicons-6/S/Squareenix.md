# Squareenix


```text
simpleicons-6/S/Squareenix
```

```text
include('simpleicons-6/S/Squareenix')
```



| Illustration | Squareenix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Squareenix.png) | ![illustration for Squareenix](../../simpleicons-6/S/Squareenix.Local.png) |




## Squareenix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Squareenix
include('simpleicons-6/S/Squareenix')

' renders the element
Squareenix('Squareenix', 'Squareenix', 'an optional tech label')
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

' loads the Item which embeds the element Squareenix
include('simpleicons-6/S/Squareenix')

' renders the element
Squareenix('Squareenix', 'Squareenix', 'an optional tech label')
@enduml
```

