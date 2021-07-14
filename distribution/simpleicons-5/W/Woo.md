# Woo


```text
simpleicons-5/W/Woo
```

```text
include('simpleicons-5/W/Woo')
```



| Illustration | Woo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Woo.png) | ![illustration for Woo](../../simpleicons-5/W/Woo.Local.png) |




## Woo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Woo
include('simpleicons-5/W/Woo')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Woo
include('simpleicons-5/W/Woo')

' renders the element
Woo('Woo', 'Woo', 'an optional tech label')
@enduml
```

