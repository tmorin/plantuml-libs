# Tinder


```text
simpleicons-6/T/Tinder
```

```text
include('simpleicons-6/T/Tinder')
```



| Illustration | Tinder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tinder.png) | ![illustration for Tinder](../../simpleicons-6/T/Tinder.Local.png) |




## Tinder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tinder
include('simpleicons-6/T/Tinder')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tinder
include('simpleicons-6/T/Tinder')

' renders the element
Tinder('Tinder', 'Tinder', 'an optional tech label')
@enduml
```

