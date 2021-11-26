# Swipe


```text
material-4/Action/Swipe
```

```text
include('material-4/Action/Swipe')
```



| Illustration | Swipe |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Swipe.png) | ![illustration for Swipe](../../material-4/Action/Swipe.Local.png) |




## Swipe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Swipe
include('material-4/Action/Swipe')

' renders the element
Swipe('Swipe', 'Swipe', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Swipe
include('material-4/Action/Swipe')

' renders the element
Swipe('Swipe', 'Swipe', 'an optional tech label')
@enduml
```

