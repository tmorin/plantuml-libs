# Mamp


```text
simpleicons-7/M/Mamp
```

```text
include('simpleicons-7/M/Mamp')
```



| Illustration | Mamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mamp.png) | ![illustration for Mamp](../../simpleicons-7/M/Mamp.Local.png) |




## Mamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mamp
include('simpleicons-7/M/Mamp')

' renders the element
Mamp('Mamp', 'Mamp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mamp
include('simpleicons-7/M/Mamp')

' renders the element
Mamp('Mamp', 'Mamp', 'an optional tech label', 'an optional description')
@enduml
```

