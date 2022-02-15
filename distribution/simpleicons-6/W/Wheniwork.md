# Wheniwork


```text
simpleicons-6/W/Wheniwork
```

```text
include('simpleicons-6/W/Wheniwork')
```



| Illustration | Wheniwork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wheniwork.png) | ![illustration for Wheniwork](../../simpleicons-6/W/Wheniwork.Local.png) |




## Wheniwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wheniwork
include('simpleicons-6/W/Wheniwork')

' renders the element
Wheniwork('Wheniwork', 'Wheniwork', 'an optional tech label')
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

' loads the Item which embeds the element Wheniwork
include('simpleicons-6/W/Wheniwork')

' renders the element
Wheniwork('Wheniwork', 'Wheniwork', 'an optional tech label')
@enduml
```

