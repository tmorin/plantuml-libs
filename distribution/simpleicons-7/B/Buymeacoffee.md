# Buymeacoffee


```text
simpleicons-7/B/Buymeacoffee
```

```text
include('simpleicons-7/B/Buymeacoffee')
```



| Illustration | Buymeacoffee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Buymeacoffee.png) | ![illustration for Buymeacoffee](../../simpleicons-7/B/Buymeacoffee.Local.png) |




## Buymeacoffee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Buymeacoffee
include('simpleicons-7/B/Buymeacoffee')

' renders the element
Buymeacoffee('Buymeacoffee', 'Buymeacoffee', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Buymeacoffee
include('simpleicons-7/B/Buymeacoffee')

' renders the element
Buymeacoffee('Buymeacoffee', 'Buymeacoffee', 'an optional tech label', 'an optional description')
@enduml
```

