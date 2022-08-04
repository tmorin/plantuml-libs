# Sinaweibo


```text
simpleicons-7/S/Sinaweibo
```

```text
include('simpleicons-7/S/Sinaweibo')
```



| Illustration | Sinaweibo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sinaweibo.png) | ![illustration for Sinaweibo](../../simpleicons-7/S/Sinaweibo.Local.png) |




## Sinaweibo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sinaweibo
include('simpleicons-7/S/Sinaweibo')

' renders the element
Sinaweibo('Sinaweibo', 'Sinaweibo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sinaweibo
include('simpleicons-7/S/Sinaweibo')

' renders the element
Sinaweibo('Sinaweibo', 'Sinaweibo', 'an optional tech label', 'an optional description')
@enduml
```

