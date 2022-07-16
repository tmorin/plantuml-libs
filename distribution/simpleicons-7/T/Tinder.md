# Tinder


```text
simpleicons-7/T/Tinder
```

```text
include('simpleicons-7/T/Tinder')
```



| Illustration | Tinder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tinder.png) | ![illustration for Tinder](../../simpleicons-7/T/Tinder.Local.png) |




## Tinder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tinder
include('simpleicons-7/T/Tinder')

' renders the element
Tinder('Tinder', 'Tinder', 'an optional tech label')
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

' loads the Item which embeds the element Tinder
include('simpleicons-7/T/Tinder')

' renders the element
Tinder('Tinder', 'Tinder', 'an optional tech label')
@enduml
```

