# Aeroflot


```text
simpleicons-6/A/Aeroflot
```

```text
include('simpleicons-6/A/Aeroflot')
```



| Illustration | Aeroflot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aeroflot.png) | ![illustration for Aeroflot](../../simpleicons-6/A/Aeroflot.Local.png) |




## Aeroflot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aeroflot
include('simpleicons-6/A/Aeroflot')

' renders the element
Aeroflot('Aeroflot', 'Aeroflot', 'an optional tech label')
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

' loads the Item which embeds the element Aeroflot
include('simpleicons-6/A/Aeroflot')

' renders the element
Aeroflot('Aeroflot', 'Aeroflot', 'an optional tech label')
@enduml
```

