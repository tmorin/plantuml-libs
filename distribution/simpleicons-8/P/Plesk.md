# Plesk


```text
simpleicons-8/P/Plesk
```

```text
include('simpleicons-8/P/Plesk')
```



| Illustration | Plesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Plesk.png) | ![illustration for Plesk](../../simpleicons-8/P/Plesk.Local.png) |




## Plesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Plesk
include('simpleicons-8/P/Plesk')

' renders the element
Plesk('Plesk', 'Plesk', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Plesk
include('simpleicons-8/P/Plesk')

' renders the element
Plesk('Plesk', 'Plesk', 'an optional tech label', 'an optional description')
@enduml
```

