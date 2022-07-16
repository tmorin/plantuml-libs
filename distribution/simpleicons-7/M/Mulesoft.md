# Mulesoft


```text
simpleicons-7/M/Mulesoft
```

```text
include('simpleicons-7/M/Mulesoft')
```



| Illustration | Mulesoft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mulesoft.png) | ![illustration for Mulesoft](../../simpleicons-7/M/Mulesoft.Local.png) |




## Mulesoft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mulesoft
include('simpleicons-7/M/Mulesoft')

' renders the element
Mulesoft('Mulesoft', 'Mulesoft', 'an optional tech label')
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

' loads the Item which embeds the element Mulesoft
include('simpleicons-7/M/Mulesoft')

' renders the element
Mulesoft('Mulesoft', 'Mulesoft', 'an optional tech label')
@enduml
```

