# Wix


```text
simpleicons-5/W/Wix
```

```text
include('simpleicons-5/W/Wix')
```



| Illustration | Wix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wix.png) | ![illustration for Wix](../../simpleicons-5/W/Wix.Local.png) |




## Wix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wix
include('simpleicons-5/W/Wix')

' renders the element
Wix('Wix', 'Wix', 'an optional tech label')
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

' loads the Item which embeds the element Wix
include('simpleicons-5/W/Wix')

' renders the element
Wix('Wix', 'Wix', 'an optional tech label')
@enduml
```

