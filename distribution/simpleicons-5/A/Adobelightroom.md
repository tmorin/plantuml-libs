# Adobelightroom


```text
simpleicons-5/A/Adobelightroom
```

```text
include('simpleicons-5/A/Adobelightroom')
```



| Illustration | Adobelightroom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adobelightroom.png) | ![illustration for Adobelightroom](../../simpleicons-5/A/Adobelightroom.Local.png) |




## Adobelightroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobelightroom
include('simpleicons-5/A/Adobelightroom')

' renders the element
Adobelightroom('Adobelightroom', 'Adobelightroom', 'an optional tech label')
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

' loads the Item which embeds the element Adobelightroom
include('simpleicons-5/A/Adobelightroom')

' renders the element
Adobelightroom('Adobelightroom', 'Adobelightroom', 'an optional tech label')
@enduml
```

