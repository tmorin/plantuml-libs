# Eventbrite


```text
simpleicons-7/E/Eventbrite
```

```text
include('simpleicons-7/E/Eventbrite')
```



| Illustration | Eventbrite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Eventbrite.png) | ![illustration for Eventbrite](../../simpleicons-7/E/Eventbrite.Local.png) |




## Eventbrite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Eventbrite
include('simpleicons-7/E/Eventbrite')

' renders the element
Eventbrite('Eventbrite', 'Eventbrite', 'an optional tech label')
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

' loads the Item which embeds the element Eventbrite
include('simpleicons-7/E/Eventbrite')

' renders the element
Eventbrite('Eventbrite', 'Eventbrite', 'an optional tech label')
@enduml
```

