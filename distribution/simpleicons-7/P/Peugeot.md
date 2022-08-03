# Peugeot


```text
simpleicons-7/P/Peugeot
```

```text
include('simpleicons-7/P/Peugeot')
```



| Illustration | Peugeot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Peugeot.png) | ![illustration for Peugeot](../../simpleicons-7/P/Peugeot.Local.png) |




## Peugeot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Peugeot
include('simpleicons-7/P/Peugeot')

' renders the element
Peugeot('Peugeot', 'Peugeot', 'an optional tech label')
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

' loads the Item which embeds the element Peugeot
include('simpleicons-7/P/Peugeot')

' renders the element
Peugeot('Peugeot', 'Peugeot', 'an optional tech label')
@enduml
```
