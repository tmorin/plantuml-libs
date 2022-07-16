# Springboot


```text
simpleicons-7/S/Springboot
```

```text
include('simpleicons-7/S/Springboot')
```



| Illustration | Springboot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Springboot.png) | ![illustration for Springboot](../../simpleicons-7/S/Springboot.Local.png) |




## Springboot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Springboot
include('simpleicons-7/S/Springboot')

' renders the element
Springboot('Springboot', 'Springboot', 'an optional tech label')
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

' loads the Item which embeds the element Springboot
include('simpleicons-7/S/Springboot')

' renders the element
Springboot('Springboot', 'Springboot', 'an optional tech label')
@enduml
```

