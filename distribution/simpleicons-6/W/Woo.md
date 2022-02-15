# Woo


```text
simpleicons-6/W/Woo
```

```text
include('simpleicons-6/W/Woo')
```



| Illustration | Woo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Woo.png) | ![illustration for Woo](../../simpleicons-6/W/Woo.Local.png) |




## Woo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Woo
include('simpleicons-6/W/Woo')

' renders the element
Woo('Woo', 'Woo', 'an optional tech label')
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

' loads the Item which embeds the element Woo
include('simpleicons-6/W/Woo')

' renders the element
Woo('Woo', 'Woo', 'an optional tech label')
@enduml
```

