# Bukalapak


```text
simpleicons-7/B/Bukalapak
```

```text
include('simpleicons-7/B/Bukalapak')
```



| Illustration | Bukalapak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bukalapak.png) | ![illustration for Bukalapak](../../simpleicons-7/B/Bukalapak.Local.png) |




## Bukalapak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bukalapak
include('simpleicons-7/B/Bukalapak')

' renders the element
Bukalapak('Bukalapak', 'Bukalapak', 'an optional tech label')
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

' loads the Item which embeds the element Bukalapak
include('simpleicons-7/B/Bukalapak')

' renders the element
Bukalapak('Bukalapak', 'Bukalapak', 'an optional tech label')
@enduml
```

