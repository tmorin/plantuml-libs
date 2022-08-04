# Scrollreveal


```text
simpleicons-7/S/Scrollreveal
```

```text
include('simpleicons-7/S/Scrollreveal')
```



| Illustration | Scrollreveal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Scrollreveal.png) | ![illustration for Scrollreveal](../../simpleicons-7/S/Scrollreveal.Local.png) |




## Scrollreveal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Scrollreveal
include('simpleicons-7/S/Scrollreveal')

' renders the element
Scrollreveal('Scrollreveal', 'Scrollreveal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scrollreveal
include('simpleicons-7/S/Scrollreveal')

' renders the element
Scrollreveal('Scrollreveal', 'Scrollreveal', 'an optional tech label', 'an optional description')
@enduml
```

