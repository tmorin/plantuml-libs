# Pm2


```text
simpleicons-7/P/Pm2
```

```text
include('simpleicons-7/P/Pm2')
```



| Illustration | Pm2 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pm2.png) | ![illustration for Pm2](../../simpleicons-7/P/Pm2.Local.png) |




## Pm2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pm2
include('simpleicons-7/P/Pm2')

' renders the element
Pm2('Pm2', 'Pm2', 'an optional tech label')
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

' loads the Item which embeds the element Pm2
include('simpleicons-7/P/Pm2')

' renders the element
Pm2('Pm2', 'Pm2', 'an optional tech label')
@enduml
```

