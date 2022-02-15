# Cocoapods


```text
simpleicons-6/C/Cocoapods
```

```text
include('simpleicons-6/C/Cocoapods')
```



| Illustration | Cocoapods |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cocoapods.png) | ![illustration for Cocoapods](../../simpleicons-6/C/Cocoapods.Local.png) |




## Cocoapods

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cocoapods
include('simpleicons-6/C/Cocoapods')

' renders the element
Cocoapods('Cocoapods', 'Cocoapods', 'an optional tech label')
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

' loads the Item which embeds the element Cocoapods
include('simpleicons-6/C/Cocoapods')

' renders the element
Cocoapods('Cocoapods', 'Cocoapods', 'an optional tech label')
@enduml
```

