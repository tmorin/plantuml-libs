# Deviantart


```text
simpleicons-7/D/Deviantart
```

```text
include('simpleicons-7/D/Deviantart')
```



| Illustration | Deviantart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Deviantart.png) | ![illustration for Deviantart](../../simpleicons-7/D/Deviantart.Local.png) |




## Deviantart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Deviantart
include('simpleicons-7/D/Deviantart')

' renders the element
Deviantart('Deviantart', 'Deviantart', 'an optional tech label')
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

' loads the Item which embeds the element Deviantart
include('simpleicons-7/D/Deviantart')

' renders the element
Deviantart('Deviantart', 'Deviantart', 'an optional tech label')
@enduml
```

