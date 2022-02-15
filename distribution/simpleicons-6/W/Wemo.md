# Wemo


```text
simpleicons-6/W/Wemo
```

```text
include('simpleicons-6/W/Wemo')
```



| Illustration | Wemo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wemo.png) | ![illustration for Wemo](../../simpleicons-6/W/Wemo.Local.png) |




## Wemo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wemo
include('simpleicons-6/W/Wemo')

' renders the element
Wemo('Wemo', 'Wemo', 'an optional tech label')
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

' loads the Item which embeds the element Wemo
include('simpleicons-6/W/Wemo')

' renders the element
Wemo('Wemo', 'Wemo', 'an optional tech label')
@enduml
```

