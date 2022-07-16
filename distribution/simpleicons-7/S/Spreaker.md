# Spreaker


```text
simpleicons-7/S/Spreaker
```

```text
include('simpleicons-7/S/Spreaker')
```



| Illustration | Spreaker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Spreaker.png) | ![illustration for Spreaker](../../simpleicons-7/S/Spreaker.Local.png) |




## Spreaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Spreaker
include('simpleicons-7/S/Spreaker')

' renders the element
Spreaker('Spreaker', 'Spreaker', 'an optional tech label')
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

' loads the Item which embeds the element Spreaker
include('simpleicons-7/S/Spreaker')

' renders the element
Spreaker('Spreaker', 'Spreaker', 'an optional tech label')
@enduml
```

