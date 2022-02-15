# Shutterstock


```text
simpleicons-6/S/Shutterstock
```

```text
include('simpleicons-6/S/Shutterstock')
```



| Illustration | Shutterstock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Shutterstock.png) | ![illustration for Shutterstock](../../simpleicons-6/S/Shutterstock.Local.png) |




## Shutterstock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Shutterstock
include('simpleicons-6/S/Shutterstock')

' renders the element
Shutterstock('Shutterstock', 'Shutterstock', 'an optional tech label')
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

' loads the Item which embeds the element Shutterstock
include('simpleicons-6/S/Shutterstock')

' renders the element
Shutterstock('Shutterstock', 'Shutterstock', 'an optional tech label')
@enduml
```

