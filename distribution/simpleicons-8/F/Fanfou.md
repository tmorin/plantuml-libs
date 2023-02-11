# Fanfou


```text
simpleicons-8/F/Fanfou
```

```text
include('simpleicons-8/F/Fanfou')
```



| Illustration | Fanfou |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fanfou.png) | ![illustration for Fanfou](../../simpleicons-8/F/Fanfou.Local.png) |




## Fanfou

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fanfou
include('simpleicons-8/F/Fanfou')

' renders the element
Fanfou('Fanfou', 'Fanfou', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fanfou
include('simpleicons-8/F/Fanfou')

' renders the element
Fanfou('Fanfou', 'Fanfou', 'an optional tech label', 'an optional description')
@enduml
```

