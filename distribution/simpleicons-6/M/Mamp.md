# Mamp


```text
simpleicons-6/M/Mamp
```

```text
include('simpleicons-6/M/Mamp')
```



| Illustration | Mamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mamp.png) | ![illustration for Mamp](../../simpleicons-6/M/Mamp.Local.png) |




## Mamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mamp
include('simpleicons-6/M/Mamp')

' renders the element
Mamp('Mamp', 'Mamp', 'an optional tech label')
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

' loads the Item which embeds the element Mamp
include('simpleicons-6/M/Mamp')

' renders the element
Mamp('Mamp', 'Mamp', 'an optional tech label')
@enduml
```

