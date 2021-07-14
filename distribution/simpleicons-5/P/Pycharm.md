# Pycharm


```text
simpleicons-5/P/Pycharm
```

```text
include('simpleicons-5/P/Pycharm')
```



| Illustration | Pycharm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pycharm.png) | ![illustration for Pycharm](../../simpleicons-5/P/Pycharm.Local.png) |




## Pycharm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pycharm
include('simpleicons-5/P/Pycharm')

' renders the element
Pycharm('Pycharm', 'Pycharm', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pycharm
include('simpleicons-5/P/Pycharm')

' renders the element
Pycharm('Pycharm', 'Pycharm', 'an optional tech label')
@enduml
```

