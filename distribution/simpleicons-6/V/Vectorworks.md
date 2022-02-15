# Vectorworks


```text
simpleicons-6/V/Vectorworks
```

```text
include('simpleicons-6/V/Vectorworks')
```



| Illustration | Vectorworks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vectorworks.png) | ![illustration for Vectorworks](../../simpleicons-6/V/Vectorworks.Local.png) |




## Vectorworks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vectorworks
include('simpleicons-6/V/Vectorworks')

' renders the element
Vectorworks('Vectorworks', 'Vectorworks', 'an optional tech label')
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

' loads the Item which embeds the element Vectorworks
include('simpleicons-6/V/Vectorworks')

' renders the element
Vectorworks('Vectorworks', 'Vectorworks', 'an optional tech label')
@enduml
```

