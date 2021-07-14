# Shutterstock


```text
simpleicons-5/S/Shutterstock
```

```text
include('simpleicons-5/S/Shutterstock')
```



| Illustration | Shutterstock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Shutterstock.png) | ![illustration for Shutterstock](../../simpleicons-5/S/Shutterstock.Local.png) |




## Shutterstock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shutterstock
include('simpleicons-5/S/Shutterstock')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shutterstock
include('simpleicons-5/S/Shutterstock')

' renders the element
Shutterstock('Shutterstock', 'Shutterstock', 'an optional tech label')
@enduml
```

