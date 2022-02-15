# Wegame


```text
simpleicons-6/W/Wegame
```

```text
include('simpleicons-6/W/Wegame')
```



| Illustration | Wegame |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wegame.png) | ![illustration for Wegame](../../simpleicons-6/W/Wegame.Local.png) |




## Wegame

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wegame
include('simpleicons-6/W/Wegame')

' renders the element
Wegame('Wegame', 'Wegame', 'an optional tech label')
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

' loads the Item which embeds the element Wegame
include('simpleicons-6/W/Wegame')

' renders the element
Wegame('Wegame', 'Wegame', 'an optional tech label')
@enduml
```

