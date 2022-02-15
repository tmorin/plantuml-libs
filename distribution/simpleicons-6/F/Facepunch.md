# Facepunch


```text
simpleicons-6/F/Facepunch
```

```text
include('simpleicons-6/F/Facepunch')
```



| Illustration | Facepunch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Facepunch.png) | ![illustration for Facepunch](../../simpleicons-6/F/Facepunch.Local.png) |




## Facepunch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Facepunch
include('simpleicons-6/F/Facepunch')

' renders the element
Facepunch('Facepunch', 'Facepunch', 'an optional tech label')
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

' loads the Item which embeds the element Facepunch
include('simpleicons-6/F/Facepunch')

' renders the element
Facepunch('Facepunch', 'Facepunch', 'an optional tech label')
@enduml
```

