# Xampp


```text
simpleicons-5/X/Xampp
```

```text
include('simpleicons-5/X/Xampp')
```



| Illustration | Xampp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xampp.png) | ![illustration for Xampp](../../simpleicons-5/X/Xampp.Local.png) |




## Xampp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xampp
include('simpleicons-5/X/Xampp')

' renders the element
Xampp('Xampp', 'Xampp', 'an optional tech label')
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

' loads the Item which embeds the element Xampp
include('simpleicons-5/X/Xampp')

' renders the element
Xampp('Xampp', 'Xampp', 'an optional tech label')
@enduml
```

