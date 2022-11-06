# Commodore


```text
simpleicons-7/C/Commodore
```

```text
include('simpleicons-7/C/Commodore')
```



| Illustration | Commodore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Commodore.png) | ![illustration for Commodore](../../simpleicons-7/C/Commodore.Local.png) |




## Commodore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Commodore
include('simpleicons-7/C/Commodore')

' renders the element
Commodore('Commodore', 'Commodore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Commodore
include('simpleicons-7/C/Commodore')

' renders the element
Commodore('Commodore', 'Commodore', 'an optional tech label', 'an optional description')
@enduml
```

