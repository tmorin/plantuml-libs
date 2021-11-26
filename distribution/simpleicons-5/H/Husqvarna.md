# Husqvarna


```text
simpleicons-5/H/Husqvarna
```

```text
include('simpleicons-5/H/Husqvarna')
```



| Illustration | Husqvarna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Husqvarna.png) | ![illustration for Husqvarna](../../simpleicons-5/H/Husqvarna.Local.png) |




## Husqvarna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Husqvarna
include('simpleicons-5/H/Husqvarna')

' renders the element
Husqvarna('Husqvarna', 'Husqvarna', 'an optional tech label')
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

' loads the Item which embeds the element Husqvarna
include('simpleicons-5/H/Husqvarna')

' renders the element
Husqvarna('Husqvarna', 'Husqvarna', 'an optional tech label')
@enduml
```

