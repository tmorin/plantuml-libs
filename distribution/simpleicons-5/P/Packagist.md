# Packagist


```text
simpleicons-5/P/Packagist
```

```text
include('simpleicons-5/P/Packagist')
```



| Illustration | Packagist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Packagist.png) | ![illustration for Packagist](../../simpleicons-5/P/Packagist.Local.png) |




## Packagist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Packagist
include('simpleicons-5/P/Packagist')

' renders the element
Packagist('Packagist', 'Packagist', 'an optional tech label')
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

' loads the Item which embeds the element Packagist
include('simpleicons-5/P/Packagist')

' renders the element
Packagist('Packagist', 'Packagist', 'an optional tech label')
@enduml
```

