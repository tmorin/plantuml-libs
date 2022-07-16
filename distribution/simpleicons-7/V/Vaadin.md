# Vaadin


```text
simpleicons-7/V/Vaadin
```

```text
include('simpleicons-7/V/Vaadin')
```



| Illustration | Vaadin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vaadin.png) | ![illustration for Vaadin](../../simpleicons-7/V/Vaadin.Local.png) |




## Vaadin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vaadin
include('simpleicons-7/V/Vaadin')

' renders the element
Vaadin('Vaadin', 'Vaadin', 'an optional tech label')
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

' loads the Item which embeds the element Vaadin
include('simpleicons-7/V/Vaadin')

' renders the element
Vaadin('Vaadin', 'Vaadin', 'an optional tech label')
@enduml
```

